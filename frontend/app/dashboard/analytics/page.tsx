'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import 'mapbox-gl/dist/mapbox-gl.css';
import Link from 'next/link';
import Map, { Marker, NavigationControl, Source, Layer, type MapRef } from 'react-map-gl/mapbox';
import snappedData from '../history/snapped-segments.json';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
} from 'recharts';

// Definisi Tipe Koridor Jalan Bencana
interface RoadIncident {
  id: string;
  name: string;
  location: string;
  district: string;
  depthCm: number;
  maxCm: number;
  status: 'critical' | 'extreme' | 'warning' | 'moderate';
  statusLabel: string;
  rootCause: string;
  mitigation: string;
  coordinates: { lat: number; lng: number };
}

// Data Kejadian 27 November 2025 (Faktual Terparah)
const ROADS_NOV: RoadIncident[] = [
  {
    id: 'NOV-01',
    name: 'Jl. Dr. Mansyur',
    location: 'Pintu 1 - 4 USU s.d. RS USU',
    district: 'Medan Baru',
    depthCm: 130,
    maxCm: 150,
    status: 'extreme',
    statusLabel: 'Kritis / Terputus',
    rootCause: 'Sedimentasi Parit Benggali 40% & Backwater Sungai Babura akibat curah hujan ekstrem hulu Sibolangit.',
    mitigation: '2 Unit Pompa Alkon 500 L/s & Tanggul Karung Pasir',
    coordinates: { lat: 3.5620, lng: 98.6565 },
  },
  {
    id: 'NOV-02',
    name: 'Jl. Letjen Jamin Ginting',
    location: 'Flyover Simpang Pos & Pajus Padang Bulan',
    district: 'Medan Selayang',
    depthCm: 80,
    maxCm: 150,
    status: 'critical',
    statusLabel: 'Kritis (Kolong)',
    rootCause: 'Cekungan alami kolong flyover tanpa pompa otomatis aktif dan saluran buang ke Belawan tersumbat.',
    mitigation: '1 Unit Pompa Mobile 300 L/s & Pengalihan Arus Flyover Atas',
    coordinates: { lat: 3.5402, lng: 98.6526 },
  },
  {
    id: 'NOV-05',
    name: 'Jl. TB Simatupang',
    location: 'Simpang Kampung Lalang - Jembatan Belawan',
    district: 'Medan Sunggal',
    depthCm: 120,
    maxCm: 150,
    status: 'extreme',
    statusLabel: 'Darurat Ekstrem',
    rootCause: 'Tanggul Sungai Belawan jebol sebagian akibat debit banjir bandang hulu Deli Serdang.',
    mitigation: '4 Perahu Karet Basarnas & Penutupan Total Koridor Medan-Binjai',
    coordinates: { lat: 3.5938, lng: 98.6115 },
  },
  {
    id: 'NOV-04',
    name: 'Jl. Gatot Subroto',
    location: 'Underpass Sei Sikambing & Simpang Pondok Kelapa',
    district: 'Medan Helvetia',
    depthCm: 70,
    maxCm: 150,
    status: 'critical',
    statusLabel: 'Kritis (Underpass)',
    rootCause: 'Pompa drainase underpass trip kelistrikan PLN saat debit limpasan permukaan mencapai puncak.',
    mitigation: 'Genset Cadangan PUPR & Rekayasa Arus Kendaraan via Jl. Asrama',
    coordinates: { lat: 3.5910, lng: 98.6265 },
  },
  {
    id: 'NOV-03',
    name: 'Jl. Ringroad / Gagak Hitam',
    location: 'Depan Manhattan Mall & Kompleks Tasbi 1',
    district: 'Medan Sunggal',
    depthCm: 65,
    maxCm: 150,
    status: 'critical',
    statusLabel: 'Kritis (Lajur Lambat)',
    rootCause: 'Kapasitas parit sekunder Sungai Badera tidak mampu menampung luapan air perumahan Tasbi 1.',
    mitigation: 'Sudetan Darurat ke Parit Primer & Jalur Cepat Khusus Bus/Truk',
    coordinates: { lat: 3.5695, lng: 98.6275 },
  },
  {
    id: 'NOV-07',
    name: 'Jl. Brigjend Katamso',
    location: 'Kampung Baru & Bantaran Sungai Deli',
    district: 'Medan Maimun',
    depthCm: 75,
    maxCm: 150,
    status: 'critical',
    statusLabel: 'Kritis',
    rootCause: 'Luapan Sungai Deli melimpasi tanggul dan merendam kawasan pemukiman padat tepi sungai.',
    mitigation: 'Evakuasi Warga Bantaran & Posko Logistik Lapangan',
    coordinates: { lat: 3.5690, lng: 98.6850 },
  },
  {
    id: 'NOV-06',
    name: 'Jl. Setia Budi',
    location: 'Persimpangan Pasar 1 - Pasar 5',
    district: 'Medan Selayang',
    depthCm: 50,
    maxCm: 150,
    status: 'warning',
    statusLabel: 'Waspada Tinggi',
    rootCause: 'Penyempitan penampang box culvert dan antrean air parit jalan.',
    mitigation: 'Pembersihan Sampah Grill Saluran oleh Satgas SDABMBK',
    coordinates: { lat: 3.5595, lng: 98.6482 },
  },
];

