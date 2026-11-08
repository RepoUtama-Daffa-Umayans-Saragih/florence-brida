# 📋 Laporan Audit Codebase Mendalam — FLORENCE
**Tanggal Audit:** 2026-11-08 · **Auditor:** Principal Code Auditor / Senior Full-Stack Engineer  
**Scope:** Read-Only — tidak ada kode yang diubah  

---

## 1. Peta Arsitektur

```
Root Workspace
├── frontend/        ← Next.js 15 App Router (React 19)
│   ├── app/
│   │   ├── layout.tsx          ← RootLayout (HTML shell, impor CSS global + mapbox-gl.css)
│   │   ├── page.tsx            ← PublicPortalPage (CLIENT) ← titik orkestrasi utama
│   │   ├── globals.css         ← Tailwind base + custom .glass-panel / .glass-action
│   │   ├── manifest.ts         ← PWA manifest
│   │   └── offline/page.tsx    ← Halaman offline fallback (impor EmergencyInfo)
│   └── components/
│       ├── LiveFloodMap.tsx    ← SSE client, menghubungkan backend → FloodMap
│       ├── FloodMap.tsx        ← Komponen peta inti (react-map-gl wrapper)
│       ├── MapPolyline.tsx     ← GeoJSON polyline layer di dalam Map
│       ├── SearchBar.tsx       ← Input tujuan + pemilih moda (DRIVE/TWO_WHEELER)
│       ├── AlertBanner.tsx     ← Banner status banjir (GREEN/YELLOW/RED)
│       ├── RouteSheet.tsx      ← Bottom sheet panel rute (3 level: peek/half/full)
│       ├── AdminScenarioPanel.tsx ← "God Mode" panel (saat ini disabled/dummy)
│       ├── EmergencyInfo.tsx   ← Panel SOS, fetch safe-points + zones, cache localStorage
│       └── FloodReportPreview.tsx ← "Lapor banjir" (kamera dummy, buka layar penuh)
└── backend/         ← NestJS 11 + Prisma 6 + ioredis
    └── (src tidak di-scan mendalam, fokus ke frontend)
```

### Hierarki Render `page.tsx`

```
PublicPortalPage (page.tsx)
│
├── [z-0] <div absolute inset-0>
│   └── LiveFloodMap        ← SSE → setSnapshot → pass props ke FloodMap
│       └── FloodMap        ← react-map-gl <Map> + NavigationControl
│           ├── <Marker> originPoint      (titik biru = asal user)
│           ├── <Marker> nodes[]          (tombol CCTV berwarna zone)
│           ├── MapPolyline segments[]    (ruas jalan berwarna zone)
│           ├── MapPolyline routePath[]   (rute biru — saat ini KOSONG)
│           ├── <Popup> selected node
│           └── [right-panel z-10]        ← tombol lokasi, status SSE, legend, layer toggle
│
├── [z-30] <div absolute left-6 top-6>   ← PANEL PENCARIAN (kiri atas)
│   ├── Header "FLORENCE Command Center"
│   ├── AlertBanner                       ← data DEMO_ALERT (statis)
│   ├── form input "Asal" + tombol GPS
│   ├── originMessage (error/info)
│   ├── SearchBar                         ← input "Tujuan" + mode + tombol Cari rute
│   └── teks debug "Pratinjau UI"
│
└── [z-40] <div absolute inset-x-6 bottom-6>  ← ZONA BAWAH
    ├── RouteSheet                        ← data DEMO_ROUTE (statis), sheet 3 level
    └── <div flex justify-between>
        ├── AdminScenarioPanel            ← buka ke atas (details/summary)
        └── <div flex-col items-end>
            ├── FloodReportPreview        ← buka layar penuh via fixed inset-0 z-[70]
            └── tombol SOS               ← toggle EmergencyInfo
                └── [absolute bottom-full right-0] EmergencyInfo
```

---

## 2. Temuan Kritis — Logika

### ✅ GPS / Geolocation (`navigator.geolocation`)
**Status: SUDAH DIIMPLEMENTASI** di `page.tsx` (baris 60–82).

- API `navigator.geolocation.getCurrentPosition()` dipanggil dengan opsi `{ enableHighAccuracy: true, timeout: 10_000, maximumAge: 60_000 }`.
- State yang dikelola: `originText`, `originPoint`, `flyTo`, `locating`, `originMessage`.
- Ketika berhasil: mengisi `originText` dengan format `"lat, lng"`, memanggil `setFlyTo` → `FloodMap` merespons dengan animasi `flyTo()`.
- Ketika gagal: pesan error yang informatif ditampilkan sesuai `error.code` (PERMISSION_DENIED / TIMEOUT / UNAVAILABLE).
- **Tidak ada bug kritis** pada alur GPS ini.

