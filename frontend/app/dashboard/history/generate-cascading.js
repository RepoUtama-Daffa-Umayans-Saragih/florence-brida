const fs = require('fs');
const path = require('path');

const token = 'pk.eyJ1Ijoia2x1Ym9saW1waWFkZWluZm9ybWF0aWthc2ltIiwiYSI6ImNtdzQ3Mmh2aTAwM2EzMXB6NG5naDJnbDEifQ.cxMkjrU8vo3KFRcZaMYsDQ';

// Definisi cabang spillover kemacetan untuk masing-masing titik banjir 27 Nov 2025
// Tier: 'orange' (100 - 400m / Macet Berat Antrean) | 'yellow' (400 - 800m / Padat Merayap Pengalihan Arus)
const CASCADING_ROUTES_NOV = [
  // --- SPOT 1: Jl. Dr. Mansyur (USU) ---
  {
    spotId: 'SEG-NOV-01',
    tier: 'orange',
    name: 'Antrean Dr. Mansyur Timur (ke Jembatan Babura)',
    start: { lng: 98.6575, lat: 3.5627 },
    end: { lng: 98.6605, lat: 3.5630 },
  },
  {
    spotId: 'SEG-NOV-01',
    tier: 'orange',
    name: 'Antrean Dr. Mansyur Barat (ke Simpang Setia Budi)',
    start: { lng: 98.6525, lat: 3.5592 },
    end: { lng: 98.6482, lat: 3.5595 },
  },
  {
    spotId: 'SEG-NOV-01',
    tier: 'yellow',
    name: 'Pengalihan Patimura (Babura ke RS Elisabeth)',
    start: { lng: 98.6605, lat: 3.5630 },
    end: { lng: 98.6660, lat: 3.5660 },
  },
  {
    spotId: 'SEG-NOV-01',
    tier: 'yellow',
    name: 'Pengalihan Setia Budi Utara (ke Pasar 1)',
    start: { lng: 98.6482, lat: 3.5595 },
    end: { lng: 98.6440, lat: 3.5610 },
  },

  // --- SPOT 2: Simpang Pos (Jamin Ginting) ---
  {
    spotId: 'SEG-NOV-02',
    tier: 'orange',
    name: 'Antrean Jamin Ginting Utara (ke Pasar Baru Padang Bulan)',
    start: { lng: 98.6535, lat: 3.5420 },
    end: { lng: 98.6580, lat: 3.5490 },
  },
  {
    spotId: 'SEG-NOV-02',
    tier: 'orange',
    name: 'Antrean Ngumban Surbakti Barat',
    start: { lng: 98.6515, lat: 3.5375 },
    end: { lng: 98.6450, lat: 3.5440 },
  },
  {
    spotId: 'SEG-NOV-02',
    tier: 'yellow',
    name: 'Pengalihan Jamin Ginting Selatan (Arah Pancur Batu)',
    start: { lng: 98.6515, lat: 3.5375 },
    end: { lng: 98.6480, lat: 3.5300 },
  },
  {
    spotId: 'SEG-NOV-02',
    tier: 'yellow',
    name: 'Pengalihan AH Nasution Timur (Arah Tritura)',
    start: { lng: 98.6535, lat: 3.5420 },
    end: { lng: 98.6630, lat: 3.5390 },
  },

  // --- SPOT 3: Ringroad Gagak Hitam (Tasbi 1) ---
  {
    spotId: 'SEG-NOV-03',
    tier: 'orange',
    name: 'Antrean Ringroad Utara (Depan Tasbi 1)',
    start: { lng: 98.6270, lat: 3.5725 },
    end: { lng: 98.6270, lat: 3.5785 },
  },
  {
    spotId: 'SEG-NOV-03',
    tier: 'orange',
    name: 'Antrean Ringroad Selatan (Simpang Asam Kumbang)',
    start: { lng: 98.6278, lat: 3.5665 },
    end: { lng: 98.6290, lat: 3.5605 },
  },
  {
    spotId: 'SEG-NOV-03',
    tier: 'yellow',
    name: 'Pengalihan Ringroad ke Simpang Sunggal',
    start: { lng: 98.6270, lat: 3.5785 },
    end: { lng: 98.6265, lat: 3.5850 },
  },
  {
    spotId: 'SEG-NOV-03',
    tier: 'yellow',
    name: 'Pengalihan Asam Kumbang ke Bunga Raya',
    start: { lng: 98.6290, lat: 3.5605 },
    end: { lng: 98.6340, lat: 3.5550 },
  },

  // --- SPOT 4: Gatot Subroto (Simpang Pondok Kelapa) ---
  {
    spotId: 'SEG-NOV-04',
    tier: 'orange',
    name: 'Antrean Gatsu Timur (Underpass ke Sei Sikambing)',
    start: { lng: 98.6295, lat: 3.5895 },
    end: { lng: 98.6360, lat: 3.5880 },
  },
  {
    spotId: 'SEG-NOV-04',
    tier: 'orange',
    name: 'Antrean Jl. Asrama Utara (Dekat Kodam)',
    start: { lng: 98.6265, lat: 3.5910 },
    end: { lng: 98.6280, lat: 3.5970 },
  },
  {
    spotId: 'SEG-NOV-04',
    tier: 'yellow',
    name: 'Pengalihan Gatsu ke Tomang Elok',
    start: { lng: 98.6360, lat: 3.5880 },
    end: { lng: 98.6430, lat: 3.5870 },
  },
  {
    spotId: 'SEG-NOV-04',
    tier: 'yellow',
    name: 'Pengalihan Ringroad Utara ke Pondok Kelapa',
    start: { lng: 98.6235, lat: 3.5930 },
    end: { lng: 98.6180, lat: 3.5940 },
  },

  // --- SPOT 5: Simpang Kampung Lalang (TB Simatupang) ---
  {
    spotId: 'SEG-NOV-05',
    tier: 'orange',
    name: 'Antrean Jembatan Belawan Barat (Jalur Binjai)',
    start: { lng: 98.6090, lat: 3.5960 },
    end: { lng: 98.6020, lat: 3.5980 },
  },
  {
    spotId: 'SEG-NOV-05',
    tier: 'orange',
    name: 'Antrean Jl. Kelambir V Utara',
    start: { lng: 98.6115, lat: 3.5938 },
    end: { lng: 98.6130, lat: 3.6010 },
  },
  {
    spotId: 'SEG-NOV-05',
    tier: 'yellow',
    name: 'Pengalihan Simatupang ke Pinang Baris',
    start: { lng: 98.6140, lat: 3.5915 },
    end: { lng: 98.6180, lat: 3.5850 },
  },
  {
    spotId: 'SEG-NOV-05',
    tier: 'yellow',
    name: 'Pengalihan Lintas Medan-Binjai km 12',
    start: { lng: 98.6020, lat: 3.5980 },
    end: { lng: 98.5940, lat: 3.6010 },
  },

  // --- SPOT 6: Setia Budi (Tanjung Sari) ---
  {
    spotId: 'SEG-NOV-06',
    tier: 'orange',
    name: 'Antrean Setia Budi Pasar 2',
    start: { lng: 98.6490, lat: 3.5570 },
    end: { lng: 98.6420, lat: 3.5540 },
  },
  {
    spotId: 'SEG-NOV-06',
    tier: 'yellow',
    name: 'Pengalihan Setia Budi ke Simpang Pemda',
    start: { lng: 98.6420, lat: 3.5540 },
    end: { lng: 98.6360, lat: 3.5480 },
  },

  // --- SPOT 7: Brigjend Katamso (Simpang Juanda) ---
  {
    spotId: 'SEG-NOV-07',
    tier: 'orange',
    name: 'Antrean Katamso Utara (ke arah Istana Maimun)',
    start: { lng: 98.6835, lat: 3.5715 },
    end: { lng: 98.6820, lat: 3.5775 },
  },
  {
    spotId: 'SEG-NOV-07',
    tier: 'yellow',
    name: 'Pengalihan Juanda ke arah Polonia',
    start: { lng: 98.6835, lat: 3.5715 },
    end: { lng: 98.6750, lat: 3.5710 },
  },
];