// Data Kejadian 11 Oktober 2025 (Waspada Lokal)
const ROADS_OCT: RoadIncident[] = [
  {
    id: 'OCT-01',
    name: 'Jl. Dr. Mansyur (RS USU)',
    location: 'Depan Rumah Sakit USU & Kolam Retensi',
    district: 'Medan Baru',
    depthCm: 45,
    maxCm: 150,
    status: 'warning',
    statusLabel: 'Waspada Tinggi',
    rootCause: 'Luapan Parit Benggali dan elevasi kolam retensi USU terisi penuh 90%.',
    mitigation: 'Pengoperasian 1 Unit Pompa Submersible & Pembersihan Saringan Sampah',
    coordinates: { lat: 3.5592, lng: 98.6525 },
  },
  {
    id: 'OCT-02',
    name: 'Jl. Letjen Jamin Ginting (Pajus)',
    location: 'Kawasan Pajus Padang Bulan & Pasar Baru',
    district: 'Medan Baru',
    depthCm: 35,
    maxCm: 150,
    status: 'moderate',
    statusLabel: 'Genangan Sedang',
    rootCause: 'Sedimentasi saluran drainase tersumbat limbah pasar dan sisa bangunan.',
    mitigation: 'Pembersihan Got Sekunder oleh Satgas Dinas SDABMBK',
    coordinates: { lat: 3.5510, lng: 98.6590 },
  },
  {
    id: 'OCT-03',
    name: 'Jl. Wahid Hasyim',
    location: 'Simpang Jl. Gajah Mada s.d. Kantor Camat',
    district: 'Medan Baru',
    depthCm: 30,
    maxCm: 150,
    status: 'moderate',
    statusLabel: 'Genangan Lokal',
    rootCause: 'Infiltrasi permukaan lambat akibat tutupan aspal kedap air saat hujan lebat 2 jam.',
    mitigation: 'Penyedotan Genangan Lokal & Normalisasi Lubang Biopori Tepi Jalan',
    coordinates: { lat: 3.5710, lng: 98.6560 },
  },
  {
    id: 'OCT-04',
    name: 'Jl. Kapten Patimura',
    location: 'Simpang Jembatan Babura / Depan RS Elisabeth',
    district: 'Medan Medan Kota',
    depthCm: 40,
    maxCm: 150,
    status: 'warning',
    statusLabel: 'Waspada Luapan',
    rootCause: 'Elevasi muka air Sungai Babura mendekati bibir jembatan mengurangi gravitasi buang parit.',
    mitigation: 'Penyekatan Tanggul Sementara Karung Pasir & Pemantauan Muka Air',
    coordinates: { lat: 3.5680, lng: 98.6650 },
  },
  {
    id: 'OCT-05',
    name: 'Jl. Sei Batang Hari',
    location: 'Ruas Babura Sunggal - Simpang Syailendra',
    district: 'Medan Sunggal',
    depthCm: 40,
    maxCm: 150,
    status: 'warning',
    statusLabel: 'Waspada',
    rootCause: 'Antrean aliran air sekunder menuju alur hilir Sungai Babura.',
    mitigation: 'Pengalihan Arus Jalur Alternatif & Pembersihan Inlet Gorong-Gorong',
    coordinates: { lat: 3.5720, lng: 98.6470 },
  },
  {
    id: 'OCT-06',
    name: 'Jl. Ayahanda (RS Royal Prima)',
    location: 'Depan RS Royal Prima & Simpang Sekip',
    district: 'Medan Petisah',
    depthCm: 35,
    maxCm: 150,
    status: 'moderate',
    statusLabel: 'Genangan Sedang',
    rootCause: 'Limpasan air hujan lokal tidak tertampung saluran tersier gang pemukiman.',
    mitigation: 'Regu Pengarah Dishub & Pompa Portable Cepat Tanggap',
    coordinates: { lat: 3.5880, lng: 98.6580 },
  },
  {
    id: 'OCT-07',
    name: 'Jl. Brigjend Katamso (Kampung Aur)',
    location: 'Bantaran Kampung Aur & Sei Mati',
    district: 'Medan Maimun',
    depthCm: 50,
    maxCm: 150,
    status: 'critical',
    statusLabel: 'Kritis Bantaran',
    rootCause: 'Limpasan puncak Sungai Deli melewati bibir talud jalan pemukiman.',
    mitigation: 'Evakuasi Barang Berharga Warga & Kesiapsiagaan Posko BPBD',
    coordinates: { lat: 3.5740, lng: 98.6830 },
  },
];

// Data Tren Ketinggian Air (Hydrograph 24 Jam)
const HYDROGRAPH_DATA = [
  { time: '00:00', tinggiNov: 20, tinggiOct: 10, tinggiToday: 10, ambangKritis: 70, debitSungai: 45, debitToday: 18 },
  { time: '02:00', tinggiNov: 28, tinggiOct: 12, tinggiToday: 11, ambangKritis: 70, debitSungai: 60, debitToday: 18 },
  { time: '04:00', tinggiNov: 42, tinggiOct: 15, tinggiToday: 10, ambangKritis: 70, debitSungai: 85, debitToday: 20 },
  { time: '06:00', tinggiNov: 65, tinggiOct: 22, tinggiToday: 12, ambangKritis: 70, debitSungai: 130, debitToday: 22 },
  { time: '08:00', tinggiNov: 92, tinggiOct: 35, tinggiToday: 14, ambangKritis: 70, debitSungai: 180, debitToday: 25 },
  { time: '10:00', tinggiNov: 118, tinggiOct: 48, tinggiToday: 15, ambangKritis: 70, debitSungai: 220, debitToday: 24 },
  { time: '12:00', tinggiNov: 130, tinggiOct: 60, tinggiToday: 14, ambangKritis: 70, debitSungai: 245, debitToday: 23 },
  { time: '14:00', tinggiNov: 125, tinggiOct: 55, tinggiToday: 13, ambangKritis: 70, debitSungai: 235, debitToday: 22 },
  { time: '16:00', tinggiNov: 105, tinggiOct: 42, tinggiToday: 14, ambangKritis: 70, debitSungai: 190, debitToday: 25 },
  { time: '18:00', tinggiNov: 84, tinggiOct: 30, tinggiToday: 13, ambangKritis: 70, debitSungai: 145, debitToday: 22 },
  { time: '20:00', tinggiNov: 68, tinggiOct: 20, tinggiToday: 12, ambangKritis: 70, debitSungai: 110, debitToday: 20 },
  { time: '22:00', tinggiNov: 50, tinggiOct: 14, tinggiToday: 11, ambangKritis: 70, debitSungai: 80, debitToday: 18 },
  { time: '24:00', tinggiNov: 38, tinggiOct: 10, tinggiToday: 10, ambangKritis: 70, debitSungai: 55, debitToday: 18 },
];

// Data Sebaran Laporan Warga & Penanganan per Kecamatan (Grouped: Laporan, Pompa, Validasi)
const DISTRICT_DATA_NOV = [
  { district: 'Medan Baru', laporanWarga: 118, pompaAktif: 6, titikValid: 24 },
  { district: 'Medan Selayang', laporanWarga: 84, pompaAktif: 4, titikValid: 18 },
  { district: 'Medan Sunggal', laporanWarga: 72, pompaAktif: 4, titikValid: 15 },
  { district: 'Medan Helvetia', laporanWarga: 54, pompaAktif: 3, titikValid: 11 },
  { district: 'Medan Maimun', laporanWarga: 46, pompaAktif: 3, titikValid: 9 },
  { district: 'Medan Johor', laporanWarga: 38, pompaAktif: 2, titikValid: 7 },
];

const DISTRICT_DATA_OCT = [
  { district: 'Medan Baru', laporanWarga: 45, pompaAktif: 3, titikValid: 9 },
  { district: 'Medan Selayang', laporanWarga: 32, pompaAktif: 2, titikValid: 6 },
  { district: 'Medan Sunggal', laporanWarga: 24, pompaAktif: 2, titikValid: 5 },
  { district: 'Medan Helvetia', laporanWarga: 18, pompaAktif: 1, titikValid: 4 },
  { district: 'Medan Maimun', laporanWarga: 15, pompaAktif: 1, titikValid: 3 },
  { district: 'Medan Johor', laporanWarga: 12, pompaAktif: 1, titikValid: 2 },
];

