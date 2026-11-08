'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import type { MapPosition } from './FloodMap';

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

export interface SearchPayload {
  destination: string;
  travelMode: 'DRIVE' | 'TWO_WHEELER';
  /** Koordinat presisi dari Mapbox Geocoding atau Local POI. Jika null, page.tsx mencoba parseCoordinates. */
  coordinates?: MapPosition;
}

/** Satu fitur dari respons Mapbox Geocoding atau Local POI. */
interface GeocodingFeature {
  id: string;
  place_name: string;
  /** [longitude, latitude] */
  center: [number, number];
}

interface SearchBarProps {
  onSearch?: (payload: SearchPayload) => void;
  /** Koordinat asal pengguna — dikirim sebagai `proximity` ke Mapbox agar hasil terdekat diprioritaskan. */
  proximity?: MapPosition | null;
}

// ─────────────────────────────────────────────
// Local POI Dataset (Prioritas Demo LKTI)
// ─────────────────────────────────────────────

const LOCAL_POIS: { name: string; coordinates: [number, number] }[] = [
  { name: 'Universitas Sumatera Utara (USU)', coordinates: [98.6558, 3.5583] },
  { name: 'Auditorium USU (Titik Kumpul / Evakuasi)', coordinates: [98.6547, 3.5569] },
  { name: 'RS Universitas Sumatera Utara', coordinates: [98.6525, 3.5592] },
  { name: 'Kantor Walikota Medan', coordinates: [98.6756, 3.5852] },
  { name: 'Lapangan Merdeka Medan', coordinates: [98.6775, 3.5898] },
];

const DEBOUNCE_MS = 350;

// ─────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────

