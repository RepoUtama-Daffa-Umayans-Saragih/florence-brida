'use client';

import { Source, Layer } from 'react-map-gl/mapbox';
import type { MapPosition } from './FloodMap';

export interface MapPolylineProps {
  id: string;
  path: MapPosition[];
  color: string;
  weight?: number;
  opacity?: number;
}

/** GeoJSON uses [longitude, latitude]; React updates source/layer as props change. */
export default function MapPolyline({ id, path, color, weight = 5, opacity = 0.8 }: MapPolylineProps) {
  if (path.length < 2) return null;
  return (
    <Source id={id} type="geojson" data={{ type: 'Feature', properties: {}, geometry: { type: 'LineString', coordinates: path.map((p) => [p.lng, p.lat]) } }}>
      <Layer id={`${id}-line`} type="line" layout={{ 'line-join': 'round', 'line-cap': 'round' }} paint={{ 'line-color': color, 'line-width': weight, 'line-opacity': opacity }} />
    </Source>
  );
}