### ⚠️ Input Tujuan (SearchBar)
**Status: TERISOLASI — tidak terhubung ke peta.**

- `SearchBar` memanggil `onSearch(destination)` → `page.tsx` menerima via `setDestination`.
- `destination` hanya ditampilkan sebagai teks: `"Rute menuju: [teks]"` di `page.tsx` baris 155–158.
- **Tidak ada logika parsing koordinat** untuk tujuan (berbeda dengan asal yang punya `parseCoordinates`).
- **Tidak ada API call** ke backend routing (`/api/v1/routing`) dari sisi frontend.
- `travelMode` yang dipilih user di `SearchBar` hanya disimpan di state lokal `SearchBar` **dan tidak dikirim ke luar** — `onSearch` hanya mengirim string teks, bukan objek `{ destination, travelMode }`.
- `RouteSheet` menerima `DEMO_ROUTE` yang statis — belum ada koneksi ke data rute nyata.

### ⚠️ Rute Peta
**Status: KOSONG — `routePath` selalu `[]`.**

- `FloodMap` menerima prop `routePath?: MapPosition[]` (baris 23).
- Di `page.tsx`, `LiveFloodMap` dipanggil **tanpa prop `routePath`** (baris 112–114).
- `MapPolyline` untuk rute biru (`id="florence-route"`) tidak akan pernah dirender karena `routePath.length < 2`.

### ✅ State Management — Pola yang Digunakan
- **Tidak ada Context/Redux.** Semua state dikelola dengan `useState` lokal di `page.tsx` lalu diteruskan via props (prop drilling).
- `LiveFloodMap` mengonsumsi SSE dari `NEXT_PUBLIC_API_URL/api/v1/zones/stream` dan meneruskan data ke `FloodMap` via props `nodes` dan `segments`.
- `EmergencyInfo` mengelola state sendiri (fetch + `localStorage`).

### ⚠️ Backend (NestJS)
- Stack: NestJS 11 + Prisma 6 (database) + ioredis (caching) + `@nestjs/schedule` (sinkron BMKG).
- Endpoint yang sudah ada: `/api/v1/zones/stream` (SSE), `/api/v1/zones/snapshot`, `/api/v1/safe-points`.
- **Endpoint routing belum terlihat terhubung dari frontend.** File `routing.controller.ts` ada di `dist/`, berarti backend punya endpoint rute, tapi frontend belum mengonsumsinya.

---

## 3. Temuan Kritis — Layout & Tailwind CSS

### 3.1 Peta Z-Index Lengkap

| Layer | Komponen | z-index | Posisi |
|---|---|---|---|
| Peta Mapbox | `<Map>` | `z-0` (inline style) | `absolute inset-0` |
| Panel kanan dalam peta | div di `FloodMap.tsx` baris 92 | `z-10` | `absolute right-6 top-[...]` |
| Panel kiri atas | div di `page.tsx` baris 117 | `z-30` | `absolute left-6 top-6` |
| AlertBanner di dalam panel | `<header>` di `AlertBanner.tsx` baris 43/56 | `z-50` (sticky) | sticky top-0 |
| Zona bawah (wrapper) | div di `page.tsx` baris 164 | `z-40` | `absolute inset-x-6 bottom-6` |
| RouteSheet | — | `z-0` relative | di dalam z-40 |
| Admin + SOS row | — | `z-10` relative | di dalam z-40 |
| `EmergencyInfo` panel | div di `page.tsx` baris 183 | — (tidak ada z-index eksplisit) | `absolute bottom-full right-0` |
| `FloodReportPreview` section | section di komponen baris 5 | `z-[70]` fixed | `fixed inset-0` |
| `FloodReportPreview` summary (tombol tutup) | summary baris 4 | `z-[80]` fixed | `fixed right-5 top-20` |

### 3.2 Konflik & Potensi Masalah

> [!CAUTION]
> **Masalah #1 — `AlertBanner` z-50 MENEMBUS keluar panel kiri.**  
> `AlertBanner` menggunakan `sticky top-0 z-50` padahal ia berada di dalam panel `.glass-panel` yang sudah punya `overflow-y-auto`. Nilai `sticky` berfungsi relatif terhadap scroll-container induknya, bukan viewport. `z-50` di dalam scroll container yang tidak membuat `z-index stacking context` baru dapat menyebabkan header banner melayang di atas elemen lain secara tidak terduga di berbagai browser.

> [!CAUTION]
> **Masalah #2 — `EmergencyInfo` panel (SOS) tidak punya z-index eksplisit.**  
> Di `page.tsx` baris 183: `absolute bottom-full right-0 mb-4` — tidak ada `z-` class. Panel ini berada di dalam wrapper `z-40`, sehingga efektif `z-40`. Jika `RouteSheet` di state `full` (tinggi `50svh`) bersamaan dengan panel SOS terbuka, ada risiko panel SOS tertimpa oleh elemen lain atau z-index bertumbukan dengan `FloodReportPreview` (`z-[70]`).

