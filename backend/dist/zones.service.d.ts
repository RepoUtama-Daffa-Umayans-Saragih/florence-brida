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
            name: string;
            id: string;
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
}
