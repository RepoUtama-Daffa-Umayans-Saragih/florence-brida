'use client';

import { useState } from 'react';

type SheetLevel = 'peek' | 'half' | 'full';

export interface RouteData {
  source: 'FLORENCE' | 'GOOGLE_ROUTES';
  distanceMeters: number;
  durationSeconds: number;
  warning: string;
  avoidedZones: string[];
}

interface RouteSheetProps {
  route: RouteData | null;
  onStart?: () => void;
}

function formatDuration(seconds: number): string {
  const minutes = Math.round(seconds / 60);
  return `${Math.floor(minutes / 60) > 0 ? `${Math.floor(minutes / 60)} j ` : ''}${minutes % 60} mnt`;
}

export default function RouteSheet({ route, onStart }: RouteSheetProps) {
  const [level, setLevel] = useState<SheetLevel>('half');

  function cycleLevel() {
    setLevel((current) => (current === 'peek' ? 'half' : current === 'half' ? 'full' : 'peek'));
  }

  if (!route) {
    return null;
  }

  const isGoogle = route.source === 'GOOGLE_ROUTES';

  return (
    <div
      className="flex w-full flex-col overflow-hidden transition-[height] duration-300 ease-out motion-reduce:transition-none"
      style={{ height: level === 'peek' ? '8.5rem' : level === 'half' ? '30svh' : '50svh', maxHeight: '50svh' }}
      role="dialog"
      aria-label="Panel rute"
    >
      {/* Drag handle */}
      <div className="flex justify-center -mt-2 pb-1.5">
        <button
          type="button"
          onClick={cycleLevel}
          className="flex h-8 w-full items-center justify-center rounded-t-3xl active:bg-slate-100/50"
          aria-label="Ubah tingkat panel"
        >
          <span className="h-1.5 w-14 rounded-full bg-slate-300" />
        </button>
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto px-1 pb-1">
        {level === 'half' ? (
          <p className="text-center text-xs text-slate-400">Ketuk handle untuk memperbesar / memperkecil</p>
        ) : null}

        {level === 'peek' || level === 'half' ? (
          <section className="mt-1">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs text-slate-500 font-medium">Rute bebas banjir</p>
                <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">{formatDuration(route.durationSeconds)}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-500 font-medium">Jarak tempuh</p>
                <p className="text-lg sm:text-xl font-bold text-slate-700">{(route.distanceMeters / 1000).toFixed(1)} km</p>
              </div>
            </div>
            {level === 'peek' ? null : (
              <div className="mt-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 p-3 text-xs text-amber-900 font-medium">
                ⚠ {route.avoidedZones.length > 0
                  ? `Menghindari: ${route.avoidedZones.join(', ')}`
                  : 'Rute aman dari Zona Merah (terverifikasi AI)'}
              </div>
            )}
          </section>
        ) : null}

        {level === 'full' ? (
          <section className="mt-1 overflow-y-auto space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">Detail Rekomendasi Rute</h2>
            <div className="grid grid-cols-3 gap-2">
              <div className="rounded-2xl bg-slate-50 border border-slate-100 p-2.5 sm:p-3 text-center">
                <p className="text-[11px] text-slate-400 font-medium">Waktu</p>
                <p className="mt-0.5 text-sm sm:text-base font-bold text-slate-900">{formatDuration(route.durationSeconds)}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 border border-slate-100 p-2.5 sm:p-3 text-center">
                <p className="text-[11px] text-slate-400 font-medium">Jarak</p>
                <p className="mt-0.5 text-sm sm:text-base font-bold text-slate-900">{(route.distanceMeters / 1000).toFixed(1)} km</p>
              </div>
              <div className="rounded-2xl bg-slate-50 border border-slate-100 p-2.5 sm:p-3 text-center">
                <p className="text-[11px] text-slate-400 font-medium">Model</p>
                <p className="mt-0.5 text-xs sm:text-sm font-bold text-blue-700">{isGoogle ? 'Lalu Lintas' : 'A* FLORENCE'}</p>
              </div>
            </div>

            <div className="mt-3">
              <h3 className="text-xs font-bold text-slate-600 uppercase tracking-wider">Area Yang Dihindari</h3>
              <ul className="mt-1.5 space-y-1.5">
                {route.avoidedZones.length > 0 ? (
                  route.avoidedZones.map((zone) => (
                    <li key={zone} className="flex items-start gap-2 rounded-xl bg-amber-50 p-2 text-xs text-amber-800">
                      <span aria-hidden>⚠</span> {zone}
                    </li>
                  ))
                ) : (
                  <li className="rounded-xl bg-emerald-50 border border-emerald-100 p-2.5 text-xs font-semibold text-emerald-800 flex items-center gap-2">
                    <span>✓</span> Tidak ada Zona Merah pada koridor rute ini
                  </li>
                )}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-3 text-xs text-slate-600">
              {route.warning}
            </div>
          </section>
        ) : null}

        <div className="mt-auto pt-2">
          <button
            type="button"
            onClick={onStart}
            className="flex h-12 sm:h-14 min-h-[48px] w-full items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-sm sm:text-base font-extrabold text-white shadow-lg shadow-blue-600/25 transition-all hover:from-blue-700 hover:to-indigo-700 active:scale-[0.98]"
          >
            ▶ Mulai Navigasi
          </button>
          <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-400">
            <span>FLORENCE Navigation Engine</span>
            <span>Sumber cuaca: BMKG</span>
          </div>
        </div>
      </div>
    </div>
  );
}
