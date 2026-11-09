'use client';

import { useState, useEffect } from 'react';
import {
  calculateFloodSafeRoute,
  MEDAN_PRESET_LOCATIONS,
  type PointCoord,
  type SafeRouteResult,
  type HazardSegment,
  type CascadingTrafficRef,
} from '../lib/safeRoutingEngine';

export interface FloodSafeRouteNavigationProps {
  floodedSegments: HazardSegment[];
  cascadingRoutes?: CascadingTrafficRef[];
  waterFactor?: number;
  mapboxToken: string;
  onRouteCalculated?: (result: SafeRouteResult | null) => void;
  onPickingLocationChange?: (mode: 'start' | 'dest' | null) => void;
  pickingLocationMode?: 'start' | 'dest' | null;
  externalStart?: PointCoord | null;
  externalDest?: PointCoord | null;
  isSafeState?: boolean;
}

export default function FloodSafeRouteNavigation({
  floodedSegments,
  cascadingRoutes = [],
  waterFactor = 1.0,
  mapboxToken,
  onRouteCalculated,
  onPickingLocationChange,
  pickingLocationMode = null,
  externalStart = null,
  externalDest = null,
  isSafeState = false,
}: FloodSafeRouteNavigationProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  // Titik Asal & Tujuan
  const [startPoint, setStartPoint] = useState<PointCoord>(
    externalStart || MEDAN_PRESET_LOCATIONS['RS_USU']
  );
  const [destPoint, setDestPoint] = useState<PointCoord>(
    externalDest || MEDAN_PRESET_LOCATIONS['BALAI_KOTA']
  );

  const [travelMode, setTravelMode] = useState<'driving' | 'two-wheeler'>('driving');
  const [routeResult, setRouteResult] = useState<SafeRouteResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [locating, setLocating] = useState(false);

  // Update jika ada koordinat dari klik peta eksternal (di dalam useEffect agar tidak memicu infinite render loop)
  useEffect(() => {
    if (externalStart) {
      setStartPoint(externalStart);
    }
  }, [externalStart]);

  useEffect(() => {
    if (externalDest) {
      setDestPoint(externalDest);
    }
  }, [externalDest]);

  // Handle GPS pengguna saat ini
  function handleUseMyLocation(target: 'start' | 'dest') {
    if (!('geolocation' in navigator)) {
      setErrorMsg('Browser Anda tidak mendukung deteksi geolokasi GPS.');
      return;
    }
    setLocating(true);
    setErrorMsg(null);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const pt: PointCoord = {
          name: 'Lokasi GPS Saya Saat Ini',
          lat: Number(pos.coords.latitude.toFixed(5)),
          lng: Number(pos.coords.longitude.toFixed(5)),
        };
        if (target === 'start') {
          setStartPoint(pt);
        } else {
          setDestPoint(pt);
        }
        setLocating(false);
      },
      (err) => {
        setLocating(false);
        setErrorMsg(`Gagal membaca GPS: ${err.message}. Silakan gunakan preset lokasi.`);
      },
      { enableHighAccuracy: true, timeout: 8000 }
    );
  }

  // Eksekusi kalkulasi rute aman
  async function handleCalculateRoute() {
    if (!startPoint || !destPoint) {
      setErrorMsg('Tentukan titik asal dan titik tujuan terlebih dahulu.');
      return;
    }

    if (startPoint.lat === destPoint.lat && startPoint.lng === destPoint.lng) {
      setErrorMsg('Titik asal dan tujuan tidak boleh berada di koordinat yang sama.');
      return;
    }

    setLoading(true);
    setErrorMsg(null);

    try {
      const result = await calculateFloodSafeRoute({
        origin: startPoint,
        destination: destPoint,
        floodedSegments: isSafeState ? [] : floodedSegments,
        cascadingRoutes: isSafeState ? [] : cascadingRoutes,
        waterFactor: isSafeState ? 0 : waterFactor,
        mapboxToken,
        travelMode,
      });

      if (!result.success) {
        setErrorMsg(result.errorMessage || 'Rute aman tidak dapat ditemukan.');
        setRouteResult(null);
        onRouteCalculated?.(null);
      } else {
        setRouteResult(result);
        onRouteCalculated?.(result);
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Terjadi kesalahan kalkulasi rute.';
      setErrorMsg(msg);
      setRouteResult(null);
      onRouteCalculated?.(null);
    } finally {
      setLoading(false);
    }
  }

  // Reset rute
  function handleReset() {
    setRouteResult(null);
    setErrorMsg(null);
    onRouteCalculated?.(null);
    onPickingLocationChange?.(null);
  }

  // Pilih skenario cepat
  function applyPresetScenario(startKey: string, destKey: string) {
    const s = MEDAN_PRESET_LOCATIONS[startKey];
    const d = MEDAN_PRESET_LOCATIONS[destKey];
    if (s && d) {
      setStartPoint(s);
      setDestPoint(d);
      setErrorMsg(null);
      setRouteResult(null);
      onRouteCalculated?.(null);
    }
  }

  if (!isOpen) {
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="pointer-events-auto flex items-center gap-2 rounded-2xl border border-blue-500/50 bg-slate-900/95 px-4 py-2.5 text-xs font-black text-white shadow-2xl backdrop-blur-xl transition hover:bg-blue-600 hover:scale-105 active:scale-95 cursor-pointer ring-2 ring-blue-500/30"
        title="Buka Navigasi Rute Bebas Banjir"
      >
        <span className="text-base">🧭</span>
        <span className="tracking-wide uppercase">Rute Aman Banjir</span>
        <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
      </button>
    );
  }

  return (
    <div
      role="region"
      aria-label="Panel Navigasi Rute Bebas Banjir"
      className="pointer-events-auto w-[340px] sm:w-[380px] max-w-[calc(100vw-2rem)] rounded-3xl border border-slate-700/80 bg-slate-900/95 p-4 text-xs text-white shadow-2xl backdrop-blur-2xl transition-all duration-300"
    >
      {/* ── Header Panel ── */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-blue-600 text-xs font-black text-white shadow-md shadow-blue-600/40">
            🧭
          </span>
          <div>
            <h2 className="font-extrabold tracking-wide text-white text-sm flex items-center gap-1.5">
              <span>Navigasi Rute Aman Banjir</span>
            </h2>
            <p className="text-[10px] text-slate-400">
              Spatial Constraints (0% Jalan Merah · Prioritas Putih)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setIsMinimized(!isMinimized)}
            className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white transition cursor-pointer"
            title={isMinimized ? 'Perbesar Panel' : 'Perkecil Panel'}
          >
            {isMinimized ? '▼' : '▲'}
          </button>
          <button
            type="button"
            onClick={() => {
              setIsOpen(false);
              onPickingLocationChange?.(null);
            }}
            className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-800 text-slate-400 hover:bg-red-600 hover:text-white transition cursor-pointer"
            title="Tutup Navigasi"
          >
            ✕
          </button>
        </div>
      </div>

      {!isMinimized && (
        <div className="mt-3 space-y-3.5">
          {/* ── Shortcut Skenario Evakuasi Banjir ── */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Skenario Cepat LKTI:
              </span>
              <span className="text-[9px] text-blue-400 font-semibold">1-Klik Pilih</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <button
                type="button"
                onClick={() => applyPresetScenario('TASBI_RINGROAD', 'BALAI_KOTA')}
                className="truncate rounded-xl border border-slate-700/80 bg-slate-800/60 p-1.5 text-left text-[10px] font-medium text-slate-200 hover:bg-slate-700 hover:text-white transition active:scale-95"
                title="Tasbi Ringroad ke Balai Kota (Prioritas 100% Jalan Putih Kering)"
              >
                ⚪ Tasbi ➔ Balai Kota (Putih)
              </button>
              <button
                type="button"
                onClick={() => applyPresetScenario('LAPANGAN_MERDEKA', 'TASBI_RINGROAD')}
                className="truncate rounded-xl border border-slate-700/80 bg-slate-800/60 p-1.5 text-left text-[10px] font-medium text-slate-200 hover:bg-slate-700 hover:text-white transition active:scale-95"
                title="Lapangan Merdeka ke Tasbi (Melintasi Antrean Jalan Kuning)"
              >
                🟡 Lap. Merdeka ➔ Tasbi (Kuning)
              </button>
              <button
                type="button"
                onClick={() => applyPresetScenario('RS_USU', 'BALAI_KOTA')}
                className="truncate rounded-xl border border-slate-700/80 bg-slate-800/60 p-1.5 text-left text-[10px] font-medium text-slate-200 hover:bg-slate-700 hover:text-white transition active:scale-95"
                title="RS USU ke Balai Kota (Uji Blokir Total Jalan Merah Dr. Mansyur 130cm)"
              >
                🔴 RS USU ➔ Balai Kota (Merah)
              </button>
              <button
                type="button"
                onClick={() => applyPresetScenario('SIMPANG_SUNGGAL', 'PLAZA_MEDAN_FAIR')}
                className="truncate rounded-xl border border-slate-700/80 bg-slate-800/60 p-1.5 text-left text-[10px] font-medium text-slate-200 hover:bg-slate-700 hover:text-white transition active:scale-95"
                title="Simpang Sunggal ke Plaza Medan Fair (Bypass Bebas Genangan)"
              >
                🛡️ Sunggal ➔ Medan Fair (Aman)
              </button>
            </div>
          </div>

          {/* ── Form Pemilihan Titik Asal & Tujuan ── */}
          <div className="space-y-2.5 rounded-2xl bg-slate-950/60 border border-slate-800/80 p-3">
            {/* Titik Asal */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-[11px] font-bold text-emerald-400 flex items-center gap-1.5">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50" />
                  Titik Asal (Start)
                </label>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => handleUseMyLocation('start')}
                    disabled={locating}
                    className="text-[10px] font-bold text-blue-400 hover:text-blue-300 transition"
                    title="Gunakan GPS Perangkat"
                  >
                    ◎ Lokasi Saya
                  </button>
                  <span className="text-slate-600">·</span>
                  <button
                    type="button"
                    onClick={() =>
                      onPickingLocationChange?.(pickingLocationMode === 'start' ? null : 'start')
                    }
                    className={`text-[10px] font-bold transition ${
                      pickingLocationMode === 'start' ? 'text-amber-400 animate-pulse' : 'text-slate-400 hover:text-slate-200'
                    }`}
                    title="Klik di Peta untuk Titik Asal"
                  >
                    {pickingLocationMode === 'start' ? '📍 Klik di Peta...' : '📍 Pilih Peta'}
                  </button>
                </div>
              </div>

              <select
                value={
                  Object.entries(MEDAN_PRESET_LOCATIONS).find(
                    ([_, pt]) => pt.lat === startPoint.lat && pt.lng === startPoint.lng
                  )?.[0] || 'custom'
                }
                onChange={(e) => {
                  if (e.target.value !== 'custom') {
                    setStartPoint(MEDAN_PRESET_LOCATIONS[e.target.value]);
                  }
                }}
                className="w-full rounded-xl border border-slate-700/80 bg-slate-900/90 px-3 py-2 text-xs text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              >
                {Object.entries(MEDAN_PRESET_LOCATIONS).map(([key, loc]) => (
                  <option key={key} value={key} className="bg-slate-900 text-white">
                    {loc.name}
                  </option>
                ))}
                <option value="custom" disabled className="bg-slate-900 text-slate-400">
                  {startPoint.name || `${startPoint.lat.toFixed(4)}, ${startPoint.lng.toFixed(4)}`}
                </option>
              </select>
            </div>

            {/* Titik Tujuan */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-[11px] font-bold text-red-400 flex items-center gap-1.5">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-red-500 shadow-sm shadow-red-500/50" />
                  Titik Tujuan (Destination)
                </label>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => handleUseMyLocation('dest')}
                    disabled={locating}
                    className="text-[10px] font-bold text-blue-400 hover:text-blue-300 transition"
                    title="Gunakan GPS Perangkat"
                  >
                    ◎ Lokasi Saya
                  </button>
                  <span className="text-slate-600">·</span>
                  <button
                    type="button"
                    onClick={() =>
                      onPickingLocationChange?.(pickingLocationMode === 'dest' ? null : 'dest')
                    }
                    className={`text-[10px] font-bold transition ${
                      pickingLocationMode === 'dest' ? 'text-amber-400 animate-pulse' : 'text-slate-400 hover:text-slate-200'
                    }`}
                    title="Klik di Peta untuk Titik Tujuan"
                  >
                    {pickingLocationMode === 'dest' ? '📍 Klik di Peta...' : '📍 Pilih Peta'}
                  </button>
                </div>
              </div>

              <select
                value={
                  Object.entries(MEDAN_PRESET_LOCATIONS).find(
                    ([_, pt]) => pt.lat === destPoint.lat && pt.lng === destPoint.lng
                  )?.[0] || 'custom'
                }
                onChange={(e) => {
                  if (e.target.value !== 'custom') {
                    setDestPoint(MEDAN_PRESET_LOCATIONS[e.target.value]);
                  }
                }}
                className="w-full rounded-xl border border-slate-700/80 bg-slate-900/90 px-3 py-2 text-xs text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              >
                {Object.entries(MEDAN_PRESET_LOCATIONS).map(([key, loc]) => (
                  <option key={key} value={key} className="bg-slate-900 text-white">
                    {loc.name}
                  </option>
                ))}
                <option value="custom" disabled className="bg-slate-900 text-slate-400">
                  {destPoint.name || `${destPoint.lat.toFixed(4)}, ${destPoint.lng.toFixed(4)}`}
                </option>
              </select>
            </div>

            {/* Pemilihan Moda Transportasi */}
            <div className="flex items-center justify-between pt-1">
              <span className="text-[10px] font-semibold text-slate-400">Moda Transportasi:</span>
              <div className="flex rounded-xl bg-slate-900/90 p-0.5 border border-slate-800">
                <button
                  type="button"
                  onClick={() => setTravelMode('driving')}
                  className={`rounded-lg px-2.5 py-1 text-[10px] font-bold transition ${
                    travelMode === 'driving' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  🚗 Mobil
                </button>
                <button
                  type="button"
                  onClick={() => setTravelMode('two-wheeler')}
                  className={`rounded-lg px-2.5 py-1 text-[10px] font-bold transition ${
                    travelMode === 'two-wheeler' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  🏍️ Motor
                </button>
              </div>
            </div>
          </div>

          {/* ── Tombol Hitung Rute ── */}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleCalculateRoute}
              disabled={loading}
              className="flex-1 flex h-11 items-center justify-center gap-2 rounded-2xl bg-blue-600 font-extrabold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500 active:scale-95 disabled:bg-slate-800 disabled:text-slate-500 cursor-pointer"
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  <span>Mengevaluasi Spasial...</span>
                </>
              ) : (
                <>
                  <span>🚀</span>
                  <span>Kalkulasi Rute Aman</span>
                </>
              )}
            </button>

            {routeResult && (
              <button
                type="button"
                onClick={handleReset}
                className="flex h-11 px-3 items-center justify-center rounded-2xl border border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition active:scale-95 cursor-pointer"
                title="Hapus Rute"
              >
                Reset
              </button>
            )}
          </div>

          {/* ── Error Banner ── */}
          {errorMsg && (
            <div
              role="alert"
              className="rounded-2xl border border-red-500/40 bg-red-950/80 p-3 text-red-200 text-[11px] leading-relaxed shadow-lg flex items-start gap-2"
            >
              <span className="text-sm shrink-0">⚠️</span>
              <span>{errorMsg}</span>
            </div>
          )}

          {/* ── Hasil Kalkulasi Rute Spasial ── */}
          {routeResult && routeResult.success && (
            <div className="space-y-2.5 rounded-2xl border border-slate-700/80 bg-slate-950/70 p-3.5 animate-in fade-in duration-300">
              {/* Badge Status Klasifikasi Rute */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Status Rute Terpilih:
                </span>
                {routeResult.classification === 'WHITE_PRIORITY' ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 px-2.5 py-0.5 text-[10px] font-black text-emerald-300 shadow-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    ⚪ Prioritas Jalan Putih
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 px-2.5 py-0.5 text-[10px] font-black text-amber-300 shadow-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                    🟡 Alternatif (Jalan Kuning)
                  </span>
                )}
              </div>

              {/* Kartu Metrik Waktu Tempuh & Jarak */}
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-2.5 text-center">
                  <p className="text-[10px] font-medium text-slate-400">Total Waktu Tempuh</p>
                  <p className="text-lg font-black text-white mt-0.5">
                    {Math.round(routeResult.totalDurationSeconds / 60)} mnt
                  </p>
                  {routeResult.penaltySeconds > 0 && (
                    <p className="text-[9px] text-amber-400 font-bold mt-0.5">
                      (+{Math.round(routeResult.penaltySeconds / 60)} mnt penalti genangan)
                    </p>
                  )}
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-2.5 text-center">
                  <p className="text-[10px] font-medium text-slate-400">Total Jarak Tempuh</p>
                  <p className="text-lg font-black text-white mt-0.5">
                    {(routeResult.distanceMeters / 1000).toFixed(1)} km
                  </p>
                  <p className="text-[9px] text-emerald-400 font-bold mt-0.5">
                    Bebas Hambatan Merah
                  </p>
                </div>
              </div>

              {/* Rincian Proteksi Spasial */}
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-2.5 space-y-1.5 text-[10px]">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-red-600 shadow-xs" />
                    Ruas Merah Diblokir:
                  </span>
                  <span className="font-mono font-bold text-red-400">
                    {routeResult.avoidedRedCount} Ruas (100% Terhindar)
                  </span>
                </div>

                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-amber-500 shadow-xs" />
                    Ruas Kuning Dilewati:
                  </span>
                  <span className="font-mono font-bold text-amber-300">
                    {routeResult.yellowAlerts.length} Ruas
                  </span>
                </div>

                {routeResult.usedBypassWaypoint && (
                  <div className="flex items-center justify-between text-blue-300 pt-1 border-t border-slate-800/80">
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-blue-400 animate-ping" />
                      Koridor Elak Bypass:
                    </span>
                    <span className="font-bold truncate max-w-[150px]">
                      {routeResult.usedBypassWaypoint.name}
                    </span>
                  </div>
                )}
              </div>

              {/* Peringatan Jalur Kuning jika ada */}
              {routeResult.warningMessage && (
                <div className="rounded-xl border border-amber-500/40 bg-amber-950/50 p-2.5 text-amber-200 text-[10px] leading-relaxed">
                  {routeResult.warningMessage}
                </div>
              )}
            </div>
          )}

          {/* ── Legenda Aturan Spasial ── */}
          <div className="pt-2 border-t border-slate-800/80 text-[10px] space-y-1 text-slate-400">
            <p className="font-bold text-slate-300 uppercase tracking-wider text-[9px]">
              Ketentuan Tata Ruang Routing:
            </p>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-600 shrink-0" />
              <span>
                <strong className="text-red-400">Merah (&ge;40cm):</strong> Blokir total 100% (Buffer 45m).
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-500 shrink-0" />
              <span>
                <strong className="text-amber-400">Kuning (10-30cm):</strong> Penalti waktu &amp; warning UI.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shrink-0" />
              <span>
                <strong className="text-emerald-400">Putih (&lt;10cm):</strong> Jalur prioritas utama.
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
