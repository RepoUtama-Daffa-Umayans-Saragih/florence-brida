'use client';

import { FormEvent, useCallback, useState } from 'react';
import Link from 'next/link';
import AlertBanner from '../components/AlertBanner';
import LiveFloodMap from '../components/LiveFloodMap';
import RouteSheet, { RouteData } from '../components/RouteSheet';
import SearchBar from '../components/SearchBar';
import type { SearchPayload } from '../components/SearchBar';
import EmergencyInfo from '../components/EmergencyInfo';
import AdminScenarioPanel from '../components/AdminScenarioPanel';
import FloodReportPreview from '../components/FloodReportPreview';
import BMKGWeatherPanel from '../components/BMKGWeatherPanel';
import type { FlyTarget, MapPosition } from '../components/FloodMap';

const DEMO_ALERT = {
  status: 'YELLOW',
  label: 'Hujan lebat diperkirakan di Medan Baru 14:00–17:00 · BMKG',
  description:
    'Potensi luapan T-08 diperkirakan ≈ 22 menit. Hindari Jl. Setia Budi untuk kendaraan roda dua.',
  source: 'FLORENCE + BMKG',
  updatedAt: '3 menit lalu',
} as const;

const COORDINATE_PATTERN = /^\s*(-?\d{1,2}(?:\.\d+)?)\s*[,;\s]\s*(-?\d{1,3}(?:\.\d+)?)\s*$/;

function formatPoint(point: MapPosition): string {
  return `${point.lat.toFixed(5)}, ${point.lng.toFixed(5)}`;
}

/** Menerima "lat, lng"; mengembalikan null untuk teks lain atau koordinat di luar rentang. */
function parseCoordinates(text: string): MapPosition | null {
  const match = COORDINATE_PATTERN.exec(text);
  if (!match) return null;
  const lat = Number(match[1]);
  const lng = Number(match[2]);
  return Math.abs(lat) <= 90 && Math.abs(lng) <= 180 ? { lat, lng } : null;
}

function geolocationMessage(error: GeolocationPositionError): string {
  if (error.code === error.PERMISSION_DENIED) return 'Izin lokasi ditolak. Aktifkan izin lokasi di browser atau ketik koordinat manual.';
  if (error.code === error.TIMEOUT) return 'Pencarian lokasi melewati batas waktu. Coba lagi atau ketik koordinat manual.';
  return 'Lokasi perangkat tidak tersedia. Ketik koordinat manual.';
}

/** Respons mentah dari POST /api/v1/routing/alternative. */
interface RoutingApiResponse {
  source: 'FLORENCE' | 'GOOGLE_ROUTES';
  geometry: { latitude: number; longitude: number }[];
  distanceMeters: number;
  durationSeconds: number;
  warning: string;
  nodeIds: string[];
  edgeIds: string[];
  googleValidated: boolean;
}

