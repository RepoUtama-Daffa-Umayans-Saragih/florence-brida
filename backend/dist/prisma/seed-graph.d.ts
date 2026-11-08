import { PrismaClient, Zone } from '@prisma/client';
interface NodeSeed {
    id: string;
    code: string;
    name: string;
    lat: number;
    lng: number;
    waterCm: number;
    zone: Zone;
}
interface EdgeSeed {
    id: string;
    from: string;
    to: string;
    name: string;
    zone: Zone;
}
export declare const NODES_DATA: NodeSeed[];
export declare const EDGES_DATA: EdgeSeed[];
export declare function seedDummyGraph(client?: PrismaClient): Promise<{
    success: boolean;
    nodesCount: number;
    edgesCount: number;
    message: string;
}>;
export {};
