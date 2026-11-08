// Tipe data segmen jalan banjir terisolasi
export interface FloodedRoadSegment {
  id: string;
  name: string;
  start: { lng: number; lat: number };
  end: { lng: number; lat: number };
  center: { lng: number; lat: number };
  peakCm: number;
  severityGrade: 'extreme' | 'very-critical' | 'critical' | 'moderate' | 'safe';
  badgeLabel: string;
  lineColor: string;
  notes: string;
  sourceUrl?: string;
  coordinates: [number, number][];
}

// Tipe data segmen jalan spillover kemacetan domino
export interface CascadingRoute {
  id: string;
  spotId: string;
  tier: 'orange' | 'yellow';
  name: string;
  coordinates: [number, number][];
}

/**
 * Helper Function: simulateCascadingTraffic
 * Menerima segmen banjir aktif, memfilter dan menghasilkan GeoJSON garis spillover kemacetan:
 * - Tier 'orange' (100 - 400 meter): Antrean kendaraan terjebak / putar balik (Macet Berat)
 * - Tier 'yellow' (400 - 800 meter): Arus pengalihan lalu lintas ke koridor sekitar (Padat Merayap)
 * Dipengaruhi oleh faktor waktu & intensitas banjir saat ini.
 */
export function simulateCascadingTraffic(
  floodSegments: FloodedRoadSegment[],
  cascadingRoutes: CascadingRoute[],
  waterFactor: number
) {
  // Hanya aktifkan spillover jika air sudah mulai menggenangi aspal (waterFactor > 0.20)
  if (waterFactor < 0.20 || floodSegments.length === 0) {
    return {
      type: 'FeatureCollection' as const,
      features: [],
    };
  }

  const activeSpotIds = new Set(floodSegments.map((s) => s.id));

  // Filter rute kemacetan yang spot induknya sedang aktif kebanjiran
  const relevantRoutes = cascadingRoutes.filter((r) => activeSpotIds.has(r.spotId));

  const features = relevantRoutes
    .filter((r) => {
      // Pada fase genangan sedang (0.20 - 0.45), baru antrean dekat (orange) yang muncul
      if (waterFactor < 0.45) {
        return r.tier === 'orange';
      }
      // Pada fase puncak (waterFactor >= 0.45), antrean dekat (orange) dan pengalihan luar (yellow) muncul serentak
      return true;
    })
    .map((r) => {
      return {
        type: 'Feature' as const,
        id: r.id,
        geometry: {
          type: 'LineString' as const,
          coordinates: r.coordinates,
        },
        properties: {
          id: r.id,
          spotId: r.spotId,
          tier: r.tier,
          name: r.name,
          color: r.tier === 'orange' ? '#f97316' : '#eab308',
          width: r.tier === 'orange' ? 5 : 4,
          opacity: r.tier === 'orange' ? 0.92 : 0.82,
        },
      };
    });

  return {
    type: 'FeatureCollection' as const,
    features,
  };
}
