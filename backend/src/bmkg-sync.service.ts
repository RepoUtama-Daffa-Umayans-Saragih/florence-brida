import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaClient } from '@prisma/client';
import { InputJsonValue } from '@prisma/client/runtime/library';
import { RedisService } from './redis.service';

interface BmkgSlot {
  local_datetime?: string;
  t?: number;
  hu?: number;
  weather?: number;
  weather_desc?: string;
  ws?: number;
  wd?: string;
  tcc?: number;
  vs?: number;
  vs_text?: string;
}

interface BmkgPayload {
  data?: Array<{ cuaca?: BmkgSlot[][] } | BmkgSlot[]>;
  lokasi?: { adm4?: string; desa?: string; kecamatan?: string };
  [key: string]: unknown;
}

class TokenBucket {
  private tokens: number;
  private updatedAt = Date.now();

  constructor(private readonly capacity: number, private readonly refillPerSecond: number) {
    this.tokens = capacity;
  }

  async acquire(): Promise<void> {
    while (true) {
      const now = Date.now();
      this.tokens = Math.min(
        this.capacity,
        this.tokens + ((now - this.updatedAt) / 1000) * this.refillPerSecond,
      );
      this.updatedAt = now;
      if (this.tokens >= 1) {
        this.tokens -= 1;
        return;
      }
      await new Promise((resolve) => setTimeout(resolve, 250));
    }
  }
}

@Injectable()
export class BmkgSyncService {
  private readonly logger = new Logger(BmkgSyncService.name);
  private readonly prisma = new PrismaClient();
  // Deliberately limited to 30 requests/minute, below BMKG's 60 requests/minute/IP.
  private readonly bucket = new TokenBucket(30, 0.5);
  private readonly endpoint = 'https://api.bmkg.go.id/publik/prakiraan-cuaca';

  constructor(private readonly redis: RedisService) {}

  @Cron(CronExpression.EVERY_3_HOURS, { name: 'bmkg-forecast-sync' })
  async runScheduledSync(): Promise<void> {
    await this.syncAllRegions();
  }

  async syncAllRegions(): Promise<void> {
    const regions = await this.prisma.node.findMany({
      where: { adm4: { not: null } },
      select: { adm4: true },
      distinct: ['adm4'],
    });

    for (const region of regions) {
      if (!region.adm4) continue;
      try {
        await this.syncRegion(region.adm4);
      } catch (error) {
        this.logger.warn(`BMKG sync failed for ${region.adm4}: ${this.errorMessage(error)}`);
      }
    }
  }

  async syncRegion(adm4: string): Promise<void> {
    const payload = await this.fetchWithRetry(adm4);
    const slots = this.flattenSlots(payload);
    const analysisDate = this.extractAnalysisDate(payload);

    if (slots.length === 0) {
      this.logger.warn(`BMKG returned no forecast slots for ${adm4}`);
      return;
    }

    await this.prisma.$transaction(
      slots.map((slot) => {
        const validTime = this.parseDate(slot.local_datetime);
        return this.prisma.bmkgForecast.upsert({
          where: { adm4_validTime: { adm4, validTime } },
          create: this.toForecastData(adm4, slot, validTime, analysisDate),
          update: this.toForecastData(adm4, slot, validTime, analysisDate),
        });
      }),
    );

    // Redis is a read cache; PostgreSQL remains the durable source of truth.
    await this.redis.setJson(`bmkg:forecast:${adm4}`, {
      adm4,
      analysisDate,
      fetchedAt: new Date().toISOString(),
      slots,
    }, 6 * 60 * 60);
    this.logger.log(`Synced ${slots.length} BMKG slots for ${adm4}`);
  }

  private async fetchWithRetry(adm4: string): Promise<BmkgPayload> {
    let lastError: unknown;
    for (let attempt = 0; attempt < 3; attempt += 1) {
      try {
        await this.bucket.acquire();
        const response = await fetch(`${this.endpoint}?adm4=${encodeURIComponent(adm4)}`, {
          signal: AbortSignal.timeout(10_000),
          headers: { Accept: 'application/json' },
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return (await response.json()) as BmkgPayload;
      } catch (error) {
        lastError = error;
        if (attempt < 2) await new Promise((resolve) => setTimeout(resolve, 2 ** attempt * 1_000));
      }
    }
    throw lastError instanceof Error ? lastError : new Error('Unknown BMKG request error');
  }

  private flattenSlots(payload: BmkgPayload): BmkgSlot[] {
    const result: BmkgSlot[] = [];
    for (const item of payload.data ?? []) {
      const source = Array.isArray(item) ? item : item.cuaca ?? [];
      for (const group of source) {
        if (Array.isArray(group)) result.push(...group);
        else result.push(group);
      }
    }
    return result.filter((slot) => Boolean(slot.local_datetime));
  }

  private extractAnalysisDate(payload: BmkgPayload): Date | null {
    const value = payload.analysis_date;
    if (typeof value !== 'string') return null;
    const parsed = new Date(value);
    return Number.isNaN(parsed.getTime()) ? null : parsed;
  }

  private parseDate(value?: string): Date {
    const parsed = value ? new Date(value) : new Date();
    if (Number.isNaN(parsed.getTime())) throw new Error(`Invalid BMKG local_datetime: ${value}`);
    return parsed;
  }

  private toForecastData(adm4: string, slot: BmkgSlot, validTime: Date, analysisDate: Date | null) {
    return {
      adm4,
      validTime,
      localDatetime: slot.local_datetime ? new Date(slot.local_datetime) : null,
      analysisDate,
      weatherCode: slot.weather ?? null,
      weatherDesc: slot.weather_desc ?? null,
      temperatureC: slot.t ?? null,
      humidity: slot.hu ?? null,
      // BMKG ws is km/h; database stores m/s as specified in the design.
      windMs: slot.ws == null ? null : slot.ws / 3.6,
      windDirection: slot.wd ?? null,
      cloudCover: slot.tcc ?? null,
      visibilityKm: slot.vs ?? null,
      riskOrdinal: this.toRiskOrdinal(slot.weather_desc),
      rawPayload: slot as unknown as InputJsonValue,
    };
  }

  private toRiskOrdinal(description?: string): number | null {
    if (!description) return null;
    const value = description.toLowerCase();
    if (value.includes('petir') || value.includes('lebat')) return 4;
    if (value.includes('sedang')) return 3;
    if (value.includes('ringan') || value.includes('lokal')) return 2;
    if (value.includes('kabut') || value.includes('kabur') || value.includes('tebal')) return 1;
    return 0;
  }

  private errorMessage(error: unknown): string {
    return error instanceof Error ? error.message : String(error);
  }
}
