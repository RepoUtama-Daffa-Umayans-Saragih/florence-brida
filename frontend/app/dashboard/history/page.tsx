'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import Map, { Marker, Popup, NavigationControl, Source, Layer } from 'react-map-gl/mapbox';
import TimelineSlider from '../../../components/TimelineSlider';
import StatsPanel from '../../../components/StatsPanel';
import CCTVModal, { CCTV_LOCATIONS } from '../../../components/CCTVModal';
import snappedData from './snapped-segments.json';
import cascadingData from './cascading-traffic.json';
import {
  simulateCascadingTraffic,
  type FloodedRoadSegment,
  type CascadingRoute,
} from './simulateCascadingTraffic';

const SEGMENTS_NOV: FloodedRoadSegment[] = snappedData.nov2025 as FloodedRoadSegment[];
const SEGMENTS_OCT: FloodedRoadSegment[] = snappedData.oct2025 as FloodedRoadSegment[];

const CASCADING_NOV: CascadingRoute[] = cascadingData.nov2025 as CascadingRoute[];
const CASCADING_OCT: CascadingRoute[] = cascadingData.oct2025 as CascadingRoute[];

export default function HistoryPlaybackPage() {
  // Default tanggal: 27 November 2025 (Kejadian Banjir Faktual Terparah)
  const [selectedDate, setSelectedDate] = useState('2025-11-27');
  const [timeMinutes, setTimeMinutes] = useState(720); // 12:00 siang (fase puncak)
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [selectedZone, setSelectedZone] = useState<FloodedRoadSegment | null>(null);
  const [activeCCTV, setActiveCCTV] = useState<string | null>(null);
  const [mapCursor, setMapCursor] = useState<string>('default');

  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  // Baca query parameter 'date' jika ada (sinkronisasi dari Analytics)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const dateParam = params.get('date');
      if (dateParam) {
        setSelectedDate(dateParam);
      }
    }
  }, []);

  const isToday =
    selectedDate === 'Hari Ini' ||
    selectedDate === 'today' ||
    selectedDate.toLowerCase().includes('hari ini');
  const isNov27 =
    !isToday && (selectedDate.includes('11-27') || selectedDate.includes('November') || selectedDate.includes('Nov'));
  const isOct11 =
    !isToday && (selectedDate.includes('10-11') || selectedDate.includes('Oktober') || selectedDate.includes('Okt'));
  const hasDisasterData = isNov27 || isOct11;
  const isSafeState = isToday || !hasDisasterData;

  // Reset selectedZone jika dalam kondisi aman (no disaster)
  useEffect(() => {
    if (isSafeState && selectedZone) {
      setSelectedZone(null);
    }
  }, [isSafeState, selectedZone]);

  // Pilih daftar segmen jalan banjir berdasarkan tanggal kejadian (kosong jika status aman)
  const activeSegments = useMemo(() => {
    if (isSafeState) return [];
    if (isNov27) return SEGMENTS_NOV;
    if (isOct11) return SEGMENTS_OCT;
    return [];
  }, [isSafeState, isNov27, isOct11]);

  // Pilih dataset rute kemacetan terkait (kosong jika status aman)
  const activeCascading = useMemo(() => {
    if (isSafeState) return [];
    if (isNov27) return CASCADING_NOV;
    if (isOct11) return CASCADING_OCT;
    return [];
  }, [isSafeState, isNov27, isOct11]);

  // Kalkulasi faktor tinggi air berdasarkan timeMinutes & profil kejadian
  function getWaterFactor(minutes: number, isSevere: boolean): number {
    if (isSevere) {
      // 27 November 2025: Badai 3 hari, air sudah tinggi sejak pagi hingga malam
      if (minutes < 360) return 0.60;
      if (minutes < 540) return 0.70 + (minutes - 360) * 0.001;
      if (minutes < 780) return 0.88 + (minutes - 540) * 0.0005; // Puncak 12:00 - 13:00
      if (minutes < 1020) return 1.0 - (minutes - 780) * 0.0003;
      return Math.max(0.65, 0.92 - (minutes - 1020) * 0.0007);
    }

    // 11 Oktober 2025: Hujan sore meluapkan sungai
    if (minutes < 360) return 0.08;
    if (minutes < 540) return 0.15 + (minutes - 360) * 0.0012;
    if (minutes < 780) return 0.45 + (minutes - 540) * 0.002;
    if (minutes < 960) return 0.95 - (minutes - 780) * 0.001;
    if (minutes < 1200) return 0.70 - (minutes - 960) * 0.002;
    return Math.max(0.1, 0.20 - (minutes - 1200) * 0.0004);
  }

  const factor = getWaterFactor(timeMinutes, isNov27);

  // Injeksi manual Mapbox Traffic v1 ke style streets-v12
  function handleMapLoad(event: { target: any }) {
    const map = event.target;
    if (!map) return;

    if (!map.getSource('mapbox-traffic')) {
      map.addSource('mapbox-traffic', {
        type: 'vector',
        url: 'mapbox://mapbox.mapbox-traffic-v1',
      });
    }

    const layers = map.getStyle()?.layers || [];
    let firstLabelLayerId: string | undefined;
    for (const layer of layers) {
      if (layer.type === 'symbol') {
        firstLabelLayerId = layer.id;
        break;
      }
    }

    if (!map.getLayer('mapbox-traffic-layer')) {
      map.addLayer(
        {
          id: 'mapbox-traffic-layer',
          type: 'line',
          source: 'mapbox-traffic',
          'source-layer': 'traffic',
          layout: {
            'line-join': 'round',
            'line-cap': 'round',
          },
          paint: {
            'line-width': [
              'interpolate',
              ['linear'],
              ['zoom'],
              10,
              1.5,
              14,
              3.5,
              18,
              8,
            ],
            'line-color': [
              'match',
              ['get', 'congestion'],
              'low',
              '#22c55e',
              'moderate',
              '#f59e0b',
              'heavy',
              '#ef4444',
              'severe',
              '#7f1d1d',
              'hsla(0,0%,0%,0)',
            ],
            'line-opacity': 0.85,
          },
        },
        firstLabelLayerId
      );
    }
  }

  // 1. GeoJSON Ruas Jalan Banjir Aktual (Pusat Banjir - Merah Tua #991b1b, width: 8)
  const roadSegmentsGeoJson = useMemo(() => {
    return {
      type: 'FeatureCollection' as const,
      features: activeSegments.map((seg) => {
        const currentCm = Math.round(seg.peakCm * factor);
        const isRed = currentCm >= 40 || seg.peakCm >= 40;

        const segmentLineColor = isRed
          ? seg.severityGrade === 'extreme'
            ? '#7f1d1d' // Ekstrem Merah Kehitaman (Kampung Lalang)
            : '#991b1b' // Merah Tua Pusat Banjir
          : '#d97706'; // Kuning/Oranye Waspada

        const segmentGlowColor = isRed
          ? 'rgba(153, 27, 27, 0.60)'
          : 'rgba(217, 119, 6, 0.50)';

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
            currentCm,
            peakCm: seg.peakCm,
            lineColor: segmentLineColor,
            glowColor: segmentGlowColor,
            severityGrade: seg.severityGrade,
          },
        };
      }),
    };
  }, [activeSegments, factor]);

  // 2. GeoJSON Efek Domino Kemacetan (Simulate Cascading Traffic: Oranye & Kuning)
  const cascadingTrafficGeoJson = useMemo(() => {
    return simulateCascadingTraffic(activeSegments, activeCascading, factor);
  }, [activeSegments, activeCascading, factor]);

  // Handler interaktif: Klik ruas jalan banjir untuk membuka Smart Inspector Panel (DSS)
  function handleMapClick(event: any) {
    const feature = event.features && event.features[0];
    if (feature && feature.properties?.id) {
      const found = activeSegments.find((s) => s.id === feature.properties.id);
      if (found) {
        setSelectedZone(found);
        return;
      }
    }
    // Jika mengklik ruang kosong di peta, reset inspector ke null (kembali ke Ringkasan Kota)
    setSelectedZone(null);
  }

  function handleMouseEnter() {
    setMapCursor('pointer');
  }

  function handleMouseLeave() {
    setMapCursor('default');
  }

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-slate-100 text-slate-900 select-none">
      {/* ── Background Mapbox dengan Mode Terang (streets-v12 + Injected Traffic Flow) ── */}
      <div className="absolute inset-0 z-0">
        {token ? (
          <Map
            initialViewState={{
              latitude: 3.5680,
              longitude: 98.6380,
              zoom: 12.8,
              pitch: 30,
              bearing: 0,
            }}
            mapStyle="mapbox://styles/mapbox/streets-v12"
            mapboxAccessToken={token}
            style={{ width: '100%', height: '100%' }}
            cursor={mapCursor}
            interactiveLayerIds={['flooded-segments-line', 'flooded-segments-glow']}
            onClick={handleMapClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onLoad={handleMapLoad}
          >
            <NavigationControl position="top-left" style={{ marginTop: '5.5rem', marginLeft: '1.5rem' }} />

            {/* ── 1. LAYER KEMACETAN SPILLOVER (KUNING & ORANYE) ── */}
            <Source
              id="cascading-traffic-source"
              type="geojson"
              data={isSafeState ? { type: 'FeatureCollection', features: [] } : cascadingTrafficGeoJson}
            >
              {/* a. Layer Kuning (Dampak Luar / Pengalihan Arus 400 - 800m): line-color: #eab308, line-width: 4 */}
              <Layer
                id="cascading-layer-yellow"
                type="line"
                filter={['==', ['get', 'tier'], 'yellow']}
                layout={{
                  'line-join': 'round',
                  'line-cap': 'round',
                }}
                paint={{
                  'line-width': [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    10,
                    2.5,
                    13,
                    4,
                    16,
                    7,
                  ],
                  'line-color': '#eab308',
                  'line-opacity': 0.85,
                }}
              />

              {/* b. Layer Oranye (Antrean / Dampak Dekat 100 - 400m): line-color: #f97316, line-width: 5 */}
              <Layer
                id="cascading-layer-orange"
                type="line"
                filter={['==', ['get', 'tier'], 'orange']}
                layout={{
                  'line-join': 'round',
                  'line-cap': 'round',
                }}
                paint={{
                  'line-width': [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    10,
                    3,
                    13,
                    5,
                    16,
                    9,
                  ],
                  'line-color': '#f97316',
                  'line-opacity': 0.92,
                }}
              />
            </Source>

            {/* ── 2. LAYER PUSAT BANJIR AKTUAL (MERAH TUA - LAPISAN TERATAS / Z-INDEX TERTINGGI) ── */}
            <Source
              id="flooded-segments-source"
              type="geojson"
              data={isSafeState ? { type: 'FeatureCollection', features: [] } : roadSegmentsGeoJson}
            >
              {/* Efek Pendaran Air di Permukaan Aspal */}
              <Layer
                id="flooded-segments-glow"
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
                    10,
                    5,
                    13,
                    14,
                    16,
                    20,
                  ],
                  'line-color': ['get', 'glowColor'],
                  'line-blur': 2.5,
                  'line-opacity': 0.8,
                }}
              />

              {/* c. Layer Merah Tua (Pusat Banjir Aktual): line-color: #991b1b, line-width: 8 */}
              <Layer
                id="flooded-segments-line"
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
                    10,
                    4,
                    13,
                    8,
                    16,
                    15,
                  ],
                  'line-color': ['get', 'lineColor'],
                  'line-opacity': 0.98,
                }}
              />
            </Source>

            {/* ── 3. PIN LOKASI & LABEL DATA DI TENGAH SETIAP SEGMEN JALAN ── */}
            {!isSafeState &&
              activeSegments.map((seg) => {
                const currentCm = Math.round(seg.peakCm * factor);
                const isExtreme = seg.severityGrade === 'extreme';
                const isVeryCritical = seg.severityGrade === 'very-critical';
                const isCritical = seg.severityGrade === 'critical';

                // Desain Pin Marker
                const badgeBg = isExtreme
                  ? 'bg-slate-950 text-white border-red-500 shadow-black/80'
                  : isVeryCritical
                  ? 'bg-red-950 text-white border-red-400 shadow-red-950/80 ring-2 ring-red-600/70'
                  : isCritical
                  ? 'bg-red-700 text-white border-white shadow-red-900/60 ring-2 ring-red-500/60'
                  : 'bg-amber-500 text-slate-950 border-white shadow-amber-900/50 ring-2 ring-amber-500/60';

                const ringPingBg = isExtreme
                  ? 'bg-red-600/70'
                  : isVeryCritical
                  ? 'bg-red-700/60'
                  : isCritical
                  ? 'bg-red-600/50'
                  : 'bg-amber-500/40';

                return (
                  <Marker
                    key={seg.id}
                    latitude={seg.center.lat}
                    longitude={seg.center.lng}
                    anchor="center"
                    onClick={(e) => {
                      e.originalEvent.stopPropagation();
                      setSelectedZone(seg);
                    }}
                  >
                    <div className="relative group cursor-pointer flex flex-col items-center">
                      {/* Ring Denyut Air di Titik Tengah Segmen */}
                      <span className={`absolute -inset-2 rounded-full ${ringPingBg} animate-ping pointer-events-none`} />

                      {/* Badge Ketinggian Air (Bulatan Utama) */}
                      <div
                        className={`
                          relative z-10 flex h-9 w-9 items-center justify-center rounded-full border-[2.5px] text-[11px] font-black shadow-2xl transition-transform hover:scale-125
                          ${selectedZone?.id === seg.id ? 'ring-4 ring-blue-500 scale-125' : ''}
                          ${badgeBg}
                        `}
                      >
                        {currentCm}
                        <span className="text-[7px] ml-0.5 font-normal">cm</span>
                      </div>

                      {/* Label Nama Segmen Jalan Terputus */}
                      <div className="mt-1 flex flex-col items-center pointer-events-none">
                        <span className="rounded-md bg-slate-900/95 text-white px-2 py-0.5 text-[10px] font-bold border border-slate-700 shadow-xl whitespace-nowrap">
                          {seg.name.split('(')[0].trim()}
                        </span>
                        <span className={`text-[9px] font-black px-1.5 rounded-sm mt-0.5 ${
                          isExtreme
                            ? 'bg-black text-red-400'
                            : isVeryCritical
                            ? 'bg-red-900 text-red-200'
                            : isCritical
                            ? 'bg-red-700 text-white'
                            : 'bg-amber-600 text-white'
                        }`}>
                          {seg.badgeLabel}
                        </span>
                      </div>
                    </div>
                  </Marker>
                );
              })}

            {/* Popup Detail Segmen Jalan Terendam */}
            {!isSafeState && selectedZone && (
              <Popup
                latitude={selectedZone.center.lat}
                longitude={selectedZone.center.lng}
                anchor="bottom"
                onClose={() => setSelectedZone(null)}
                closeOnClick={false}
                className="text-slate-900"
              >
                <div className="p-1.5 max-w-xs text-xs text-slate-900">
                  <div className="flex items-center justify-between border-b pb-1 font-bold">
                    <span className="text-blue-900 font-extrabold">{selectedZone.name}</span>
                  </div>
                  <div className="mt-2 space-y-1.5">
                    <div className="flex items-center justify-between bg-slate-100 p-1.5 rounded-lg border border-slate-200">
                      <span className="text-slate-600">Status Kejadian:</span>
                      <span className="font-extrabold text-red-600">{selectedZone.badgeLabel}</span>
                    </div>
                    <p className="text-slate-700">
                      Tinggi Air Simulasi: <strong className="text-red-700 font-black text-sm">{Math.round(selectedZone.peakCm * factor)} cm</strong>
                    </p>
                    <p className="text-slate-500 text-[11px]">
                      Rekor Puncak Faktual: <strong>{selectedZone.peakCm} cm</strong>
                    </p>
                    {selectedZone.notes && (
                      <p className="text-[10px] text-slate-700 italic bg-amber-50 p-2 rounded-lg border border-amber-200 mt-1">
                        &quot;{selectedZone.notes}&quot;
                      </p>
                    )}
                    {selectedZone.sourceUrl && (
                      <a
                        href={selectedZone.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-1 text-[10px] text-blue-600 font-bold hover:underline"
                      >
                        ↗ Lihat Laporan Berita Terverifikasi
                      </a>
                    )}
                  </div>
                </div>
              </Popup>
            )}

            {/* ── 4. MARKER CCTV ATCS PEMKOT MEDAN (IKON KAMERA BIRU TUA) ── */}
            {CCTV_LOCATIONS.map((cctv) => (
              <Marker
                key={cctv.id}
                latitude={cctv.coordinates.lat}
                longitude={cctv.coordinates.lng}
                anchor="center"
                onClick={(e) => {
                  e.originalEvent.stopPropagation();
                  setActiveCCTV(cctv.name);
                }}
              >
                <div className="relative group cursor-pointer flex flex-col items-center">
                  {/* Halo Denyut Biru Halus */}
                  <span className="absolute -inset-1.5 rounded-full bg-blue-500/40 animate-ping pointer-events-none" />

                  {/* Bulatan Ikon Kamera Biru Tua Berbingkai */}
                  <div
                    className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 border-2 border-blue-400 text-blue-300 shadow-xl transition-all duration-200 hover:scale-125 hover:bg-blue-600 hover:text-white hover:border-white ring-2 ring-blue-500/40"
                    title={`Lihat Live CCTV: ${cctv.name}`}
                  >
                    <svg
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-2.5l4 2.5a1 1 0 0 0 1.5-.86v-8.28a1 1 0 0 0-1.5-.86L17 8.5V8a2 2 0 0 0-2-2H4zm8 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" />
                    </svg>
                  </div>

                  {/* Label Tooltip Hover */}
                  <div className="absolute -bottom-7 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-30 whitespace-nowrap">
                    <span className="rounded-md bg-slate-900/95 text-white px-2 py-0.5 text-[10px] font-bold border border-blue-500/40 shadow-xl flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      📹 {cctv.name}
                    </span>
                  </div>
                </div>
              </Marker>
            ))}
          </Map>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-slate-200 p-8 text-center text-slate-600">
            <div>
              <p className="text-lg font-bold text-slate-900">Peta Mapbox Memerlukan Token</p>
              <p className="text-sm mt-1">Pastikan NEXT_PUBLIC_MAPBOX_TOKEN telah terkonfigurasi di file .env.local.</p>
            </div>
          </div>
        )}
      </div>

      {/* ── Top Header Bar (Government Command Center) ── */}
      <header className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between gap-4 pointer-events-none">
        {/* Sisi Kiri: Tombol Back, Pusat Analitik & Branding Command Center */}
        <div className="pointer-events-auto flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-2xl border border-white/60 bg-white/90 px-4 py-2.5 text-xs font-bold text-slate-800 shadow-xl backdrop-blur-xl transition hover:bg-white hover:text-blue-700 active:scale-95"
          >
            <span>←</span>
            <span className="hidden sm:inline">Portal Publik</span>
          </Link>

          <Link
            href="/dashboard/analytics"
            className="flex items-center gap-1.5 rounded-2xl border border-blue-200 bg-blue-600/90 px-3.5 py-2.5 text-xs font-bold text-white shadow-xl backdrop-blur-xl transition hover:bg-blue-600 active:scale-95"
          >
            <span>📊</span>
            <span className="hidden sm:inline">Pusat Analitik</span>
          </Link>

          <div className="flex items-center gap-2.5 rounded-2xl border border-white/60 bg-white/90 px-4 py-2 text-xs shadow-xl backdrop-blur-xl text-slate-900">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-600 text-xs font-black text-white shadow-xs">
              FL
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold tracking-wide text-slate-900">FLORENCE GOV</span>
                <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[9px] font-black text-blue-700 border border-blue-200">
                  COMMAND CENTER
                </span>
              </div>
              <p className="text-[10px] text-slate-500">
                Mesin Waktu Banjir · Simulasi Spillover Kemacetan Domino
              </p>
            </div>
          </div>
        </div>

        {/* Sisi Kanan: Traffic Layer Status, Badge Peristiwa & Status Puncak */}
        <div className="pointer-events-auto hidden md:flex items-center gap-2.5">
          {/* Badge Peristiwa Aktif */}
          <div className="flex items-center gap-2 rounded-2xl border border-white/60 bg-white/90 px-3.5 py-2 text-xs font-bold backdrop-blur-xl shadow-xl">
            {isSafeState ? (
              <span className="text-emerald-700 flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                🟢 {selectedDate === 'Hari Ini' ? 'Hari Ini' : selectedDate}: Kondisi Normal
              </span>
            ) : isNov27 ? (
              <span className="text-red-700 flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-600 animate-ping" />
                🔴 27 Nov 2025: Banjir &amp; Spillover Kemacetan
              </span>
            ) : isOct11 ? (
              <span className="text-amber-600 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                🟡 11 Okt 2025: Luapan Sungai Babura &amp; Deli
              </span>
            ) : (
              <span className="text-blue-700">📅 Arsip: {selectedDate}</span>
            )}
          </div>

          {/* Status Traffic Injected Manual (streets-v12) */}
          <div className="flex items-center gap-2 rounded-2xl border border-white/60 bg-white/90 px-3.5 py-2 text-xs font-semibold backdrop-blur-xl text-slate-800 shadow-xl">
            <span className="text-sm">🚦</span>
            <span>Live Traffic</span>
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>

          <div className="rounded-2xl border border-white/60 bg-white/90 px-4 py-2 text-xs font-mono font-bold text-slate-900 backdrop-blur-xl shadow-xl">
            STATUS:{' '}
            <span
              className={
                isSafeState
                  ? 'text-emerald-600 font-extrabold'
                  : isNov27
                  ? 'text-red-600 font-extrabold'
                  : 'text-amber-600 font-extrabold'
              }
            >
              {isSafeState ? 'KONDISI NORMAL' : isNov27 ? 'DARURAT BENCANA' : 'SIAGA WASPADA'}
            </span>
          </div>
        </div>
      </header>

      {/* ── Floating Left: Daftar Ruas Jalan & Legenda 3-Tier Multi-Layer ── */}
      <div className="pointer-events-auto hidden xl:block absolute left-6 top-28 z-20 w-72 rounded-2xl border border-white/60 bg-white/90 p-4 text-xs backdrop-blur-xl shadow-2xl text-slate-900">
        <h3 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] border-b border-slate-200/80 pb-2">
          {isSafeState
            ? 'STATUS MONITORING JALAN'
            : isNov27
            ? 'Ruas Jalan Tergenang (27 Nov)'
            : 'Ruas Jalan Tergenang (11 Okt)'}
        </h3>

        {isSafeState ? (
          <div className="p-4 bg-emerald-50/80 border border-emerald-200 rounded-xl mt-4 flex flex-col items-center text-center">
            <span className="text-emerald-600 font-bold text-lg mb-1">✅ Status Aman</span>
            <span className="text-slate-600 text-sm">Tidak ada titik genangan air atau kemacetan yang terpantau pada tanggal ini.</span>
          </div>
        ) : (
          <>
            {/* Daftar Ruas Segmen Jalan */}
            <div className="mt-3 space-y-2">
              {activeSegments.slice(0, 5).map((seg, idx) => (
                <button
                  key={seg.id}
                  type="button"
                  onClick={() => setSelectedZone(seg)}
                  className={`w-full text-left p-2 rounded-xl transition flex items-center justify-between gap-2 ${
                    selectedZone?.id === seg.id
                      ? 'bg-blue-100/90 border border-blue-400 ring-2 ring-blue-500/30 shadow-sm'
                      : 'bg-slate-50 hover:bg-slate-100 border border-slate-200/80'
                  }`}
                >
                  <div className="min-w-0">
                    <span className="block font-bold text-slate-800 text-[11px] truncate">
                      {idx + 1}. {seg.name.split('(')[0].trim()}
                    </span>
                    <span className="block text-[10px] text-slate-500 truncate">
                      {seg.name.includes('(') ? seg.name.split('(')[1].replace(')', '') : ''}
                    </span>
                  </div>
                  <span className={`text-[10px] font-black px-1.5 py-0.5 rounded shrink-0 ${
                    seg.severityGrade === 'extreme'
                      ? 'bg-black text-red-300'
                      : seg.severityGrade === 'very-critical'
                      ? 'bg-red-900 text-white'
                      : seg.severityGrade === 'critical'
                      ? 'bg-red-600 text-white'
                      : 'bg-amber-500 text-white'
                  }`}>
                    {seg.peakCm}cm
                  </span>
                </button>
              ))}
            </div>

            {/* Legenda Hierarki 3 Tingkat Multi-Layer (Efek Domino Kemacetan) */}
            <div className="mt-4 pt-3 border-t border-slate-200/80 text-[10px] space-y-2 text-slate-600">
              <p className="font-bold uppercase tracking-wider text-[9px] text-slate-500">
                Hierarki Dampak Sistemik:
              </p>
              <div className="flex items-center gap-2">
                <span className="h-2 w-5 rounded-full bg-[#991b1b] shadow-xs" />
                <span className="font-bold text-slate-900">Merah Tua: Pusat Banjir (8px)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-5 rounded-full bg-[#f97316]" />
                <span className="font-semibold text-slate-800">Oranye: Antrean Terjebak 100-400m (5px)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1 w-5 rounded-full bg-[#eab308]" />
                <span className="font-semibold text-slate-800">Kuning: Pengalihan Arus 400-800m (4px)</span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* ── Floating Right: Panel Statistik & Smart Inspector (DSS) ── */}
      <StatsPanel
        timeMinutes={timeMinutes}
        selectedDate={selectedDate}
        selectedZone={selectedZone}
        onCloseZone={() => setSelectedZone(null)}
        onSelectZone={(zone) => setSelectedZone(zone)}
        isSafeState={isSafeState}
        onSelectCCTV={(cctvName) => setActiveCCTV(cctvName)}
      />

      {/* ── Floating Bottom: Timeline & Mesin Waktu Playback ── */}
      <TimelineSlider
        selectedDate={selectedDate}
        onDateChange={(date) => {
          setSelectedDate(date);
          setSelectedZone(null);
        }}
        timeMinutes={timeMinutes}
        onTimeChange={setTimeMinutes}
        isPlaying={isPlaying}
        onTogglePlay={() => setIsPlaying(!isPlaying)}
        playbackSpeed={playbackSpeed}
        onSpeedChange={setPlaybackSpeed}
      />

      {/* ── Modal CCTV ATCS Live Feed (Decision Support Visual) ── */}
      {activeCCTV && (
        <CCTVModal
          cctvName={activeCCTV}
          selectedDate={selectedDate}
          timeMinutes={timeMinutes}
          isSafeState={isSafeState}
          onClose={() => setActiveCCTV(null)}
        />
      )}
    </main>
  );
}
