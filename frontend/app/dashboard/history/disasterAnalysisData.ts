export interface DisasterProfile {
  id: string;
  name: string;
  roadKey: string;
  rootCause: string;
  shortTermMitigation: string;
  longTermMitigation: string;
  atcsCctv: string;
  cctvStatus: 'LIVE' | 'OFFLINE' | 'WARNING';
  priorityStatus: string;
  assignedTeam: string;
  estimatedRecedeHours: string;
}

export const DISASTER_PROFILES: Record<string, DisasterProfile> = {
  // Profil 1: Jl. Dr. Mansyur (USU)
  'SEG-NOV-01': {
    id: 'SEG-NOV-01',
    name: 'Jl. Dr. Mansyur (Pintu 1 USU s.d. RS USU)',
    roadKey: 'dr-mansyur',
    rootCause:
      'Sedimentasi Parit Benggali mencapai 40% & fenomena Backwater luapan Sungai Babura akibat curah hujan ekstrem di hulu Tanah Karo/Sibolangit.',
    shortTermMitigation:
      'Kirim 2 unit pompa mobile portabel 500 L/detik ke Pintu 1 USU, rekayasa lalu lintas masuk kampus via Jl. Prof. Sofyan, dan pemasangan tanggul pasir sementara di depan RS USU.',
    longTermMitigation:
      'Pelebaran dimensi box culvert Parit Benggali menjadi 2.5m x 2.0m serta pengerukan sedimentasi muara Sungai Babura secara berkala.',
    atcsCctv: 'CCTV Pintu 1 USU (Tergenang 130 cm / Arus Kencang)',
    cctvStatus: 'WARNING',
    priorityStatus: 'SANGAT KRITIS (SIAGA 1)',
    assignedTeam: 'Tim Reaksi Cepat BPBD Posko 1 + 2 Pompa Alkon',
    estimatedRecedeHours: '5 - 7 Jam pasca puncak',
  },

  // Profil 2: Jl. Letjen Jamin Ginting (Flyover Simpang Pos)
  'SEG-NOV-02': {
    id: 'SEG-NOV-02',
    name: 'Jl. Letjen Jamin Ginting (Flyover Simpang Pos)',
    roadKey: 'jamin-ginting',
    rootCause:
      'Cekungan topografi di kolong Flyover Simpang Pos tidak memiliki pompa submersible aktif & saluran outlet gravitasi ke anak sungai Belawan tersumbat sedimen.',
    shortTermMitigation:
      'Aktivasi 1 unit pompa mobile BPBD & rekayasa buka-tutup jalur Flyover atas khusus kendaraan kecil guna menghindari penumpukan di kolong flyover.',
    longTermMitigation:
      'Pembangunan sumur resapan dalam (deep well injection) dan instalasi stasiun pompa otomatis terintegrasi genset cadangan di kolong simpang.',
    atcsCctv: 'CCTV ATCS Simpang Pos (Kolong Terendam 80 cm)',
    cctvStatus: 'LIVE',
    priorityStatus: 'KRITIS (SIAGA 1)',
    assignedTeam: 'Satgas Dishub + 1 Pompa Sedot 300 L/detik',
    estimatedRecedeHours: '3 - 4 Jam',
  },

  // Profil 3: Jl. Ringroad / Gagak Hitam (Tasbi 1 & Manhattan)
  'SEG-NOV-03': {
    id: 'SEG-NOV-03',
    name: 'Jl. Ringroad / Gagak Hitam (Tasbi 1 & Manhattan)',
    roadKey: 'ringroad',
    rootCause:
      'Kapasitas drainase tepi jalan arteri nasional tidak sebanding dengan limpasan debit air dari perumahan Tasbi 1 & saluran pembuang Sungai Badera yang meluap.',
    shortTermMitigation:
      'Pembukaan sudetan darurat ke parit sekunder dan penyekatan lajur lambat agar truk dan kendaraan pribadi diarahkan hanya melintasi lajur cepat.',
    longTermMitigation:
      'Konstruksi saluran drainase terpadu lintas perumahan dan peningkatan kapasitas kolam retensi Ringroad Sunggal.',
    atcsCctv: 'CCTV Ringroad Tasbi (Lajur Lambat Macet 3 km)',
    cctvStatus: 'LIVE',
    priorityStatus: 'KRITIS',
    assignedTeam: 'Polrestabes Medan + Dinas SDABMBK Unit 3',
    estimatedRecedeHours: '4 - 5 Jam',
  },

  // Profil 4: Jl. Gatot Subroto (Simpang Pondok Kelapa)
  'SEG-NOV-04': {
    id: 'SEG-NOV-04',
    name: 'Jl. Gatot Subroto (Simpang Pondok Kelapa / Underpass)',
    roadKey: 'gatot-subroto',
    rootCause:
      'Limpasan permukaan jalan dari kawasan Sei Sikambing menuju cekungan underpass saat pompa drainase underpass mengalami kendala trip listrik PLN.',
    shortTermMitigation:
      'Penyediaan genset darurat mobile untuk menghidupkan pompa underpass dan pengalihan arus kendaraan kecil melalui Jl. Asrama.',
    longTermMitigation:
      'Peningkatan kapasitas rumah pompa underpass dan sistem otomatisasi SCADA anti-banjir terhubung pemantauan real-time.',
    atcsCctv: 'CCTV Underpass Gatsu (Arus Limpasan Deras)',
    cctvStatus: 'WARNING',
    priorityStatus: 'KRITIS',
    assignedTeam: 'Tim Teknisi Pompa PUPR + Patroli Sabhara',
    estimatedRecedeHours: '3 - 5 Jam',
  },

  // Profil 5: Jl. TB Simatupang (Simpang Kampung Lalang)
  'SEG-NOV-05': {
    id: 'SEG-NOV-05',
    name: 'Jl. TB Simatupang (Simpang Kampung Lalang)',
    roadKey: 'kampung-lalang',
    rootCause:
      'Tanggul Sungai Belawan jebol sebagian akibat debit banjir bandang hulu Deli Serdang dan pertemuan fenomena pasang air laut (rob).',
    shortTermMitigation:
      'Pengerahan 4 perahu karet Basarnas/BPBD untuk evakuasi warga bantaran dan penutupan jalur Medan–Binjai untuk kendaraan roda 2.',
    longTermMitigation:
      'Perkuatan tanggul permanen beton (sheet pile) sepanjang 1.2 km di sepanjang bantaran kritis Sungai Belawan.',
    atcsCctv: 'CCTV Jembatan Belawan (Air Menyentuh Gelagar / 120 cm)',
    cctvStatus: 'WARNING',
    priorityStatus: 'EKSTREM / DARURAT BENCANA',
    assignedTeam: 'Tim SAR Gabungan Basarnas + Koramil Sunggal',
    estimatedRecedeHours: '8 - 12 Jam (tergantung pasang laut)',
  },

  // Profil 6: Jl. Setia Budi (Tanjung Sari)
  'SEG-NOV-06': {
    id: 'SEG-NOV-06',
    name: 'Jl. Setia Budi (Tanjung Sari / Pasar 1 - 2)',
    roadKey: 'setia-budi',
    rootCause:
      'Parit primer tersumbat sampah domestik dan penyempitan saluran pada crossing gorong-gorong jembatan pertokoan.',
    shortTermMitigation:
      'Pembersihan manual sampah sumbatan menggunakan excavator mini BPBD/Dinas SDABMBK.',
    longTermMitigation:
      'Penertiban jembatan liar di atas drainase dan pembuatan crossing saluran baru berdiameter 1.8 meter.',
    atcsCctv: 'CCTV Simpang Pemda (Genangan 75 cm)',
    cctvStatus: 'LIVE',
    priorityStatus: 'KRITIS',
    assignedTeam: 'Tim Reaksi Cepat Kebersihan & SDA Medan',
    estimatedRecedeHours: '3 - 4 Jam',
  },

  // Profil 7: Jl. Brigjend Katamso (Simpang Juanda)
  'SEG-NOV-07': {
    id: 'SEG-NOV-07',
    name: 'Jl. Brigjend Katamso (Kawasan Simpang Juanda)',
    roadKey: 'katamso',
    rootCause:
      'Luapan Sungai Deli di kelokan sungai Kampung Aur/Sei Mati yang tidak memiliki parapet penahan banjir yang memadai.',
    shortTermMitigation:
      'Pemberlakuan tanggap darurat evakuasi warga ke Masjid Raya/sekolah terdekat dan pemadaman gardu listrik darurat PLN.',
    longTermMitigation:
      'Pembangunan dinding parapet penahan banjir setinggi 2.5 meter di sepanjang bantaran Sungai Deli Kampung Aur.',
    atcsCctv: 'CCTV Simpang Juanda (Air Meluap ke Jalan 90 cm)',
    cctvStatus: 'LIVE',
    priorityStatus: 'KRITIS',
    assignedTeam: 'Satgas Gabungan BPBD + Tagana',
    estimatedRecedeHours: '6 - 8 Jam',
  },
};

