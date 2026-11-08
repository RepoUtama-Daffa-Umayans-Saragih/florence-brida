'use client';

import { useState, useEffect } from 'react';

export interface CCTVCamera {
  id: string;
  camLabel: string;
  name: string;
  location: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  streamCode: string;
  floodStatus: string;
  safeStatus: string;
  floodDepthCm: number;
  direction: string;
  resolution: string;
}

export const CCTV_LOCATIONS: CCTVCamera[] = [
  {
    id: 'cctv-usu',
    camLabel: 'ATCS CAM 01',
    name: 'CCTV Pintu 1 USU',
    location: 'Jl. Dr. Mansyur (Depan Pintu 1 USU)',
    coordinates: { lat: 3.5620, lng: 98.6565 },
    streamCode: 'ATCS-MED-01-USU',
    floodStatus: '⚠️ Terendam (130cm)',
    safeStatus: 'Aman (Tidak Tergenang)',
    floodDepthCm: 130,
    direction: 'Menghadap Utara (Arah Jl. Setiabudi)',
    resolution: '1080p FHD · 25 FPS',
  },
  {
    id: 'cctv-simpang-pos',
    camLabel: 'ATCS CAM 02',
    name: 'CCTV Simpang Pos',
    location: 'Underpass & Flyover Simpang Pos (Jl. Jamin Ginting)',
    coordinates: { lat: 3.5402, lng: 98.6526 },
    streamCode: 'ATCS-MED-02-SPOS',
    floodStatus: '🔴 Kolong 80cm',
    safeStatus: 'Aman (Tidak Tergenang)',
    floodDepthCm: 80,
    direction: 'Menghadap Selatan (Arah Padang Bulan)',
    resolution: '1080p FHD · 25 FPS',
  },
  {
    id: 'cctv-gatsu',
    camLabel: 'ATCS CAM 03',
    name: 'CCTV Underpass Gatsu',
    location: 'Underpass Jl. Gatot Subroto (Manhattan Mall)',
    coordinates: { lat: 3.5910, lng: 98.6265 },
    streamCode: 'ATCS-MED-03-GATSU',
    floodStatus: '🟡 Pompa Trip Listrik',
    safeStatus: 'Aman (Tidak Tergenang)',
    floodDepthCm: 50,
    direction: 'Menghadap Barat (Arah Binjai)',
    resolution: '1080p FHD · 25 FPS',
  },
  {
    id: 'cctv-belawan',
    camLabel: 'ATCS CAM 04',
    name: 'CCTV Jembatan Belawan',
    location: 'Jembatan Sungai Belawan (Jl. Kol. Yos Sudarso)',
    coordinates: { lat: 3.6300, lng: 98.6680 },
    streamCode: 'ATCS-MED-04-BLWN',
    floodStatus: '🌊 Luapan Ekstrem',
    safeStatus: 'Aman (Tidak Tergenang)',
    floodDepthCm: 90,
    direction: 'Menghadap Timur Laut (Arah Pelabuhan)',
    resolution: '1080p FHD · 25 FPS',
  },
];

// URL Gambar Realistis Feed CCTV (Kondisi Aman vs Kondisi Banjir)
const NORMAL_ROAD_IMG =
  'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800';
const FLOOD_ROAD_IMG =
  'https://images.unsplash.com/photo-1542282811-943ef1a647a5?auto=format&fit=crop&q=80&w=800';

export interface CCTVModalProps {
  cctvName: string;
  selectedDate: string;
  timeMinutes?: number;
  isSafeState?: boolean;
  onClose: () => void;
}

