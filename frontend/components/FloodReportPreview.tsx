export default function FloodReportPreview() {
  return (
    <details className="group">
      <summary className="glass-action cursor-pointer list-none bg-white/95 text-sm text-slate-900 shadow-lg backdrop-blur-xl group-open:fixed group-open:right-5 group-open:top-20 group-open:z-[80]"><span className="group-open:hidden">Lapor banjir</span><span className="hidden group-open:inline">Tutup pratinjau</span></summary>
      <section className="fixed inset-0 z-[70] flex flex-col bg-slate-950 p-5 text-white" aria-label="Pratinjau kamera laporan banjir">
        <header className="flex items-center justify-between"><h2 className="text-lg font-bold">Dokumentasi banjir</h2><span className="rounded-full bg-amber-400/20 px-3 py-2 text-xs text-amber-200">Pratinjau</span></header>
        <div className="my-6 flex flex-1 flex-col items-center justify-center rounded-3xl bg-slate-900 text-center"><svg aria-hidden="true" viewBox="0 0 24 24" className="mb-4 h-16 w-16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 6h4l2-3h4l2 3h4v14H4z"/><circle cx="12" cy="12" r="4"/></svg><p>Kamera belum diaktifkan</p><p className="mt-2 max-w-xs text-sm text-slate-400">Akses kamera dan unggah laporan memerlukan implementasi terpisah. Tidak ada foto yang diambil.</p></div>
        <button disabled className="glass-action bg-slate-800 text-slate-400">Ambil foto · belum tersedia</button>
      </section>
    </details>
  );
}
