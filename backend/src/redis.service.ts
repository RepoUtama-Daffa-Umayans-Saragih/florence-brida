import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(RedisService.name);
  private readonly client: Redis;

  constructor(private readonly config: ConfigService) {
    this.client = new Redis(this.config.get<string>('REDIS_URL', 'redis://localhost:6379'), {
      lazyConnect: true,
      maxRetriesPerRequest: 1,
    });
    this.client.on('error', (error) => this.logger.warn(`Redis error: ${error.message}`));
  }

  async onModuleInit() {
    await this.client.connect().catch((error) => {
      this.logger.warn(`Redis unavailable: ${error.message}`);
    });
  }

  async setJson(key: string, value: unknown, ttlSeconds: number): Promise<void> {
    if (this.client.status !== 'ready') return;
    await this.client.set(key, JSON.stringify(value), 'EX', ttlSeconds);
  }

  async onModuleDestroy() {
    if (this.client.status !== 'end') await this.client.quit();
  }
}
