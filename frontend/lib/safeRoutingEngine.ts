export interface PointCoord {
  lng: number;
  lat: number;
  name?: string;
}

export interface HazardSegment {
  id: string;
  name: string;
  peakCm: number;
  currentCm?: number;
  severityGrade?: string;
  coordinates: [number, number][];
}

export interface CascadingTrafficRef {
  id: string;
  spotId: string;
  tier: 'orange' | 'yellow';
  name: string;
  coordinates: [number, number][];
}

export interface SafeRouteResult {
  success: boolean;
  geometry: {
    type: 'LineString';
    coordinates: [number, number][];
  };
  distanceMeters: number;
  baseDurationSeconds: number;
  penaltySeconds: number;
  totalDurationSeconds: number;
  classification: 'WHITE_PRIORITY' | 'YELLOW_WARNING' | 'BLOCKED_RED';
  avoidedRedCount: number;
  avoidedRedNames: string[];
  yellowAlerts: { name: string; penaltyMinutes: number }[];
  warningMessage?: string;
  usedBypassWaypoint?: PointCoord;
  errorMessage?: string;
}

/**
 * Utilitas Spasial Berperforma Tinggi (Ultra-Fast Native Spatial Geometry)
 * Didesain khusus agar tidak membebani main thread atau membuat Next.js hang saat SSR/compiling.
 */
export function distanceMeters(p1: [number, number], p2: [number, number]): number {
  const dLat = (p2[1] - p1[1]) * 111320;
  const dLng = (p2[0] - p1[0]) * 111320 * Math.cos((p1[1] * Math.PI) / 180);
  return Math.sqrt(dLat * dLat + dLng * dLng);
}

export function pointToSegmentDistMeters(
  p: [number, number],
  a: [number, number],
  b: [number, number]
): number {
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  const lenSq = dx * dx + dy * dy;
  if (lenSq === 0) return distanceMeters(p, a);

  let t = ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / lenSq;
  t = Math.max(0, Math.min(1, t));
  const proj: [number, number] = [a[0] + t * dx, a[1] + t * dy];
  return distanceMeters(p, proj);
}

export interface BoundingBox {
  minLng: number;
  minLat: number;
  maxLng: number;
  maxLat: number;
}

export function computeBBox(coords: [number, number][], paddingMeters = 0): BoundingBox {
  let minLng = Infinity;
  let minLat = Infinity;
  let maxLng = -Infinity;
  let maxLat = -Infinity;

  for (const c of coords) {
    if (c[0] < minLng) minLng = c[0];
    if (c[0] > maxLng) maxLng = c[0];
    if (c[1] < minLat) minLat = c[1];
    if (c[1] > maxLat) maxLat = c[1];
  }

  // Konversi padding meter ke derajat (~111.32 km per derajat)
  const degPadding = paddingMeters / 111320;
  return {
    minLng: minLng - degPadding,
    minLat: minLat - degPadding,
    maxLng: maxLng + degPadding,
    maxLat: maxLat + degPadding,
  };
}

export function bboxesOverlap(b1: BoundingBox, b2: BoundingBox): boolean {
  return !(
    b1.maxLng < b2.minLng ||
    b1.minLng > b2.maxLng ||
    b1.maxLat < b2.minLat ||
    b1.minLat > b2.maxLat
  );
}

/**
 * Uji tabrakan spasial antara garis rute dan segmen jalan bahaya dengan Bounding Box pre-filter.
 * Sangat cepat (eksekusi < 1ms untuk 1000 titik).
 */
export function isRouteNearSegment(
  routeCoords: [number, number][],
  routeBBox: BoundingBox,
  segmentCoords: [number, number][],
  segmentBBox: BoundingBox,
  thresholdMeters: number
): boolean {
  if (!bboxesOverlap(routeBBox, segmentBBox)) {
    return false;
  }

  for (const pt of routeCoords) {
    // Quick check: apakah titik berada dalam bounding box segmen
    if (
      pt[0] < segmentBBox.minLng ||
      pt[0] > segmentBBox.maxLng ||
      pt[1] < segmentBBox.minLat ||
      pt[1] > segmentBBox.maxLat
    ) {
      continue;
    }

    for (let i = 0; i < segmentCoords.length - 1; i++) {
      if (pointToSegmentDistMeters(pt, segmentCoords[i], segmentCoords[i + 1]) <= thresholdMeters) {
        return true;
      }
    }
  }

  return false;
}