// Definisi cabang spillover kemacetan untuk 11 Oktober 2025 (skala lebih ringan)
const CASCADING_ROUTES_OCT = [
  {
    spotId: 'SEG-OCT-01',
    tier: 'orange',
    name: 'Antrean Dr. Mansyur (Depan Pintu 1 USU)',
    start: { lng: 98.6540, lat: 3.5605 },
    end: { lng: 98.6575, lat: 3.5627 },
  },
  {
    spotId: 'SEG-OCT-01',
    tier: 'yellow',
    name: 'Pengalihan Setia Budi (ke arah Pemda)',
    start: { lng: 98.6515, lat: 3.5585 },
    end: { lng: 98.6480, lat: 3.5590 },
  },
  {
    spotId: 'SEG-OCT-02',
    tier: 'orange',
    name: 'Antrean Jamin Ginting Pajus',
    start: { lng: 98.6580, lat: 3.5530 },
    end: { lng: 98.6550, lat: 3.5560 },
  },
  {
    spotId: 'SEG-OCT-02',
    tier: 'yellow',
    name: 'Pengalihan Pintu 4 USU Jamin Ginting',
    start: { lng: 98.6550, lat: 3.5560 },
    end: { lng: 98.6630, lat: 3.5560 },
  },
  {
    spotId: 'SEG-OCT-07',
    tier: 'orange',
    name: 'Antrean Katamso Sei Mati',
    start: { lng: 98.6815, lat: 3.5760 },
    end: { lng: 98.6800, lat: 3.5810 },
  },
  {
    spotId: 'SEG-OCT-07',
    tier: 'yellow',
    name: 'Pengalihan Sisingamangaraja Teladan',
    start: { lng: 98.6845, lat: 3.5720 },
    end: { lng: 98.6890, lat: 3.5710 },
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
  return [[start.lng, start.lat], [end.lng, end.lat]];
}

async function main() {
  console.log('⚡ Mengambil geometri spillover kemacetan (Cascading Congestion)...');

  const resultNov = [];
  for (let i = 0; i < CASCADING_ROUTES_NOV.length; i++) {
    const r = CASCADING_ROUTES_NOV[i];
    console.log(`- [NOV ${r.tier.toUpperCase()}] ${r.name}...`);
    const coords = await fetchRoute(r.start, r.end);
    resultNov.push({
      id: `CASC-NOV-${i + 1}`,
      spotId: r.spotId,
      tier: r.tier,
      name: r.name,
      coordinates: coords,
    });
  }

  const resultOct = [];
  for (let i = 0; i < CASCADING_ROUTES_OCT.length; i++) {
    const r = CASCADING_ROUTES_OCT[i];
    console.log(`- [OCT ${r.tier.toUpperCase()}] ${r.name}...`);
    const coords = await fetchRoute(r.start, r.end);
    resultOct.push({
      id: `CASC-OCT-${i + 1}`,
      spotId: r.spotId,
      tier: r.tier,
      name: r.name,
      coordinates: coords,
    });
  }

  const outputPath = path.join(__dirname, 'cascading-traffic.json');
  fs.writeFileSync(outputPath, JSON.stringify({ nov2025: resultNov, oct2025: resultOct }, null, 2));
  console.log(`✅ Sukses! Geometri spillover tersimpan di ${outputPath}`);
}

main();
