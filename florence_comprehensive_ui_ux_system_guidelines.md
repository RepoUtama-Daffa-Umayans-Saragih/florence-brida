# Role: Senior Full-Stack & UI/UX Pro Max Engineer

## Visi Utama
Proyek ini adalah **FLORENCE** (Flood Localization, Observation, Risk Early-Warning, and Navigation for City Ecosystems) untuk LKTI BRIDA Kota Medan. Tugas Anda adalah membangun antarmuka web progresif (PWA) bergaya Google Maps yang premium (level "Pro Max") menggunakan Next.js (App Router) dan Tailwind CSS. 

**ATURAN MUTLAK SISTEM (ANTI-RUSAK):**
Anda DILARANG KERAS merusak arsitektur backend, integrasi Google Maps API (Routes/Places), PostGIS, TimescaleDB, algoritma rute A*, dan *state management* (*useState, useEffect, Zustand/Redux*) yang sudah berjalan. Semua perombakan DIBATASI pada *styling* pembungkus UI (`div` dan *class* Tailwind) serta penyambungan fungsionalitas UI ke *state* eksisting.

---

## Aturan Penggunaan Skill & Tools (Wajib Dibaca Agen AI)

Setiap kali pengguna meminta perombakan UI, penambahan fitur visual, atau *styling*, Anda (Claude) WAJIB:
1. **Gunakan REA (Reverse Engineer Anything):** Jika pengguna meminta menjiplak tata letak aplikasi terkenal (seperti Google Maps Web), jalankan *tool* REA untuk menganalisis struktur DOM/CSS target sebelum merancang komponen FLORENCE.
2. **Aktifkan Mode 'Pro Max':** Terapkan pedoman estetika "UI/UX Pro Max" yang tercantum di bawah ini pada setiap komponen yang Anda buat, tanpa perlu diminta berulang kali oleh pengguna.
3. **Hindari 'AI Slop':** Jangan gunakan desain kaku standar Bootstrap. Hindari warna gradien ungu/pink neon yang murahan. Wajib gunakan transisi halus dan bayangan lembut (*soft shadows*).

---

## 1. Blueprint 9 Fitur Utama (Fungsionalitas & Visualisasi)

Patuhi cetak biru visual berikut untuk setiap fitur FLORENCE:

### Fitur 1: Platform PWA Ganda (Publik & Pemerintah)
*   **Portal Publik (Mobile-First):** Layout berfokus pada kanvas peta layar penuh. Gunakan sistem **Bottom Sheet 3-level** (`peek`, `half`, `full`) di area bawah untuk navigasi utama agar interaksi terasa seperti aplikasi *native* iOS/Android.
*   **Dashboard Pemerintah (Desktop):** Layout profesional dengan *Sidebar* menu di kiri, Peta Operasional di tengah, dan Panel Analitik DSS di sisi kanan.
*   **Visualisasi Offline-First:** Saat koneksi terputus, sembunyikan ubin peta Google perlahan (ganti ke kanvas latar abu-abu/garis grid), namun pastikan UI *Bottom Sheet* tetap aktif memuat *cache* data terakhir dengan lencana (*badge*): ⚠️ `Offline - Data 7 mnt lalu`.

### Fitur 2: Smart Flood Map (Google Maps Terintegrasi)
*   **Kanvas Utama:** Render Peta Google menggunakan gaya peta khusus (tema terang/bersih/perkotaan) dengan properti `absolute inset-0 w-full h-screen z-0`.
*   **Status Zona Jalan (Polylines):** Render geometri ruas jalan langsung dari *state* (GeoJSON) dengan *stroke width* tebal (4-6px).
    *   **Hijau (`#2E7D32`):** 0-10 cm (Aman semua kendaraan).
    *   **Kuning (`#F9A825`):** 10-30 cm (Aman mobil, motor wajib hindari).
    *   **Merah (`#C62828`):** >30 cm (Lumpuh total).

### Fitur 3: 50 Titik Smart CCTV & Sensor (Pilot Kawasan USU)
*   **Marker Peta:** Gunakan `AdvancedMarkerElement` Google Maps. Buat desain *dot* melingkar modern. Jika status node Kuning atau Merah, tambahkan elemen cincin animasi berdenyut (*pulsing ring*) menggunakan kelas Tailwind `animate-ping`.
*   **Hover/Tooltip Card:** Saat *marker* diklik, munculkan kartu *Glassmorphism* (bukan *Info Window* standar Google) berisi:
    *   Ikon cuaca visual (Hujan/Cerah/Awan).
    *   Tinggi air *real-time* (misal: `32.5 cm`).
    *   *Confidence score* YOLOv8 (misal: `Akurasi Visual: 91%`).

### Fitur 4: Dynamic Flood-Aware Routing
*   **Input Navigasi:** *Floating panel* elegan di kiri atas. Harus ada *toggle switch* mulus untuk memilih mode `Mobil` vs `Motor`.
*   **Visualisasi Rute:** Rute aman dirender dengan garis biru tebal berbayang. Jika algoritma membelokkan arah karena genangan Merah/Kuning, tampilkan lencana (*badge*) melayang di atas jalur rute: ⚠️ `Menghindari Jl. Setia Budi`.
*   **Disklaimer Hukum (Wajib):** Di bawah estimasi waktu (ETA), cetak teks kecil: *"Rekomendasi berbasis data tersedia, bukan jaminan rute aman."*