> [!WARNING]
> **Masalah #3 — Duplikasi tombol GPS (◎).**  
> Tombol lokasi `◎` muncul di **dua tempat**:  
> 1. Di dalam panel kiri atas (`page.tsx` baris 136–145) — memicu `handleLocate`.  
> 2. Di panel kanan dalam `FloodMap.tsx` (baris 93–101) — juga memanggil `onLocateRequest`.  
> Keduanya memanggil fungsi yang sama, namun posisinya di UI berpotensi membingungkan user karena terlihat seperti dua kontrol berbeda dengan fungsi identik.

> [!WARNING]
> **Masalah #4 — Panel kiri atas di mobile: `max-h-[34svh]` terlalu sempit.**  
> `page.tsx` baris 117: `max-h-[34svh]` di mobile. Panel ini memuat: judul, AlertBanner (expandable), form Asal, originMessage, SearchBar (input + moda + tombol), teks tujuan, dan teks debug. Saat AlertBanner di-expand, konten terpotong dan harus di-scroll. Di desktop (`sm:max-h-[calc(100svh-3rem)]`) sudah cukup.

> [!NOTE]
> **Masalah #5 — `top-[calc(34svh+3rem)]` di panel kanan (`FloodMap.tsx` baris 92).**  
> Nilai ini di-hardcode berdasarkan asumsi tinggi panel kiri di mobile. Jika tinggi panel kiri berubah (misal karena konten bertambah), panel kanan akan bertumpuk di bawah panel kiri dengan gap yang salah. Ini adalah **tight coupling** antara dua komponen yang berbeda melalui magic number.

> [!NOTE]
> **Masalah #6 — `FloodReportPreview` menggunakan `<details>/<summary>` untuk membuka fixed fullscreen.**  
> Di `FloodReportPreview.tsx` baris 4: ketika terbuka, summary menjadi `fixed right-5 top-20 z-[80]`. Ini adalah pola yang tidak konvensional dan rapuh — penutupan harus via klik tombol `<summary>` itu sendiri, tidak ada tombol "✕" yang jelas, tidak ada backdrop, tidak ada `Escape` key handler.

### 3.3 Status Glassmorphism / Estetika Modern
- `.glass-panel`: `bg-white/95 backdrop-blur-xl shadow-[0_16px_60px_...]` — **sudah ada**, namun opacity 95% hampir opaque sehingga efek blur hampir tidak terlihat.
- `.glass-action`: ada di CSS global, digunakan oleh tombol SOS, Admin, dan FloodReport.
- Panel kanan dalam peta menggunakan `bg-white/90 backdrop-blur-xl` secara inline — tidak menggunakan class `.glass-panel`.
- **Tidak ada animasi masuk/keluar** untuk panel yang toggle (SOS, AlertBanner expand, RouteSheet height). Hanya `transition-[height]` di RouteSheet dan `transition-colors` di AlertBanner.

---

## 4. Rekomendasi Eksekusi (Step-by-Step)

Urutan ini diprioritaskan berdasarkan **dampak tertinggi dengan risiko perusakan logika terendah**.

---

### FASE 1 — Perbaikan Kritis Fungsionalitas (Koneksi Data Nyata)

**Step 1.1 — Hubungkan SearchBar ke routing engine**
- Modifikasi antarmuka `SearchBarProps`: tambah prop `travelMode` yang bisa dikontrol dari luar, atau kembalikan `{ destination, travelMode }` dari `onSearch`.
- Di `page.tsx`: ketika `destination` berubah, panggil backend endpoint routing `POST /api/v1/routing` (atau endpoint yang sesuai) dengan `{ origin: originPoint, destination: parsedDest, mode: travelMode }`.
- Simpan respons rute ke state `routeData` di `page.tsx`, teruskan ke `LiveFloodMap → FloodMap` via prop `routePath`.

**Step 1.2 — Implementasi parsing koordinat / geocoding untuk Tujuan**
- Saat ini hanya Asal yang bisa parse koordinat. Tujuan hanya berupa teks mentah.
- Opsi A (cepat): terapkan `parseCoordinates()` yang sama untuk field Tujuan.
- Opsi B (lengkap): integrasikan Mapbox Geocoding API untuk konversi nama tempat → koordinat.

**Step 1.3 — Pastikan `travelMode` diteruskan ke backend**
- State `travelMode` di `SearchBar` harus naik ke `page.tsx` via callback atau dikembalikan bersama `onSearch`.

---

### FASE 2 — Perbaikan Layout Kritis (Anti-Overlap)

