import { ZonesService } from './zones.service';
export declare class SafePointsController {
    private readonly zones;
    constructor(zones: ZonesService);
    list(): Promise<{
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
}
