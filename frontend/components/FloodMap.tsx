'use client';

import Map, { Marker, Popup, NavigationControl } from 'react-map-gl/mapbox';
import type { MapRef } from 'react-map-gl/mapbox';
import { ReactNode, useEffect, useRef, useState } from 'react';
import MapPolyline from './MapPolyline';

export type FloodZone = 'GREEN' | 'YELLOW' | 'RED';
export interface MapPosition { lat: number; lng: number }
/** `key` berubah di setiap permintaan sehingga titik yang sama tetap memicu flyTo ulang. */
export interface FlyTarget { point: MapPosition; key: number }
export interface CctvMapNode {
  id: string;
  name?: string;
  position: MapPosition;
  zone: FloodZone;
  waterCm?: number;
}
export interface RoadMapSegment { id: string; path: MapPosition[]; zone: FloodZone }
export interface FloodMapProps {
  nodes?: CctvMapNode[];
  segments?: RoadMapSegment[];
  routePath?: MapPosition[];
  center?: MapPosition;
  zoom?: number;
  flyTo?: FlyTarget | null;
  originPoint?: MapPosition | null;
  statusMessage?: ReactNode;
  isNavigating?: boolean;
}
const ZONES = {
  GREEN: { color: '#2E7D32', label: 'Hijau · 0–10 cm' },
  YELLOW: { color: '#F9A825', label: 'Kuning · >10–30 cm · motor hindari' },
  RED: { color: '#C62828', label: 'Merah · >30 cm · hindari' },
};
const DEFAULT_CENTER = { lat: 3.563, lng: 98.656 };