export default function PublicPortalPage() {
  const [destination, setDestination] = useState('');
  const [emergencyOpen, setEmergencyOpen] = useState(false);
  const [originText, setOriginText] = useState('');
  const [originPoint, setOriginPoint] = useState<MapPosition | null>(null);
  const [flyTo, setFlyTo] = useState<FlyTarget | null>(null);
  const [locating, setLocating] = useState(false);
  const [originMessage, setOriginMessage] = useState<{ kind: 'error' | 'info'; text: string } | null>(null);

  // State rute: path untuk peta + data untuk RouteSheet
  const [routePath, setRoutePath] = useState<MapPosition[]>([]);
  const [routeData, setRouteData] = useState<RouteData | null>(null);
  const [routeLoading, setRouteLoading] = useState(false);
  const [routeError, setRouteError] = useState<string | null>(null);

  // State Mode Navigasi 3D
  const [isNavigating, setIsNavigating] = useState(false);

  // State Modal Pemantauan Cuaca & Radar BMKG
  const [showWeatherPanel, setShowWeatherPanel] = useState(false);

  function startNavigation() {
    if (!routePath.length) return;
    setIsNavigating(true);
  }

  function stopNavigation() {
    setIsNavigating(false);
  }

  function handleLocate() {
    if (!('geolocation' in navigator)) {
      setOriginMessage({ kind: 'error', text: 'Browser ini tidak mendukung geolokasi. Ketik koordinat manual.' });
      return;
    }
    setLocating(true);
    setOriginMessage(null);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const point = { lat: position.coords.latitude, lng: position.coords.longitude };
        setOriginPoint(point);
        setOriginText(formatPoint(point));
        setFlyTo({ point, key: Date.now() });
        setOriginMessage({ kind: 'info', text: 'Lokasi saat ini dipakai sebagai titik asal.' });
        setLocating(false);
      },
      (error) => {
        setOriginMessage({ kind: 'error', text: geolocationMessage(error) });
        setLocating(false);
      },
      { enableHighAccuracy: true, timeout: 10_000, maximumAge: 60_000 },
    );
  }

  function commitOrigin() {
    // Jangan ubah titik asal saat sedang dalam mode navigasi aktif
    if (isNavigating) return;

    const text = originText.trim();
    if (!text) {
      setOriginPoint(null);
      setOriginMessage(null);
      return;
    }
    // Teks hasil deteksi lokasi sudah dipakai; jangan ditimpa nilai bulatannya.
    if (originPoint && text === formatPoint(originPoint)) return;
    const point = parseCoordinates(text);
    if (!point) {
      setOriginPoint(null);
      setOriginMessage({ kind: 'error', text: 'Pencarian nama tempat belum tersedia. Ketik koordinat "lat, lng" atau pakai tombol lokasi.' });
      return;
    }
    setOriginPoint(point);
    setFlyTo({ point, key: Date.now() });
    setOriginMessage(null);
  }

  function handleOriginSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    commitOrigin();
  }

  /**
   * Dipanggil dari SearchBar ketika user menekan "Cari rute".
   * Mengambil snapshot graph dari backend, lalu memanggil A* routing endpoint.
   */
  const handleSearch = useCallback(async ({ destination: destText, travelMode, coordinates: geocodedCoords }: SearchPayload) => {
    setDestination(destText);
    setRouteError(null);

    // Prioritaskan koordinat presisi dari Mapbox Geocoding; fallback ke parsing manual.
    const destPoint: MapPosition | null = geocodedCoords ?? parseCoordinates(destText);

    if (!originPoint) {
      setRouteError('Tentukan titik asal terlebih dahulu — ketik koordinat atau gunakan tombol lokasi (◎).');
      return;
    }
    if (!destPoint) {
      setRouteError('Ketik koordinat "lat, lng" atau pilih tempat dari daftar saran yang muncul.');
      return;
    }

    setRouteLoading(true);
    setRoutePath([]);
    setRouteData(null);

    try {
      const base = (process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001').replace(/\/$/, '').replace(/\/api\/v1$/, '');

      // 1. Ambil snapshot graph (nodes + segments dengan zone terkini dari backend)
      const snapshotRes = await fetch(`${base}/api/v1/zones/snapshot`, { signal: AbortSignal.timeout(8_000) });
      if (!snapshotRes.ok) throw new Error(`Snapshot gagal: HTTP ${snapshotRes.status}`);
      const snapshot = await snapshotRes.json() as {
        nodes: { id: string; position: { lat: number; lng: number }; zone: string | null; waterCm: number | null }[];
        segments: { id: string; path: { lat: number; lng: number }[]; zone: string }[];
      };

      // 2. Temukan node terdekat ke originPoint dan destPoint dari graph
      function nearestNode(point: MapPosition, nodes: typeof snapshot.nodes) {
        let closest = nodes[0];
        let minDist = Infinity;
        for (const node of nodes) {
          const dLat = node.position.lat - point.lat;
          const dLng = node.position.lng - point.lng;
          const dist = Math.sqrt(dLat * dLat + dLng * dLng);
          if (dist < minDist) { minDist = dist; closest = node; }
        }
        return closest;
      }

      const validNodes = snapshot.nodes.filter(n => n.zone !== null);
      if (validNodes.length < 2) throw new Error('Graph belum memiliki cukup node dengan data zona.');

      const originNode = nearestNode(originPoint, validNodes);
      const destNode = nearestNode(destPoint, validNodes);

      if (originNode.id === destNode.id) throw new Error('Titik asal dan tujuan terlalu berdekatan. Perbesar jarak koordinat.');

      // 3. Bangun graph edges dari segments (setiap segment = satu edge bidirectional)
      const edges = snapshot.segments.map((seg, idx) => {
        // Hitung jarak Euclidean kasar antar titik sebagai distanceMeters & durationSeconds
        let dist = 0;
        for (let i = 1; i < seg.path.length; i++) {
          const dLat = (seg.path[i].lat - seg.path[i - 1].lat) * 111_000;
          const dLng = (seg.path[i].lng - seg.path[i - 1].lng) * 111_000 * Math.cos(seg.path[0].lat * Math.PI / 180);
          dist += Math.sqrt(dLat * dLat + dLng * dLng);
        }
        // Cari node terdekat di awal dan akhir segment sebagai from/to
        const fromNode = nearestNode(seg.path[0], validNodes);
        const toNode = nearestNode(seg.path[seg.path.length - 1], validNodes);
        return {
          id: seg.id ?? `edge-${idx}`,
          from: fromNode.id,
          to: toNode.id,
          zone: seg.zone as 'GREEN' | 'YELLOW' | 'RED',
          distanceMeters: Math.round(dist),
          durationSeconds: Math.round(dist / 8.33), // ~30 km/h
          bidirectional: true,
          geometry: seg.path.map(p => ({ id: `gp-${p.lat}-${p.lng}`, latitude: p.lat, longitude: p.lng })),
        };
      });

      const graphNodes = validNodes.map(n => ({
        id: n.id,
        latitude: n.position.lat,
        longitude: n.position.lng,
        zone: (n.zone ?? 'GREEN') as 'GREEN' | 'YELLOW' | 'RED',
      }));

      // 4. Panggil routing endpoint
      const routingRes = await fetch(`${base}/api/v1/routing/alternative`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: AbortSignal.timeout(15_000),
        body: JSON.stringify({
          origin: { id: originNode.id, latitude: originNode.position.lat, longitude: originNode.position.lng },
          destination: { id: destNode.id, latitude: destNode.position.lat, longitude: destNode.position.lng },
          travelMode,
          graph: { nodes: graphNodes, edges },
        }),
      });

      if (!routingRes.ok) {
        const errBody = await routingRes.text();
        throw new Error(`Routing gagal: HTTP ${routingRes.status}. ${errBody}`);
      }

      const result = await routingRes.json() as RoutingApiResponse;

      // 5. Integrasi Mapbox Directions API (Snap to Road)
      // Ambil array koordinat hasil A* sebagai waypoints (maksimal 25)
      // Titik pertama diganti originPoint asli, dan titik terakhir adalah destPoint asli
      const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
      let finalPath: MapPosition[] = [
        originPoint,
        ...result.geometry.map(p => ({ lat: p.latitude, lng: p.longitude })),
        destPoint,
      ];
      let distanceMeters = result.distanceMeters;
      let durationSeconds = result.durationSeconds;

      if (token) {
        try {
          const allWaypoints: MapPosition[] = [
            originPoint,
            ...result.geometry.map(p => ({ lat: p.latitude, lng: p.longitude })),
            destPoint,
          ];

          // Mapbox Directions API membatasi maksimal 25 koordinat
          let sampled: MapPosition[] = allWaypoints;
          if (allWaypoints.length > 25) {
            const first = allWaypoints[0];
            const last = allWaypoints[allWaypoints.length - 1];
            const middle = allWaypoints.slice(1, -1);
            const step = middle.length / 23;
            const sampledMiddle: MapPosition[] = [];
            for (let i = 0; i < 23; i++) {
              sampledMiddle.push(middle[Math.floor(i * step)]);
            }
            sampled = [first, ...sampledMiddle, last];
          }

          const waypointsString = sampled.map(p => `${p.lng},${p.lat}`).join(';');
          const profile = travelMode === 'TWO_WHEELER' ? 'driving' : 'driving';
          const directionsUrl = `https://api.mapbox.com/directions/v5/mapbox/${profile}/${waypointsString}?geometries=geojson&overview=full&access_token=${token}`;

          const dirRes = await fetch(directionsUrl, { signal: AbortSignal.timeout(10_000) });
          if (dirRes.ok) {
            const dirData = (await dirRes.json()) as {
              routes?: Array<{
                geometry: { coordinates: [number, number][] };
                distance: number;
                duration: number;
              }>;
            };

            const snappedCoords = dirData.routes?.[0]?.geometry?.coordinates;
            if (Array.isArray(snappedCoords) && snappedCoords.length >= 2) {
              // Ambil koordinat yang sudah meliuk mengikuti jalan raya asli
              finalPath = snappedCoords.map(([lng, lat]) => ({ lat, lng }));
              if (dirData.routes?.[0]?.distance != null) {
                distanceMeters = Math.round(dirData.routes[0].distance);
              }
              if (dirData.routes?.[0]?.duration != null) {
                durationSeconds = Math.round(dirData.routes[0].duration);
              }
            }
          }
        } catch {
          // Fallback ke finalPath A* jika Directions API mengalami gangguan
        }
      }

      setRoutePath(finalPath);

      // 6. Fly ke titik tujuan agar rute terlihat
      setFlyTo({ point: destPoint, key: Date.now() });

      // 7. Update RouteSheet dengan data nyata jalan aspal
      setRouteData({
        source: result.source,
        distanceMeters,
        durationSeconds,
        warning: result.warning,
        avoidedZones: [], // Backend belum mengembalikan avoidedZones secara eksplisit
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Terjadi kesalahan tidak diketahui.';
      setRouteError(message);
    } finally {
      setRouteLoading(false);
    }
  }, [originPoint]);

  return (
    <main className="relative h-svh w-full overflow-hidden bg-slate-200">
      {/* z-0: peta memenuhi seluruh layar */}
      <div className="absolute inset-0 z-0">
        <LiveFloodMap
          flyTo={flyTo}
          originPoint={originPoint}
          routePath={routePath}
          isNavigating={isNavigating}
        />
      </div>

      {/* Banner Navigasi Aktif — Melayang di Atas Tengah Layar (Mode Navigasi 3D) */}
      {isNavigating && (
        <div
          role="region"
          aria-label="Mode Navigasi Aktif"
          className="pointer-events-auto fixed inset-x-3 top-3 z-50 mx-auto flex max-w-lg items-center justify-between gap-3 rounded-2xl border border-white/50 bg-white/95 px-4 py-3 shadow-2xl backdrop-blur-xl sm:top-6 sm:px-5 sm:py-3.5"
        >
          <div className="flex min-w-0 items-center gap-3">
            <span className="relative flex h-3.5 w-3.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-emerald-600" />
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700">
                  Navigasi Aktif
                </span>
                {routeData && (
                  <span className="text-[11px] font-semibold text-slate-500">
                    · {(routeData.distanceMeters / 1000).toFixed(1)} km ({Math.round(routeData.durationSeconds / 60)} mnt)
                  </span>
                )}
              </div>
              <h2 className="truncate text-sm font-bold text-slate-900 sm:text-base">
                Menuju {destination || 'Lokasi Tujuan'}
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={stopNavigation}
            className="glass-action flex h-11 sm:h-12 min-h-[44px] shrink-0 items-center justify-center rounded-xl bg-red-600 px-4 text-xs font-bold text-white shadow-md shadow-red-900/20 transition-all hover:bg-red-700 active:scale-95 motion-reduce:transition-none"
          >
            ✖ Akhiri Navigasi
          </button>
        </div>
      )}

      {/* Top Panel (Search & Alert) — Melayang di bagian atas layar */}
      <div
        className={`glass-panel absolute top-4 left-4 right-4 md:w-[400px] md:left-6 md:right-auto z-40 flex flex-col overflow-hidden rounded-3xl md:rounded-2xl border border-white/50 bg-white/95 md:bg-white/90 backdrop-blur-xl shadow-2xl transition-all duration-300 max-h-[46svh] md:max-h-[calc(100vh-3rem)] ${
          isNavigating ? 'pointer-events-none -translate-y-12 opacity-0 invisible' : 'translate-y-0 opacity-100 visible'
        }`}
      >
        {/* Header & AlertBanner: tidak ikut scroll */}
        <div className="shrink-0 px-4 pt-3.5 sm:pt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-blue-600 text-xs font-black text-white shadow-sm">FL</span>
              <h1 className="text-base sm:text-lg font-black tracking-tight text-slate-900">FLORENCE</h1>
            </div>
            <Link
              href="/dashboard/history"
              className="flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/50 hover:bg-white/90 backdrop-blur-md px-3 sm:px-3.5 py-1.5 text-xs font-bold text-gray-700 shadow-sm transition-all hover:text-blue-700 active:scale-95"
              title="Akses Mode Pemerintah: Mesin Waktu Banjir"
            >
              <span>🏛️</span>
              <span>Pemerintah</span>
              <span className="text-[10px] text-blue-600 font-extrabold">→</span>
            </Link>
          </div>
        </div>
        <div className="shrink-0 px-4 pb-2 pt-2">
          <AlertBanner alert={DEMO_ALERT} />
        </div>

        {/* Konten yang bisa di-scroll: Form Asal & SearchBar Tujuan */}
        <div className="min-h-0 flex-1 overflow-y-auto px-4 pb-4">
          <div className="space-y-3">
            <form onSubmit={handleOriginSubmit} className="space-y-2">
              <label htmlFor="origin" className="sr-only">Lokasi asal</label>
              <div className="flex h-12 sm:h-14 items-center gap-2 rounded-2xl bg-slate-100/90 pl-4 pr-1.5 transition-shadow focus-within:ring-2 focus-within:ring-blue-500 shadow-inner">
                <span aria-hidden="true" className="h-3.5 w-3.5 shrink-0 rounded-full border-2 border-blue-600" />
                <input
                  id="origin"
                  value={originText}
                  onChange={(event) => { setOriginText(event.target.value); setOriginMessage(null); }}
                  onBlur={commitOrigin}
                  placeholder="Asal: lat, lng atau lokasi saya"
                  autoComplete="off"
                  className="min-w-0 flex-1 bg-transparent py-2 text-sm sm:text-base text-slate-900 outline-none placeholder:text-slate-400 h-full"
                />
                <button
                  type="button"
                  onClick={handleLocate}
                  disabled={locating}
                  aria-busy={locating}
                  aria-label="Gunakan lokasi saya sebagai asal"
                  className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl text-lg text-blue-700 transition-transform active:scale-[0.98] hover:bg-white disabled:text-slate-400 motion-reduce:transition-none"
                >
                  {locating ? '…' : '◎'}
                </button>
              </div>
              {originMessage && (
                <p role={originMessage.kind === 'error' ? 'alert' : 'status'} className={`text-xs ${originMessage.kind === 'error' ? 'text-red-700' : 'text-slate-600'}`}>
                  {originMessage.text}
                </p>
              )}
            </form>

            <SearchBar onSearch={handleSearch} proximity={originPoint} />

            {/* Feedback rute */}
            {routeLoading && (
              <p role="status" className="text-xs text-slate-500 font-medium">⏳ Menghitung rute bebas banjir…</p>
            )}
            {routeError && (
              <p role="alert" className="rounded-xl bg-red-50 border border-red-200 p-2.5 text-xs text-red-700 font-medium">⚠ {routeError}</p>
            )}
            {destination && !routeLoading && !routeError && routeData && (
              <p className="text-xs text-slate-500">
                Rute menuju: <span className="font-semibold text-slate-800">{destination}</span>
              </p>
            )}
          </div>
          <p className="mt-3 text-xs text-amber-800 font-medium">Pratinjau UI · peringatan berbasis simulasi BMKG & sensor FLORENCE.</p>
        </div>
      </div>

      {/* Tombol Akses Khusus Pemerintah / Admin (Desktop Floating Pill di Kanan Atas) */}
      <Link
        href="/dashboard/history"
        className={`glass-action absolute right-4 top-4 z-40 hidden md:flex items-center gap-2 rounded-full border border-white/60 bg-white/70 hover:bg-white/95 backdrop-blur-md px-4 py-2 text-xs font-bold text-gray-700 shadow-md transition-all hover:scale-105 active:scale-95 motion-reduce:transition-none ${
          isNavigating ? 'pointer-events-none -translate-y-4 opacity-0 invisible' : 'translate-y-0 opacity-100 visible'
        }`}
        title="Buka Dashboard Pemerintah: Mesin Waktu Banjir"
      >
        <span className="text-sm">🏛️</span>
        <span>Dashboard Pemerintah</span>
        <span className="rounded-md bg-blue-100 px-1.5 py-0.5 text-[10px] font-black text-blue-700">Admin</span>
      </Link>

      {/* Tombol Floating Radar & Cuaca BMKG (Kanan Layar) */}
      <button
        type="button"
        onClick={() => setShowWeatherPanel(true)}
        className={`glass-action absolute right-4 top-20 z-40 flex items-center gap-2 rounded-2xl border border-white/50 bg-white/95 px-3.5 py-2.5 text-xs font-bold text-slate-800 shadow-xl backdrop-blur-xl transition-all hover:bg-white hover:scale-105 active:scale-95 motion-reduce:transition-none ${
          isNavigating ? 'pointer-events-none -translate-y-4 opacity-0 invisible' : 'translate-y-0 opacity-100 visible'
        }`}
        aria-label="Buka Pemantauan Cuaca & Radar BMKG"
      >
        <span className="text-base sm:text-lg">📡</span>
        <span className="font-bold">Radar BMKG</span>
        <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
      </button>

      {/* Bottom Sheet (Route Info):
          - HANYA dirender jika rute sudah berhasil dikalkulasi (routeData)
          - Di mobile: absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-md rounded-t-3xl p-6 shadow-2xl z-40
          - Di desktop: md:w-[400px] md:left-6 md:bottom-6 md:rounded-2xl */}
      {routeData && (
        <aside
          role="region"
          aria-label="Informasi Rute Perjalanan"
          className={`pointer-events-auto absolute bottom-0 left-0 z-40 w-full bg-white/90 backdrop-blur-md rounded-t-3xl p-5 sm:p-6 shadow-2xl border-t md:border border-white/50 transition-all duration-300 md:w-[400px] md:left-6 md:bottom-6 md:rounded-2xl ${
            isNavigating ? 'pointer-events-none translate-y-full opacity-0 invisible' : 'translate-y-0 opacity-100 visible'
          }`}
        >
          <RouteSheet route={routeData} onStart={startNavigation} />
        </aside>
      )}

      {/* Kelompok Kontrol Kiri Bawah (Admin Scenario Panel) */}
      <div
        className={`pointer-events-auto absolute left-4 bottom-4 z-40 transition-all duration-300 md:bottom-6 ${
          routeData && !isNavigating ? 'mb-24 sm:mb-20 md:left-[424px] md:mb-0' : 'md:left-6'
        }`}
      >
        <AdminScenarioPanel />
      </div>

      {/* Kelompok Tombol Sudut Kanan Bawah ('Lapor banjir', 'SOS') */}
      <div
        className={`pointer-events-auto absolute right-4 bottom-4 z-40 sm:z-50 flex flex-col items-end gap-2.5 sm:gap-3 transition-all duration-300 md:bottom-6 md:right-6 ${
          routeData && !isNavigating ? 'mb-24 sm:mb-20 md:mb-0' : 'mb-0'
        }`}
      >
        <FloodReportPreview />
        <button
          type="button"
          onClick={() => setEmergencyOpen((open) => !open)}
          aria-expanded={emergencyOpen}
          className="glass-action flex h-12 min-h-[48px] items-center justify-center rounded-2xl bg-red-600 px-5 text-sm font-bold text-white shadow-lg shadow-red-900/20 active:scale-[0.98]"
        >
          {emergencyOpen ? 'Tutup Safe Point' : 'SOS / Safe Point'}
        </button>
        {emergencyOpen && (
          <div className="absolute bottom-full right-0 z-50 mb-3 max-h-[50svh] w-80 max-w-[calc(100vw-1.5rem)] overflow-y-auto rounded-3xl border border-white/50 bg-white/95 backdrop-blur-xl shadow-2xl">
            <EmergencyInfo />
          </div>
        )}
      </div>

      {/* Modal Pemantauan Cuaca & Radar BMKG */}
      {showWeatherPanel && (
        <BMKGWeatherPanel onClose={() => setShowWeatherPanel(false)} />
      )}
    </main>
  );
}
