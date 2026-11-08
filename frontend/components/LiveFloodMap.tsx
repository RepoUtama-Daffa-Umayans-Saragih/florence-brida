'use client';

import { useEffect, useState } from 'react';
import FloodMap, { CctvMapNode, FlyTarget, MapPosition, RoadMapSegment } from './FloodMap';

interface Snapshot {
  ts: string;
  nodes: (Omit<CctvMapNode, 'zone' | 'waterCm'> & { zone: CctvMapNode['zone'] | null; waterCm: number | null })[];
  segments: RoadMapSegment[];
}

interface LiveFloodMapProps {
  flyTo?: FlyTarget | null;
  originPoint?: MapPosition | null;
  routePath?: MapPosition[];
  isNavigating?: boolean;
}

export default function LiveFloodMap({ flyTo, originPoint, routePath = [], isNavigating = false }: LiveFloodMapProps) {
  const [snapshot, setSnapshot] = useState<Snapshot | null>(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const base = (process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001').replace(/\/$/, '');

    // 1. Fetch snapshot langsung saat mount agar data node & segment tidak kosong jika SSE tertunda
    fetch(`${base}/api/v1/zones/snapshot`, { signal: AbortSignal.timeout(6000) })
      .then((res) => {
        if (!res.ok) throw new Error(String(res.status));
        return res.json() as Promise<Snapshot>;
      })
      .then((data) => {
        if (Array.isArray(data.nodes) && Array.isArray(data.segments)) {
          setSnapshot(data);
          setConnected(true);
        }
      })
      .catch(() => {});

    // 2. Stream SSE untuk live update
    const stream = new EventSource(`${base}/api/v1/zones/stream`);
    stream.addEventListener('zone.update', (event) => {
      try {
        const data = JSON.parse((event as MessageEvent).data) as Snapshot;
        if (!Array.isArray(data.nodes) || !Array.isArray(data.segments)) throw new Error('Invalid snapshot');
        setSnapshot(data);
        setConnected(true);
      } catch { setConnected(false); }
    });
    stream.addEventListener('zone.error', () => setConnected(false));
    stream.onerror = () => setConnected(false);
    return () => stream.close();
  }, []);

  // Unknown readings are never presented as GREEN/safe.
  const nodes: CctvMapNode[] = (snapshot?.nodes ?? []).flatMap((node) => node.zone == null ? [] : [{ ...node, zone: node.zone, waterCm: node.waterCm ?? undefined }]);
  return (
    <div className="relative h-full w-full">
      <FloodMap
        nodes={nodes}
        segments={snapshot?.segments ?? []}
        routePath={routePath}
        flyTo={flyTo}
        originPoint={originPoint}
        isNavigating={isNavigating}
        statusMessage={
          <p role="status" className="rounded-2xl bg-white/95 md:bg-white/90 px-3 py-1.5 text-[10px] sm:text-xs text-slate-700 shadow-xl backdrop-blur-xl border border-white/50">
            {connected ? '● Live Sensor' : snapshot ? '○ Data offline' : 'Menghubungkan…'}
            {snapshot && <span className="hidden sm:inline"> · {new Date(snapshot.ts).toLocaleTimeString('id-ID')}</span>}
          </p>
        }
      />
    </div>
  );
}