// Helper untuk format timestamp live sesuai standar CCTV ATCS
function formatCCTVTimestamp(date: string, hour: number, minute: number, second: number): string {
  const timeStr = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}:${String(second).padStart(2, '0')} WIB`;

  if (date === 'Hari Ini' || date === 'today' || date.toLowerCase().includes('hari ini')) {
    const todayStr = new Date().toISOString().split('T')[0];
    return `${todayStr} ${timeStr}`;
  }
  if (date.includes('27 Nov') || date.includes('11-27')) {
    return `2025-11-27 ${timeStr}`;
  }
  if (date.includes('11 Okt') || date.includes('10-11')) {
    return `2025-10-11 ${timeStr}`;
  }
  if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return `${date} ${timeStr}`;
  }
  return `${date} ${timeStr}`;
}

export default function CCTVModal({
  cctvName,
  selectedDate,
  timeMinutes = 720,
  isSafeState = false,
  onClose,
}: CCTVModalProps) {
  const [seconds, setSeconds] = useState(0);
  const [isFlashing, setIsFlashing] = useState(false);
  const [snapshotMsg, setSnapshotMsg] = useState<string | null>(null);
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);
  const [zoom, setZoom] = useState(1);

  // Cari data CCTV berdasarkan nama atau id
  const camera =
    CCTV_LOCATIONS.find(
      (c) => c.name.toLowerCase() === cctvName.toLowerCase() || c.id === cctvName
    ) || CCTV_LOCATIONS[0];

  // Ticking second timer untuk clock HUD kamera
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => (prev + 1) % 60);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Keyboard shortcut ESC untuk menutup modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Format jam dan tanggal live
  const hour = Math.floor(timeMinutes / 60);
  const minute = timeMinutes % 60;
  const liveTimestamp = formatCCTVTimestamp(selectedDate, hour, minute, seconds);

  // Tangkap snapshot dummy
  const handleSnapshot = () => {
    setIsFlashing(true);
    setSnapshotMsg(`Snapshot ${camera.streamCode} tersimpan ke log BPBD`);
    setTimeout(() => setIsFlashing(false), 250);
    setTimeout(() => setSnapshotMsg(null), 3000);
  };

  // Reset PTZ control
  const handleResetPTZ = () => {
    setPanX(0);
    setPanY(0);
    setZoom(1);
  };

  // Logika Gambar Feed: Jika isSafeState true gunakan jalanan normal, jika false gunakan jalanan banjir
  const currentFeedImage = isSafeState ? NORMAL_ROAD_IMG : FLOOD_ROAD_IMG;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cctv-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-2xl w-[640px] max-w-[95vw] text-white flex flex-col animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Modal Header ── */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 text-sm">
              📹
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h3 id="cctv-modal-title" className="text-sm font-black text-white tracking-tight">
                  ATCS CAM · {camera.name.replace('CCTV ', '')}
                </h3>
                <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 text-[10px] font-black animate-pulse">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                  🔴 LIVE
                </span>
              </div>
              <p className="text-[10px] text-slate-400">
                {liveTimestamp} · {camera.streamCode}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/60 hover:bg-red-600 hover:text-white transition active:scale-95"
            aria-label="Tutup jendela pemantauan CCTV"
            title="Tutup (Esc)"
          >
            ✕
          </button>
        </div>

        {/* ── Player Visual (16:9 Frame with Real Road Image, Filter & Authentic HUD) ── */}
        <div className="relative aspect-video w-full bg-black overflow-hidden select-none group">
          {/* Tag <img> Gambar Jalanan Nyata (dengan filter CCTV jalanan: grayscale, kontras, brightness) */}
          <img
            src={currentFeedImage}
            alt={`Live feed CCTV ${camera.name}`}
            className="w-full h-full object-cover grayscale-[20%] contrast-125 brightness-90 transition-transform duration-200 ease-out select-none pointer-events-none"
            style={{
              transform: `translate(${panX}px, ${panY}px) scale(${zoom})`,
            }}
            loading="eager"
            draggable={false}
          />

          {/* Efek Garis Scanline Interlaced Khas Monitor CCTV */}
          <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]" />

          {/* Efek Vignette Shadow di Tepian Lensa */}
          <div className="pointer-events-none absolute inset-0 z-10 shadow-[inset_0_0_80px_rgba(0,0,0,0.7)]" />

          {/* Flash Effect on Snapshot */}
          {isFlashing && (
            <div className="pointer-events-none absolute inset-0 z-30 bg-white/80 transition-opacity duration-200" />
          )}

          {/* ── Elemen Overlay Kiri Atas: REC Pulsa & Label ATCS CAM ── */}
          <div className="absolute top-3 left-3.5 z-20 flex items-center gap-2 font-mono text-white text-sm drop-shadow-md">
            <span className="flex items-center gap-1.5 font-bold bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded border border-white/10">
              <span className="h-2.5 w-2.5 rounded-full bg-red-600 animate-pulse shadow-sm shadow-red-500" />
              <span className="text-red-500 font-extrabold tracking-wider">REC</span>
            </span>
            <span className="bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded font-bold tracking-wide border border-white/10">
              {camera.camLabel || 'ATCS CAM 04'}
            </span>
          </div>

          {/* ── Elemen Overlay Kanan Atas: Timestamp Live ── */}
          <div className="absolute top-3 right-3.5 z-20 font-mono text-white text-sm drop-shadow-md font-bold tracking-tight bg-black/50 backdrop-blur-xs px-2.5 py-0.5 rounded border border-white/10">
            {liveTimestamp}
          </div>

          {/* ── Elemen Overlay Kiri Bawah: Lokasi & Status Arteri ── */}
          <div className="absolute bottom-3 left-3.5 z-20 flex flex-col gap-1 font-mono text-[10px] text-white drop-shadow-md">
            <span className="bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded text-slate-200 border border-white/10 max-w-[280px] sm:max-w-none truncate">
              {camera.location} · {camera.coordinates.lat.toFixed(4)}°N {camera.coordinates.lng.toFixed(4)}°E
            </span>
            <span
              className={`px-2 py-0.5 rounded font-bold w-fit shadow-xs ${
                isSafeState
                  ? 'bg-emerald-950/90 border border-emerald-500/70 text-emerald-300'
                  : 'bg-red-950/90 border border-red-500/70 text-red-300 animate-pulse'
              }`}
            >
              {isSafeState ? 'STATUS: ARTERI NORMAL (LANCAR)' : `ELEVASI GENANGAN: ${camera.floodDepthCm} CM (KRITIS)`}
            </span>
          </div>

          {/* ── Elemen Overlay Kanan Bawah: Sinyal & PTZ ── */}
          <div className="absolute bottom-3 right-3.5 z-20 flex flex-col items-end gap-1 font-mono text-[10px] text-white drop-shadow-md">
            <span className="bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded text-emerald-400 font-bold border border-white/10">
              SIGNAL: ████ 98% · 25.0 FPS
            </span>
            <span className="bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded text-slate-300 border border-white/10">
              PTZ: Z{zoom.toFixed(1)}x {panX !== 0 || panY !== 0 ? `[P:${panX} T:${panY}]` : '[CTR]'}
            </span>
          </div>
        </div>

        {/* ── Snapshot Toast Alert ── */}
        {snapshotMsg && (
          <div className="bg-emerald-950 border-y border-emerald-500/40 px-4 py-1.5 text-xs text-emerald-300 font-bold flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <span>📸</span>
              <span>{snapshotMsg}</span>
            </span>
            <span className="text-[10px] text-emerald-400 font-normal">Tersimpan</span>
          </div>
        )}

        {/* ── Modal Footer Toolbar & PTZ Controls ── */}
        <div className="p-3.5 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          {/* Info Lokasi & Status */}
          <div className="min-w-0 flex-1">
            <span className="block font-bold text-slate-200 text-xs truncate">
              {camera.location}
            </span>
            <span className="block text-[11px] text-slate-400 truncate mt-0.5">
              Status Operasional: <strong className={isSafeState ? 'text-emerald-400' : 'text-red-400'}>{isSafeState ? camera.safeStatus : camera.floodStatus}</strong>
            </span>
          </div>

          {/* Quick Actions & PTZ Controls */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Kontrol Navigasi PTZ */}
            <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-lg p-1">
              <button
                type="button"
                onClick={() => setPanX((p) => Math.max(-40, p - 10))}
                className="h-6 w-6 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center font-bold text-[10px] transition"
                title="Geser Kiri (Pan Left)"
              >
                ◀
              </button>
              <button
                type="button"
                onClick={() => setPanY((p) => Math.min(30, p + 10))}
                className="h-6 w-6 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center font-bold text-[10px] transition"
                title="Geser Atas (Tilt Up)"
              >
                ▲
              </button>
              <button
                type="button"
                onClick={() => setPanY((p) => Math.max(-30, p - 10))}
                className="h-6 w-6 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center font-bold text-[10px] transition"
                title="Geser Bawah (Tilt Down)"
              >
                ▼
              </button>
              <button
                type="button"
                onClick={() => setPanX((p) => Math.min(40, p + 10))}
                className="h-6 w-6 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center font-bold text-[10px] transition"
                title="Geser Kanan (Pan Right)"
              >
                ▶
              </button>
              <button
                type="button"
                onClick={() => setZoom((z) => Math.min(2.5, z + 0.25))}
                className="h-6 w-6 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center font-bold text-[10px] transition"
                title="Zoom In"
              >
                +
              </button>
              <button
                type="button"
                onClick={() => setZoom((z) => Math.max(1, z - 0.25))}
                className="h-6 w-6 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center font-bold text-[10px] transition"
                title="Zoom Out"
              >
                -
              </button>
              {(panX !== 0 || panY !== 0 || zoom !== 1) && (
                <button
                  type="button"
                  onClick={handleResetPTZ}
                  className="px-1.5 h-6 rounded bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold text-[9px] transition"
                  title="Reset Posisi Kamera"
                >
                  Reset
                </button>
              )}
            </div>

            {/* Tombol Snapshot */}
            <button
              type="button"
              onClick={handleSnapshot}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow transition active:scale-95 cursor-pointer"
              title="Ambil tangkapan layar CCTV untuk arsip pelaporan"
            >
              <span>📸</span>
              <span className="hidden sm:inline">Snapshot</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
