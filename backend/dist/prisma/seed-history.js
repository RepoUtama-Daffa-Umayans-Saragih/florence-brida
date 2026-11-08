"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HISTORICAL_OCTOBER_2025 = exports.HISTORICAL_NOVEMBER_2025 = void 0;
exports.seedHistoricalFloodData = seedHistoricalFloodData;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.HISTORICAL_NOVEMBER_2025 = [
    {
        roadName: 'Jl. Dr. Mansyur (Pintu 1 USU s.d. RS USU)',
        latitude: 3.5620,
        longitude: 98.6565,
        snapshotDate: new Date('2025-11-27T10:00:00.000Z'),
        zone: client_1.Zone.RED,
        waterLevel: 'HIGH',
        waterDepthCm: 130,
        severity: 'Sangat Kritis / Merah Tua (50–130 cm)',
        notes: 'Jalan terendam seperti lautan lepas. Arus drainase sangat deras, ruko tutup total, puluhan angkot mogok. Akses dialihkan ke dalam gerbang USU.',
        reportTitle: 'Banjir Masif Depan Pintu 1 USU Bak Lautan Lepas',
        sourceUrl: 'https://www.detik.com/sumut/berita/d-banjir-medan-dr-mansyur-depan-usu-bak-lautan-november-2025',
    },
    {
        roadName: 'Jl. Letjen Jamin Ginting (Flyover Simpang Pos)',
        latitude: 3.5402,
        longitude: 98.6526,
        snapshotDate: new Date('2025-11-27T10:30:00.000Z'),
        zone: client_1.Zone.RED,
        waterLevel: 'HIGH',
        waterDepthCm: 80,
        severity: 'Kritis / Merah (40–80 cm)',
        notes: 'Cekungan kolong flyover Simpang Pos terendam parah hingga 80 cm, memutus jalur utama Medan–Berastagi selama >12 jam.',
        reportTitle: 'Lumpuh Total Koridor Simpang Pos Flyover Jamin Ginting',
        sourceUrl: 'https://www.dnaberita.com/berita/medan-dikepung-banjir-raya-simpang-kampung-lalang-gatot-subroto',
    },
    {
        roadName: 'Jl. Ringroad / Gagak Hitam (Sekitar Tasbi 1 & Manhattan)',
        latitude: 3.5695,
        longitude: 98.6275,
        snapshotDate: new Date('2025-11-27T11:00:00.000Z'),
        zone: client_1.Zone.RED,
        waterLevel: 'HIGH',
        waterDepthCm: 65,
        severity: 'Kritis / Merah (35–65 cm)',
        notes: 'Lajur lambat dan putaran balik terendam 65 cm, antrean kemacetan mobil dan truk mengular lebih dari 3 km.',
        reportTitle: 'Macet Total dan Genangan Dalam di Ringroad Gagak Hitam',
        sourceUrl: 'https://www.dnaberita.com/berita/medan-dikepung-banjir-raya-simpang-kampung-lalang-gatot-subroto',
    },
    {
        roadName: 'Jl. Gatot Subroto (Simpang Pondok Kelapa / Underpass)',
        latitude: 3.5910,
        longitude: 98.6265,
        snapshotDate: new Date('2025-11-27T11:30:00.000Z'),
        zone: client_1.Zone.RED,
        waterLevel: 'HIGH',
        waterDepthCm: 85,
        severity: 'Kritis / Merah (50–85 cm)',
        notes: 'Arus limpasan jalan raya sangat deras dan berbahaya, kendaraan roda empat dan angkutan antar-kota terjebak total.',
        reportTitle: 'Arus Deras Merendam Simpang Pondok Kelapa Gatot Subroto',
        sourceUrl: 'https://www.dnaberita.com/berita/medan-dikepung-banjir-raya-simpang-kampung-lalang-gatot-subroto',
    },
    {
        roadName: 'Jl. TB Simatupang (Simpang Kampung Lalang & Pinang Baris)',
        latitude: 3.5938,
        longitude: 98.6115,
        snapshotDate: new Date('2025-11-27T12:00:00.000Z'),
        zone: client_1.Zone.RED,
        waterLevel: 'CRITICAL',
        waterDepthCm: 120,
        severity: 'Ekstrem / Bencana Hitam (80–120 cm)',
        notes: 'Ketinggian air mencapai dada orang dewasa (1.2m), jalur utama Medan–Binjai lumpuh 2 hari penuh. Evakuasi darurat perahu karet Basarnas.',
        reportTitle: 'Lumpuh Total Jalur Medan-Binjai di Simpang Kampung Lalang',
        sourceUrl: 'https://regional.kompas.com/read/2025/11/27/banjir-kota-medan-19-kecamatan-terdampak',
    },
    {
        roadName: 'Jl. Setia Budi (Tanjung Sari / Pasar 1 - 6)',
        latitude: 3.5595,
        longitude: 98.6482,
        snapshotDate: new Date('2025-11-27T12:30:00.000Z'),
        zone: client_1.Zone.RED,
        waterLevel: 'HIGH',
        waterDepthCm: 75,
        severity: 'Kritis / Merah (45–75 cm)',
        notes: 'Drainase primer meluap mengisolasi pemukiman kos mahasiswa dan area pertokoan.',
        reportTitle: 'Genangan Parah dan Arus Kuat di Jl. Setia Budi Tanjung Sari',
        sourceUrl: 'https://regional.kompas.com/read/2025/11/27/banjir-kota-medan-19-kecamatan-terdampak',
    },
    {
        roadName: 'Jl. Brigjend Katamso (Kawasan Simpang Juanda)',
        latitude: 3.5690,
        longitude: 98.6850,
        snapshotDate: new Date('2025-11-27T13:00:00.000Z'),
        zone: client_1.Zone.RED,
        waterLevel: 'HIGH',
        waterDepthCm: 90,
        severity: 'Ekstrem (60–100 cm di jalan, 2 m di pemukiman)',
        notes: 'Luapan Sungai Deli sangat deras, pemadaman gardu listrik darurat diberlakukan.',
        reportTitle: 'Pemadaman Listrik dan Banjir Luapan Deli di Brigjend Katamso',
        sourceUrl: 'https://www.beritasatu.com/nusantara/2025/11/banjir-besar-kota-medan-evakuasi-sar',
    },
];
exports.HISTORICAL_OCTOBER_2025 = [
    {
        roadName: 'Jl. Dr. Mansyur (RS USU & Kolam Retensi)',
        latitude: 3.5592,
        longitude: 98.6525,
        snapshotDate: new Date('2025-10-11T14:30:00.000Z'),
        zone: client_1.Zone.YELLOW,
        waterLevel: 'MEDIUM',
        waterDepthCm: 45,
        severity: 'Sedang (30–60 cm)',
        notes: 'Air cokelat pekat luapan Sungai Babura & saluran Parit Benggali. Akses RS USU tersendat.',
        reportTitle: 'Genangan Luapan Babura di Depan RS USU',
        sourceUrl: 'https://medan.kompas.com/read/2025/10/12/banjir-medan-sejumlah-ruas-jalan-terendam',
    },
    {
        roadName: 'Jl. Letjen Jamin Ginting (Pajus / Pasar Baru)',
        latitude: 3.5510,
        longitude: 98.6590,
        snapshotDate: new Date('2025-10-11T15:00:00.000Z'),
        zone: client_1.Zone.YELLOW,
        waterLevel: 'MEDIUM',
        waterDepthCm: 35,
        severity: 'Sedang (30–50 cm)',
        notes: 'Genangan merata di depan Pasar Sore/Pajus hingga Simpang Pasar Baru, arus padat merayap.',
        reportTitle: 'Genangan Air di Koridor Padang Bulan Pajus',
        sourceUrl: 'https://www.detik.com/sumut/berita/d-banjir-medan-dr-mansyur-usu-oktober-2025',
    },
    {
        roadName: 'Jl. Wahid Hasyim (Kecamatan Medan Baru)',
        latitude: 3.5710,
        longitude: 98.6560,
        snapshotDate: new Date('2025-10-11T16:00:00.000Z'),
        zone: client_1.Zone.YELLOW,
        waterLevel: 'MEDIUM',
        waterDepthCm: 35,
        severity: 'Sedang (25–50 cm)',
        notes: 'Luapan saluran drainase sekunder merendam badan jalan, puluhan kendaraan roda dua mogok.',
        reportTitle: 'Drainase Meluap di Jl. Wahid Hasyim Medan Baru',
        sourceUrl: 'https://www.detik.com/sumut/berita/d-banjir-medan-dr-mansyur-usu-oktober-2025',
    },
    {
        roadName: 'Jl. Kapten Patimura (Simpang Babura / RS Elisabeth)',
        latitude: 3.5680,
        longitude: 98.6650,
        snapshotDate: new Date('2025-10-11T16:30:00.000Z'),
        zone: client_1.Zone.YELLOW,
        waterLevel: 'MEDIUM',
        waterDepthCm: 30,
        severity: 'Sedang (25–45 cm)',
        notes: 'Air sungai meluap di sekitar jembatan Sungai Babura; lajur lambat tidak dapat dilalui kendaraan kecil.',
        reportTitle: 'Limpasan Jembatan Babura Jl. Kapten Patimura',
        sourceUrl: 'https://www.cnnindonesia.com/nasional/20251012-banjir-medan-tujuh-kecamatan',
    },
    {
        roadName: 'Jl. Sei Batang Hari (Babura Sunggal)',
        latitude: 3.5720,
        longitude: 98.6470,
        snapshotDate: new Date('2025-10-11T17:00:00.000Z'),
        zone: client_1.Zone.YELLOW,
        waterLevel: 'MEDIUM',
        waterDepthCm: 40,
        severity: 'Sedang (30–50 cm)',
        notes: 'Limpasan anak sungai Babura meluap ke aspal dan pemukiman warga.',
        reportTitle: 'Luapan Anak Sungai Babura di Jl. Sei Batang Hari',
        sourceUrl: 'https://mistar.id/medan/kolam-retensi-usu-meluber-drainase-medan',
    },
    {
        roadName: 'Jl. Ayahanda (Depan RS Royal Prima)',
        latitude: 3.5880,
        longitude: 98.6580,
        snapshotDate: new Date('2025-10-11T17:30:00.000Z'),
        zone: client_1.Zone.YELLOW,
        waterLevel: 'MEDIUM',
        waterDepthCm: 35,
        severity: 'Sedang (30–50 cm)',
        notes: 'Genangan mencapai 35 cm di depan kompleks pendidikan dan RS Royal Prima.',
        reportTitle: 'Genangan Air Keruh di Jl. Ayahanda',
        sourceUrl: 'https://www.viva.co.id/berita/nasional/banjir-medan-peninjauan-wali-kota',
    },
    {
        roadName: 'Jl. Brigjend Katamso (Kampung Aur & Sei Mati)',
        latitude: 3.5740,
        longitude: 98.6830,
        snapshotDate: new Date('2025-10-11T18:00:00.000Z'),
        zone: client_1.Zone.RED,
        waterLevel: 'MEDIUM',
        waterDepthCm: 50,
        severity: 'Parah / Kritis Bantaran (50–180 cm)',
        notes: 'Luapan Sungai Deli meluap ke badan jalan raya 50 cm. Pemukiman bantaran terendam 1,5 meter. Evakuasi BPBD.',
        reportTitle: 'Evakuasi Perahu Karet di Jl. Brigjend Katamso Sei Mati',
        sourceUrl: 'https://medan.kompas.com/read/2025/10/12/banjir-medan-sejumlah-ruas-jalan-terendam',
    },
];
async function seedHistoricalFloodData(client = prisma) {
    console.log('🌊 Memulai seeding Data Historis Banjir Medan (Titik Terpisah / Spot Nyata)...');
    const allRecords = [...exports.HISTORICAL_OCTOBER_2025, ...exports.HISTORICAL_NOVEMBER_2025];
    await client.zoneHistorySnapshot.deleteMany({
        where: {
            snapshotDate: {
                in: allRecords.map((r) => r.snapshotDate),
            },
        },
    });
    await client.floodReport.deleteMany({
        where: {
            reportDate: {
                in: allRecords.map((r) => r.snapshotDate),
            },
        },
    });
    let snapCount = 0;
    for (const item of allRecords) {
        await client.zoneHistorySnapshot.create({
            data: {
                snapshotDate: item.snapshotDate,
                roadName: item.roadName,
                latitude: item.latitude,
                longitude: item.longitude,
                zone: item.zone,
                waterLevel: item.waterLevel,
                waterDepthCm: item.waterDepthCm,
                severity: item.severity,
                notes: item.notes,
            },
        });
        snapCount++;
    }
    let reportCount = 0;
    for (const item of allRecords) {
        await client.floodReport.create({
            data: {
                title: item.reportTitle,
                locationName: item.roadName,
                latitude: item.latitude,
                longitude: item.longitude,
                reportDate: item.snapshotDate,
                status: item.zone,
                waterLevel: item.waterLevel,
                waterDepthCm: item.waterDepthCm,
                impactDescription: item.notes,
                sourceUrl: item.sourceUrl,
                verified: true,
            },
        });
        reportCount++;
    }
    console.log(`✅ Berhasil menyuntikkan ${snapCount} ZoneHistorySnapshot (Spot Terpisah) ke PostgreSQL.`);
    console.log(`✅ Berhasil menyuntikkan ${reportCount} FloodReport tervalidasi ke PostgreSQL.`);
    console.log('🎉 Data koordinat presisi spot banjir 27 Nov 2025 & 11 Okt 2025 siap di Dasbor!');
}
if (require.main === module) {
    seedHistoricalFloodData()
        .catch((err) => {
        console.error('❌ Gagal melakukan seeding data historis:', err);
        process.exit(1);
    })
        .finally(async () => {
        await prisma.$disconnect();
    });
}
//# sourceMappingURL=seed-history.js.map