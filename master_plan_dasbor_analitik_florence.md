# Master Plan: FLORENCE Government Dashboard - Smart Inspector Panel
> **Dokumen Acuan Arsitektur & Basis Data Simulasi (Decision Support System)**
> Proyek: LKTI BRIDA - FLORENCE (Flood Risk Early-warning & Navigation for City Ecosystem)

---

## 1. Arsitektur Antarmuka (UI/UX)
Panel kanan Dasbor Pemerintah (`StatsPanel.tsx`) dirancang untuk bersifat dinamis (Stateful). Terdapat dua status (state) utama:

*   **State 0 (Default / Makro):** Muncul saat tidak ada titik jalan yang diklik. Menampilkan ringkasan statistik seluruh kota dan indikator siaga.
*   **State 1 (Mikro / Inspeksi):** Muncul saat pengguna (BPBD) mengeklik salah satu segmen merah/marker di peta. Panel berubah drastis menjadi alat bedah/analisis khusus untuk jalan tersebut.

---

## 2. Modul State 0: Executive Summary & Statistik Makro
Data yang dirender saat panel berada dalam kondisi *default*:

*   **Indikator KPI Utama:**
    *   **Status Kota:** "SIAGA 1 (DARURAT BANJIR)" / "WASPADA (AWAL HUJAN)"
    *   **Laporan Tervalidasi:** *[Total angka]* (cth: 342 Laporan Titik Banjir via AI + Warga)
    *   **Ruas Terputus:** *[Total Segmen]* (cth: 11 Segmen Arteri Terputus)
    *   **Estimasi Dampak Macet:** *[Total Jarak]* (cth: 14.5 km kemacetan imbasan)
*   **Grafik Tren Waktu Nyata:** (Opsional/Visual) Menunjukkan kurva prediksi surut berdasarkan data curah hujan BMKG.
*   **Pemantauan CCTV:** Tombol/Toggle global untuk memunculkan ikon kamera di persimpangan strategis pada peta Mapbox.

---

## 3. Modul State 1: Analisis Mikro & Preskriptif (Per-Ruas Jalan)
Ketika ruas jalan spesifik (misal: Jl. Dr. Mansyur) diklik, UI memuat data JSON berikut untuk jalan tersebut.

### Data Simulasi Diagnosis & Mitigasi (Mock Database)

**A. Ruas: Jl. Dr. Mansyur (Kawasan Kampus USU)**
*   **Level Bahaya:** Kritis (1.2m - 1.5m)
*   **Akses CCTV:** `[TERSEDIA - Simpang Pintu 1 USU]`
*   **Probabilitas Genangan:** 85% jika curah hujan > 50mm/jam.
*   **Diagnosis Akar Masalah (Root Cause):**
    1.  Kapasitas drainase Parit Benggali tidak memadai (tingkat sedimentasi terpantau 40%).
    2.  Efek *Backwater* (Air Balik): Air dari saluran drainase tidak bisa mengalir karena debit Sungai Babura di hilir sudah lebih tinggi dari elevasi parit.
    3.  Topografi cekungan (basin) tepat di depan gerbang RS USU.
*   **Rekomendasi Tindakan (AI Prescription):**
    *   *Taktis (Sekarang):* Kirim 2 unit pompa air portabel (kapasitas 500 L/detik) ke Pintu 1 USU. Aktifkan penutupan rute $A^*$ otomatis dari arah Setia Budi.
    *   *Strategis (Pasca-Bencana):* Pengerukan sedimen di DAS Babura sepanjang 2 km dan perancangan kolam retensi bawah tanah (underground basin) di area lahan kosong kampus USU.

**B. Ruas: Jl. Letjen Jamin Ginting (Simpang Pos / Padang Bulan)**
*   **Level Bahaya:** Waspada - Kritis (0.6m - 0.8m)
*   **Akses CCTV:** `[TERSEDIA - ATCS Flyover Simpang Pos]`
*   **Probabilitas Genangan:** 70% jika curah hujan > 40mm/jam.
*   **Diagnosis Akar Masalah (Root Cause):**
    1.  Desain elevasi jalan arteri berada di bawah muka air drainase primer.
    2.  Penyumbatan masif *box culvert* (gorong-gorong) akibat penumpukan sampah domestik dan utilitas kabel yang semrawut.
*   **Rekomendasi Tindakan (AI Prescription):**
    *   *Taktis (Sekarang):* Terjunkan tim SAR/BPBD dengan perahu karet karena jalur utama suplai logistik ke arah Berastagi terputus total.
    *   *Strategis (Pasca-Bencana):* Rekonstruksi dimensi *box culvert* di persimpangan Flyover dan pemasangan *trash rack* (saringan sampah) otomatis berbasis IoT.

**C. Ruas: Jl. Gatot Subroto (Simpang Pondok Kelapa)**
*   **Level Bahaya:** Kritis (0.8m)
*   **Akses CCTV:** `[TERSEDIA - ATCS Manhattan Times Square]`
*   **Diagnosis Akar Masalah (Root Cause):**
    1.  Limpasan berlebih (overflow) dari Sungai Sei Sikambing.
    2.  Hilangnya area resapan air akibat padatnya pembangunan ruko komersial di bantaran sungai.
*   **Rekomendasi Tindakan (AI Prescription):**
    *   *Taktis (Sekarang):* Rekayasa lalu lintas. Pecah kemacetan (spillover) ke arah Jalan Ringroad dan Kapten Sumarsono.
    *   *Strategis (Pasca-Bencana):* Relokasi dan pembebasan lahan selebar 5 meter di sempadan Sungai Sei Sikambing untuk jalur inspeksi dan ruang terbuka hijau (RTH).

---

## 4. Instruksi Implementasi (Frontend / React)
1.  Buat struktur data (array of objects) di `utils/historicalData.ts` yang berisi objek-objek jalan di atas.
2.  Gunakan `useState` di komponen `StatsPanel` untuk melacak `selectedRoad` (bisa berupa `null` untuk State 0, atau `object` jalan untuk State 1).
3.  Tambahkan *event listener* `onClick` pada layer GeoJSON Mapbox (layer ruas jalan merah) untuk mengubah *state* `selectedRoad`.
4.  Tambahkan transisi animasi (Framer Motion atau Tailwind `transition-all`) agar perpindahan dari ringkasan kota ke diagnosis jalan terasa mulus dan futuristik.