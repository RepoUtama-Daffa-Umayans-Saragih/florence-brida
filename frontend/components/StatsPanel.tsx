'use client';

import { type FloodedRoadSegment } from '../app/dashboard/history/simulateCascadingTraffic';
import { getDisasterProfile } from '../app/dashboard/history/disasterAnalysisData';

export interface SmartInspectorPanelProps {
  timeMinutes?: number;
  selectedDate?: string;
  selectedZone: FloodedRoadSegment | null;
  onCloseZone: () => void;
  onSelectZone?: (zone: FloodedRoadSegment) => void;
  isSafeState?: boolean;
  onSelectCCTV?: (cctvName: string) => void;
}

export default function StatsPanel({
  timeMinutes = 720,
  selectedDate = '2025-11-27',
  selectedZone,
  onCloseZone,
  isSafeState = false,
  onSelectCCTV,
}: SmartInspectorPanelProps) {
  const isToday =
    selectedDate === 'Hari Ini' ||
    selectedDate === 'today' ||
    selectedDate.toLowerCase().includes('hari ini');
  const isNov27 =
    !isToday && (selectedDate.includes('11-27') || selectedDate.includes('November') || selectedDate.includes('Nov'));
  const isOct11 =
    !isToday && (selectedDate.includes('10-11') || selectedDate.includes('Oktober') || selectedDate.includes('Okt'));

  const effectiveSafeState = isSafeState || isToday || (!isNov27 && !isOct11);

  // Hitung fase waktu
  const isPeak = timeMinutes >= 600 && timeMinutes <= 960; // 10:00 - 16:00
  const isReceding = timeMinutes > 960; // 16:00 - 23:59

  // Faktor perhitungan simulasi air
  const factor = isNov27
    ? timeMinutes < 360
      ? 0.60
      : timeMinutes < 540
      ? 0.70 + (timeMinutes - 360) * 0.001
      : timeMinutes < 780
      ? 0.88 + (timeMinutes - 540) * 0.0005
      : timeMinutes < 1020
      ? 1.0 - (timeMinutes - 780) * 0.0003
      : Math.max(0.65, 0.92 - (timeMinutes - 1020) * 0.0007)
    : isOct11
    ? timeMinutes < 360
      ? 0.08
      : timeMinutes < 540
      ? 0.15 + (timeMinutes - 360) * 0.0012
      : timeMinutes < 780
      ? 0.45 + (timeMinutes - 540) * 0.002
      : timeMinutes < 960
      ? 0.95 - (timeMinutes - 780) * 0.001
      : timeMinutes < 1200
      ? 0.70 - (timeMinutes - 960) * 0.002
      : Math.max(0.1, 0.20 - (timeMinutes - 1200) * 0.0004)
    : isPeak
    ? 1.0
    : 0.5;

  // Status peringatan Kota (Kondisi A)
  let statusCityLabel = 'SIAGA 1 (STATUS KRITIS - DARURAT BANJIR)';
  let statusCityColor = 'text-red-400 bg-red-500/10 border-red-500/30';

  if (effectiveSafeState) {
    statusCityLabel = 'KONDISI NORMAL';
    statusCityColor = 'bg-emerald-100 text-emerald-800 border-emerald-300';
  } else if (!isNov27 && isOct11) {
    statusCityLabel = isPeak
      ? 'SIAGA 2 (LUAPAN BABURA & DELI)'
      : isReceding
      ? 'WASPADA (BERANGSUR SURUT)'
      : 'WASPADA (AWAL GENANGAN)';
    statusCityColor = isPeak
      ? 'text-amber-400 bg-amber-500/10 border-amber-500/30'
      : isReceding
      ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30'
      : 'text-blue-400 bg-blue-500/10 border-blue-500/30';
  }

  // Profil Bencana Ruas Terpilih (Kondisi B)
  const profile = selectedZone
    ? getDisasterProfile(selectedZone.id, selectedZone.name)
    : null;

  const currentZoneCm = selectedZone
    ? Math.round(selectedZone.peakCm * factor)
    : 0;

  return (
    <aside
      role="region"
      aria-label="Smart Inspector Panel - Decision Support System"
      className="
        fixed sm:absolute z-30 transition-all duration-300
        /* Mobile: Menempel rapi di atas panel timeline bawah */
        inset-x-3 bottom-36 sm:bottom-auto
        /* Desktop: Melayang rapi di kanan atas, tinggi dibatasi agar TIDAK MENIMPA timeline bawah */
        sm:top-20 sm:right-6 sm:left-auto sm:w-[380px] lg:w-[400px] sm:max-w-md
        max-h-[52vh] sm:max-h-[calc(100vh-14.5rem)]
        flex flex-col
        rounded-2xl border border-slate-800/90
        bg-slate-900/90 backdrop-blur-md
        p-4 sm:p-5
        shadow-2xl shadow-black/80
        text-white overflow-hidden
      "
    >
      {/* ─────────────────────────────────────────────────────────────
          KONDISI B: RUAS JALAN DIKLIK (selectedZone !== null)
          Tampilkan 'Diagnosis & Mitigasi' (Decision Support System)
         ───────────────────────────────────────────────────────────── */}
      {selectedZone && profile ? (
        <div className="flex flex-col h-full overflow-hidden">
          {/* Header Card (Fixed) */}
          <div className="flex items-start justify-between border-b border-slate-800/80 pb-3 shrink-0">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-600/20 text-base text-red-400 border border-red-500/30">
                🔍
              </span>
              <div>
                <h2 className="text-sm font-extrabold tracking-tight text-white">
                  Diagnosis &amp; Mitigasi
                </h2>
                <p className="text-[11px] text-blue-400 font-semibold">
                  Decision Support System (DSS)
                </p>
              </div>
            </div>

            {/* Tombol Tutup / Reset State */}
            <button
              type="button"
              onClick={onCloseZone}
              className="
                flex h-7 w-7 items-center justify-center rounded-lg
                bg-slate-800/80 text-slate-300 border border-slate-700/60
                hover:bg-red-600 hover:text-white transition active:scale-95 cursor-pointer
              "
              aria-label="Tutup panel diagnosis dan kembali ke ringkasan kota"
              title="Kembali ke Ringkasan Kota"
            >
              ✕
            </button>
          </div>

          {/* Area Konten Diagnosis yang Dapat Digulir Mandiri */}
          <div className="flex-1 min-h-0 overflow-y-auto space-y-3 pt-3 pr-1 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-950/20 [&::-webkit-scrollbar-thumb]:bg-slate-700/60 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-600">
            {/* Profil Ruas Jalan Terpilih */}
            <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Ruas Jalan Terpantau
              </span>
              <h3 className="text-sm font-black text-white mt-0.5 leading-snug">
                {selectedZone.name}
              </h3>

              {/* Badges Status & Kedalaman Air */}
              <div className="mt-2 flex items-center gap-2 flex-wrap">
                <span className="rounded-lg bg-red-600/20 border border-red-500/40 px-2 py-0.5 text-xs font-black text-red-400 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-500 animate-ping" />
                  Air: {currentZoneCm} cm
                </span>
                <span className="rounded-lg bg-slate-800 px-2 py-0.5 text-[11px] font-bold text-slate-300 border border-slate-700">
                  Rekor: {selectedZone.peakCm} cm
                </span>
                <span className="rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 text-[10px] font-bold">
                  {profile.priorityStatus}
                </span>
              </div>
            </div>

            {/* Section 1: Diagnosis Akar Masalah */}
            <div className="rounded-xl border border-red-900/40 bg-red-950/20 p-3">
              <div className="flex items-center gap-2 text-red-400 mb-1">
                <span className="text-xs">⚠️</span>
                <h4 className="text-xs font-extrabold uppercase tracking-wide">
                  Diagnosis Akar Masalah
                </h4>
              </div>
              <p className="text-xs leading-relaxed text-slate-200">
                {profile.rootCause}
              </p>
            </div>

            {/* Section 2: Rekomendasi Tindakan (Jangka Pendek & Panjang) */}
            <div className="space-y-2">
              {/* Solusi Taktis (Jangka Pendek / Segera) */}
              <div className="rounded-xl border border-amber-900/40 bg-amber-950/20 p-3">
                <div className="flex items-center gap-2 text-amber-400 mb-1">
                  <span className="text-xs">⚡</span>
                  <h4 className="text-xs font-extrabold uppercase tracking-wide">
                    Solusi Taktis (Jangka Pendek)
                  </h4>
                </div>
                <p className="text-xs leading-relaxed text-amber-100">
                  {profile.shortTermMitigation}
                </p>
              </div>

              {/* Solusi Strategis (Jangka Panjang / Rekonstruksi) */}
              <div className="rounded-xl border border-blue-900/40 bg-blue-950/20 p-3">
                <div className="flex items-center gap-2 text-blue-400 mb-1">
                  <span className="text-xs">🏗️</span>
                  <h4 className="text-xs font-extrabold uppercase tracking-wide">
                    Solusi Strategis (Jangka Panjang)
                  </h4>
                </div>
                <p className="text-xs leading-relaxed text-blue-100">
                  {profile.longTermMitigation}
                </p>
              </div>
            </div>

            {/* Section 3: Disposisi Tim Lapangan & Estimasi Surut */}
            <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3 text-xs space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Tim Lapangan:</span>
                <span className="font-bold text-slate-200 text-right truncate max-w-[190px]">
                  {profile.assignedTeam}
                </span>
              </div>
              <div className="flex items-center justify-between border-t border-slate-800/80 pt-1.5">
                <span className="text-slate-400">Estimasi Surut:</span>
                <span className="font-extrabold text-emerald-400">
                  {profile.estimatedRecedeHours}
                </span>
              </div>
            </div>
          </div>

          {/* Action Footer (Fixed di bagian bawah) */}
          <div className="pt-2.5 mt-2 border-t border-slate-800/80 flex items-center gap-2 shrink-0">
            {selectedZone.sourceUrl && (
              <a
                href={selectedZone.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex-1 text-center py-2 px-3 rounded-xl border border-blue-500/40
                  bg-blue-600/20 hover:bg-blue-600/40 text-blue-300 font-bold text-xs transition
                "
              >
                ↗ Sumber Berita
              </a>
            )}
            <button
              type="button"
              onClick={onCloseZone}
              className="
                flex-1 text-center py-2 px-3 rounded-xl border border-slate-700
                bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition cursor-pointer
              "
            >
              ← Kembali ke Kota
            </button>
          </div>
        </div>
      ) : (
        /* ─────────────────────────────────────────────────────────────
            KONDISI A: DEFAULT (selectedZone === null)
            Tampilkan 'Ringkasan Kota' (City-wide Flood Overview)
           ───────────────────────────────────────────────────────────── */
        <div className="flex flex-col h-full overflow-hidden">
          {/* Header Panel (Fixed) */}
          <div className="border-b border-slate-800/80 pb-3 shrink-0 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600/20 text-sm text-blue-400 border border-blue-500/30">
                  🏙️
                </span>
                <div>
                  <h2 className="text-sm font-extrabold tracking-tight text-white leading-tight">
                    Ringkasan Kota
                  </h2>
                  <p className="text-[10px] text-slate-400">
                    Overview Bencana Kota Medan
                  </p>
                </div>
              </div>
              <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] font-bold text-slate-300 border border-slate-700">
                {effectiveSafeState ? (selectedDate === 'Hari Ini' ? 'Hari Ini' : selectedDate) : isNov27 ? '27 Nov 2025' : '11 Okt 2025'}
              </span>
            </div>

            {/* Status Fase Saat Ini */}
            <div className={`flex items-center gap-2 rounded-xl border px-3 py-1.5 text-xs font-bold ${statusCityColor}`}>
              <span className="relative flex h-2 w-2 shrink-0">
                <span className={`absolute inline-flex h-full w-full rounded-full bg-current ${effectiveSafeState ? 'opacity-30' : 'animate-ping opacity-75'}`} />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-current" />
              </span>
              <span className="leading-tight truncate">{statusCityLabel}</span>
            </div>
          </div>

          {/* Area Konten Scrollable: Metrik 4-Grid, Pantauan CCTV, dan DSS */}
          <div className="flex-1 min-h-0 overflow-y-auto space-y-3 pt-3 pr-1 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-950/20 [&::-webkit-scrollbar-thumb]:bg-slate-700/60 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-600">
            {/* Key Metrics KPI Grid (4 Grid yang Rapi & Proporsional) */}
            <div className="grid grid-cols-2 gap-2 sm:gap-2.5 shrink-0">
              {/* KPI 1: Ruas Tergenang */}
              <div className="rounded-xl border border-slate-800/90 bg-slate-950/70 p-2.5 sm:p-3 hover:border-slate-700 transition">
                <span className="text-[10px] text-slate-400 block font-medium">Ruas Tergenang</span>
                <span className="text-lg sm:text-xl font-black text-white font-mono mt-0.5 block leading-tight">
                  {effectiveSafeState ? '0 Titik' : isNov27 ? '7 Ruas' : '7 Titik'}
                </span>
                <span className={`text-[9px] font-bold block mt-0.5 truncate ${effectiveSafeState ? 'text-emerald-400' : 'text-red-400'}`}>
                  {effectiveSafeState ? 'Seluruh Arteri Lancar' : isNov27 ? '5 Arteri Kritis' : 'Luapan Sedang'}
                </span>
              </div>

              {/* KPI 2: Puncak Genangan */}
              <div className="rounded-xl border border-slate-800/90 bg-slate-950/70 p-2.5 sm:p-3 hover:border-slate-700 transition">
                <span className="text-[10px] text-slate-400 block font-medium">Puncak Genangan</span>
                <span className={`text-lg sm:text-xl font-black font-mono mt-0.5 block leading-tight ${effectiveSafeState ? 'text-emerald-400' : 'text-red-400'}`}>
                  {effectiveSafeState ? '0.00 m' : isNov27 ? '1.30 m' : '0.60 m'}
                </span>
                <span className="text-[9px] text-slate-400 block mt-0.5 truncate">
                  {effectiveSafeState ? 'Ketinggian Normal (Aman)' : isNov27 ? 'Pintu 1 USU' : 'Babura / RS USU'}
                </span>
              </div>

              {/* KPI 3: Laporan Tervalidasi */}
              <div className="rounded-xl border border-slate-800/90 bg-slate-950/70 p-2.5 sm:p-3 hover:border-slate-700 transition">
                <span className="text-[10px] text-slate-400 block font-medium">Laporan Tervalidasi</span>
                <span className={`text-lg sm:text-xl font-black font-mono mt-0.5 block leading-tight ${effectiveSafeState ? 'text-slate-200' : 'text-blue-400'}`}>
                  {effectiveSafeState ? '0' : isNov27 ? '342' : '128'}
                </span>
                <span className="text-[9px] text-slate-400 block mt-0.5 truncate">
                  {effectiveSafeState ? 'Nihil Kejadian' : 'AI + Warga + BPBD'}
                </span>
              </div>

              {/* KPI 4: Durasi Kritis */}
              <div className="rounded-xl border border-slate-800/90 bg-slate-950/70 p-2.5 sm:p-3 hover:border-slate-700 transition">
                <span className="text-[10px] text-slate-400 block font-medium">Durasi Kritis</span>
                <span className={`text-lg sm:text-xl font-black font-mono mt-0.5 block leading-tight ${effectiveSafeState ? 'text-slate-200' : 'text-amber-400'}`}>
                  {effectiveSafeState ? '0j 0m' : isNov27 ? '14j 30m' : '5j 45m'}
                </span>
                <span className="text-[9px] text-slate-400 block mt-0.5 truncate">
                  {effectiveSafeState ? 'Kondisi Kondusif' : 'Hujan 3 Hari Badai'}
                </span>
              </div>
            </div>

            {/* Section: Pantauan CCTV ATCS Live (Daftar Mandiri dengan Tombol Responsif) */}
            <div className="rounded-xl border border-slate-800/90 bg-slate-950/70 p-3 space-y-2 shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <span className="text-xs">📹</span>
                  <span className="text-[11px] font-extrabold uppercase tracking-wide text-white">
                    Pantauan CCTV ATCS
                  </span>
                </div>
                <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  LIVE STREAMS
                </span>
              </div>

              {/* Daftar CCTV yang Bisa Di-scroll Jika Membesar */}
              <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-slate-700/60 [&::-webkit-scrollbar-thumb]:rounded-full">
                <button
                  type="button"
                  onClick={() => onSelectCCTV?.('CCTV Pintu 1 USU')}
                  className="w-full flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-800/90 hover:bg-slate-800 hover:border-blue-500/50 cursor-pointer transition-all group text-left"
                  title="Klik untuk membuka siaran live CCTV Pintu 1 USU"
                >
                  <div className="flex items-center gap-2 truncate">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-blue-600/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors text-[9px]">
                      ▶
                    </span>
                    <span className="truncate text-slate-300 font-medium group-hover:text-white text-xs">
                      CCTV Pintu 1 USU
                    </span>
                  </div>
                  <span className={`text-[10px] font-bold shrink-0 ml-1.5 ${effectiveSafeState ? 'text-emerald-400' : 'text-red-400 font-black'}`}>
                    {effectiveSafeState ? 'Aman (0cm)' : '⚠️ Terendam (130cm)'}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => onSelectCCTV?.('CCTV Simpang Pos')}
                  className="w-full flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-800/90 hover:bg-slate-800 hover:border-blue-500/50 cursor-pointer transition-all group text-left"
                  title="Klik untuk membuka siaran live CCTV Simpang Pos"
                >
                  <div className="flex items-center gap-2 truncate">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-blue-600/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors text-[9px]">
                      ▶
                    </span>
                    <span className="truncate text-slate-300 font-medium group-hover:text-white text-xs">
                      CCTV Simpang Pos
                    </span>
                  </div>
                  <span className={`text-[10px] font-bold shrink-0 ml-1.5 ${effectiveSafeState ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {effectiveSafeState ? 'Aman (0cm)' : '🔴 Kolong 80cm'}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => onSelectCCTV?.('CCTV Underpass Gatsu')}
                  className="w-full flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-800/90 hover:bg-slate-800 hover:border-blue-500/50 cursor-pointer transition-all group text-left"
                  title="Klik untuk membuka siaran live CCTV Underpass Gatsu"
                >
                  <div className="flex items-center gap-2 truncate">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-blue-600/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors text-[9px]">
                      ▶
                    </span>
                    <span className="truncate text-slate-300 font-medium group-hover:text-white text-xs">
                      CCTV Underpass Gatsu
                    </span>
                  </div>
                  <span className={`text-[10px] font-bold shrink-0 ml-1.5 ${effectiveSafeState ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {effectiveSafeState ? 'Aman (0cm)' : '🟡 Pompa Trip (50cm)'}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => onSelectCCTV?.('CCTV Jembatan Belawan')}
                  className="w-full flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-800/90 hover:bg-slate-800 hover:border-blue-500/50 cursor-pointer transition-all group text-left"
                  title="Klik untuk membuka siaran live CCTV Jembatan Belawan"
                >
                  <div className="flex items-center gap-2 truncate">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-blue-600/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors text-[9px]">
                      ▶
                    </span>
                    <span className="truncate text-slate-300 font-medium group-hover:text-white text-xs">
                      CCTV Jembatan Belawan
                    </span>
                  </div>
                  <span className={`text-[10px] font-bold shrink-0 ml-1.5 ${effectiveSafeState ? 'text-emerald-400' : 'text-red-400 font-black'}`}>
                    {effectiveSafeState ? 'Aman (0cm)' : '🌊 Luapan (90cm)'}
                  </span>
                </button>
              </div>
            </div>

            {/* Petunjuk Interaktif / Decision Support Box */}
            {effectiveSafeState ? (
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-600/10 p-3 text-[11px] leading-relaxed text-emerald-200 shrink-0">
                <span className="font-extrabold block text-emerald-300 mb-0.5">
                  ✅ Status Pemantauan Wilayah:
                </span>
                Kondisi seluruh ruas arteri Kota Medan saat ini terpantau normal dan aman. Tidak ada indikasi titik genangan air atau disrupsi lalu lintas terdeteksi.
              </div>
            ) : (
              <div className="rounded-xl border border-blue-500/30 bg-blue-600/10 p-3 text-[11px] leading-relaxed text-blue-200 shrink-0">
                <span className="font-extrabold block text-blue-300 mb-0.5">
                  💡 Smart Decision Support:
                </span>
                Klik salah satu garis ruas jalan merah atau pin lokasi di peta untuk menampilkan{' '}
                <strong className="text-white">Diagnosis Akar Masalah</strong> dan{' '}
                <strong className="text-white">Rekomendasi Tindakan BPBD</strong>.
              </div>
            )}
          </div>
        </div>
      )}
    </aside>
  );
}