**Step 2.1 — Perbaiki z-index `EmergencyInfo` panel**
- Di `page.tsx` baris 183: tambahkan `z-50` pada div pembungkus `EmergencyInfo`.
- Pastikan `EmergencyInfo` selalu berada di atas `RouteSheet` yang paling tinggi (z-40 → z-50).

**Step 2.2 — Hapus duplikasi tombol GPS**
- Putuskan satu titik kontrol: tombol GPS hanya ada di **dalam panel kiri** (sudah ada di `page.tsx` baris 136).
- Hapus tombol GPS kedua dari panel kanan `FloodMap.tsx` (baris 93–101), atau ubah fungsinya menjadi "Pusatkan ke peta" (reset view ke `DEFAULT_CENTER`) agar memiliki fungsi berbeda.

**Step 2.3 — Lepaskan magic number `top-[calc(34svh+3rem)]` di `FloodMap.tsx`**
- Ganti dengan prop `topOffset` yang diterima dari luar, atau gunakan `sm:top-28` saja dan atur ulang tata letak mobile agar panel kanan tidak perlu tahu tinggi panel kiri.

**Step 2.4 — Perbaiki `AlertBanner` z-index dalam scroll container**
- Ganti `sticky top-0 z-50` menjadi hanya `sticky top-0` (z-index dalam scroll container sudah tertangani oleh konteks stacking-nya). Atau jadikan `AlertBanner` sebagai elemen pertama di luar scroll container agar `sticky` bekerja terhadap viewport panel.

---

### FASE 3 — Peningkatan UX & Estetika

**Step 3.1 — Perbaiki `FloodReportPreview` menjadi modal proper**
- Ganti pola `<details>/<summary>` dengan `useState` + `<dialog>` HTML atau div modal dengan `fixed inset-0 z-[70]`.
- Tambahkan tombol ✕ yang jelas, backdrop `bg-black/60`, dan handler `Escape` key.

**Step 3.2 — Tingkatkan efek glassmorphism**
- Kurangi opacity panel utama dari `bg-white/95` → `bg-white/70` atau `bg-white/80` agar efek `backdrop-blur-xl` lebih terlihat.
- Pertimbangkan dark-mode aware: `bg-white/80 dark:bg-slate-900/80`.

**Step 3.3 — Tambahkan animasi masuk/keluar panel**
- `EmergencyInfo` panel: tambahkan Tailwind `transition` + `animate-in slide-in-from-bottom` (membutuhkan plugin `tailwindcss-animate` atau custom keyframe).
- RouteSheet sudah punya `transition-[height]` — pertahankan dan pastikan `motion-reduce` tetap aktif.

**Step 3.4 — Perbaiki mobile panel overflow**
- Pertimbangkan menaikkan `max-h-[34svh]` → `max-h-[45svh]` di mobile, atau pisahkan AlertBanner dari scroll container sehingga tidak ikut terpotong.

---

### FASE 4 — Konsolidasi State (Opsional / Jangka Panjang)

**Step 4.1 — Extrak state ke custom hook `useFloodPortal`**
- `page.tsx` sudah memiliki 7 state + 4 handler function. Ketika routing nyata ditambahkan, state akan bertambah lagi.
- Extrak ke `hooks/useFloodPortal.ts` untuk memisahkan logika dari presentasi.

**Step 4.2 — Pertimbangkan React Context untuk state global**
- `connected` (SSE status) dan `snapshot` data saat ini hanya ada di `LiveFloodMap`. Jika komponen lain (misal `AlertBanner`) perlu data zona real-time, pertimbangkan `FloodContext`.

---

## Ringkasan Prioritas

| # | Temuan | Tingkat | Dampak |
|---|---|---|---|
| 🔴 | Tujuan rute tidak terhubung ke backend / peta | KRITIS | Fitur inti tidak bekerja |
| 🔴 | `travelMode` tidak keluar dari SearchBar | KRITIS | Mode perjalanan selalu terbuang |
| 🟠 | `routePath` selalu kosong | TINGGI | Rute tidak pernah ditampilkan di peta |
| 🟠 | Panel SOS tanpa z-index eksplisit | TINGGI | Potensi overlap saat RouteSheet full |
| 🟠 | Duplikasi tombol GPS | MEDIUM | Kebingungan UX |
| 🟡 | `top-[calc(34svh+3rem)]` magic number | MEDIUM | Rapuh saat layout berubah |
| 🟡 | `FloodReportPreview` pola details/summary untuk modal | MEDIUM | UX tidak standar, sulit di-close |
| 🟡 | `AlertBanner` z-50 di dalam scroll container | MEDIUM | Efek sticky tidak terprediksi |
| 🟢 | Glassmorphism opacity terlalu tinggi | RENDAH | Visual kurang menarik |
| 🟢 | Tidak ada animasi masuk panel | RENDAH | Kurang polished |
