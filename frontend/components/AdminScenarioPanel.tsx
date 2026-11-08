import Link from 'next/link';

/** Posisi diatur oleh pembungkus di page.tsx; panel terbuka ke atas agar tidak menabrak sheet rute. */
export default function AdminScenarioPanel() {
  return (
    <details className="relative w-fit">
      <summary className="glass-action cursor-pointer list-none bg-slate-950/95 text-xs tracking-wide text-slate-100 shadow-2xl backdrop-blur-xl hover:bg-slate-900 active:scale-95">
        God Mode
      </summary>
      <div className="absolute bottom-full left-0 mb-4 max-h-[60svh] w-72 max-w-[calc(100vw-3rem)] space-y-4 overflow-y-auto rounded-3xl bg-slate-950/95 p-4 text-slate-100 shadow-2xl backdrop-blur-xl">
        <div className="border-b border-slate-800 pb-2">
          <Link
            href="/dashboard/history"
            className="flex items-center justify-between rounded-xl bg-blue-600/30 border border-blue-500/40 p-2.5 text-xs font-bold text-blue-200 transition hover:bg-blue-600/50"
          >
            <span className="flex items-center gap-2">
              <span>⏳</span>
              <span>Mesin Waktu Banjir</span>
            </span>
            <span>→</span>
          </Link>
        </div>
        <p className="text-xs text-amber-300">Pratinjau saja · tidak mengubah sensor atau BMKG.</p>
        <fieldset disabled className="space-y-3 opacity-70">
          <legend className="mb-2 text-sm font-semibold">Flood Injector</legend>
          <label className="block text-xs">Node CCTV<input placeholder="T-08" className="mt-1 w-full rounded-xl bg-slate-800 p-3 text-white" /></label>
          <label className="block text-xs">Tinggi air (cm)<input type="number" min="0" placeholder="38" className="mt-1 w-full rounded-xl bg-slate-800 p-3 text-white" /></label>
          <button className="glass-action w-full bg-blue-600">Injeksi belum terhubung</button>
        </fieldset>
        <fieldset disabled className="space-y-2 opacity-70"><legend className="mb-2 text-sm font-semibold">BMKG Override</legend><select aria-label="Skenario cuaca BMKG" className="min-h-11 w-full rounded-xl bg-slate-800 p-3"><option>Hujan lebat / petir</option><option>Hujan sedang</option><option>Cerah</option></select><p className="text-xs text-slate-300">Override backend belum tersedia.</p></fieldset>
      </div>
    </details>
  );
}
