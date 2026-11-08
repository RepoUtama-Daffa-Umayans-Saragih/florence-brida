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
    stream(): Observable<MessageEvent>;
}
