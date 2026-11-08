"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZonesService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const rxjs_1 = require("rxjs");
const seed_graph_data_1 = require("./seed-graph.data");
let ZonesService = class ZonesService {
    constructor() {
        this.db = new client_1.PrismaClient();
        this.changes = new rxjs_1.Subject();
    }
    async onModuleInit() { await this.db.$connect(); }
    async onModuleDestroy() { this.changes.complete(); await this.db.$disconnect(); }
    async safePoints() {
        const items = await this.db.safePoint.findMany({
            select: { id: true, name: true, address: true, latitude: true, longitude: true, capacity: true, occupied: true, isOpen: true, contactPhone: true, verifiedAt: true },
            orderBy: { name: 'asc' },
        });
        return { ts: new Date().toISOString(), items };
    }
    classify(waterCm) {
        if (!Number.isFinite(waterCm) || waterCm < 0)
            throw new Error('Invalid water height');
        return waterCm > 30 ? client_1.Zone.RED : waterCm > 10 ? client_1.Zone.YELLOW : client_1.Zone.GREEN;
    }
    async ingestReading(nodeId, waterCm, measuredAt) {
        const zone = this.classify(waterCm);
        if (!Number.isFinite(measuredAt.getTime()))
            throw new Error('Invalid timestamp');
        await this.db.$transaction(async (tx) => {
            await tx.$queryRaw `SELECT pg_advisory_xact_lock(hashtext(${nodeId}))`;
            const previous = await tx.reading.findFirst({ where: { nodeId }, orderBy: { measuredAt: 'desc' } });
            await tx.reading.upsert({
                where: { nodeId_measuredAt: { nodeId, measuredAt } },
                create: { nodeId, measuredAt, waterCm, zone }, update: { waterCm, zone },
            });
            if (previous && measuredAt < previous.measuredAt)
                return;
            const links = await tx.nodeSegment.findMany({ where: { nodeId } });
            for (const link of links) {
                const linked = await tx.nodeSegment.findMany({ where: { segmentId: link.segmentId } });
                const latest = await Promise.all(linked.map((item) => tx.reading.findFirst({ where: { nodeId: item.nodeId }, orderBy: { measuredAt: 'desc' } })));
                const zones = latest.map((item) => item?.zone);
                const roadZone = zones.includes(client_1.Zone.RED) ? client_1.Zone.RED : zones.includes(client_1.Zone.YELLOW) ? client_1.Zone.YELLOW : client_1.Zone.GREEN;
                await tx.roadSegment.update({ where: { id: link.segmentId }, data: { zone: roadZone, isBlocked: roadZone === client_1.Zone.RED } });
            }
        });
        this.changes.next();
    }
    async snapshot() {
        const nodes = await this.db.node.findMany({ include: { readings: { orderBy: { measuredAt: 'desc' }, take: 1 } } });
        const segments = await this.db.$queryRaw `
      SELECT id, zone, ST_AsGeoJSON(geom)::json AS geometry FROM road_segments`;
        return {
            ts: new Date().toISOString(),
            nodes: nodes.map((node) => ({
                id: node.id, name: node.code, position: { lat: Number(node.latitude), lng: Number(node.longitude) },
                zone: node.readings[0]?.zone ?? null,
                waterCm: node.readings[0]?.waterCm == null ? null : Number(node.readings[0].waterCm),
            })),
            segments: segments.filter((s) => s.geometry).map((s) => ({ id: s.id, zone: s.zone, path: s.geometry.coordinates.map(([lng, lat]) => ({ lat, lng })) })),
        };
    }
    async seedDummyGraph() {
        const res = await (0, seed_graph_data_1.executeSeedGraph)(this.db);
        this.changes.next();
        return res;
    }
    async getHistory(dateStr) {
        let snapshotWhere = {};
        let reportWhere = {};
        if (dateStr) {
            const targetDate = new Date(dateStr);
            const startOfDay = new Date(targetDate);
            startOfDay.setUTCHours(0, 0, 0, 0);
            const endOfDay = new Date(targetDate);
            endOfDay.setUTCHours(23, 59, 59, 999);
            snapshotWhere = { snapshotDate: { gte: startOfDay, lte: endOfDay } };
            reportWhere = { reportDate: { gte: startOfDay, lte: endOfDay } };
        }
        const snapshots = await this.db.zoneHistorySnapshot.findMany({
            where: snapshotWhere,
            orderBy: { waterDepthCm: 'desc' },
        });
        const reports = await this.db.floodReport.findMany({
            where: reportWhere,
            orderBy: { waterDepthCm: 'desc' },
        });
        return {
            ts: new Date().toISOString(),
            date: dateStr || 'all',
            totalSnapshots: snapshots.length,
            totalReports: reports.length,
            snapshots: snapshots.map((s) => ({
                id: s.id,
                roadName: s.roadName,
                lat: Number(s.latitude),
                lng: Number(s.longitude),
                zone: s.zone,
                waterLevel: s.waterLevel,
                waterDepthCm: Number(s.waterDepthCm),
                severity: s.severity,
                notes: s.notes,
                snapshotDate: s.snapshotDate,
            })),
            reports: reports.map((r) => ({
                id: r.id,
                title: r.title,
                locationName: r.locationName,
                lat: Number(r.latitude),
                lng: Number(r.longitude),
                status: r.status,
                waterLevel: r.waterLevel,
                waterDepthCm: r.waterDepthCm ? Number(r.waterDepthCm) : null,
                impactDescription: r.impactDescription,
                sourceUrl: r.sourceUrl,
                reportDate: r.reportDate,
            })),
        };
    }
};
exports.ZonesService = ZonesService;
exports.ZonesService = ZonesService = __decorate([
    (0, common_1.Injectable)()
], ZonesService);
//# sourceMappingURL=zones.service.js.map