const fs = require('fs');
const path = require('path');

const token = 'pk.eyJ1Ijoia2x1Ym9saW1waWFkZWluZm9ybWF0aWthc2ltIiwiYSI6ImNtdzQ3Mmh2aTAwM2EzMXB6NG5naDJnbDEifQ.cxMkjrU8vo3KFRcZaMYsDQ';

// Segmen jalan terpisah 27 November 2025
const SEGMENTS_NOV_2025 = [
  {
    id: 'SEG-NOV-01',
    name: 'Jl. Dr. Mansyur (Pintu 1 s.d. RS USU)',
    start: { lng: 98.6575, lat: 3.5627 },
    end: { lng: 98.6525, lat: 3.5592 },
    center: { lng: 98.6565, lat: 3.5620 },
    peakCm: 130,
    severityGrade: 'very-critical',
    badgeLabel: 'Sangat Kritis (130 cm)',
    lineColor: '#991b1b',
    notes: 'Jalanan bak lautan lepas (50–130 cm), ruko tutup total, puluhan kendaraan mogok.',
    sourceUrl: 'https://www.detik.com/sumut/berita/d-banjir-medan-dr-mansyur-depan-usu-bak-lautan-november-2025',
  },
  {
    id: 'SEG-NOV-02',
    name: 'Jl. Letjen Jamin Ginting (Flyover Simpang Pos)',
    start: { lng: 98.6535, lat: 3.5420 },
    end: { lng: 98.6515, lat: 3.5375 },
    center: { lng: 98.6526, lat: 3.5402 },
    peakCm: 80,
    severityGrade: 'critical',
    badgeLabel: 'Kritis (80 cm)',
    lineColor: '#dc2626',
    notes: 'Cekungan kolong flyover Simpang Pos terendam parah hingga 80 cm, jalur Medan–Berastagi terputus >12 jam.',
    sourceUrl: 'https://www.dnaberita.com/berita/medan-dikepung-banjir-raya-simpang-kampung-lalang-gatot-subroto',
  },
  {
    id: 'SEG-NOV-03',
    name: 'Jl. Ringroad / Gagak Hitam (Sekitar Tasbi 1 & Manhattan)',
    start: { lng: 98.6270, lat: 3.5725 },
    end: { lng: 98.6278, lat: 3.5665 },
    center: { lng: 98.6275, lat: 3.5695 },
    peakCm: 65,
    severityGrade: 'critical',
    badgeLabel: 'Kritis (65 cm)',
    lineColor: '#dc2626',
    notes: 'Lajur lambat dan putaran balik terendam 65 cm, antrean macet mobil dan truk mengular >3 km.',
    sourceUrl: 'https://www.dnaberita.com/berita/medan-dikepung-banjir-raya-simpang-kampung-lalang-gatot-subroto',
  },
  {
    id: 'SEG-NOV-04',
    name: 'Jl. Gatot Subroto (Simpang Pondok Kelapa / Underpass)',
    start: { lng: 98.6235, lat: 3.5930 },
    end: { lng: 98.6295, lat: 3.5895 },
    center: { lng: 98.6265, lat: 3.5910 },
    peakCm: 85,
    severityGrade: 'critical',
    badgeLabel: 'Kritis (85 cm)',
    lineColor: '#dc2626',
    notes: 'Arus limpasan jalan raya sangat deras dan berbahaya, angkutan antar-kota terjebak total.',
    sourceUrl: 'https://www.dnaberita.com/berita/medan-dikepung-banjir-raya-simpang-kampung-lalang-gatot-subroto',
  },
  {
    id: 'SEG-NOV-05',
    name: 'Jl. TB Simatupang (Simpang Kampung Lalang & Pinang Baris)',
    start: { lng: 98.6090, lat: 3.5960 },
    end: { lng: 98.6140, lat: 3.5915 },
    center: { lng: 98.6115, lat: 3.5938 },
    peakCm: 120,
    severityGrade: 'extreme',
    badgeLabel: 'Ekstrem (120 cm)',
    lineColor: '#7f1d1d',
    notes: 'Ketinggian air mencapai dada orang dewasa (1.2m), jalur utama Medan–Binjai lumpuh 2 hari penuh.',
    sourceUrl: 'https://regional.kompas.com/read/2025/11/27/banjir-kota-medan-19-kecamatan-terdampak',
  },
  {
    id: 'SEG-NOV-06',
    name: 'Jl. Setia Budi (Tanjung Sari / Pasar 1 - 2)',
    start: { lng: 98.6470, lat: 3.5620 },
    end: { lng: 98.6490, lat: 3.5570 },
    center: { lng: 98.6482, lat: 3.5595 },
    peakCm: 75,
    severityGrade: 'critical',
    badgeLabel: 'Kritis (75 cm)',
    lineColor: '#dc2626',
    notes: 'Drainase primer meluap mengisolasi permukiman kos mahasiswa Tanjung Sari.',
    sourceUrl: 'https://regional.kompas.com/read/2025/11/27/banjir-kota-medan-19-kecamatan-terdampak',
  },
  {
    id: 'SEG-NOV-07',
    name: 'Jl. Brigjend Katamso (Kawasan Simpang Juanda)',
    start: { lng: 98.6835, lat: 3.5715 },
    end: { lng: 98.6865, lat: 3.5665 },
    center: { lng: 98.6850, lat: 3.5690 },
    peakCm: 90,
    severityGrade: 'critical',
    badgeLabel: 'Kritis (90 cm)',
    lineColor: '#dc2626',
    notes: 'Luapan Sungai Deli sangat deras mencapai aspal jalan 90 cm.',
    sourceUrl: 'https://www.beritasatu.com/nusantara/2025/11/banjir-besar-kota-medan-evakuasi-sar',
  },
];