const DISTRICT_DATA_TODAY = [
  { district: 'Medan Baru', laporanWarga: 0, pompaAktif: 0, titikValid: 0 },
  { district: 'Medan Selayang', laporanWarga: 0, pompaAktif: 0, titikValid: 0 },
  { district: 'Medan Sunggal', laporanWarga: 0, pompaAktif: 0, titikValid: 0 },
  { district: 'Medan Helvetia', laporanWarga: 0, pompaAktif: 0, titikValid: 0 },
  { district: 'Medan Maimun', laporanWarga: 0, pompaAktif: 0, titikValid: 0 },
  { district: 'Medan Johor', laporanWarga: 0, pompaAktif: 0, titikValid: 0 },
];

export default function AnalyticsDashboardPage() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState('27 Nov 2025');
  const isToday = selectedDate === 'Hari Ini';
  const selectedIncident: 'today' | 'nov' | 'oct' = isToday
    ? 'today'
    : selectedDate.includes('11 Okt')
    ? 'oct'
    : 'nov';
  // State Accordion index (secara default index 0/teratas terbuka)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [isClient, setIsClient] = useState(false);
  const mapRef = useRef<MapRef | null>(null);

  useEffect(() => {
    setIsClient(true);
    // Force resize Mapbox canvas setelah komponen dimuat agar tajam dan beresolusi tinggi (tidak buram)
    const t1 = setTimeout(() => {
      mapRef.current?.resize();
    }, 100);
    const t2 = setTimeout(() => {
      mapRef.current?.resize();
    }, 500);
    const t3 = setTimeout(() => {
      mapRef.current?.resize();
    }, 1000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  const activeRoads = isToday ? [] : selectedIncident === 'nov' ? ROADS_NOV : ROADS_OCT;
  const activeDistrictData = isToday
    ? DISTRICT_DATA_TODAY
    : selectedIncident === 'nov'
    ? DISTRICT_DATA_NOV
    : DISTRICT_DATA_OCT;

  // Ruas jalan yang sedang aktif dipilih berdasarkan expandedIndex
  const activeRoad = useMemo(() => {
    if (isToday) return null;
    if (expandedIndex !== null && activeRoads[expandedIndex]) {
      return activeRoads[expandedIndex];
    }
    return activeRoads[0] || null;
  }, [isToday, activeRoads, expandedIndex]);

  // GeoJSON Garis Jalan Terendam Snap-to-Road
  const floodedSegmentsGeoJson = useMemo(() => {
    if (isToday) {
      return {
        type: 'FeatureCollection' as const,
        features: [],
      };
    }
    const rawSegments = selectedIncident === 'nov' ? snappedData.nov2025 : snappedData.oct2025;
    return {
      type: 'FeatureCollection' as const,
      features: rawSegments.map((seg) => {
        const isRed = seg.peakCm >= 60;
        const isExtreme = seg.severityGrade === 'extreme';
        const lineColor = isExtreme
          ? '#7f1d1d'
          : isRed
          ? '#991b1b'
          : '#d97706';
        const glowColor = isExtreme
          ? 'rgba(127, 29, 29, 0.55)'
          : isRed
          ? 'rgba(153, 27, 27, 0.45)'
          : 'rgba(217, 119, 6, 0.40)';

        return {
          type: 'Feature' as const,
          id: seg.id,
          geometry: {
            type: 'LineString' as const,
            coordinates: seg.coordinates,
          },
          properties: {
            id: seg.id,
            name: seg.name,
            peakCm: seg.peakCm,
            lineColor,
            glowColor,
          },
        };
      }),
    };
  }, [isToday, selectedIncident]);

  // Efek Fly-To saat expandedIndex berubah atau saat mode Hari Ini
  useEffect(() => {
    if (isToday) {
      mapRef.current?.flyTo({
        center: [98.6650, 3.5850],
        zoom: 12.3,
        pitch: 20,
        bearing: 0,
        duration: 2000,
        essential: true,
      });
      return;
    }
    if (expandedIndex !== null && activeRoads[expandedIndex]) {
      const target = activeRoads[expandedIndex];
      mapRef.current?.flyTo({
        center: [target.coordinates.lng, target.coordinates.lat],
        zoom: 15,
        pitch: 45,
        bearing: 20,
        duration: 2000,
        essential: true,
      });
    }
  }, [isToday, expandedIndex, activeRoads]);

  // Handler toggle accordion dengan fly-to interaktif
  function handleToggle(index: number) {
    if (expandedIndex === index) {
      setExpandedIndex(null);
      mapRef.current?.flyTo({
        center: [98.6500, 3.5720],
        zoom: 12.5,
        pitch: 25,
        bearing: 0,
        duration: 1800,
        essential: true,
      });
    } else {
      setExpandedIndex(index);
      const target = activeRoads[index];
      if (target) {
        mapRef.current?.flyTo({
          center: [target.coordinates.lng, target.coordinates.lat],
          zoom: 15,
          pitch: 45,
          bearing: 20,
          duration: 2000,
          essential: true,
        });
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* ─────────────────────────────────────────────────────────────
          1. HEADER EKSEKUTIF (CLEAN LIGHT THEME - ENTERPRISE GOVERNMENT)
         ───────────────────────────────────────────────────────────── */}
      <header className="border-b border-slate-200 bg-white sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 sm:gap-4">
            {/* Sisi Kiri: Branding Formal & Subteks */}
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-base shadow-xs shrink-0">
                FL
              </div>
              <div>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                    Pusat Analitik Bencana FLORENCE
                  </h1>
                  <span className="rounded-md bg-blue-50 border border-blue-200 px-2 py-0.5 text-[11px] font-semibold text-blue-700">
                    PEMKAB / PEMKO MEDAN
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Laporan Eksekutif Tata Kelola Air &amp; Infrastruktur
                </p>
              </div>
            </div>

            {/* Sisi Kanan: Date Selector Dropdown & Navigasi Utama */}
            <div className="flex items-center gap-2.5 flex-wrap self-end md:self-auto">
              {/* Selector Date Dropdown */}
              <div className="relative inline-block">
                <select
                  value={selectedDate}
                  onChange={(e) => {
                    setSelectedDate(e.target.value);
                    setExpandedIndex(0);
                  }}
                  className="appearance-none rounded-lg border border-slate-300 bg-white pl-3.5 pr-8 py-2 text-xs font-semibold text-slate-700 shadow-xs hover:border-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 transition cursor-pointer"
                >
                  <option value="Hari Ini">Hari Ini (Aman / Normal)</option>
                  <option value="27 Nov 2025">27 Nov 2025 (Kritis)</option>
                  <option value="11 Okt 2025">11 Okt 2025</option>
                </select>
                <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-[10px]">
                  ▼
                </span>
              </div>

              {/* Tombol Cetak Laporan */}
              <button
                type="button"
                onClick={() => {
                  if (typeof window !== 'undefined') window.print();
                }}
                className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-2 text-xs font-semibold text-white shadow-xs hover:bg-blue-700 transition active:scale-95"
              >
                <span>🖨️</span>
                <span>Cetak Laporan</span>
              </button>

              {/* Tombol Kembali ke Command Center */}
              <Link
                href={`/dashboard/history?date=${encodeURIComponent(selectedDate)}`}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-xs hover:bg-slate-50 transition active:scale-95"
              >
                <span>←</span>
                <span>Kembali ke Command Center</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          MAIN CONTENT AREA
         ───────────────────────────────────────────────────────────── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* ─────────────────────────────────────────────────────────────
            2. TOP SECTION: 2 KOLOM (Kiri: Accordion Daftar Jalan, Kanan: Peta Mini)
           ───────────────────────────────────────────────────────────── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Kolom Kiri: Accordion Status Koridor Jalan Kritis (7 Kolom) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl shadow-sm p-5 flex flex-col justify-between">
            <div>
              {/* Header Card */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                <div>
                  <h2 className="text-base font-bold text-slate-900">
                    Status Kerentanan Koridor Jalan Kritis
                  </h2>
                  <p className="text-xs text-slate-500">
                    {isToday
                      ? 'Laporan pemantauan rutin kondisi jalan dan drainase waktu nyata'
                      : 'Sistem pemantauan elevasi muka air dan kesiapan regu lapangan'}
                  </p>
                </div>
                <span className={`rounded-md px-2.5 py-1 text-xs font-semibold border ${
                  isToday
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : 'bg-slate-100 text-slate-600 border-slate-200'
                }`}>
                  {isToday ? '0 Ruas Tergenang (Aman)' : `${activeRoads.length} Ruas Terpantau`}
                </span>
              </div>

              {/* Kontainer Accordion List ATAU State Kosong / Aman (Hari Ini) */}
              {isToday ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 flex flex-col items-center justify-center text-center my-6 min-h-[340px] space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center text-2xl shadow-xs">
                    ✅
                  </div>
                  <div className="max-w-md space-y-1.5">
                    <h3 className="text-base font-bold text-emerald-900">
                      Status Kota Medan 100% Aman &amp; Normal
                    </h3>
                    <p className="text-emerald-700 font-medium text-sm leading-relaxed">
                      ✅ Status Kota Aman. Tidak terpantau genangan air kritis atau laporan banjir di ruas arteri Kota Medan pada hari ini.
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/90 border border-emerald-300 px-3.5 py-1 text-xs text-emerald-800 font-semibold mt-2 shadow-2xs">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    Seluruh Pompa &amp; Pintu Air Siaga Normal
                  </div>
                </div>
              ) : (
                <div className="max-h-[500px] overflow-y-auto pr-2 space-y-2.5 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-400 [scrollbar-width:thin] [scrollbar-color:theme(colors.slate.300)_transparent]">
                {activeRoads.map((road, index) => {
                  const isExpanded = expandedIndex === index;
                  const progressPct = Math.min(100, Math.round((road.depthCm / road.maxCm) * 100));

                  // Lencana Status Formal (Merah Lembut / Amber Lembut)
                  let badgeClass = 'bg-blue-50 text-blue-700 border-blue-200';
                  let barClass = 'bg-blue-600';
                  let dotClass = 'bg-blue-600';

                  if (road.status === 'extreme' || road.depthCm >= 100) {
                    badgeClass = 'bg-red-100 text-red-800 border-red-200';
                    barClass = 'bg-red-600';
                    dotClass = 'bg-red-600';
                  } else if (road.status === 'critical' || road.depthCm >= 60) {
                    badgeClass = 'bg-red-100 text-red-800 border-red-200';
                    barClass = 'bg-red-600';
                    dotClass = 'bg-red-600';
                  } else if (road.status === 'warning' || road.depthCm >= 40) {
                    badgeClass = 'bg-amber-100 text-amber-800 border-amber-200';
                    barClass = 'bg-amber-500';
                    dotClass = 'bg-amber-500';
                  }

                  return (
                    <div
                      key={road.id}
                      className={`border rounded-xl transition-all duration-200 overflow-hidden ${
                        isExpanded
                          ? 'border-blue-300 bg-white shadow-xs ring-1 ring-blue-500/10'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      {/* Header Accordion (Tertutup/Collapsed): p-4 hover:bg-slate-50 cursor-pointer transition-colors border-b border-slate-100 flex justify-between items-center */}
                      <button
                        type="button"
                        onClick={() => handleToggle(index)}
                        className={`w-full text-left p-4 hover:bg-slate-50 cursor-pointer transition-colors flex justify-between items-center gap-3 focus:outline-none ${
                          isExpanded ? 'border-b border-slate-100' : ''
                        }`}
                      >
                        {/* Sisi Kiri: Dot Indikator Warna + Nama Jalan & Kecamatan */}
                        <div className="flex items-center gap-3 min-w-0">
                          <span className={`h-2.5 w-2.5 rounded-full shrink-0 ${dotClass}`} />
                          <div className="truncate">
                            <span className="font-semibold text-sm text-slate-900 leading-tight">
                              {road.name}
                            </span>
                            <span className="font-normal text-xs text-slate-500 ml-1.5 hidden sm:inline">
                              ({road.district})
                            </span>
                          </div>
                        </div>

                        {/* Sisi Kanan: Lencana Status, Angka Ketinggian & Ikon Chevron v */}
                        <div className="flex items-center gap-2.5 shrink-0">
                          <span
                            className={`rounded-md border px-2.5 py-0.5 font-medium text-xs whitespace-nowrap ${badgeClass}`}
                          >
                            {road.statusLabel}
                          </span>
                          <span className="font-mono font-semibold text-xs text-slate-800 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                            {road.depthCm} cm
                          </span>
                          <div className={`p-1 rounded-md text-slate-400 transition-transform duration-200 ${
                            isExpanded ? 'rotate-180 text-blue-600' : 'rotate-0'
                          }`}>
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </button>

                      {/* Konten Accordion (Terbuka): bg-slate-50/50 p-4 border-t border-slate-100 dengan layout terstruktur */}
                      {isExpanded && (
                        <div className="bg-slate-50/50 p-4 border-t border-slate-100 space-y-3 transition-all duration-300">
                          {/* Baris Meta: Lokasi & Kapasitas Saluran */}
                          <div className="flex items-center justify-between text-xs text-slate-500">
                            <span className="flex items-center gap-1.5 font-medium text-slate-700">
                              <span className="text-slate-400">📍</span>
                              <span>{road.location}</span>
                            </span>
                            <span className="font-mono text-slate-500 text-[11px]">
                              Kapasitas Saluran: {road.maxCm} cm
                            </span>
                          </div>

                          {/* Progress Bar Indikator Genangan */}
                          <div>
                            <div className="flex items-center justify-between text-xs mb-1.5">
                              <span className="font-medium text-slate-700">Ketinggian Muka Air:</span>
                              <span className="font-semibold text-slate-900 font-mono">
                                {road.depthCm} cm{' '}
                                <span className="font-normal text-slate-400 text-xs">
                                  ({progressPct}% kapasitas)
                                </span>
                              </span>
                            </div>
                            <div className="w-full bg-slate-200/70 rounded-full h-2 overflow-hidden">
                              <div
                                className={`h-full rounded-full transition-all duration-300 ${barClass}`}
                                style={{ width: `${progressPct}%` }}
                              />
                            </div>
                          </div>

                          {/* Layout Terstruktur: Akar Masalah */}
                          <div className="rounded-lg bg-white border border-slate-200/90 p-3 shadow-2xs">
                            <div className="text-xs space-y-1">
                              <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                                <span className="text-amber-500">⚠️</span>
                                <span>Akar Masalah:</span>
                              </span>
                              <p className="font-normal text-xs text-slate-600 leading-relaxed pl-5">
                                {road.rootCause}
                              </p>
                            </div>
                          </div>

                          {/* Layout Terstruktur: Mitigasi */}
                          <div className="rounded-lg bg-white border border-slate-200/90 p-3 shadow-2xs">
                            <div className="text-xs space-y-1">
                              <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                                <span className="text-blue-600">🔧</span>
                                <span>Mitigasi:</span>
                              </span>
                              <p className="font-normal text-xs text-slate-700 leading-relaxed pl-5 font-medium">
                                {road.mitigation}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Catatan Kaki Kebijakan */}
          <p className="text-[11px] text-slate-400 mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
            <span>
              {isToday
                ? '* Pemantauan telemetri sensor elevasi muka air aktif 24 jam.'
                : '* Klik baris untuk membuka detail teknis & menyorot lokasi di peta.'}
            </span>
            <span className={isToday ? "text-emerald-600 font-semibold" : "text-blue-600 font-semibold"}>
              {isToday ? "Sistem Siaga Hijau ✓" : "Tersinkronisasi Peta Mini ↗"}
            </span>
          </p>
          </div>

          {/* Kolom Kanan: Peta Mini Mapbox Interaktif & GIS Overlay (5 Kolom) */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xl shadow-sm p-5 flex flex-col justify-between">
            <div className="flex flex-col flex-1">
              {/* Header Mini Map */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                <div>
                  <h2 className="text-base font-bold text-slate-900">
                    Peta Spasial Sebaran Genangan
                  </h2>
                  <p className="text-xs text-slate-500">
                    {isToday
                      ? 'Fokus Kota Medan (Kondisi Normal - Bebas Genangan)'
                      : 'Fokus Kota Medan (Streets v12 - Snapped Ruas Kritis)'}
                  </p>
                </div>
                <span className={`rounded-md border px-2 py-0.5 text-xs font-semibold flex items-center gap-1.5 ${
                  isToday
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : 'bg-blue-50 text-blue-700 border-blue-200'
                }`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${isToday ? 'bg-emerald-500' : 'bg-blue-600 animate-pulse'}`} />
                  {isToday ? 'Status Hijau Normal' : 'GIS Live Grid'}
                </span>
              </div>

              {/* Container Peta Mini Mapbox */}
              <div
                className="relative w-full h-[450px] rounded-xl overflow-hidden border border-slate-200 bg-slate-100 group"
                onDoubleClick={() => router.push(`/dashboard/history?date=${encodeURIComponent(selectedDate)}`)}
                title="Klik ganda untuk membuka di Map Admin"
              >
                {/* ── Overlay Controls Wrapper: Stacked Vertically di Pojok Kiri Atas ── */}
                <div className="absolute top-3 left-3 z-20 flex flex-col gap-2 items-start">
                  {/* Elemen Anak Pertama: Panel Kontrol Waktu Simulasi */}
                  <div className="bg-white/90 backdrop-blur shadow-sm border border-slate-200 rounded-lg px-3 py-2 flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-blue-600 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm font-medium text-slate-600">Waktu Simulasi:</span>
                    <div className="relative inline-flex items-center">
                      <select
                        value={selectedDate}
                        onChange={(e) => {
                          setSelectedDate(e.target.value);
                          setExpandedIndex(0);
                        }}
                        className="text-sm font-semibold text-blue-600 bg-transparent border-none outline-none cursor-pointer focus:ring-0 appearance-none pr-4.5"
                      >
                        <option value="Hari Ini">Hari Ini (Aman / Normal)</option>
                        <option value="27 Nov 2025">27 Nov 2025 (Puncak Banjir)</option>
                        <option value="11 Okt 2025">11 Okt 2025 (Waspada)</option>
                      </select>
                      <svg
                        className="pointer-events-none absolute right-0 h-3.5 w-3.5 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Elemen Anak Kedua: Tombol Buka di Map Admin persis di bawahnya */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(`/dashboard/history?date=${encodeURIComponent(selectedDate)}`);
                    }}
                    className="bg-white/90 backdrop-blur shadow-sm border border-slate-200 rounded-lg px-3 py-1.5 text-sm font-medium text-blue-600 hover:bg-slate-50 transition-colors flex items-center gap-2 cursor-pointer"
                    title="Buka tampilan Command Center penuh"
                  >
                    <span>↗ Buka di Map Admin</span>
                  </button>
                </div>

                {token ? (
                  <Map
                    ref={mapRef}
                    initialViewState={{
                      latitude: 3.5620,
                      longitude: 98.6565,
                      zoom: 14.0,
                      pitch: 40,
                      bearing: 15,
                    }}
                    mapStyle="mapbox://styles/mapbox/streets-v12"
                    mapboxAccessToken={token}
                    style={{ width: '100%', height: '100%' }}
                    doubleClickZoom={false}
                    onDblClick={() => {
                      router.push(`/dashboard/history?date=${encodeURIComponent(selectedDate)}`);
                    }}
                    onLoad={(e) => {
                      e.target.resize();
                      setTimeout(() => {
                        e.target.resize();
                      }, 200);
                    }}
                  >
                    <NavigationControl position="top-right" />

                    {/* ── 1. LAYER SEGMEN JALAN BANJIR (SNAP-TO-ROAD LINESTRING) ── */}
                    <Source id="analytics-flooded-segments" type="geojson" data={floodedSegmentsGeoJson}>
                      {/* Pendaran Air Permukaan Jalan */}
                      <Layer
                        id="mini-flooded-glow"
                        type="line"
                        layout={{
                          'line-join': 'round',
                          'line-cap': 'round',
                        }}
                        paint={{
                          'line-width': [
                            'interpolate',
                            ['linear'],
                            ['zoom'],
                            10, 4,
                            13, 10,
                            16, 18,
                          ],
                          'line-color': ['get', 'glowColor'],
                          'line-blur': 2,
                          'line-opacity': 0.75,
                        }}
                      />

                      {/* Garis Pusat Jalan Banjir */}
                      <Layer
                        id="mini-flooded-line"
                        type="line"
                        layout={{
                          'line-join': 'round',
                          'line-cap': 'round',
                        }}
                        paint={{
                          'line-width': [
                            'interpolate',
                            ['linear'],
                            ['zoom'],
                            10, 3,
                            13, 6,
                            16, 12,
                          ],
                          'line-color': ['get', 'lineColor'],
                          'line-opacity': 0.95,
                        }}
                      />
                    </Source>

                    {/* ── 2. PIN LOKASI & MARKER DENGAN INDIKATOR KETINGGIAN AIR ── */}
                    {activeRoads.map((road, idx) => {
                      const isSelected = expandedIndex === idx;
                      const isExtreme = road.status === 'extreme' || road.depthCm >= 100;
                      const isCritical = road.status === 'critical' || road.depthCm >= 60;
                      const isHigh = isExtreme || isCritical;

                      return (
                        <Marker
                          key={road.id}
                          latitude={road.coordinates.lat}
                          longitude={road.coordinates.lng}
                          anchor="center"
                          onClick={(e) => {
                            e.originalEvent.stopPropagation();
                            handleToggle(idx);
                          }}
                        >
                          <div className="relative cursor-pointer flex flex-col items-center group">
                            {/* Subtle Ring Ping Indicator saat Selected */}
                            {isSelected && (
                              <span
                                className={`absolute -inset-1.5 rounded-full pointer-events-none animate-ping ${
                                  isExtreme
                                    ? 'bg-red-700/60'
                                    : isHigh
                                    ? 'bg-red-600/50'
                                    : 'bg-amber-500/40'
                                }`}
                              />
                            )}

                            {/* Lingkaran Transparan Radius Genangan Tipis (GIS Pro) */}
                            <div
                              className="absolute rounded-full pointer-events-none transition-all duration-300"
                              style={{
                                width: `${Math.max(34, Math.min(54, road.depthCm * 0.38))}px`,
                                height: `${Math.max(34, Math.min(54, road.depthCm * 0.38))}px`,
                                backgroundColor: isHigh ? 'rgba(239, 68, 68, 0.12)' : 'rgba(245, 158, 11, 0.12)',
                                border: isHigh ? '1px solid rgba(239, 68, 68, 0.30)' : '1px solid rgba(245, 158, 11, 0.30)',
                              }}
                            />

                            {/* Pin / Marker Kecil dengan Angka Berlatar Bulat Tegas */}
                            <div
                              className={`
                                relative z-10 flex h-7 w-7 items-center justify-center rounded-full text-white font-mono font-bold text-[10px] shadow-sm border border-white transition-transform
                                ${isSelected ? 'scale-125 ring-2 ring-blue-600 shadow-md' : 'hover:scale-110'}
                                ${isExtreme ? 'bg-red-800' : isCritical ? 'bg-red-600' : road.depthCm >= 40 ? 'bg-amber-500' : 'bg-blue-600'}
                              `}
                            >
                              {road.depthCm}
                            </div>
                          </div>
                        </Marker>
                      );
                    })}
                  </Map>
                ) : (
                  /* Fallback Elemen Div Statis jika Token Belum Siap */
                  <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center text-slate-600">
                    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 mb-2 font-bold">
                      🗺️
                    </div>
                    <p className="font-bold text-slate-800 text-sm">Visualisasi Peta Medan</p>
                    <p className="text-xs text-slate-500 mt-1 max-w-xs">
                      Peta Mapbox aktif dengan mode streets-v12. Pastikan token terkonfigurasi.
                    </p>
                  </div>
                )}

                {/* Floating Card Detail di Area Bawah Peta */}
                {isToday ? (
                  <div className="absolute bottom-3 left-3 right-3 z-10 rounded-lg border border-emerald-200 bg-white/95 backdrop-blur-xs p-3 shadow-xs text-xs animate-in fade-in duration-200">
                    <div className="flex items-center justify-between font-bold text-emerald-900">
                      <span className="flex items-center gap-1.5 truncate">
                        <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block shrink-0" />
                        <span>Kondisi Arteri: Kering &amp; Bebas Genangan (0 cm)</span>
                      </span>
                      <span className="text-emerald-700 font-semibold text-[11px] shrink-0">
                        Pintu Air Normal
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 mt-1 line-clamp-1">
                      <strong className="text-slate-800">Status Jalan:</strong> Seluruh jalan protokol dan arteri Kota Medan beroperasi lancar tanpa genangan air.
                    </p>
                  </div>
                ) : (
                  expandedIndex !== null && activeRoad && (
                    <div className="absolute bottom-3 left-3 right-3 z-10 rounded-lg border border-slate-200/90 bg-white/95 backdrop-blur-xs p-3 shadow-xs text-xs animate-in fade-in duration-200">
                      <div className="flex items-center justify-between font-bold text-slate-900">
                        <span className="flex items-center gap-1.5 truncate">
                          <span className={`h-2 w-2 rounded-full inline-block shrink-0 ${
                            activeRoad.depthCm >= 80 ? 'bg-red-600' : activeRoad.depthCm >= 40 ? 'bg-amber-500' : 'bg-blue-600'
                          }`} />
                          <span className="truncate">{activeRoad.name} - {activeRoad.depthCm} cm</span>
                        </span>
                        <span className="text-slate-400 font-normal truncate hidden sm:inline text-[11px]">
                          📍 {activeRoad.location}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 mt-1 line-clamp-1">
                        <strong className="text-slate-800">Mitigasi:</strong> {activeRoad.mitigation}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Legenda Peta Minimalis */}
            {isToday ? (
              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block" />
                  <span>Kondisi Kota Medan: Bebas Genangan (0 cm)</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                  <span className="h-1.5 w-4 bg-emerald-400 rounded-sm inline-block" />
                  <span>Koridor Arteri Terbuka Penuh</span>
                </div>
              </div>
            ) : (
              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-600 inline-block" />
                  <span>Kritis (&gt; 60 cm)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-amber-500 inline-block" />
                  <span>Waspada (40 - 60 cm)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-blue-600 inline-block" />
                  <span>Siaga (&lt; 40 cm)</span>
                </div>
                <div className="flex items-center gap-1 text-slate-400">
                  <span className="h-1.5 w-4 bg-red-700 rounded-sm inline-block" />
                  <span>Snap Road</span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            3. BOTTOM SECTION: 4 KARTU KPI (BORDER SUPER TIPIS & FORMAL)
           ───────────────────────────────────────────────────────────── */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* KPI 1: Estimasi Total Kerugian */}
            <div className="bg-white border border-slate-200 rounded-xl shadow-xs p-4">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                Estimasi Total Kerugian
              </span>
              <div className="mt-1.5 flex items-baseline gap-2">
                <span className={`text-2xl font-bold tracking-tight font-mono ${
                  isToday ? 'text-emerald-600' : 'text-blue-600'
                }`}>
                  {isToday ? 'Rp 0' : (selectedIncident === 'nov' ? 'Rp 2,4 M' : 'Rp 650 Jt')}
                </span>
                <span className={`rounded-md px-1.5 py-0.5 text-[10px] font-bold border ${
                  isToday
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : 'bg-red-50 text-red-700 border-red-200'
                }`}>
                  {isToday ? 'Normal' : (selectedIncident === 'nov' ? '-12,4% Dampak' : '+4,2%')}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1 leading-snug">
                {isToday
                  ? 'Nihil kerugian material dan aktivitas perekonomian warga berjalan normal.'
                  : 'Kerugian sektor perdagangan, ruko ritel & kerusakan kendaraan bermotor.'}
              </p>
            </div>

            {/* KPI 2: Warga Terdampak Langsung */}
            <div className="bg-white border border-slate-200 rounded-xl shadow-xs p-4">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                Warga Terdampak Langsung
              </span>
              <div className="mt-1.5 flex items-baseline gap-2">
                <span className="text-2xl font-bold tracking-tight text-slate-900 font-mono">
                  {isToday ? '0 Jiwa' : (selectedIncident === 'nov' ? '1.240 Jiwa' : '310 Jiwa')}
                </span>
                <span className={`rounded-md px-1.5 py-0.5 text-[10px] font-bold border ${
                  isToday
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : 'bg-slate-100 text-slate-700 border-slate-200'
                }`}>
                  {isToday ? '0 KK' : (selectedIncident === 'nov' ? '318 KK' : '82 KK')}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1 leading-snug">
                {isToday
                  ? 'Kondisi warga kondusif; tidak ada pemukiman atau warga terdampak air.'
                  : 'Tersebar di 6 kecamatan; 100% bantuan darurat dan logistik tersalurkan.'}
              </p>
            </div>

            {/* KPI 3: Ruas Jalan Terputus Total */}
            <div className="bg-white border border-slate-200 rounded-xl shadow-xs p-4">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                Ruas Arteri Terputus Total
              </span>
              <div className="mt-1.5 flex items-baseline gap-2">
                <span className="text-2xl font-bold tracking-tight text-slate-900 font-mono">
                  {isToday ? '0 Arteri' : (selectedIncident === 'nov' ? '5 Arteri' : '1 Ruas')}
                </span>
                <span className={`rounded-md px-1.5 py-0.5 text-[10px] font-bold border ${
                  isToday
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : 'bg-blue-50 text-blue-700 border-blue-200'
                }`}>
                  {isToday ? '100% Terbuka' : 'Bypass Aktif'}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1 leading-snug">
                {isToday
                  ? 'Seluruh koridor jalan utama Kota Medan dapat dilalui kendaraan dengan lancar.'
                  : 'Dr. Mansyur, Gatsu Underpass, Ringroad Sunggal, Jamin Ginting, Lalang.'}
              </p>
            </div>

            {/* KPI 4: Indeks Resiliensi Drainase */}
            <div className="bg-white border border-slate-200 rounded-xl shadow-xs p-4">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                Indeks Resiliensi Drainase
              </span>
              <div className="mt-1.5 flex items-baseline gap-2">
                <span className={`text-2xl font-bold tracking-tight font-mono ${
                  isToday ? 'text-emerald-600' : 'text-red-600'
                }`}>
                  {isToday ? '85% (Optimal)' : (selectedIncident === 'nov' ? '42% (Kritis)' : '68% (Siaga)')}
                </span>
                <span className={`rounded-md px-1.5 py-0.5 text-[10px] font-bold border ${
                  isToday
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : 'bg-red-50 text-red-700 border-red-200'
                }`}>
                  {isToday ? 'Tampung Optimal' : (selectedIncident === 'nov' ? 'Overload 58%' : 'Tampung Cukup')}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1 leading-snug">
                {isToday
                  ? 'Kapasitas parit sekunder dan primer sangat memadai untuk menampung aliran.'
                  : 'Debit kiriman hulu melampaui kapasitas retensi dan saluran primer perkotaan.'}
              </p>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            4. BOTTOM SECTION: VISUALISASI STATISTIK (RECHARTS GRAFIK)
           ───────────────────────────────────────────────────────────── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Grafik 1: Line Chart Tren Ketinggian Air (Blue #2563eb & Red #ef4444 Ambang Batas) */}
          <div className="bg-white border border-slate-200 rounded-xl shadow-xs p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between border-b border-slate-100 pb-3 mb-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Tren Ketinggian Air Harian (24 Jam)
                  </h3>
                  <p className="text-xs text-slate-500">
                    Fluktuasi Tinggi Muka Air (cm) rata-rata koridor jalan vs ambang batas kritis
                  </p>
                </div>
                <span className="rounded-md bg-blue-50 border border-blue-200 px-2 py-0.5 text-[11px] font-semibold text-blue-700">
                  AWLR Hydrograph
                </span>
              </div>

              {/* Area Grafik Recharts Line/Area Chart */}
              <div className="w-full h-72">
                {isClient ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={HYDROGRAPH_DATA} margin={{ top: 10, right: 15, left: -10, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorTinggi" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#2563eb" stopOpacity={0.10} />
                          <stop offset="95%" stopColor="#2563eb" stopOpacity={0.0} />
                        </linearGradient>
                        <linearGradient id="colorTinggiGreen" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.15} />
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0.0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                      <XAxis
                        dataKey="time"
                        stroke="#94a3b8"
                        fontSize={11}
                        tickLine={false}
                        axisLine={{ stroke: '#e2e8f0' }}
                      />
                      <YAxis
                        stroke="#94a3b8"
                        fontSize={11}
                        tickLine={false}
                        axisLine={{ stroke: '#e2e8f0' }}
                        unit=" cm"
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#ffffff',
                          borderColor: '#e2e8f0',
                          borderRadius: '0.5rem',
                          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
                          fontSize: '12px',
                          color: '#0f172a',
                        }}
                      />
                      <Legend
                        verticalAlign="top"
                        align="right"
                        iconType="circle"
                        wrapperStyle={{ fontSize: '11px', paddingBottom: '10px' }}
                      />
                      {/* Ambang Batas Garis Kritis (Putus-putus Red #ef4444) */}
                      <ReferenceLine
                        y={70}
                        label={{
                          value: 'Ambang Kritis (70 cm)',
                          fill: '#ef4444',
                          fontSize: 10,
                          position: 'insideTopLeft',
                        }}
                        stroke="#ef4444"
                        strokeDasharray="4 4"
                      />
                      {/* Area Chart Garis Biru Utama Solid #2563eb atau Hijau #10b981 saat Hari Ini */}
                      <Area
                        type="monotone"
                        dataKey={isToday ? 'tinggiToday' : (selectedIncident === 'nov' ? 'tinggiNov' : 'tinggiOct')}
                        name={isToday ? 'Tinggi Air (Hari Ini - Stabil)' : (selectedIncident === 'nov' ? 'Tinggi Air (27 Nov)' : 'Tinggi Air (11 Okt)')}
                        stroke={isToday ? '#10b981' : '#2563eb'}
                        strokeWidth={2.5}
                        fillOpacity={1}
                        fill={isToday ? 'url(#colorTinggiGreen)' : 'url(#colorTinggi)'}
                        dot={{ r: 3, fill: isToday ? '#10b981' : '#2563eb', strokeWidth: 1.5, stroke: '#ffffff' }}
                        activeDot={{ r: 5 }}
                      />
                      {/* Garis Sekunder: Debit Limpasan Sungai */}
                      <Line
                        type="monotone"
                        dataKey={isToday ? 'debitToday' : 'debitSungai'}
                        name={isToday ? 'Debit Sungai (Normal)' : 'Debit Sungai (m³/s)'}
                        stroke="#94a3b8"
                        strokeWidth={1.5}
                        strokeDasharray="3 3"
                        dot={false}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="h-full w-full flex items-center justify-center bg-slate-50 text-xs text-slate-400">
                    Memuat grafik hydrograph...
                  </div>
                )}
              </div>
            </div>

            <p className="text-[11px] text-slate-500 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span>
                {isToday
                  ? '* Ketinggian air stabil di 10 - 15 cm, jauh di bawah ambang batas kritis (70 cm).'
                  : '* Puncak genangan tertinggi tercatat pada pukul 12:00 - 14:00 WIB.'}
              </span>
              <span className={isToday ? "font-semibold text-emerald-700" : "font-semibold text-slate-700"}>
                {isToday ? "Elevasi Aman ✓" : "Sensor Automatic Water Level (AWLR)"}
              </span>
            </p>
          </div>

          {/* Grafik 2: Grouped Bar Chart Sebaran Laporan (Blue #3b82f6, Green #10b981, Orange #f59e0b) */}
          <div className="bg-white border border-slate-200 rounded-xl shadow-xs p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between border-b border-slate-100 pb-3 mb-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Sebaran Laporan Warga &amp; Validasi Lapangan
                  </h3>
                  <p className="text-xs text-slate-500">
                    {isToday
                      ? 'Nihil laporan warga dan nihil genangan tervalidasi pada hari ini'
                      : 'Perbandingan volume laporan masuk, pompa dikerahkan, dan titik tervalidasi'}
                  </p>
                </div>
                <span className="rounded-md bg-slate-100 border border-slate-200 px-2 py-0.5 text-[11px] font-semibold text-slate-700">
                  Per Kecamatan
                </span>
              </div>

              {/* Area Grafik Recharts Grouped Bar */}
              <div className="w-full h-72">
                {isClient ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={activeDistrictData}
                      margin={{ top: 10, right: 15, left: -10, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                      <XAxis
                        dataKey="district"
                        stroke="#94a3b8"
                        fontSize={10}
                        tickLine={false}
                        axisLine={{ stroke: '#e2e8f0' }}
                      />
                      <YAxis
                        stroke="#94a3b8"
                        fontSize={11}
                        tickLine={false}
                        axisLine={{ stroke: '#e2e8f0' }}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#ffffff',
                          borderColor: '#e2e8f0',
                          borderRadius: '0.5rem',
                          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
                          fontSize: '12px',
                          color: '#0f172a',
                        }}
                      />
                      <Legend
                        verticalAlign="top"
                        align="right"
                        iconType="circle"
                        wrapperStyle={{ fontSize: '11px', paddingBottom: '10px' }}
                      />
                      {/* Bar 1: Laporan Warga (Flat Blue #3b82f6) */}
                      <Bar
                        dataKey="laporanWarga"
                        name="Laporan Warga"
                        fill="#3b82f6"
                        radius={[3, 3, 0, 0]}
                        barSize={16}
                      />
                      {/* Bar 2: Pompa Siaga Unit (Flat Green #10b981) */}
                      <Bar
                        dataKey="pompaAktif"
                        name="Pompa Siaga (Unit)"
                        fill="#10b981"
                        radius={[3, 3, 0, 0]}
                        barSize={16}
                      />
                      {/* Bar 3: Titik Validasi BPBD (Flat Orange #f59e0b) */}
                      <Bar
                        dataKey="titikValid"
                        name="Validasi BPBD"
                        fill="#f59e0b"
                        radius={[3, 3, 0, 0]}
                        barSize={16}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="h-full w-full flex items-center justify-center bg-slate-50 text-xs text-slate-400">
                    Memuat grafik sebaran laporan...
                  </div>
                )}
              </div>
            </div>

            <p className="text-[11px] text-slate-500 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span>
                {isToday
                  ? '* Tidak ada laporan genangan dari warga yang masuk melalui kanal pengaduan.'
                  : '* Medan Baru dan Medan Selayang mencatat rasio pelaporan dan disposisi pompa tertinggi.'}
              </span>
              <span className={isToday ? "font-semibold text-emerald-700" : "font-semibold text-slate-700"}>
                {isToday ? "Semua Wilayah Aman ✓" : "Integrasi Call Center 112"}
              </span>
            </p>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            5. FOOTER RESMI PEMERINTAHAN (ENTERPRISE MINIMALIS)
           ───────────────────────────────────────────────────────────── */}
        <footer className="mt-8 pt-6 pb-4 border-t border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-700">FLORENCE GOV</span>
            <span>· Sistem Informasi Ketahanan Bencana &amp; Mitigasi Banjir Kota Medan</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <Link href="/" className="hover:text-blue-600 transition">
              Portal Warga
            </Link>
            <Link href="/dashboard/history" className="hover:text-blue-600 transition">
              Mesin Waktu Command Center
            </Link>
            <span className="text-slate-400">Versi Rilis 2.4-GovEnterprise</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
