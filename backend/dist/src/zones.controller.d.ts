import { MessageEvent } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ZonesService } from './zones.service';
export declare class ZonesController {
    private readonly zones;
    constructor(zones: ZonesService);
    snapshot(): Promise<{
        ts: string;
        nodes: {
            id: string;
            name: string;
            position: {
                lat: number;
                lng: number;
            };
            zone: import(".prisma/client").$Enums.Zone | null;
            waterCm: number | null;
        }[];
        segments: {
            id: string;
            zone: import(".prisma/client").$Enums.Zone;
            path: {
                lat: number;
                lng: number;
            }[];
        }[];
    }>;
    seedDummy(): Promise<{
        success: boolean;
        nodesCount: number;
        edgesCount: number;
        message: string;
    }>;
    history(date?: string): Promise<{
        ts: string;
        date: string;
        totalSnapshots: number;
        totalReports: number;
        snapshots: {
            id: string;
            roadName: string;
            lat: number;
            lng: number;
            zone: import(".prisma/client").$Enums.Zone;
            waterLevel: string;
            waterDepthCm: number;
            severity: string | null;
            notes: string | null;
            snapshotDate: Date;
        }[];
        reports: {
            id: string;
            title: string;
            locationName: string;
            lat: number;
            lng: number;
            status: import(".prisma/client").$Enums.Zone;
            waterLevel: string;
            waterDepthCm: number | null;
            impactDescription: string | null;
            sourceUrl: string | null;
            reportDate: Date;
        }[];
    }>;
    stream(): Observable<MessageEvent>;
}