// Segmen jalan terpisah 11 Oktober 2025
const SEGMENTS_OCT_2025 = [
  {
    id: 'SEG-OCT-01',
    name: 'Jl. Dr. Mansyur (RS USU & Kolam Retensi)',
    start: { lng: 98.6540, lat: 3.5605 },
    end: { lng: 98.6515, lat: 3.5585 },
    center: { lng: 98.6525, lat: 3.5592 },
    peakCm: 45,
    severityGrade: 'moderate',
    badgeLabel: 'Sedang (45 cm)',
    lineColor: '#d97706',
    notes: 'Air cokelat pekat luapan Sungai Babura & saluran Parit Benggali.',
    sourceUrl: 'https://medan.kompas.com/read/2025/10/12/banjir-medan-sejumlah-ruas-jalan-terendam',
  },
  {
    id: 'SEG-OCT-02',
    name: 'Jl. Letjen Jamin Ginting (Pajus / Pasar Baru)',
    start: { lng: 98.6580, lat: 3.5530 },
    end: { lng: 98.6600, lat: 3.5490 },
    center: { lng: 98.6590, lat: 3.5510 },
    peakCm: 35,
    severityGrade: 'moderate',
    badgeLabel: 'Sedang (35 cm)',
    lineColor: '#d97706',
    notes: 'Genangan merata di depan Pasar Sore/Pajus hingga Simpang Pasar Baru.',
    sourceUrl: 'https://www.detik.com/sumut/berita/d-banjir-medan-dr-mansyur-usu-oktober-2025',
  },
  {
    id: 'SEG-OCT-03',
    name: 'Jl. Wahid Hasyim (Kecamatan Medan Baru)',
    start: { lng: 98.6550, lat: 3.5730 },
    end: { lng: 98.6570, lat: 3.5690 },
    center: { lng: 98.6560, lat: 3.5710 },
    peakCm: 35,
    severityGrade: 'moderate',
    badgeLabel: 'Sedang (35 cm)',
    lineColor: '#d97706',
    notes: 'Luapan saluran drainase sekunder merendam badan jalan.',
    sourceUrl: 'https://www.detik.com/sumut/berita/d-banjir-medan-dr-mansyur-usu-oktober-2025',
  },
  {
    id: 'SEG-OCT-04',
    name: 'Jl. Kapten Patimura (Simpang Babura / RS Elisabeth)',
    start: { lng: 98.6635, lat: 3.5700 },
    end: { lng: 98.6665, lat: 3.5660 },
    center: { lng: 98.6650, lat: 3.5680 },
    peakCm: 30,
    severityGrade: 'moderate',
    badgeLabel: 'Sedang (30 cm)',
    lineColor: '#d97706',
    notes: 'Air sungai meluap di sekitar jembatan Sungai Babura.',
    sourceUrl: 'https://www.cnnindonesia.com/nasional/20251012-banjir-medan-tujuh-kecamatan',
  },
  {
    id: 'SEG-OCT-05',
    name: 'Jl. Sei Batang Hari (Babura Sunggal)',
    start: { lng: 98.6450, lat: 3.5740 },
    end: { lng: 98.6490, lat: 3.5700 },
    center: { lng: 98.6470, lat: 3.5720 },
    peakCm: 40,
    severityGrade: 'moderate',
    badgeLabel: 'Sedang (40 cm)',
    lineColor: '#d97706',
    notes: 'Limpasan anak sungai Babura meluap ke aspal dan pemukiman.',
    sourceUrl: 'https://mistar.id/medan/kolam-retensi-usu-meluber-drainase-medan',
  },
  {
    id: 'SEG-OCT-06',
    name: 'Jl. Ayahanda (Depan RS Royal Prima)',
    start: { lng: 98.6565, lat: 3.5900 },
    end: { lng: 98.6595, lat: 3.5860 },
    center: { lng: 98.6580, lat: 3.5880 },
    peakCm: 35,
    severityGrade: 'moderate',
    badgeLabel: 'Sedang (35 cm)',
    lineColor: '#d97706',
    notes: 'Genangan mencapai 35 cm di depan RS Royal Prima.',
    sourceUrl: 'https://www.viva.co.id/berita/nasional/banjir-medan-peninjauan-wali-kota',
  },
  {
    id: 'SEG-OCT-07',
    name: 'Jl. Brigjend Katamso (Kampung Aur & Sei Mati)',
    start: { lng: 98.6815, lat: 3.5760 },
    end: { lng: 98.6845, lat: 3.5720 },
    center: { lng: 98.6830, lat: 3.5740 },
    peakCm: 50,
    severityGrade: 'critical',
    badgeLabel: 'Kritis Bantaran (50 cm)',
    lineColor: '#dc2626',
    notes: 'Luapan Sungai Deli meluap ke badan jalan raya 50 cm.',
    sourceUrl: 'https://medan.kompas.com/read/2025/10/12/banjir-medan-sejumlah-ruas-jalan-terendam',
  },
];

