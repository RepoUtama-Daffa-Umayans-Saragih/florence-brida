import { RedisService } from './redis.service';
export declare class BmkgSyncService {
    private readonly redis;
    private readonly logger;
    private readonly prisma;
    private readonly bucket;
    private readonly endpoint;
    constructor(redis: RedisService);
    runScheduledSync(): Promise<void>;
    syncAllRegions(): Promise<void>;
    syncRegion(adm4: string): Promise<void>;
    private fetchWithRetry;
    private flattenSlots;
    private extractAnalysisDate;
    private parseDate;
    private toForecastData;
    private toRiskOrdinal;
    private errorMessage;
}