export default function SearchBar({ onSearch, proximity }: SearchBarProps) {
  const [destination, setDestination] = useState('');
  const [travelMode, setTravelMode] = useState<'DRIVE' | 'TWO_WHEELER'>('DRIVE');

  // Geocoding state
  const [suggestions, setSuggestions] = useState<GeocodingFeature[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [geocoding, setGeocoding] = useState(false);
  /** Koordinat yang ditetapkan saat user memilih dari dropdown. Direset ketika input berubah lagi. */
  const [lockedCoords, setLockedCoords] = useState<MapPosition | null>(null);

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // ── Hybrid Geocoding (Local POI + Mapbox API) ──
  useEffect(() => {
    setLockedCoords(null);

    const query = destination.trim();

    if (query.length < 2) {
      setSuggestions([]);
      setDropdownOpen(false);
      return;
    }

    // 1. Saring LOCAL_POIS terlebih dahulu (case-insensitive)
    const qLower = query.toLowerCase();
    const localMatches: GeocodingFeature[] = LOCAL_POIS
      .filter((poi) => poi.name.toLowerCase().includes(qLower))
      .map((poi, idx) => ({
        id: `local-poi-${idx}`,
        place_name: poi.name,
        center: poi.coordinates,
      }));

    // Tampilkan hasil lokal langsung jika ada
    if (localMatches.length > 0) {
      setSuggestions(localMatches);
      setDropdownOpen(true);
    }

    if (debounceRef.current) clearTimeout(debounceRef.current);

    // 2. Fetch Mapbox API sebagai fallback untuk tempat / jalan umum
    debounceRef.current = setTimeout(async () => {
      const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
      if (!token) return;

      setGeocoding(true);
      try {
        const prox = proximity
          ? `${proximity.lng},${proximity.lat}`
          : '98.6722,3.5952';

        const url =
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json` +
          `?access_token=${token}` +
          `&country=id` +
          `&bbox=97.05,-0.64,100.44,4.30` +
          `&types=address,poi,place,locality` +
          `&autocomplete=true` +
          `&language=id` +
          `&limit=5` +
          `&proximity=${prox}`;

        const res = await fetch(url, { signal: AbortSignal.timeout(8_000) });
        if (!res.ok) throw new Error(`Geocoding HTTP ${res.status}`);

        const data = (await res.json()) as { features: GeocodingFeature[] };
        const rawMapbox = data.features ?? [];

        // Jangan duplikasi nama yang sudah ada di localMatches
        const mapboxFeatures = rawMapbox.filter(
          (feat) => !localMatches.some((l) => l.place_name.toLowerCase() === feat.place_name.toLowerCase())
        );

        const combined = [...localMatches, ...mapboxFeatures];
        setSuggestions(combined);
        setDropdownOpen(combined.length > 0);
      } catch {
        // Jika fetch gagal (offline/timeout), tetap pakai hasil lokal
        setSuggestions(localMatches);
        setDropdownOpen(localMatches.length > 0);
      } finally {
        setGeocoding(false);
      }
    }, DEBOUNCE_MS);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [destination, proximity]);

  // ── Tutup dropdown saat klik di luar ────────
  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, []);

  // ── Navigasi keyboard di dropdown ───────────
  function handleInputKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (!dropdownOpen) return;
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      (listRef.current?.querySelector('button') as HTMLButtonElement | null)?.focus();
    }
    if (event.key === 'Escape') {
      setDropdownOpen(false);
    }
  }

  function handleItemKeyDown(
    event: React.KeyboardEvent<HTMLButtonElement>,
    feature: GeocodingFeature,
    index: number,
  ) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      selectSuggestion(feature);
      return;
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      const next = listRef.current?.querySelectorAll('button')[index + 1] as HTMLButtonElement | undefined;
      next?.focus();
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (index === 0) {
        inputRef.current?.focus();
      } else {
        const prev = listRef.current?.querySelectorAll('button')[index - 1] as HTMLButtonElement | undefined;
        prev?.focus();
      }
    }
    if (event.key === 'Escape') {
      setDropdownOpen(false);
      inputRef.current?.focus();
    }
  }

  // ── Pilih saran dari dropdown ────────────────
  function selectSuggestion(feature: GeocodingFeature) {
    const [lng, lat] = feature.center;
    const coords: MapPosition = { lat, lng };

    setDestination(feature.place_name);
    setLockedCoords(coords);
    setSuggestions([]);
    setDropdownOpen(false);

    // Langsung trigger pencarian rute dengan koordinat presisi
    onSearch?.({ destination: feature.place_name, travelMode, coordinates: coords });
  }

  // ── Submit manual (koordinat / fallback) ────
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = destination.trim();
    if (!value) return;
    setDropdownOpen(false);
    onSearch?.({ destination: value, travelMode, coordinates: lockedCoords ?? undefined });
  }

  // ── Hapus input ──────────────────────────────
  function clearInput() {
    setDestination('');
    setSuggestions([]);
    setDropdownOpen(false);
    setLockedCoords(null);
    inputRef.current?.focus();
  }

  // ─────────────────────────────────────────────
  // Render
  // ─────────────────────────────────────────────
  return (
    <div ref={containerRef} className="relative space-y-3">
      <form onSubmit={handleSubmit} className="space-y-3" role="search">
        <label htmlFor="destination" className="sr-only">Cari tujuan</label>

        {/* ── Input + indikator ── */}
        <div className="relative">
          <div className="flex h-12 sm:h-14 items-center gap-3 rounded-2xl bg-slate-100/90 px-4 transition-shadow focus-within:ring-2 focus-within:ring-blue-500 shadow-inner">
            {/* Pin ikon: biru jika koordinat sudah terkunci, abu jika belum */}
            <span
              className={`shrink-0 text-xl transition-colors duration-200 ${lockedCoords ? 'text-blue-600' : 'text-slate-400'}`}
              aria-hidden
            >
              {lockedCoords ? '📍' : '⌕'}
            </span>

            <input
              ref={inputRef}
              id="destination"
              type="search"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              onFocus={() => { if (suggestions.length > 0) setDropdownOpen(true); }}
              onKeyDown={handleInputKeyDown}
              placeholder="Mau ke mana?"
              className="min-w-0 flex-1 bg-transparent text-sm sm:text-base text-slate-900 outline-none placeholder:text-slate-400 h-full"
              autoComplete="off"
              spellCheck={false}
              aria-autocomplete="list"
              aria-expanded={dropdownOpen}
              aria-haspopup="listbox"
              aria-controls="destination-listbox"
            />

            {/* Spinner geocoding */}
            {geocoding && (
              <span
                className="shrink-0 animate-spin text-base text-slate-400"
                aria-label="Mencari…"
                aria-live="polite"
              >
                ◌
              </span>
            )}

            {/* Tombol hapus */}
            {destination && !geocoding && (
              <button
                type="button"
                onClick={clearInput}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg text-slate-400 transition-colors hover:bg-slate-200 hover:text-slate-700 active:scale-95"
                aria-label="Hapus tujuan"
                tabIndex={0}
              >
                ×
              </button>
            )}
          </div>

          {/* ── Dropdown Suggestions — Glassmorphism ── */}
          {dropdownOpen && suggestions.length > 0 && (
            <ul
              id="destination-listbox"
              ref={listRef}
              role="listbox"
              aria-label="Saran tempat tujuan"
              className="
                absolute left-0 right-0 top-full z-[70] mt-2
                max-h-[50vh] sm:max-h-[380px] overflow-y-auto
                rounded-2xl border border-white/60
                bg-white/95 md:bg-white/90 backdrop-blur-xl
                shadow-2xl shadow-slate-900/15
                divide-y divide-slate-100/80
              "
            >
              {suggestions.map((feature, index) => {
                const [mainName, ...rest] = feature.place_name.split(',');
                const subName = rest.join(',').trim();
                const isLocal = feature.id.startsWith('local-poi');

                return (
                  <li key={feature.id} role="option" aria-selected={false}>
                    <button
                      type="button"
                      onClick={() => selectSuggestion(feature)}
                      onKeyDown={(e) => handleItemKeyDown(e, feature, index)}
                      className="
                        group flex min-h-[52px] sm:min-h-[56px] w-full items-center gap-3
                        px-4 py-3 text-left
                        transition-all duration-150
                        hover:bg-blue-50/90 active:bg-blue-100
                        active:scale-[0.99]
                        focus-visible:outline-none focus-visible:bg-blue-50/90
                      "
                    >
                      {/* Pin ikon */}
                      <span
                        className={`mt-0.5 shrink-0 text-base transition-colors ${
                          isLocal ? 'text-amber-500' : 'text-slate-400 group-hover:text-blue-500'
                        }`}
                        aria-hidden
                      >
                        {isLocal ? '⭐' : '📍'}
                      </span>

                      {/* Teks tempat */}
                      <span className="min-w-0 flex-1">
                        <span className="block font-semibold leading-snug text-slate-900 text-sm sm:text-base">
                          {mainName}
                        </span>
                        {subName && (
                          <span className="block truncate text-xs text-slate-500 mt-0.5">
                            {subName}
                          </span>
                        )}
                        {isLocal && (
                          <span className="mt-1 inline-block rounded-md bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-800">
                            Titik Kunci LKTI
                          </span>
                        )}
                      </span>

                      {/* Arrow indikator */}
                      <span
                        className="ml-auto shrink-0 text-xs text-slate-300 transition-colors group-hover:text-blue-500 font-bold"
                        aria-hidden
                      >
                        →
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* ── Mode perjalanan + Tombol cari ── */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex h-12 sm:h-14 items-center rounded-2xl bg-slate-100/90 p-1 gap-1" role="group" aria-label="Pilih moda perjalanan">
            <button
              type="button"
              onClick={() => setTravelMode('DRIVE')}
              className={`flex h-full min-h-[44px] items-center justify-center rounded-xl px-3.5 sm:px-4 text-xs sm:text-sm font-bold transition-all duration-150 active:scale-[0.98] ${
                travelMode === 'DRIVE' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'
              }`}
              aria-pressed={travelMode === 'DRIVE'}
            >
              🚗 Mobil
            </button>
            <button
              type="button"
              onClick={() => setTravelMode('TWO_WHEELER')}
              className={`flex h-full min-h-[44px] items-center justify-center rounded-xl px-3.5 sm:px-4 text-xs sm:text-sm font-bold transition-all duration-150 active:scale-[0.98] ${
                travelMode === 'TWO_WHEELER' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'
              }`}
              aria-pressed={travelMode === 'TWO_WHEELER'}
            >
              🏍 Motor
            </button>
          </div>

          <button
            type="submit"
            disabled={!destination.trim()}
            className="flex h-12 sm:h-14 min-h-[48px] items-center justify-center rounded-2xl bg-blue-700 px-5 sm:px-6 text-xs sm:text-sm font-bold text-white shadow-md shadow-blue-700/20 transition-all duration-150 hover:bg-blue-800 active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none motion-reduce:transition-none"
          >
            Cari rute
          </button>
        </div>
      </form>
    </div>
  );
}
