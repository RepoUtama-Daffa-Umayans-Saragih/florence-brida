# FLORENCE — Pedoman Proyek

Flood Localization, Observation, Risk Early-Warning, and Navigation for City Ecosystems. Proyek kompetisi LKTI BRIDA Kota Medan, kawasan pilot USU.

## Stack dan arah produk

- Frontend: Next.js App Router, TypeScript, Tailwind CSS.
- Peta: Mapbox, style `mapbox://styles/mapbox/streets-v12`. Jangan migrasikan ke Google Maps karena kendala billing.
- Pertahankan backend dan integrasi yang ada. Periksa kode terbaru sebelum mengubahnya.

## Sembilan fitur sasaran

1. PWA mobile-first untuk publik dan dashboard pemerintah/admin.
2. Smart Flood Map: Hijau 0–10 cm; Kuning >10–30 cm; Merah >30 cm.
3. 50 titik CCTV/IoT kawasan USU dengan marker dinamis.
4. Flood-aware routing A*: polyline biru menghindari ruas Merah.
5. Safe Point/evakuasi, termasuk Auditorium USU, dengan kapasitas dan rute.
6. Prediksi luapan 15–30 menit.
7. Peringatan real-time berbasis fusi BMKG/sensor melalui banner interaktif.
8. Logging sensor/time-series.
9. DSS prioritas revitalisasi drainase dan laporan warga berbasis kamera fullscreen.

Daftar ini adalah kebutuhan produk, bukan pernyataan bahwa semua fitur telah diimplementasikan. Verifikasi kode dan laporkan perbedaan; jangan menyajikan data demo sebagai data nyata.

## Standar UI/UX Pro Max

- Glassmorphism: `bg-white/90 backdrop-blur-md border border-white/40 shadow-xl rounded-3xl`; dark styling untuk panel admin.
- Interaksi tombol: `active:scale-[0.98] transition-all duration-300`, dengan dukungan reduced-motion.
- Hindari border kaku pada input; gunakan focus ring yang terlihat. Pertahankan aksesibilitas keyboard dan label.
- Hierarki z-index konsisten, margin floating panel 16–24 px, gap memadai, tidak tumpang tindih pada layar kecil.
- Mobile-first. Panel rute berupa Bottom Sheet Peek/Half/Full dengan batas tinggi dan `overflow-y-auto`.
- Warna zona harus disertai teks/ikon, bukan satu-satunya penanda kondisi.

## Interaksi yang harus dipertahankan/disempurnakan

- Asal dapat diketik manual. Tombol Lokasi Saya memakai `navigator.geolocation.getCurrentPosition`, menyimpan koordinat asal dan memicu Mapbox `flyTo`. Tangani izin ditolak, timeout, dan lokasi tidak tersedia.
- Admin Scenario Panel/God Mode: panel dark tersembunyi di kiri bawah, untuk demo juri. Sasaran: slider kedalaman 0–100 cm yang memperbarui zona/rute, input override teks banner BMKG, serta toggle posko darurat. Jangan mengklaim kontrol sudah aktif sebelum diverifikasi.
- SOS/Safe Point dan Lapor Banjir di kanan dengan jarak proporsional terhadap legenda. Kamera laporan fullscreen; jangan menyatakan foto terkirim jika unggahan belum tersedia.

## Guardrails

- Jangan menghapus, menimpa, atau merusak logika backend, hooks React, routing A*, maupun integrasi/fusi sensor yang ada.
- Untuk tugas kosmetik, batasi perubahan pada pembungkus, Tailwind, dan animasi. Perubahan interaksi klien seperti GPS boleh dilakukan sesuai lingkup permintaan tanpa merusak inti aplikasi.
- Jangan mengganti implementasi yang berfungsi dengan mock. Pisahkan mode simulasi dari data operasional.
- Verifikasi TypeScript/build sesuai perubahan. Bedakan hasil kompilasi dari pengujian browser/end-to-end yang benar-benar dilakukan.
