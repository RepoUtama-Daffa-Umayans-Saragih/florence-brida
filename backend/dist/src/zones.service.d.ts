import { OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Zone } from '@prisma/client';
import { Subject } from 'rxjs';
export declare class ZonesService implements OnModuleInit, OnModuleDestroy {
    private readonly db;
    readonly changes: Subject<void>;
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
    safePoints(): Promise<{
        ts: string;
        items: {
            id: string;
            name: string;
            latitude: import("@prisma/client/runtime/library").Decimal;
            longitude: import("@prisma/client/runtime/library").Decimal;
            capacity: number;
            occupied: number;
            isOpen: boolean;
            contactPhone: string | null;
            address: string | null;
            verifiedAt: Date | null;
        }[];
    }>;
    classify(waterCm: number): Zone;
    ingestReading(nodeId: string, waterCm: number, measuredAt: Date): Promise<void>;
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
    seedDummyGraph(): Promise<{
        success: boolean;
        nodesCount: number;
        edgesCount: number;
        message: string;
    }>;
    getHistory(dateStr?: string): Promise<{
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
}