/**
 * Fallback resolver untuk mendapatkan profil bencana berdasarkan ID atau nama ruas jalan
 */
export function getDisasterProfile(segmentId?: string, segmentName?: string): DisasterProfile {
  if (segmentId && DISASTER_PROFILES[segmentId]) {
    return DISASTER_PROFILES[segmentId];
  }

  // Pencocokan berdasarkan nama ruas jalan
  if (segmentName) {
    const lower = segmentName.toLowerCase();
    if (lower.includes('mansyur')) return DISASTER_PROFILES['SEG-NOV-01'];
    if (lower.includes('jamin ginting') || lower.includes('simpang pos')) return DISASTER_PROFILES['SEG-NOV-02'];
    if (lower.includes('ringroad') || lower.includes('gagak hitam')) return DISASTER_PROFILES['SEG-NOV-03'];
    if (lower.includes('gatot subroto') || lower.includes('pondok kelapa')) return DISASTER_PROFILES['SEG-NOV-04'];
    if (lower.includes('lalang') || lower.includes('simatupang')) return DISASTER_PROFILES['SEG-NOV-05'];
    if (lower.includes('setia budi')) return DISASTER_PROFILES['SEG-NOV-06'];
    if (lower.includes('katamso')) return DISASTER_PROFILES['SEG-NOV-07'];
  }

  // Default fallback profil
  return {
    id: segmentId || 'GENERIC',
    name: segmentName || 'Ruas Jalan Tergenang',
    roadKey: 'generic',
    rootCause: 'Kapasitas drainase lokal terlampaui akibat intensitas curah hujan ekstrem dan sedimentasi saluran primer.',
    shortTermMitigation: 'Pengerahan unit pompa mobile dan penyekatan lajur jalan terdampak oleh tim gabungan BPBD.',
    longTermMitigation: 'Normalisasi sedimentasi drainase primer dan integrasi sumur resapan komunal.',
    atcsCctv: 'CCTV Wilayah Terkait (Pantauan Visual Aktif)',
    cctvStatus: 'LIVE',
    priorityStatus: 'KRITIS',
    assignedTeam: 'Tim Reaksi Cepat BPBD Kota Medan',
    estimatedRecedeHours: '4 - 6 Jam',
  };
}
