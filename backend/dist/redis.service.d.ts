import { OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
export declare class RedisService implements OnModuleInit, OnModuleDestroy {
    private readonly config;
    private readonly logger;
    private readonly client;
    constructor(config: ConfigService);
    onModuleInit(): Promise<void>;
    setJson(key: string, value: unknown, ttlSeconds: number): Promise<void>;
    onModuleDestroy(): Promise<void>;
}