### Fitur 5: Safe Point & Evakuasi
*   **Tombol Darurat (SOS):** Tombol aksi melayang (*FAB*) berbentuk bulat dengan gradien merah (`from-red-500 to-rose-500`) di kanan bawah.
*   **Visualisasi Evakuasi:** Saat ditekan, rute biru langsung menunjuk ke tempat aman terdekat. Pada panel *Bottom Sheet*, munculkan kartu informasi dengan *Progress Bar* mungil yang menunjukkan kapasitas (misal: `Terisi 150 / 850 orang`).

### Fitur 6: AI Early Flood Prediction (15-30 Menit)
*   **Banner Peringatan Dini (Publik):** Diintegrasikan ke atas *Command Center* kiri. 
    *   Normal: Tersembunyi.
    *   Siaga/Prediksi Luapan: Terekspansi mulus dengan `bg-amber-50 border-amber-200 text-amber-800`. Tampilkan teks berkedip halus (`animate-pulse`): ⏳ `Potensi luapan Jl. Dr. Mansyur dalam ≈ 22 mnt`.

### Fitur 7: Notifikasi Real-Time (Alert System)
*   **Toast Notification:** Komponen *toast* melayang di kanan atas layar. Setiap kali ada peringatan dari BMKG atau prediksi luapan, munculkan dengan animasi *slide-in*. Wajib cantumkan teks: *"Sumber data cuaca: BMKG"*.

### Fitur 8: Pencatatan Otomatis & Lapor Warga
*   **UI Lapor Banjir (Crowdsourcing):** Tombol kamera 📸 di antarmuka publik. Saat diklik, jangan tampilkan *form* HTML kaku, melainkan UI *fullscreen* mirip Instagram *Stories* yang siap mengambil foto genangan/sampah, mengambil koordinat GPS latar belakang, dan menampilkan tombol kirim sekali klik.

### Fitur 9: Decision Support System (DSS - UI Admin)
*   **Grafik Analitik:** Gunakan Recharts/ECharts. Buat grafik garis *spline* bersilangan antara (Curah Hujan vs Tinggi Air vs Durasi Surut) dengan gradien warna di bawah garisnya.
*   **Tabel Prioritas DBI:** Tabel berdesain bersih yang menampilkan daftar anomali saluran (DBI > 2.5). Berikan warna latar merah muda terang (highlight) pada baris prioritas utama dengan tombol aksi "Rekomendasi: Keruk Sedimen".

---

## 2. Standar Visual UI/UX "Pro Max" (Tailwind CSS)

Wajib terapkan *class-class* kosmetik ini secara global:

1.  **Glassmorphism Premium (Panel & Kartu Utama):**
    `bg-white/90 backdrop-blur-md border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-3xl`
2.  **Dark Mode Glassmorphism (Panel Admin/God Mode):**
    `bg-slate-900/80 backdrop-blur-md border border-slate-700 shadow-2xl text-white rounded-2xl`
3.  **Micro-Interactions (Semua Tombol & Elemen Interaktif):**
    `transform active:scale-[0.98] transition-all duration-200`
4.  **Input Mulus (Kotak Pencarian, Form):**
    `bg-gray-50/80 hover:bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-500/50 outline-none transition-all duration-300 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400`
5.  **Tipografi Premium:**
    Gunakan `tracking-tight` untuk *heading* besar. Pisahkan kontras visual secara tegas: Judul `text-gray-900 font-bold`, Deskripsi sekunder `text-gray-500 font-medium text-sm`.
6.  **Toggle Switches:** 
    Hindari *checkbox* HTML (`<input type="checkbox">`) yang standar. Gunakan struktur *toggle switch* modern berbentuk kapsul ala iOS.

---

## 3. Skenario Presentasi Juri (Admin God Mode Simulator)

Anda diwajibkan membangun sebuah komponen rahasia bernama `AdminScenarioPanel.tsx` untuk menyimulasikan kehebatan AI FLORENCE saat presentasi (*live demo*) tanpa harus menunggu hujan sungguhan.

**Spesifikasi Fungsional panel:**
1.  **Aktivasi:** Posisikan panel di sudut kiri/kanan bawah layar (`z-50`). Sediakan fitur untuk menyembunyikan/mengecilkan panel ini (misal di-*toggle* menggunakan *shortcut* atau tombol tersembunyi). Gunakan tema *Dark Mode Glassmorphism*.
2.  **Flood Injector (Manipulasi State):** Sediakan *Dropdown* pilihan ruas jalan/titik pantau (misal: T-08 Jl. Dr. Mansyur). Di bawahnya, buat *Slider Input* (0 cm - 100 cm). Jika *slider* digeser melampaui 30 cm, **state aplikasi harus langsung berubah ke zona Merah**, dan rute garis biru navigasi di peta harus langsung membelok memutarinya secara *real-time*.
3.  **BMKG Override:** Sediakan *Text Input* berlabel "Suntik Peringatan BMKG". Apapun yang diketik admin di sini dan menekan tombol 'Kirim', teks tersebut harus seketika tertampil di Banner Peringatan Dini (Fitur 6) pada UI pengguna publik.
4.  **Emergency Trigger:** Sebuah tombol *Switch* merah berlabel "Aktifkan Status Darurat". Jika dinyalakan, semua ikon *Safe Point* harus pop-up di layar pengguna.
5.  **Tombol Reset:** Mengembalikan semua injeksi *state* ke kondisi normal/cerah.

**Aturan Integrasi State God Mode:** 
Injeksi panel ini TIDAK BOLEH berdiri sendiri. Hubungkan fungsi-fungsi di atas secara reaktif (*reactive*) ke *state management* utama (Zustand/Context/Props) agar perubahan di panel Admin langsung memicu kalkulasi ulang algoritma rute dan UI peta di layar sebelahnya.