'use client';

import { useEffect, useRef } from 'react';

export interface TimelineSliderProps {
  selectedDate: string;
  onDateChange: (date: string) => void;
  timeMinutes: number; // 0 - 1439
  onTimeChange: (minutes: number) => void;
  isPlaying: boolean;
  onTogglePlay: () => void;
  playbackSpeed?: number;
  onSpeedChange?: (speed: number) => void;
}

function formatMinutesToWIB(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')} WIB`;
}

export default function TimelineSlider({
  selectedDate,
  onDateChange,
  timeMinutes,
  onTimeChange,
  isPlaying,
  onTogglePlay,
  playbackSpeed = 1,
  onSpeedChange,
}: TimelineSliderProps) {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeRef = useRef(timeMinutes);
  timeRef.current = timeMinutes;

  // Playback timer loop
  useEffect(() => {
    if (isPlaying) {
      const stepMs = Math.max(50, Math.floor(180 / playbackSpeed));
      intervalRef.current = setInterval(() => {
        const next = timeRef.current >= 1435 ? 0 : Math.min(1439, timeRef.current + 5);
        onTimeChange(next);
      }, stepMs);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, playbackSpeed, onTimeChange]);

  const percentage = (timeMinutes / 1439) * 100;
  const isDateFormatted = /^\d{4}-\d{2}-\d{2}$/.test(selectedDate);
  const isTodayActive =
    selectedDate === 'Hari Ini' ||
    selectedDate === 'today' ||
    selectedDate.toLowerCase().includes('hari ini');

  return (
    <div
      role="region"
      aria-label="Panel Mesin Waktu Banjir"
      className="
        absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2
        w-[92%] sm:w-11/12 max-w-4xl z-30
        rounded-2xl border border-slate-700/80
        bg-slate-950/80 backdrop-blur-xl
        p-4 sm:p-6
        shadow-[0_20px_50px_rgba(0,0,0,0.85)]
        text-white
      "
    >
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 sm:gap-6">
        {/* Sisi Kiri: Pemilih Tanggal Kejadian */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-blue-600/20 border border-blue-500/30 text-lg sm:text-xl text-blue-400 shrink-0">
            📅
          </div>
          <div>
            <label htmlFor="history-date-picker" className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
              Tanggal Kejadian
            </label>
            <input
              id="history-date-picker"
              type="date"
              value={isDateFormatted ? selectedDate : ''}
              onChange={(e) => onDateChange(e.target.value)}
              className="
                mt-0.5 rounded-xl border border-slate-700 bg-slate-900/90
                px-3 py-1.5 text-xs sm:text-sm font-semibold text-slate-100
                outline-none focus:ring-2 focus:ring-blue-500
                [color-scheme:dark]
              "
            />
            {/* Tombol Cepat Pilihan Peristiwa Historis Faktual & Hari Ini */}
            <div className="flex items-center gap-1.5 mt-1.5">
              <button
                type="button"
                onClick={() => onDateChange('Hari Ini')}
                className={`px-2 py-0.5 rounded-lg text-[10px] font-bold border transition ${
                  isTodayActive
                    ? 'bg-emerald-600/30 border-emerald-500 text-emerald-300 ring-1 ring-emerald-500'
                    : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-white'
                }`}
                title="Status Terkini: Hari Ini (Aman / Normal)"
              >
                🟢 Hari Ini
              </button>
              <button
                type="button"
                onClick={() => onDateChange('2025-11-27')}
                className={`px-2 py-0.5 rounded-lg text-[10px] font-bold border transition ${
                  selectedDate === '2025-11-27'
                    ? 'bg-red-600/30 border-red-500 text-red-300 ring-1 ring-red-500'
                    : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-white'
                }`}
                title="Banjir Masif 27 Nov 2025 (Ketinggian 50-130 cm)"
              >
                🔴 27 Nov 2025
              </button>
              <button
                type="button"
                onClick={() => onDateChange('2025-10-11')}
                className={`px-2 py-0.5 rounded-lg text-[10px] font-bold border transition ${
                  selectedDate === '2025-10-11'
                    ? 'bg-amber-600/30 border-amber-500 text-amber-300 ring-1 ring-amber-500'
                    : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-white'
                }`}
                title="Luapan Babura 11 Okt 2025 (Ketinggian 30-60 cm)"
              >
                🟡 11 Okt 2025
              </button>
            </div>
          </div>
        </div>

        {/* Bagian Tengah: Play/Pause, Speed, & Slider Waktu */}
        <div className="flex-1 flex flex-col gap-2 min-w-0">
          <div className="flex items-center gap-3">
            {/* Tombol Play/Pause */}
            <button
              type="button"
              onClick={onTogglePlay}
              className="
                flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl
                bg-gradient-to-r from-blue-600 to-indigo-600 text-sm sm:text-base font-black text-white
                shadow-lg shadow-blue-600/30 transition hover:from-blue-500 hover:to-indigo-500
                active:scale-95
              "
              aria-label={isPlaying ? 'Jeda pemutaran' : 'Mulai pemutaran historis'}
            >
              {isPlaying ? '⏸' : '▶'}
            </button>

            {/* Slider Scrubber 00:00 - 23:59 */}
            <div className="flex-1 relative flex items-center">
              <input
                type="range"
                min="0"
                max="1439"
                step="5"
                value={timeMinutes}
                onChange={(e) => onTimeChange(Number(e.target.value))}
                className="
                  w-full h-2.5 sm:h-3 rounded-lg appearance-none cursor-pointer
                  bg-slate-800 accent-blue-500
                  focus:outline-none focus:ring-2 focus:ring-blue-500/50
                "
                style={{
                  background: `linear-gradient(to right, #3b82f6 0%, #6366f1 ${percentage}%, #1e293b ${percentage}%, #1e293b 100%)`,
                }}
                aria-label="Scrubber waktu kejadian"
              />
            </div>

            {/* Pemilih Kecepatan Playback (1x, 2x, 4x) */}
            {onSpeedChange && (
              <div className="hidden sm:flex rounded-xl bg-slate-900 border border-slate-800 p-0.5 text-[10px] font-bold">
                {[1, 2, 4].map((spd) => (
                  <button
                    key={spd}
                    type="button"
                    onClick={() => onSpeedChange(spd)}
                    className={`px-2 py-1 rounded-lg transition ${
                      playbackSpeed === spd
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {spd}x
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Label Jam Penanda (00:00, 06:00, 12:00, 18:00, 23:59) */}
          <div className="flex justify-between text-[10px] text-slate-500 font-medium pl-14 pr-2">
            <span>00:00</span>
            <span>06:00</span>
            <span className="hidden sm:inline">12:00 (Siang)</span>
            <span>18:00</span>
            <span>23:59</span>
          </div>
        </div>

        {/* Sisi Kanan: Teks Label Jam Digital */}
        <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 sm:border-l border-slate-800/80 pt-2 sm:pt-0 sm:pl-6 shrink-0">
          <div className="flex items-center gap-1.5">
            <span className={`h-2 w-2 rounded-full ${isPlaying ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              {isPlaying ? 'PLAYBACK AKTIF' : 'WAKTU TERPILIH'}
            </span>
          </div>
          <div className="text-xl sm:text-2xl font-black tracking-tight text-white font-mono mt-0.5">
            {formatMinutesToWIB(timeMinutes)}
          </div>
        </div>
      </div>
    </div>
  );
}
