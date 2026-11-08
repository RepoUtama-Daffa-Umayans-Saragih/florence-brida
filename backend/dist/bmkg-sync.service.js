"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var BmkgSyncService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BmkgSyncService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const client_1 = require("@prisma/client");
const redis_service_1 = require("./redis.service");
class TokenBucket {
    constructor(capacity, refillPerSecond) {
        this.capacity = capacity;
        this.refillPerSecond = refillPerSecond;
        this.updatedAt = Date.now();
        this.tokens = capacity;
    }
    async acquire() {
        while (true) {
            const now = Date.now();
            this.tokens = Math.min(this.capacity, this.tokens + ((now - this.updatedAt) / 1000) * this.refillPerSecond);
            this.updatedAt = now;
            if (this.tokens >= 1) {
                this.tokens -= 1;
                return;
            }
            await new Promise((resolve) => setTimeout(resolve, 250));
        }
    }
}
let BmkgSyncService = BmkgSyncService_1 = class BmkgSyncService {
    constructor(redis) {
        this.redis = redis;
        this.logger = new common_1.Logger(BmkgSyncService_1.name);
        this.prisma = new client_1.PrismaClient();
        this.bucket = new TokenBucket(30, 0.5);
        this.endpoint = 'https://api.bmkg.go.id/publik/prakiraan-cuaca';
    }
    async runScheduledSync() {
        await this.syncAllRegions();
    }
    async syncAllRegions() {
        const regions = await this.prisma.node.findMany({
            where: { adm4: { not: null } },
            select: { adm4: true },
            distinct: ['adm4'],
        });
        for (const region of regions) {
            if (!region.adm4)
                continue;
            try {
                await this.syncRegion(region.adm4);
            }
            catch (error) {
                this.logger.warn(`BMKG sync failed for ${region.adm4}: ${this.errorMessage(error)}`);
            }
        }
    }
    async syncRegion(adm4) {
        const payload = await this.fetchWithRetry(adm4);
        const slots = this.flattenSlots(payload);
        const analysisDate = this.extractAnalysisDate(payload);
        if (slots.length === 0) {
            this.logger.warn(`BMKG returned no forecast slots for ${adm4}`);
            return;
        }
        await this.prisma.$transaction(slots.map((slot) => {
            const validTime = this.parseDate(slot.local_datetime);
            return this.prisma.bmkgForecast.upsert({
                where: { adm4_validTime: { adm4, validTime } },
                create: this.toForecastData(adm4, slot, validTime, analysisDate),
                update: this.toForecastData(adm4, slot, validTime, analysisDate),
            });
        }));
        await this.redis.setJson(`bmkg:forecast:${adm4}`, {
            adm4,
            analysisDate,
            fetchedAt: new Date().toISOString(),
            slots,
        }, 6 * 60 * 60);
        this.logger.log(`Synced ${slots.length} BMKG slots for ${adm4}`);
    }
    async fetchWithRetry(adm4) {
        let lastError;
        for (let attempt = 0; attempt < 3; attempt += 1) {
            try {
                await this.bucket.acquire();
                const response = await fetch(`${this.endpoint}?adm4=${encodeURIComponent(adm4)}`, {
                    signal: AbortSignal.timeout(10_000),
                    headers: { Accept: 'application/json' },
                });
                if (!response.ok)
                    throw new Error(`HTTP ${response.status}`);
                return (await response.json());
            }
            catch (error) {
                lastError = error;
                if (attempt < 2)
                    await new Promise((resolve) => setTimeout(resolve, 2 ** attempt * 1_000));
            }
        }
        throw lastError instanceof Error ? lastError : new Error('Unknown BMKG request error');
    }
    flattenSlots(payload) {
        const result = [];
        for (const item of payload.data ?? []) {
            const source = Array.isArray(item) ? item : item.cuaca ?? [];
            for (const group of source) {
                if (Array.isArray(group))
                    result.push(...group);
                else
                    result.push(group);
            }
        }
        return result.filter((slot) => Boolean(slot.local_datetime));
    }
    extractAnalysisDate(payload) {
        const value = payload.analysis_date;
        if (typeof value !== 'string')
            return null;
        const parsed = new Date(value);
        return Number.isNaN(parsed.getTime()) ? null : parsed;
    }
    parseDate(value) {
        const parsed = value ? new Date(value) : new Date();
        if (Number.isNaN(parsed.getTime()))
            throw new Error(`Invalid BMKG local_datetime: ${value}`);
        return parsed;
    }
    toForecastData(adm4, slot, validTime, analysisDate) {
        return {
            adm4,
            validTime,
            localDatetime: slot.local_datetime ? new Date(slot.local_datetime) : null,
            analysisDate,
            weatherCode: slot.weather ?? null,
            weatherDesc: slot.weather_desc ?? null,
            temperatureC: slot.t ?? null,
            humidity: slot.hu ?? null,
            windMs: slot.ws == null ? null : slot.ws / 3.6,
            windDirection: slot.wd ?? null,
            cloudCover: slot.tcc ?? null,
            visibilityKm: slot.vs ?? null,
            riskOrdinal: this.toRiskOrdinal(slot.weather_desc),
            rawPayload: slot,
        };
    }
    toRiskOrdinal(description) {
        if (!description)
            return null;
        const value = description.toLowerCase();
        if (value.includes('petir') || value.includes('lebat'))
            return 4;
        if (value.includes('sedang'))
            return 3;
        if (value.includes('ringan') || value.includes('lokal'))
            return 2;
        if (value.includes('kabut') || value.includes('kabur') || value.includes('tebal'))
            return 1;
        return 0;
    }
    errorMessage(error) {
        return error instanceof Error ? error.message : String(error);
    }
};
exports.BmkgSyncService = BmkgSyncService;
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_3_HOURS, { name: 'bmkg-forecast-sync' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BmkgSyncService.prototype, "runScheduledSync", null);
exports.BmkgSyncService = BmkgSyncService = BmkgSyncService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [redis_service_1.RedisService])
], BmkgSyncService);
//# sourceMappingURL=bmkg-sync.service.js.map