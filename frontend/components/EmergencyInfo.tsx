'use client';

import { useEffect, useState } from 'react';

type RecordData = Record<string, unknown>;
interface Stored { savedAt: string; zones: RecordData[]; safePoints: RecordData[] }
const KEY = 'florence:emergency:v1';

export default function EmergencyInfo() {
  const [data, setData] = useState<Stored | null>(null);
  const [offline, setOffline] = useState(false);
  useEffect(() => {
    let active = true;
    try { const cached = localStorage.getItem(KEY); if (cached) setData(JSON.parse(cached)); } catch { /* Storage can be disabled. */ }
    const base = (process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001').replace(/\/$/, '');
    async function refresh() {
      setOffline(!navigator.onLine);
      if (!navigator.onLine) return;
      const endpoints = ['/api/v1/zones/snapshot', '/api/v1/safe-points'];
      const results = await Promise.allSettled(endpoints.map(async (path) => {
        const response = await fetch(base + path, { signal: AbortSignal.timeout(8000) });
        if (!response.ok) throw new Error(String(response.status));
        return response.json();
      }));
      if (!active) return;
      // Preserve each endpoint's own timestamp, including cached network responses.
      setData((previous) => {
        const zonesResult = results[0];
        const pointsResult = results[1];
        const zones = zonesResult.status === 'fulfilled' && Array.isArray(zonesResult.value.nodes)
          ? zonesResult.value.nodes.map((n: RecordData) => ({ ...n, snapshotAt: zonesResult.value.ts })) : previous?.zones ?? [];
        const safePoints = pointsResult.status === 'fulfilled' && Array.isArray(pointsResult.value.items)
          ? pointsResult.value.items.map((p: RecordData) => ({ ...p, snapshotAt: pointsResult.value.ts })) : previous?.safePoints ?? [];
        const next = { savedAt: previous?.savedAt ?? new Date().toISOString(), zones, safePoints };
        try { localStorage.setItem(KEY, JSON.stringify(next)); } catch { /* Quota/unavailable storage. */ }
        return next;
      });
    }
    void refresh();
    const timer = window.setInterval(() => void refresh(), 60_000);
    window.addEventListener('online', refresh);
    const onOffline = () => setOffline(true);
    window.addEventListener('offline', onOffline);
    return () => { active = false; clearInterval(timer); window.removeEventListener('online', refresh); window.removeEventListener('offline', onOffline); };
  }, []);

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-900">
      <h2 className="font-bold">Informasi darurat {offline ? '· Offline' : ''}</h2>
      <p className="mt-2 text-xs text-amber-900">Data terakhir tersimpan, bukan jaminan kondisi terkini. Peta Mapbox membutuhkan internet. Ikuti arahan petugas.</p>
      <h3 className="mt-4 font-semibold">Status titik pantau</h3>
      {!data?.zones.length && <p>Belum ada data zona tersimpan. Buka aplikasi saat online terlebih dahulu.</p>}
      <ul className="mt-2 space-y-2">{data?.zones.map((n) => <li key={String(n.id)} className="border-b pb-2">{String(n.name ?? n.id)}: {String(n.zone ?? 'Tidak diketahui')} · {String(n.waterCm ?? '—')} cm<small className="block">Waktu snapshot: {String(n.snapshotAt ?? 'Tidak tersedia')}</small></li>)}</ul>
      <h3 className="mt-4 font-semibold">Safe Point</h3>
      {!data?.safePoints.length && <p>Belum ada daftar Safe Point tersimpan. Jangan menganggap daftar kosong berarti tidak ada posko.</p>}
      <ul className="mt-2 space-y-2">{data?.safePoints.map((p) => <li key={String(p.id)} className="border-b border-slate-100 pb-2.5"><strong>{String(p.name)}</strong><p className="text-xs text-slate-600 mt-0.5">{String(p.address ?? '')}</p><p className="text-xs text-slate-500 mt-0.5">{p.isOpen ? 'Terakhir tercatat buka' : 'Terakhir tercatat tutup'} · kapasitas {String(p.capacity ?? '—')}</p>{typeof p.contactPhone === 'string' && <a className="inline-flex min-h-[44px] items-center gap-1.5 rounded-xl bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700 mt-1.5 active:bg-blue-100" href={`tel:${p.contactPhone}`}>📞 {p.contactPhone}</a>}<small className="block text-[10px] text-slate-400 mt-1">Waktu snapshot: {String(p.snapshotAt ?? 'Tidak tersedia')}</small></li>)}</ul>
    </section>
  );
}
