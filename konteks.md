# FLORENCE — Konteks Utama dan Single Source of Truth

## Identitas Proyek

FLORENCE (**Flood Localization, Observation, Risk Early-Warning, and Navigation for City Ecosystems**) dikembangkan untuk kompetisi LKTI BRIDA Kota Medan.

Stack: **Next.js (App Router), Tailwind CSS, dan Mapbox (bukan Google Maps)**.

Dokumen ini menjadi pedoman utama arsitektur, fitur, dan UI/UX untuk pengembangan selanjutnya. Daftar kebutuhan dan isu di bawah merupakan arahan produk dari pengguna; status implementasi aktual harus diperiksa pada kode sebelum melakukan perubahan. Jangan menganggap suatu fitur sudah berjalan atau masih rusak hanya berdasarkan daftar ini.

## 1. Ringkasan 9 Fitur Utama FLORENCE

1. **PWA (Progressive Web App):** antarmuka responsif untuk Publik (mobile-first) dan Dashboard Admin.
2. **Smart Flood Map (Mapbox):** peta interaktif dengan tiga zona genangan:
   - Hijau — Aman: 0–10 cm.
   - Kuning — Waspada: >10–30 cm.
   - Merah — Bahaya: >30 cm.
3. **50 Titik Smart CCTV & IoT:** pemantauan kondisi air dan cuaca di kawasan USU; UI merender marker dinamis berdasarkan status titik pantau.
4. **Dynamic Flood-Aware Routing (A*):** algoritma rute otomatis membelokkan arah, menggambar polyline biru di Mapbox, dan menghindari jalan berzona Merah.
5. **Safe Point & Evakuasi:** titik kumpul aman, seperti Auditorium USU, lengkap dengan kapasitas dan rutenya.
6. **AI Early Prediction:** prediksi luapan air 15–30 menit sebelum terjadi.
7. **Real-Time Alert:** peringatan dini cuaca melalui banner interaktif berdasarkan fusi data BMKG.
8. **Data Logging:** perekaman data sensor secara time-series.
9. **DSS (Decision Support System) & Laporan Warga:** laporan banjir berbasis kamera fullscreen dan penentuan prioritas revitalisasi drainase.

## 2. Pedoman UI/UX Pro Max dan Tata Letak

Target kualitas adalah aplikasi flagship dengan standar Anti-AI Slop. Aturan berikut wajib diterapkan ketika merender atau memperbaiki komponen, khususnya FloodMap.tsx.

### Glassmorphism

Semua panel menggunakan transparansi elegan, dengan acuan kelas:

```text
bg-white/90 backdrop-blur-md border border-white/40 shadow-xl rounded-3xl
```

Dukung skema dark mode untuk panel tertentu, seperti Admin.

### Micro-Interactions

Setiap tombol mempunyai feedback tekan dengan acuan:

```text
active:scale-[0.98] transition-all duration-300
```

Hilangkan garis tepi kaku pada input form dan gunakan ring saat focus. Pertahankan focus keyboard yang terlihat dan dukungan reduced-motion.

### Tata Letak Bebas Tumpang Tindih

- Gunakan hierarki z-index yang benar.
- Berikan margin lega, misalnya m-4 atau m-6, pada floating panel dengan posisi absolut.
- Panel tidak boleh saling menempel atau bertumpuk saat layar mengecil.
- Navigasi, Admin, legenda, dan SOS tersebar rapi di sudut layar.

### Responsivitas Mobile

Panel rute utama menggunakan **Bottom Sheet tiga tingkat: Peek / Half / Full**, dengan batas tinggi dan `overflow-y-auto` agar konten panjang tidak memakan seluruh layar.

## 3. Spesifikasi Komponen Aktif dan Isu yang Harus Ditangani

### 3.1 Mesin Peta

- Tetap menggunakan Mapbox dengan style:

```text
mapbox://styles/mapbox/streets-v12
```

- Jangan migrasi ke Google Maps karena kendala billing API.
- Garis rute navigasi harus dirender di atas Mapbox.

### 3.2 Input Navigasi dan GPS

- Isu yang dilaporkan dalam arahan pengguna: input Asal terkunci. Verifikasi kode terkini karena perbaikan mungkin sudah diterapkan.
- Input Asal wajib interaktif dan dapat diketik manual.
- Tombol Lokasi Saya wajib memakai `navigator.geolocation.getCurrentPosition` bawaan browser untuk:
  1. Menentukan koordinat awal pengguna.
  2. Mengubah nilai input Asal.
  3. Menjalankan `flyTo` di Mapbox.
- Pertahankan penanganan kegagalan izin lokasi dan kondisi perangkat yang tidak menyediakan posisi.

### 3.3 Admin Scenario Panel (God Mode)

Floating panel dark mode di kiri bawah untuk demo juri, dengan kebutuhan:

- Slider kedalaman genangan **0–100 cm** yang langsung memicu perubahan warna rute.
- Input teks untuk mengubah isi banner peringatan BMKG secara real-time.
- Tombol toggle kemunculan Posko Darurat.

Kontrol simulasi harus dibedakan dari data sensor/BMKG operasional. Jangan menyatakan kontrol sudah aktif tanpa memverifikasi implementasinya.

### 3.4 SOS dan Lapor Banjir

Tombol SOS dan Lapor Banjir berada di sisi kanan layar dengan jarak proporsional agar tidak menabrak panel legenda.

## 4. Aturan Kritis (Guardrails)

- Jangan pernah menghapus, menimpa, atau merusak logika backend, hooks React (`useState`, `useEffect`), kalkulasi rute A*, serta integrasi sensor/BMKG yang sudah ada.
- Fokus restrukturisasi UI/UX pada Tailwind CSS, penempatan div, margin, dan animasi.
- Penyempurnaan interaksi klien, misalnya GPS, diperbolehkan sesuai tugas tanpa merusak inti mesin aplikasi.
- Baca kode aktual sebelum mengubahnya dan pertahankan perubahan terbaru yang dibuat pengguna.
- Bedakan kebutuhan produk, data demo, serta fungsi yang benar-benar sudah diimplementasikan dan diverifikasi.

## 5. Arahan Teknis Tambahan (Next.js & Clean Code)

- **Client Components ("use client"):** Karena kita menggunakan Next.js App Router, pastikan semua komponen yang menggunakan Mapbox, `useState`, `useEffect`, dan `navigator.geolocation` memiliki direktif `"use client"` di baris paling atas file.
- **Environment Variables Mapbox:** Saat menginisialisasi atau memperbaiki peta Mapbox, selalu gunakan `process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN`. Jangan pernah menulis *token* secara *hardcode* atau menghapus variabel lingkungan yang sudah ada.
- **Modularisasi Komponen (Anti-Spaghetti Code):** Untuk menghindari file `FloodMap.tsx` yang membengkak ribuan baris, AI diizinkan dan sangat dianjurkan untuk memecah elemen UI kosmetik menjadi sub-komponen yang terpisah (misalnya `<AdminGodMode />`, `<RouteBottomSheet />`, `<MapLegend />`, dan `<FloatingActionButtons />`).
- **TypeScript Strictness:** Hormati dan gunakan *interface* atau tipe data (TypeScript) yang sudah ada di dalam proyek saat memanipulasi *state* atau *props* (contoh: status zona Hijau/Kuning/Merah). Jangan menggunakan tipe `any`.