export default function FloodMap({
  nodes = [], segments = [], routePath = [], center = DEFAULT_CENTER, zoom = 15,
  flyTo = null, originPoint = null, statusMessage, isNavigating = false,
}: FloodMapProps) {
  const mapRef = useRef<MapRef>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showSegments, setShowSegments] = useState(false);
  const [error, setError] = useState(false);
  const selected = nodes.find((node) => node.id === selectedId);
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  const isNavigatingPrev = useRef(false);

  // Kamera bergeser mulus setiap ada permintaan flyTo baru (lokasi saya / koordinat manual).
  useEffect(() => {
    if (!flyTo) return;
    mapRef.current?.flyTo({ center: [flyTo.point.lng, flyTo.point.lat], zoom: 16, duration: 1600 });
  }, [flyTo]);

  // Efek Kamera GPS 3D saat Mode Navigasi aktif / nonaktif
  useEffect(() => {
    if (isNavigating) {
      isNavigatingPrev.current = true;
      // Gunakan koordinat GPS asli pengguna (originPoint) untuk kamera navigasi
      if (originPoint) {
        mapRef.current?.flyTo({
          center: [originPoint.lng, originPoint.lat],
          zoom: 17,
          pitch: 60,
          bearing: 45,
          duration: 2200,
        });
      } else {
        mapRef.current?.flyTo({
          zoom: 17,
          pitch: 60,
          bearing: 45,
          duration: 2200,
        });
      }
    } else if (isNavigatingPrev.current) {
      isNavigatingPrev.current = false;
      mapRef.current?.flyTo({
        pitch: 0,
        bearing: 0,
        zoom: 14,
        duration: 1800,
      });
    }
  }, [isNavigating, originPoint]);

  if (!token) return <div role="status" className="flex h-full w-full items-center justify-center bg-slate-950 p-6 text-center text-sm text-slate-200">Isi NEXT_PUBLIC_MAPBOX_TOKEN di .env.local, kemudian restart frontend.</div>;

  return (
    <div className="relative h-full w-full overflow-hidden bg-slate-200">
      <Map
        ref={mapRef}
        mapboxAccessToken={token}
        initialViewState={{ latitude: center.lat, longitude: center.lng, zoom, pitch: 45, bearing: -15 }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        style={{ width: '100%', height: '100%', position: 'absolute', inset: 0, zIndex: 0 }}
        onClick={() => setSelectedId(null)}
        onError={() => setError(true)}
        onLoad={() => setError(false)}
      >
        <NavigationControl position="top-right" showCompass={false} />
        {/* Titik Biru GPS (Asal) */}
        {originPoint && (
          <Marker latitude={originPoint.lat} longitude={originPoint.lng} anchor="center">
            <span role="img" aria-label="Titik asal" className="block h-5 w-5 rounded-full border-[3px] border-white bg-blue-600 shadow-lg ring-4 ring-blue-500/30" />
          </Marker>
        )}

        {/* Ruas Jalan Zona Banjir (Opsional melalui filter layer) */}
        {showSegments && segments.map((segment) => (
          <MapPolyline key={segment.id} id={`segment-${segment.id}`} path={segment.path} color={ZONES[segment.zone].color} />
        ))}

        {/* Garis Rute (MapPolyline) & Pin Merah (Tujuan) */}
        {routePath.length >= 2 && (
          <>
            <MapPolyline
              id="florence-route"
              path={routePath}
              color={isNavigating ? '#10B981' : '#2563EB'}
              weight={isNavigating ? 8 : 7}
            />
            <Marker
              latitude={routePath[routePath.length - 1].lat}
              longitude={routePath[routePath.length - 1].lng}
              anchor="bottom"
            >
              <div className="flex flex-col items-center">
                <span className="rounded-md bg-red-600 px-2 py-0.5 text-[10px] font-bold text-white shadow-md">
                  Tujuan
                </span>
                <span className="text-2xl drop-shadow-md" role="img" aria-label="Pin Merah Tujuan">📍</span>
              </div>
            </Marker>
          </>
        )}
        {selected && <Popup latitude={selected.position.lat} longitude={selected.position.lng} anchor="top" closeOnClick={false} onClose={() => setSelectedId(null)}>
          <div className="max-w-52 text-sm text-slate-900"><h2 className="font-bold">{selected.name ?? selected.id}</h2><p>{ZONES[selected.zone].label}</p><p>Tinggi air: {selected.waterCm == null ? 'Belum tersedia' : `${selected.waterCm} cm`}</p></div>
        </Popup>}
      </Map>

      {/* Kanan atas: Kontrol lapisan & legenda (Responsif: minimal di mobile, lengkap di desktop) */}
      <div className="pointer-events-none absolute right-4 top-36 md:right-6 md:top-36 z-10 flex flex-col items-end gap-2 sm:gap-3 max-w-[calc(100%-2rem)] md:w-56">
        {statusMessage && <div className="pointer-events-auto">{statusMessage}</div>}
        {error && (
          <p role="alert" className="pointer-events-auto rounded-2xl bg-red-950/95 p-3 text-xs text-white shadow-xl">
            Mapbox gagal memuat data. Periksa koneksi atau token.
          </p>
        )}
        <fieldset className="pointer-events-auto hidden md:block rounded-2xl border border-white/50 bg-white/90 p-3 text-xs text-slate-700 shadow-xl backdrop-blur-md">
          <legend className="sr-only">Lapisan peta</legend>
          <label className="flex min-h-6 items-center gap-2 cursor-pointer font-medium">
            <input
              type="checkbox"
              checked={showSegments}
              onChange={(e) => setShowSegments(e.target.checked)}
              className="h-4 w-4 rounded text-blue-600 focus:ring-blue-500"
            />
            Zona banjir ruas jalan
          </label>
        </fieldset>
        <details className="pointer-events-auto hidden md:block max-w-52 rounded-2xl border border-white/50 bg-white/90 p-3 text-xs text-slate-700 shadow-xl backdrop-blur-md">
          <summary className="cursor-pointer font-bold">Legenda zona</summary>
          <ul className="mt-2 space-y-2">
            {Object.entries(ZONES).map(([zone, value]) => (
              <li key={zone} className="flex items-center gap-2">
                <span aria-hidden="true" className="h-3 w-3 shrink-0 rounded-full" style={{ background: value.color }} />
                {value.label}
              </li>
            ))}
            <li>━ Hijau/Biru: Rute rekomendasi</li>
          </ul>
        </details>
      </div>
    </div>
  );
}