async function fetchRoute(start, end) {
  const p1 = `${start.lng},${start.lat}`;
  const p2 = `${end.lng},${end.lat}`;
  const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${p1};${p2}?geometries=geojson&overview=full&access_token=${token}`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (data.routes && data.routes[0]?.geometry?.coordinates) {
      return data.routes[0].geometry.coordinates;
    }
  } catch (err) {
    console.error('Fetch route error:', err.message);
  }
  // Fallback straight line
  return [[start.lng, start.lat], [end.lng, end.lat]];
}

async function main() {
  console.log('⚡ Mengambil geometri snap-to-road per-ruas jalan...');

  const resultNov = [];
  for (const seg of SEGMENTS_NOV_2025) {
    console.log(`- Fetching ${seg.name}...`);
    const coords = await fetchRoute(seg.start, seg.end);
    resultNov.push({
      ...seg,
      coordinates: coords,
    });
  }

  const resultOct = [];
  for (const seg of SEGMENTS_OCT_2025) {
    console.log(`- Fetching ${seg.name}...`);
    const coords = await fetchRoute(seg.start, seg.end);
    resultOct.push({
      ...seg,
      coordinates: coords,
    });
  }

  const outputPath = path.join(__dirname, 'snapped-segments.json');
  fs.writeFileSync(outputPath, JSON.stringify({ nov2025: resultNov, oct2025: resultOct }, null, 2));
  console.log(`✅ Sukses! Geometri tersimpan di ${outputPath}`);
}

main();