/**
 * Koridor Bypass Medan yang strategis di dataran kering / jalur elak.
 */
export const MEDAN_SAFE_BYPASS_WAYPOINTS: PointCoord[] = [
  { name: 'Koridor By-pass Sunggal - Pasar 1', lng: 98.6440, lat: 3.5610 },
  { name: 'Koridor Jl. Sei Serayu (Jalur Kering Medan Baru)', lng: 98.6420, lat: 3.5710 },
  { name: 'Koridor Jl. Iskandar Muda (Medan Petisah)', lng: 98.6620, lat: 3.5780 },
  { name: 'Koridor Ringroad Utara / Asrama (Bypass Gatsu)', lng: 98.6250, lat: 3.5820 },
  { name: 'Koridor Jl. AH Nasution (Bypass Simpang Pos)', lng: 98.6630, lat: 3.5360 },
  { name: 'Koridor Jl. Putri Hijau (Medan Barat)', lng: 98.6760, lat: 3.5990 },
];

/**
 * Preset Lokasi Strategis di Medan untuk kemudahan uji coba UI
 */
export const MEDAN_PRESET_LOCATIONS: { [key: string]: PointCoord } = {
  'RS_USU': { name: 'RS Universitas Sumatera Utara', lng: 98.6525, lat: 3.5592 },
  'AUDITORIUM_USU': { name: 'Auditorium USU (Titik Kumpul Evakuasi)', lng: 98.6547, lat: 3.5569 },
  'PINTU_1_USU': { name: 'Pintu 1 USU (Jl. Dr. Mansyur)', lng: 98.6580, lat: 3.5630 },
  'BALAI_KOTA': { name: 'Kantor Walikota Medan (Balai Kota)', lng: 98.6756, lat: 3.5852 },
  'LAPANGAN_MERDEKA': { name: 'Lapangan Merdeka Medan', lng: 98.6775, lat: 3.5898 },
  'SIMPANG_POS': { name: 'Simpang Pos (Flyover Jamin Ginting)', lng: 98.6526, lat: 3.5402 },
  'KAMPUNG_LALANG': { name: 'Simpang Kampung Lalang (TB Simatupang)', lng: 98.6090, lat: 3.5960 },
  'PLAZA_MEDAN_FAIR': { name: 'Plaza Medan Fair (Jl. Gatot Subroto)', lng: 98.6658, lat: 3.5901 },
  'TASBI_RINGROAD': { name: 'Komp. Tasbi / Ringroad Manhattan', lng: 98.6275, lat: 3.5695 },
  'SIMPANG_SUNGGAL': { name: 'Simpang Sunggal - Gatsu', lng: 98.6300, lat: 3.5850 },
};

export interface RouteCalculationParams {
  origin: PointCoord;
  destination: PointCoord;
  floodedSegments: HazardSegment[];
  cascadingRoutes?: CascadingTrafficRef[];
  waterFactor?: number;
  mapboxToken: string;
  travelMode?: 'driving' | 'two-wheeler';
}

/**
 * Fetch Mapbox Directions dengan timeout yang aman (3500ms) untuk mencegah hang
 */
