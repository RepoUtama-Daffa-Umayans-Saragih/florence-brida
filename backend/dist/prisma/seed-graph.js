"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EDGES_DATA = exports.NODES_DATA = void 0;
exports.seedDummyGraph = seedDummyGraph;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.NODES_DATA = [
    { id: 'node-01', code: 'T-01', name: 'Simpang Sunggal - Gatsu', lat: 3.5850, lng: 98.6300, waterCm: 0, zone: client_1.Zone.GREEN },
    { id: 'node-02', code: 'T-02', name: 'Jl. Sunggal PDAM', lat: 3.5800, lng: 98.6360, waterCm: 2, zone: client_1.Zone.GREEN },
    { id: 'node-03', code: 'T-03', name: 'Simpang Sunggal - Setia Budi', lat: 3.5750, lng: 98.6430, waterCm: 5, zone: client_1.Zone.GREEN },
    { id: 'node-04', code: 'T-04', name: 'Jl. Setia Budi Utara', lat: 3.5700, lng: 98.6460, waterCm: 18, zone: client_1.Zone.YELLOW },
    { id: 'node-05', code: 'T-05', name: 'Simpang Setia Budi - Mansyur (Banjir)', lat: 3.5670, lng: 98.6480, waterCm: 45, zone: client_1.Zone.RED },
    { id: 'node-06', code: 'T-06', name: 'Jl. Mansyur Barat (Banjir)', lat: 3.5660, lng: 98.6520, waterCm: 38, zone: client_1.Zone.RED },
    { id: 'node-07', code: 'T-07', name: 'Simpang RS USU - Dr. Mansyur', lat: 3.5645, lng: 98.6550, waterCm: 5, zone: client_1.Zone.GREEN },
    { id: 'node-08', code: 'T-08', name: 'Pintu 1 USU - Dr. Mansyur', lat: 3.5630, lng: 98.6580, waterCm: 4, zone: client_1.Zone.GREEN },
    { id: 'node-09', code: 'T-09', name: 'Auditorium USU (Titik Evakuasi)', lat: 3.5569, lng: 98.6547, waterCm: 0, zone: client_1.Zone.GREEN },
    { id: 'node-10', code: 'T-10', name: 'Biro Rektor USU', lat: 3.5585, lng: 98.6575, waterCm: 0, zone: client_1.Zone.GREEN },
    { id: 'node-11', code: 'T-11', name: 'Pintu 2 USU - Dr. Sofyan', lat: 3.5590, lng: 98.6610, waterCm: 2, zone: client_1.Zone.GREEN },
    { id: 'node-12', code: 'T-12', name: 'Pintu 4 USU - Jamin Ginting', lat: 3.5560, lng: 98.6630, waterCm: 5, zone: client_1.Zone.GREEN },
    { id: 'node-13', code: 'T-13', name: 'Setia Budi Pasar 1 (Rute Elak)', lat: 3.5610, lng: 98.6440, waterCm: 6, zone: client_1.Zone.GREEN },
    { id: 'node-14', code: 'T-14', name: 'Setia Budi Pasar 2', lat: 3.5550, lng: 98.6400, waterCm: 5, zone: client_1.Zone.GREEN },
    { id: 'node-15', code: 'T-15', name: 'Simpang Pemda - Setia Budi', lat: 3.5480, lng: 98.6360, waterCm: 3, zone: client_1.Zone.GREEN },
    { id: 'node-16', code: 'T-16', name: 'Jl. Ngumban Surbakti', lat: 3.5440, lng: 98.6450, waterCm: 15, zone: client_1.Zone.YELLOW },
    { id: 'node-17', code: 'T-17', name: 'Flyover Jamin Ginting', lat: 3.5400, lng: 98.6520, waterCm: 5, zone: client_1.Zone.GREEN },
    { id: 'node-18', code: 'T-18', name: 'Jamin Ginting - Pasar Baru', lat: 3.5490, lng: 98.6580, waterCm: 4, zone: client_1.Zone.GREEN },
];
exports.EDGES_DATA = [
    { id: 'seg-01', from: 'node-01', to: 'node-02', name: 'Jl. Sunggal Barat', zone: client_1.Zone.GREEN },
    { id: 'seg-02', from: 'node-02', to: 'node-03', name: 'Jl. Sunggal Timur', zone: client_1.Zone.GREEN },
    { id: 'seg-03', from: 'node-03', to: 'node-04', name: 'Jl. Setia Budi Utara', zone: client_1.Zone.YELLOW },
    { id: 'seg-04', from: 'node-04', to: 'node-05', name: 'Jl. Setia Budi Menuju Mansyur', zone: client_1.Zone.RED },
    { id: 'seg-05', from: 'node-05', to: 'node-06', name: 'Jl. Dr. Mansyur Barat (Tergenang)', zone: client_1.Zone.RED },
    { id: 'seg-06', from: 'node-06', to: 'node-07', name: 'Jl. Dr. Mansyur Tengah', zone: client_1.Zone.YELLOW },
    { id: 'seg-07', from: 'node-07', to: 'node-08', name: 'Jl. Dr. Mansyur Depan USU', zone: client_1.Zone.GREEN },
    { id: 'seg-08', from: 'node-08', to: 'node-10', name: 'Pintu 1 ke Biro Rektor', zone: client_1.Zone.GREEN },
    { id: 'seg-09', from: 'node-10', to: 'node-09', name: 'Biro Rektor ke Auditorium USU', zone: client_1.Zone.GREEN },
    { id: 'seg-10', from: 'node-07', to: 'node-09', name: 'RS USU ke Auditorium (Jalur Dalam)', zone: client_1.Zone.GREEN },
    { id: 'seg-11', from: 'node-03', to: 'node-13', name: 'By-pass Sunggal - Pasar 1 (Aman)', zone: client_1.Zone.GREEN },
    { id: 'seg-12', from: 'node-13', to: 'node-07', name: 'Pasar 1 Tembus RS USU (Jalur Elak)', zone: client_1.Zone.GREEN },
    { id: 'seg-13', from: 'node-13', to: 'node-14', name: 'Jl. Setia Budi Tengah', zone: client_1.Zone.GREEN },
    { id: 'seg-14', from: 'node-14', to: 'node-09', name: 'Pasar 2 Tembus Auditorium (Abdul Hakim)', zone: client_1.Zone.GREEN },
    { id: 'seg-15', from: 'node-14', to: 'node-15', name: 'Jl. Setia Budi Selatan', zone: client_1.Zone.GREEN },
    { id: 'seg-16', from: 'node-15', to: 'node-16', name: 'Simpang Pemda ke Ngumban Surbakti', zone: client_1.Zone.YELLOW },
    { id: 'seg-17', from: 'node-16', to: 'node-17', name: 'Ngumban Surbakti ke Flyover', zone: client_1.Zone.GREEN },
    { id: 'seg-18', from: 'node-17', to: 'node-18', name: 'Flyover ke Jamin Ginting Pasar Baru', zone: client_1.Zone.GREEN },
    { id: 'seg-19', from: 'node-18', to: 'node-12', name: 'Jamin Ginting ke Pintu 4 USU', zone: client_1.Zone.GREEN },
    { id: 'seg-20', from: 'node-12', to: 'node-11', name: 'Pintu 4 ke Pintu 2 USU', zone: client_1.Zone.GREEN },
    { id: 'seg-21', from: 'node-11', to: 'node-10', name: 'Pintu 2 ke Biro Rektor USU', zone: client_1.Zone.GREEN },
    { id: 'seg-22', from: 'node-11', to: 'node-08', name: 'Pintu 2 ke Pintu 1 USU', zone: client_1.Zone.GREEN },
];
function calcDistanceMeters(p1, p2) {
    const dLat = (p2.lat - p1.lat) * 111000;
    const dLng = (p2.lng - p1.lng) * 111000 * Math.cos((p1.lat * Math.PI) / 180);
    return Math.round(Math.sqrt(dLat * dLat + dLng * dLng));
}
async function seedDummyGraph(client = prisma) {
    const nodeMap = new Map();
    for (const n of exports.NODES_DATA) {
        nodeMap.set(n.id, n);
    }
    for (const n of exports.NODES_DATA) {
        await client.$executeRawUnsafe(`
      INSERT INTO nodes (id, code, name, "nodeType", status, latitude, longitude, "createdAt", "updatedAt")
      VALUES ($1, $2, $3, 'SIMULATED', 'ONLINE', $4, $5, NOW(), NOW())
      ON CONFLICT (id) DO UPDATE SET
        code = EXCLUDED.code,
        name = EXCLUDED.name,
        latitude = EXCLUDED.latitude,
        longitude = EXCLUDED.longitude,
        "updatedAt" = NOW();
    `, n.id, n.code, n.name, n.lat, n.lng);
        await client.$executeRawUnsafe(`
      UPDATE nodes SET geom = ST_SetSRID(ST_MakePoint($1, $2), 4326) WHERE id = $3;
    `, n.lng, n.lat, n.id);
        const now = new Date();
        await client.$executeRawUnsafe(`
      INSERT INTO readings ("nodeId", "measuredAt", "waterCm", zone, quality, "createdAt")
      VALUES ($1, $2, $3, $4::"Zone", 'VALID', NOW())
      ON CONFLICT ("nodeId", "measuredAt") DO UPDATE SET
        "waterCm" = EXCLUDED."waterCm",
        zone = EXCLUDED.zone;
    `, n.id, now, n.waterCm, n.zone);
    }
    for (const e of exports.EDGES_DATA) {
        const fromNode = nodeMap.get(e.from);
        const toNode = nodeMap.get(e.to);
        if (!fromNode || !toNode)
            continue;
        const dist = calcDistanceMeters(fromNode, toNode);
        const isBlocked = e.zone === client_1.Zone.RED;
        await client.$executeRawUnsafe(`
      INSERT INTO road_segments (id, name, geom, "lengthM", "speedKmh", zone, "isBlocked", "updatedAt")
      VALUES (
        $1,
        $2,
        ST_SetSRID(ST_MakeLine(ST_MakePoint($3, $4), ST_MakePoint($5, $6)), 4326),
        $7,
        30.0,
        $8::"Zone",
        $9,
        NOW()
      )
      ON CONFLICT (id) DO UPDATE SET
        name = EXCLUDED.name,
        geom = EXCLUDED.geom,
        "lengthM" = EXCLUDED."lengthM",
        zone = EXCLUDED.zone,
        "isBlocked" = EXCLUDED."isBlocked",
        "updatedAt" = NOW();
    `, e.id, e.name, fromNode.lng, fromNode.lat, toNode.lng, toNode.lat, dist, e.zone, isBlocked);
        await client.$executeRawUnsafe(`
      INSERT INTO node_segments ("nodeId", "segmentId", "distanceM")
      VALUES ($1, $2, 0)
      ON CONFLICT ("nodeId", "segmentId") DO NOTHING;
    `, fromNode.id, e.id);
        await client.$executeRawUnsafe(`
      INSERT INTO node_segments ("nodeId", "segmentId", "distanceM")
      VALUES ($1, $2, 0)
      ON CONFLICT ("nodeId", "segmentId") DO NOTHING;
    `, toNode.id, e.id);
    }
    await client.$executeRawUnsafe(`
    INSERT INTO safe_points (id, name, description, latitude, longitude, capacity, occupied, "isOpen", "createdAt", "updatedAt")
    VALUES (
      'sp-auditorium-usu',
      'Auditorium Universitas Sumatera Utara',
      'Posko evakuasi utama kampus USU berkapasitas besar dan dataran tinggi.',
      3.5569,
      98.6547,
      500,
      45,
      true,
      NOW(),
      NOW()
    )
    ON CONFLICT (id) DO UPDATE SET
      name = EXCLUDED.name,
      description = EXCLUDED.description,
      "updatedAt" = NOW();
  `);
    await client.$executeRawUnsafe(`
    UPDATE safe_points SET geom = ST_SetSRID(ST_MakePoint(98.6547, 3.5569), 4326) WHERE id = 'sp-auditorium-usu';
  `);
    return {
        success: true,
        nodesCount: exports.NODES_DATA.length,
        edgesCount: exports.EDGES_DATA.length,
        message: 'Graph jaringan jalan dummy FLORENCE berhasil disuntikkan.',
    };
}
if (require.main === module) {
    seedDummyGraph(prisma)
        .then((res) => {
        console.log('✅ Berhasil:', res);
        process.exit(0);
    })
        .catch((err) => {
        console.error('❌ Gagal:', err);
        process.exit(1);
    })
        .finally(async () => {
        await prisma.$disconnect();
    });
}
//# sourceMappingURL=seed-graph.js.map