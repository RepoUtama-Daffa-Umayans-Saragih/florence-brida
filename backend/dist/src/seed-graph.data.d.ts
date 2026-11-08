import { PrismaClient, Zone } from '@prisma/client';
export interface NodeSeed {
    id: string;
    code: string;
    name: string;
    lat: number;
    lng: number;
    waterCm: number;
    zone: Zone;
}
export interface EdgeSeed {
    id: string;
    from: string;
    to: string;
    name: string;
    zone: Zone;
}
export declare const NODES_DATA: NodeSeed[];
export declare const EDGES_DATA: EdgeSeed[];
export declare function executeSeedGraph(client: PrismaClient): Promise<{
    success: boolean;
    nodesCount: number;
    edgesCount: number;
    message: string;
}>;