async function fetchMapboxDirections(
  coordinates: PointCoord[],
  token: string,
  alternatives = true
) {
  const coordString = coordinates.map((c) => `${c.lng},${c.lat}`).join(';');
  const altParam = alternatives && coordinates.length === 2 ? 'true' : 'false';
  const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${coordString}?alternatives=${altParam}&geometries=geojson&overview=full&access_token=${token}`;

  const res = await fetch(url, { signal: AbortSignal.timeout(3500) });
  if (!res.ok) {
    throw new Error(`Mapbox API HTTP ${res.status}`);
  }
  return (await res.json()) as {
    code: string;
    routes?: Array<{
      geometry: { coordinates: [number, number][]; type: 'LineString' };
      distance: number;
      duration: number;
    }>;
  };
}

/**
 * Mesin Perhitungan Spasial Rute Bebas Banjir (Spatial Constraint Routing Engine)
 *
 * 1. 🔴 JALAN MERAH: HARUS DIHINDARI 100% (Blokir total via buffer spasial 45m).
 * 2. 🟡 JALAN KUNING: BISA DILEWATI dengan Penalti Waktu & Peringatan UI.
 * 3. ⚪ JALAN PUTIH: PRIORITAS UTAMA (0% penalti, 100% aman & kering).
 */
export async function calculateFloodSafeRoute({
  origin,
  destination,
  floodedSegments,
  cascadingRoutes = [],
  waterFactor = 1.0,
  mapboxToken,
  travelMode = 'driving',
}: RouteCalculationParams): Promise<SafeRouteResult> {
  if (!mapboxToken) {
    return {
      success: false,
      geometry: { type: 'LineString', coordinates: [] },
      distanceMeters: 0,
      baseDurationSeconds: 0,
      penaltySeconds: 0,
      totalDurationSeconds: 0,
      classification: 'BLOCKED_RED',
      avoidedRedCount: 0,
      avoidedRedNames: [],
      yellowAlerts: [],
      errorMessage: 'NEXT_PUBLIC_MAPBOX_TOKEN belum dikonfigurasi di .env.local.',
    };
  }

  // ── 1. KLASIFIKASI SEGMEN JALAN SPASIAL (MERAH & KUNING) ──
  interface PreparedHazard {
    name: string;
    coordinates: [number, number][];
    bbox: BoundingBox;
    isRed: boolean;
  }

  const hazards: PreparedHazard[] = [];
  const redNames: string[] = [];

  for (const seg of floodedSegments) {
    if (!seg.coordinates || seg.coordinates.length < 2) continue;

    const currentCm = seg.currentCm ?? Math.round(seg.peakCm * waterFactor);
    const isRed =
      currentCm >= 40 ||
      seg.severityGrade === 'extreme' ||
      seg.severityGrade === 'very-critical' ||
      (seg.peakCm >= 40 && waterFactor >= 0.35);

    const threshold = isRed ? 45 : 35;
    const bbox = computeBBox(seg.coordinates, threshold);

    if (isRed) {
      redNames.push(seg.name);
    }

    hazards.push({
      name: seg.name,
      coordinates: seg.coordinates,
      bbox,
      isRed,
    });
  }

  // Tambahkan rute kemacetan spillover ke daftar kuning
  for (const casc of cascadingRoutes) {
    if (!casc.coordinates || casc.coordinates.length < 2) continue;
    const bbox = computeBBox(casc.coordinates, 30);
    hazards.push({
      name: casc.name,
      coordinates: casc.coordinates,
      bbox,
      isRed: false,
    });
  }

  const redHazards = hazards.filter((h) => h.isRed);
  const yellowHazards = hazards.filter((h) => !h.isRed);

  // Verifikasi apakah titik Start atau Destinasi berada tepat di dalam genangan merah
  const originCoord: [number, number] = [origin.lng, origin.lat];
  const destCoord: [number, number] = [destination.lng, destination.lat];

  for (const red of redHazards) {
    for (let i = 0; i < red.coordinates.length - 1; i++) {
      const distStart = pointToSegmentDistMeters(originCoord, red.coordinates[i], red.coordinates[i + 1]);
      const distDest = pointToSegmentDistMeters(destCoord, red.coordinates[i], red.coordinates[i + 1]);

      if (distStart <= 45 || distDest <= 45) {
        const trapped = distStart <= 45 ? origin.name || 'Titik Asal' : destination.name || 'Titik Tujuan';
        return {
          success: false,
          geometry: { type: 'LineString', coordinates: [] },
          distanceMeters: 0,
          baseDurationSeconds: 0,
          penaltySeconds: 0,
          totalDurationSeconds: 0,
          classification: 'BLOCKED_RED',
          avoidedRedCount: redHazards.length,
          avoidedRedNames: redNames,
          yellowAlerts: [],
          errorMessage: `⛔ AKSES DITUTUP TOTAL: ${trapped} berada tepat di dalam pusat genangan parah (${red.name}). Kendaraan dilarang melintas demi keselamatan. Silakan gunakan titik kumpul aman (Safe Point Evakuasi).`,
        };
      }
    }
  }

  // ── 2. CEK RUTE KANDIDAT UTAMA DARI MAPBOX (DENGAN ALTERNATIVES=TRUE) ──
  interface CandidateEvaluated {
    geometry: { type: 'LineString'; coordinates: [number, number][] };
    distance: number;
    duration: number;
    hasRedCollision: boolean;
    collidedReds: string[];
    yellowCollisions: string[];
    bypassUsed?: PointCoord;
  }

  const evaluatedCandidates: CandidateEvaluated[] = [];

  try {
    const dirData = await fetchMapboxDirections([origin, destination], mapboxToken, true);
    if (dirData.routes && dirData.routes.length > 0) {
      for (const route of dirData.routes) {
        if (!route.geometry?.coordinates || route.geometry.coordinates.length < 2) continue;

        const routeCoords = route.geometry.coordinates;
        const routeBBox = computeBBox(routeCoords, 10);

        // Uji tabrakan terhadap zona merah
        const collidedReds: string[] = [];
        for (const red of redHazards) {
          if (isRouteNearSegment(routeCoords, routeBBox, red.coordinates, red.bbox, 45)) {
            collidedReds.push(red.name);
          }
        }

        // Uji tabrakan terhadap zona kuning
        const yellowCollisions: string[] = [];
        for (const yel of yellowHazards) {
          if (isRouteNearSegment(routeCoords, routeBBox, yel.coordinates, yel.bbox, 35)) {
            if (!yellowCollisions.includes(yel.name)) {
              yellowCollisions.push(yel.name);
            }
          }
        }

        evaluatedCandidates.push({
          geometry: route.geometry,
          distance: Math.round(route.distance),
          duration: Math.round(route.duration),
          hasRedCollision: collidedReds.length > 0,
          collidedReds,
          yellowCollisions,
        });
      }
    }
  } catch (err) {
    console.warn('Mapbox primary directions warning:', err);
  }

  // Prioritas 1: Cari rute yang 100% bebas dari zona merah
  let safeCandidate = evaluatedCandidates.find((c) => !c.hasRedCollision);

  // ── 3. INJEKSI KORIDOR BYPASS DINAMIS (JIKA SEMUA RUTE UTAMA TERHALANG BANJIR MERAH) ──
  if (!safeCandidate && redHazards.length > 0) {
    // Cari bypass yang tidak tenggelam di zona merah
    const availableBypasses = MEDAN_SAFE_BYPASS_WAYPOINTS.filter((wp) => {
      const pt: [number, number] = [wp.lng, wp.lat];
      return !redHazards.some((red) => {
        for (let i = 0; i < red.coordinates.length - 1; i++) {
          if (pointToSegmentDistMeters(pt, red.coordinates[i], red.coordinates[i + 1]) <= 45) {
            return true;
          }
        }
        return false;
      });
    });

    // Batasi pengujian pada 2 bypass terdekat agar tidak membuat proses hang
    const sortedBypasses = availableBypasses
      .map((bp) => {
        const d1 = distanceMeters(originCoord, [bp.lng, bp.lat]);
        const d2 = distanceMeters([bp.lng, bp.lat], destCoord);
        return { bp, totalDist: d1 + d2 };
      })
      .sort((a, b) => a.totalDist - b.totalDist)
      .slice(0, 2);

    for (const item of sortedBypasses) {
      try {
        const bypassDirData = await fetchMapboxDirections([origin, item.bp, destination], mapboxToken, false);
        const bypassRoute = bypassDirData.routes?.[0];

        if (bypassRoute?.geometry?.coordinates && bypassRoute.geometry.coordinates.length >= 2) {
          const routeCoords = bypassRoute.geometry.coordinates;
          const routeBBox = computeBBox(routeCoords, 10);

          let hasRed = false;
          for (const red of redHazards) {
            if (isRouteNearSegment(routeCoords, routeBBox, red.coordinates, red.bbox, 45)) {
              hasRed = true;
              break;
            }
          }

          if (!hasRed) {
            const yellowCollisions: string[] = [];
            for (const yel of yellowHazards) {
              if (isRouteNearSegment(routeCoords, routeBBox, yel.coordinates, yel.bbox, 35)) {
                if (!yellowCollisions.includes(yel.name)) {
                  yellowCollisions.push(yel.name);
                }
              }
            }

            safeCandidate = {
              geometry: bypassRoute.geometry,
              distance: Math.round(bypassRoute.distance),
              duration: Math.round(bypassRoute.duration),
              hasRedCollision: false,
              collidedReds: [],
              yellowCollisions,
              bypassUsed: item.bp,
            };
            break;
          }
        }
      } catch {
        // Abaikan dan coba kandidat berikutnya
      }
    }
  }

  // Jika tetap tidak ada rute yang dapat menghindari zona merah
  if (!safeCandidate) {
    const allBlockedNames = Array.from(new Set(redNames));
    return {
      success: false,
      geometry: { type: 'LineString', coordinates: [] },
      distanceMeters: 0,
      baseDurationSeconds: 0,
      penaltySeconds: 0,
      totalDurationSeconds: 0,
      classification: 'BLOCKED_RED',
      avoidedRedCount: redHazards.length,
      avoidedRedNames: allBlockedNames,
      yellowAlerts: [],
      errorMessage: `⛔ TIDAK ADA RUTE AMAN: Seluruh koridor penghubung menuju destinasi terputus oleh genangan parah (${allBlockedNames.slice(0, 3).join(', ')}). Tim SAR & BPBD menyarankan menunda perjalanan.`,
    };
  }

  // ── 4. ANALISIS PENALTI WAKTU & KLASIFIKASI JALAN (PUTIH vs KUNING) ──
  const isYellowTraversed = safeCandidate.yellowCollisions.length > 0;
  const penaltyPerYellow = travelMode === 'two-wheeler' ? 420 : 240; // Penalti 4 atau 7 menit
  const penaltySeconds = safeCandidate.yellowCollisions.length * penaltyPerYellow;
  const totalDurationSeconds = safeCandidate.duration + penaltySeconds;

  const yellowAlerts = safeCandidate.yellowCollisions.map((name) => ({
    name,
    penaltyMinutes: Math.round(penaltyPerYellow / 60),
  }));

  let classification: 'WHITE_PRIORITY' | 'YELLOW_WARNING' = 'WHITE_PRIORITY';
  let warningMessage: string | undefined = undefined;

  if (isYellowTraversed) {
    classification = 'YELLOW_WARNING';
    const penaltyMins = Math.round(penaltySeconds / 60);
    warningMessage = `⚠️ PERINGATAN: Rute melintasi area genangan sedang / antrean lalu lintas (${safeCandidate.yellowCollisions.slice(0, 2).join(', ')}). Waktu tempuh bertambah +${penaltyMins} mnt. ${
      travelMode === 'two-wheeler' ? 'Pengendara motor wajib ekstra berhati-hati.' : 'Gunakan lajur tengah.'
    }`;
  }

  return {
    success: true,
    geometry: safeCandidate.geometry,
    distanceMeters: safeCandidate.distance,
    baseDurationSeconds: safeCandidate.duration,
    penaltySeconds,
    totalDurationSeconds,
    classification,
    avoidedRedCount: redHazards.length,
    avoidedRedNames: redNames,
    yellowAlerts,
    warningMessage,
    usedBypassWaypoint: safeCandidate.bypassUsed,
  };
}
