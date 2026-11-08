import { PrismaClient, Zone } from '@prisma/client';
export interface HistorySeedItem {
    roadName: string;
    latitude: number;
    longitude: number;
    snapshotDate: Date;
    zone: Zone;
    waterLevel: string;
    waterDepthCm: number;
    severity: string;
    notes: string;
    reportTitle: string;
    sourceUrl: string;
}
export declare const HISTORICAL_NOVEMBER_2025: HistorySeedItem[];
export declare const HISTORICAL_OCTOBER_2025: HistorySeedItem[];
export declare function seedHistoricalFloodData(client?: PrismaClient): Promise<void>;
