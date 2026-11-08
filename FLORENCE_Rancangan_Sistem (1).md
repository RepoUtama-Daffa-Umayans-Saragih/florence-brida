# FLORENCE: Rancangan Teknis Terintegrasi Google Maps Platform dan BMKG Open Data

**Flood Localization, Observation, Risk Early-Warning, and Navigation for City Ecosystems**
Lomba INOSPEC BRIDA Kota Medan 2026

Rancangan ini mengikuti seluruh angka dan logika dari naskah FLORENCE: 50 titik pantau (5 fisik, 45 simulasi), siklus 5 menit, Persamaan (1) sampai (3), dan zona Hijau/Kuning/Merah. Dua catatan teknis dari verifikasi dokumentasi terkini mengubah cara integrasinya:

- **Google Directions API sudah berstatus Legacy.** Per Oktober 2026, API ini tidak bisa diaktifkan di proyek Cloud baru. Penggantinya adalah **Routes API** (`computeRoutes`), sehingga proposal sebaiknya menyebut Routes API sebagai penerus Directions API.
- **Open Data BMKG** menyediakan prakiraan 3 harian per kelurahan/desa (kode `adm4`) dalam JSON, dengan 8 data per hari (per 3 jam). Datanya dimutakhirkan 2 kali sehari, batas aksesnya 60 permintaan/menit/IP, dan BMKG **wajib dicantumkan sebagai sumber** di aplikasi.

Kedua poin ini menentukan batas realistis integrasi, dan dampaknya dijelaskan di bagian A.

---

## A. Rincian 9 Fitur Utama Terintegrasi

### Fitur 1. Platform PWA Ganda (Portal Publik dan Dashboard Pemerintah)

| Aspek | Rancangan |
|---|---|
| **Frontend** | Satu codebase Next.js dengan dua *route group*: `/(public)` dan `/(gov)`. Service Worker meng-*cache* shell aplikasi, daftar safe point, dan status zona terakhir (ubin peta Google tidak di-cache, lihat C.1.5), sehingga tetap berguna saat sinyal drop ketika badai. |
| **Backend** | API Gateway (REST untuk query, WebSocket/SSE untuk update zona real-time). Autentikasi dua jalur: publik anonim (rate-limited), pemerintah memakai OIDC + RBAC (peran: `bpbd_operator`, `sdabmbk_analyst`, `admin`). |
| **Offline** | Last-known-state ditampilkan dengan label usia data (misalnya "diperbarui 7 menit lalu"), supaya warga tidak mengira data basi sebagai data terkini. |

### Fitur 2. Smart Flood Map (Google Maps JavaScript API)

**Frontend:**
- Peta dimuat dengan Maps JavaScript API. Tiap titik pantau ditampilkan sebagai **Advanced Marker** berwarna sesuai zona.
- Segmen jalan terdampak digambar sebagai `Polyline` (Hijau/Kuning/Merah) dari geometri ruas yang disimpan di PostGIS dan dikirim sebagai GeoJSON.
- Lapisan opsional: *heatmap* kedalaman genangan historis (data 27 November 2025 pada Gambar 2 naskah) dan lapisan safe point.

**Backend:**
- Setiap siklus 5 menit, layanan `zone-classifier` memetakan tinggi air `h_i` ke zona:
  - `0–10 cm` → Hijau
  - `>10–30 cm` → Kuning
  - `>30 cm` → Merah
- Perubahan zona disiarkan ke klien lewat WebSocket sebagai *diff* kecil (hanya node yang berubah), bukan seluruh GeoJSON.

**Fusi sensor:** tinggi air final merupakan gabungan berbobot dari estimasi CCTV (MAE 1,50 cm) dan perhitungan dari sensor ultrasonik. Saat mAP CCTV turun (malam hujan deras: 87,7%), bobot sensor dinaikkan otomatis berdasarkan *confidence score* YOLOv8. Ini menjawab keterbatasan yang diakui di naskah.

### Fitur 3. Jaringan 50 Titik Smart CCTV dan Sensor

**Edge node per titik:**
- ESP32 membaca JSN-SR04T (jarak muka air), BME280, anemometer, dan rain gauge *tipping bucket*.
- Sensor diakuisisi tiap 5 menit, diambil median 5 sampel untuk membuang *outlier* (cipratan dan gema ultrasonik), lalu dikirim lewat MQTT/TLS.
- Video CCTV **tidak** dikirim sebagai arsip. Inferensi YOLOv8 berjalan di cloud (atau edge GPU pada tahap lanjut) terhadap *snapshot*/stream, dan yang disimpan hanya keluaran numerik: status hujan, luas genangan (m²), tinggi air (cm). Ini sejalan dengan komitmen UU PDP di naskah.

**Logika deteksi:** YOLOv8 menghasilkan tiga keluaran: klasifikasi hujan, segmentasi genangan, dan pembacaan mistar ukur. *Temporal smoothing* 3 siklus berturut-turut menyaring cipratan kendaraan.

### Fitur 4. Dynamic Flood-Aware Routing (Google Routes API + Mesin Routing FLORENCE)

Google Routes API **tidak menerima input "tutup ruas ini karena banjir"**. Parameter `avoid` hanya mendukung `tolls`, `highways`, `ferries`, dan `indoor`, sehingga tidak bisa memblokir jalan tertentu. Karena itu, **otoritas penghindaran banjir ada di mesin routing FLORENCE sendiri**, dan Google berperan sebagai peta, penyedia ETA dan lalu lintas, serta pembanding.

| Komponen | Peran |
|---|---|
| **Mesin routing FLORENCE** (graf OSM di PostGIS/pgRouting atau in-memory) | Menghitung rute dengan bobot Persamaan (2): `C_ij(h) = L/[v0·(1−(h/hcrit)²)]·60 + P(Z)`. Zona Merah = ∞, Kuning = penalti 10³ untuk motor dan 0 untuk mobil. Menjalankan A* (heuristik jarak garis lurus), dengan Dijkstra sebagai pembanding. |
| **Google Routes API** (`computeRoutes`) | Memberi ETA berbasis lalu lintas, rute alternatif (`computeAlternativeRoutes`), dan polyline untuk segmen non-banjir. Dipakai juga untuk *cross-check*. |
| **Maps JavaScript API** | Menggambar polyline rute FLORENCE di atas peta Google. |

**Alur eksekusi saat CCTV mendeteksi genangan Zona Merah:**

1. Node T-08 mengirim `h = 38 cm` → zona Merah → ruas yang terhubung diberi bobot ∞ di graf.
2. Pengguna meminta rute (A → B). Mesin FLORENCE menghitung rute bebas banjir dengan A*.
3. **Validasi silang:** backend memanggil Routes API untuk rute A → B dan menguji secara geometris (PostGIS `ST_DWithin`, *buffer* sekitar 15 m) apakah polyline Google memotong ruas Merah/Kuning.
4. Jika **tidak memotong**, rute Google dipakai karena membawa ETA lalu lintas terbaik. Jika **memotong**, rute FLORENCE dipakai. Hasilnya dikirim ke klien dan ditampilkan sebagai polyline di peta.
5. Opsi lanjutan: titik-titik kunci rute FLORENCE dikirim sebagai *intermediate waypoints* ke Routes API (`via: true`) untuk mendapat ETA lalu lintas di sepanjang jalur bebas banjir. Hasilnya tetap harus melewati uji geometri yang sama.

Peringatan ini wajib tampil di UI: *"Rekomendasi berbasis data tersedia, bukan jaminan rute aman"* (sesuai naskah).

### Fitur 5. Safe Point dan Evakuasi (Places API New + Basis Data Internal)

- **Sumber utama:** tabel `safe_points` di PostGIS (Auditorium USU 850, Pancasila 600, Perpustakaan 500, ditambah posko BPBD). Data kapasitas dan status buka dikelola admin.
- **Places API (New):** dipakai untuk (a) Autocomplete pencarian lokasi tujuan, (b) *Nearby Search* untuk melengkapi fasilitas pendukung seperti rumah ibadah, rumah sakit, dan apotek di sekitar rute, serta (c) detail jam buka. Data Places hanya pelengkap, bukan sumber kapasitas resmi.
- **Logika:** sistem menghitung safe point terdekat yang rutenya tidak menyentuh Zona Merah, dengan A* multi-target, lalu mengurutkan berdasarkan ETA dan sisa kapasitas.

### Fitur 6. AI Early Flood Prediction dengan Fusi Data BMKG

**Pipeline tiap 5 menit per node:**

```
[JSN-SR04T: Ht, ΔHt/Δt]                     ┐
[Rain gauge: It]                             │
[Anemometer: Wt]                             ├─► Feature Builder ─► Model prediksi
[BME280: T, RH, Δtekanan]                    │   (Pers. 1 + koreksi BMKG)
[BMKG: cuaca, RH, tcc, ws, peringatan dini]  ┘          │
                                                        ▼
                                       Ĥ(t+15), Ĥ(t+30) ≥ ambang? → status SIAGA
```

**Cara BMKG masuk ke model (usulan, perlu diuji ablasi):**

1. **Fitur konteks makro.** Dari JSON BMKG diambil slot 3-jam terdekat per kelurahan: `weather_desc`, `hu`, `tcc`, `ws`, `t`. Kondisi cuaca dikodekan ordinal `R_bmkg` (0 = cerah/berawan … 4 = hujan lebat/petir).
2. **Perluasan Persamaan (1):**
   `Ĥ(t+Δt) = Ht + α·ΔHt/Δt + β·It + γ·Wt·(Ht/Dmax) + δ·R_bmkg`
   Koefisien `δ` dilatih per titik, dan kontribusinya harus diuji dengan ablasi seperti kritik di naskah.
3. **Ambang adaptif.** Saat `R_bmkg ≥ 3`, atau ada peringatan dini cuaca BMKG aktif untuk wilayah tersebut, ambang siaga diturunkan (misalnya dari `Ĥ ≥ Dmax` menjadi `Ĥ ≥ 0,85·Dmax`). Hasilnya lebih sensitif tepat saat risikonya tinggi.
4. **Koreksi bias lokal.** Sistem membandingkan prakiraan BMKG dengan curah hujan terukur rain gauge, lalu menghitung faktor koreksi per node, karena BMKG berskala kelurahan sedangkan hujan Medan sangat lokal.

**Keterbatasan BMKG yang harus dinyatakan jujur:** resolusi waktu 3 jam dan update 2 kali sehari membuat BMKG cocok sebagai **prior/konteks**, bukan pemicu prediksi 15–30 menit. Pemicu utama tetap ΔH/Δt dari sensor parit. Peringatan dini cuaca BMKG (nowcast/CAP) bisa dipakai sebagai *flag* tambahan.

### Fitur 7. Notifikasi dan Peringatan Dini

- **Web Push (VAPID)** lewat Service Worker. Target latensi mengikuti naskah, rata-rata 1,8 detik.
- **WhatsApp/Telegram broadcast** (latensi naskah: 3,4 detik) untuk pelanggan yang mendaftar.
- **Geofencing:** Web Push di PWA tidak bisa memantau lokasi di latar belakang secara andal. Implementasi realistis ada tiga lapis:
  1. Pengguna berlangganan **zona/kelurahan** (topic-based push).
  2. Saat aplikasi terbuka, klien mengirim posisi dan server mencocokkannya dengan poligon zona risiko.
  3. Untuk geofencing sungguhan di latar belakang, disarankan **wrapper aplikasi native** pada fase lanjut.
- **Isi pesan** (4 elemen standar peringatan dini): *apa* (potensi luapan di T-08, estimasi 22 menit), *di mana*, *apa yang dilakukan* (tautan rute alternatif), dan *sumber* (FLORENCE + BMKG).

### Fitur 8. Data Logging Time-Series Otomatis

- Skema TimescaleDB: `readings(node_id, ts, rain_mm_h, water_cm, drain_cm, wind_ms, temp, rh, pressure, cv_conf)`, dengan *hypertable* dipartisi per waktu.
- `bmkg_forecasts(adm4, valid_time, weather_code, t, hu, ws, tcc, fetched_at)` disimpan terpisah untuk keperluan evaluasi akurasi BMKG vs sensor.
- *Continuous aggregate* menghasilkan ringkasan per jam dan per kejadian hujan, termasuk **durasi surut `T_rec`** yang menjadi masukan DSS.
- Kebijakan retensi: data mentah 90 hari, agregat tanpa batas.

### Fitur 9. Decision Support System (DBI) dan Laporan Warga

- Job terjadwal menghitung per titik `DBI_k = (T_rec/T_norm)·(H_peak/I_mean)·(1+ln(1+V_rpt))` (Persamaan 3). Kandidat prioritas: `DBI > 2,5` **dan** `T_rec > 120 menit`.
- **Laporan warga:** foto dan koordinat diunggah ke object storage, dengan EXIF-GPS divalidasi terhadap radius titik pantau. Status laporan: *Baru → Terverifikasi (oleh operator) → Ditindaklanjuti*. Hanya laporan terverifikasi yang masuk `V_rpt`.
- **Peran BMKG di DSS:** `I_mean` bisa divalidasi silang dengan klimatologi BMKG, dan hujan lebat (di atas 20 mm/jam menurut acuan di naskah) tidak langsung dianggap kerusakan saluran. Sistem menandai "hujan ekstrem" terpisah dari "anomali surut".
- Keluaran: tabel prioritas, rekomendasi intervensi, dan ekspor PDF/CSV untuk BPBD dan SDABMBK. Sesuai naskah, hasil ini berstatus rekomendasi yang **memerlukan verifikasi lapangan**.

---

## B. Desain UI/UX (Wireframe Tekstual)

### B.1 Portal Publik (Mobile, ±390 px)

```
┌─────────────────────────────────────┐
│ ① BANNER STATUS (sticky, berwarna)  │
│ 🟡 SIAGA: Hujan lebat diperkirakan  │
│ di Medan Baru 14:00–17:00 · BMKG    │
│ Potensi luapan T-08 ≈ 22 mnt [Detail]│
├─────────────────────────────────────┤
│ ② SEARCH BAR (Places Autocomplete)  │
│ 🔍 Mau ke mana?  [🚗 Mobil|🏍 Motor] │
├─────────────────────────────────────┤
│ ③ PETA GOOGLE MAPS (±55% layar)     │
│  ● Marker node berwarna zona        │
│  ━ Polyline ruas Hijau/Kuning/Merah │
│  ┈ Rute rekomendasi FLORENCE (biru) │
│  ⛑ Ikon Safe Point                  │
│  [Legend zona]   [Layer ⧉] [📍Saya] │
├─────────────────────────────────────┤
│ ④ PANEL RUTE (bottom sheet, geser)  │
│ Rute bebas banjir · 11,2 mnt · 4,3 km│
│ ⚠ Menghindari Jl. Setia Budi (Kuning)│
│ Alternatif: via Ringroad–Sumber     │
│ [▶ Mulai di Google Maps]            │
├─────────────────────────────────────┤
│ [📸 Lapor Banjir] [🆘 SOS/Safe Point]│
│ Sumber cuaca: BMKG · Diperbarui 3 mnt│
└─────────────────────────────────────┘
```

**Perilaku kunci:**
- **Bottom sheet 3 tingkat:** *peek* (status ringkas), *half* (rute), *full* (detail).
- **Tombol SOS:** menampilkan 3 safe point terdekat dengan ETA jalan kaki dan sisa kapasitas, serta tombol telepon BPBD.
- **Lapor Banjir:** kamera → foto, otomatis mengambil lokasi, memilih kategori (genangan / sumbatan sampah / saluran rusak), lalu kirim. Antrean offline dikirim ulang saat sinyal kembali.
- **Aksesibilitas:** warna zona selalu disertai ikon dan teks (aman bagi buta warna). Zona Kuning ditulis jelas: "Mobil boleh, motor hindari".
- **Atribusi:** teks "Sumber data cuaca: BMKG" tampil permanen, sebagai syarat penggunaan data BMKG.

### B.2 Dashboard Pemerintah (Desktop, ≥1440 px)

```
┌──────────────────────────────────────────────────────────────────────┐
│ FLORENCE Command Center   [Kawasan: USU ▾] [Periode ▾]   👤 BPBD ▾   │
├────────┬─────────────────────────────────────────┬───────────────────┤
│ NAV    │ ① KPI STRIP                             │ ④ FEED ALERT      │
│ Live   │ Titik aktif 47/50 │ Merah 9 │ Kuning 17 │ 14:02 T-08 siaga  │
│ Analitik│ Rata lead time 22,4 mnt │ Node offline 3│ 13:55 T-21 Kuning │
│ DSS    ├──────────────────────┬──────────────────┤ 13:40 Node T-30   │
│ Laporan│ ② PETA OPERASIONAL   │ ③ TIME-SERIES    │       offline     │
│ Node   │ (Google Maps)        │ Tinggi air vs    │ ──────────────────│
│ Safe   │ • Zona 3 warna       │ curah hujan,     │ ⑤ ANTREAN LAPORAN │
│ Point  │ • Bubble DBI (ukuran │ per node dipilih;│ WARGA (foto,      │
│ Admin  │   = skor)            │ garis Dmax;      │ Verifikasi/Tolak) │
│        │ • Layer laporan warga│ overlay prediksi │                   │
│        │ • Layer BMKG warning │ 15/30 mnt        │                   │
│        ├──────────────────────┴──────────────────┤                   │
│        │ ⑥ TABEL PRIORITAS DBI                   │                   │
│        │ #|Titik|Trec|Hpeak|Imean|Vrpt|DBI|Rekom │                   │
│        │ 1|T-08 |185 |32,5 |38,5 |14  |4,83|Keruk │                   │
│        │ ⑦ PERBANDINGAN BMKG vs SENSOR LOKAL     │                   │
│        │ (prakiraan vs hujan terukur, per jam)   │                   │
└────────┴─────────────────────────────────────────┴───────────────────┘
```

**Elemen tambahan:**
- **Node health:** status baterai, kualitas sinyal, *confidence* CCTV, dan umur data terakhir.
- **Mode skenario:** operator memilih ambang manual dan melihat dampaknya pada zona.
- **Ekspor:** laporan DBI ke PDF/XLSX untuk usulan anggaran.
- **Peta DBI:** setiap bubble diklik untuk membuka foto laporan warga dan riwayat surut.

---

## C. Arsitektur Sistem (3-Tier) dan Alur Data

```
LAPISAN 1 – PERSEPSI/EDGE            LAPISAN 2 – AI & CLOUD                      LAPISAN 3 – APLIKASI & GIS
┌───────────────────────┐  MQTT/TLS  ┌──────────────────────────────┐ REST/WS  ┌─────────────────────┐
│ ESP32 + JSN-SR04T     │ ─────────► │ MQTT Broker → Ingestion API  │ ───────► │ PWA Publik (Next.js)│
│ BME280, Anemometer,   │ tiap 5 mnt │ TimescaleDB (time-series)    │          │ Dashboard Pemerintah│
│ Rain gauge            │            │ YOLOv8 Inference Service     │          │ Google Maps JS API  │
│ CCTV ATCS (RTSP)      │ ─snapshot─►│ BMKG Connector (scheduler)   │ ◄─────── │ Routes API (server) │
└───────────────────────┘            │ Fusion + Prediction Service  │ user req │ Places API (New)    │
                                     │ Zone Classifier              │          │ Web Push (VAPID)    │
      ┌────────────────────┐         │ Routing Engine (A*/Dijkstra) │ ─notif─► │ WA/Telegram Gateway │
      │ BMKG Open Data API │ ──────► │ DSS/DBI Job + Notification   │          └─────────────────────┘
      └────────────────────┘         └──────────────────────────────┘
```

### Alur Data Berurutan (satu siklus 5 menit)

| Langkah | Proses | Detail |
|---|---|---|
| **1. Akuisisi** (Edge) | ESP32 membaca sensor | Median 5 sampel, validasi rentang, cap waktu NTP. Paket JSON ±200 byte. |
| **2. Transmisi** | MQTT over TLS (4G) | QoS 1, *retained last-state*. Buffer lokal bila sinyal putus, kirim ulang saat tersambung. |
| **3. Ingestion** | Ingestion API | Validasi skema, deduplikasi, tulis ke TimescaleDB. Node tanpa data > 10 menit ditandai *stale*. |
| **4. Visi komputer** | YOLOv8 pada snapshot CCTV | Output: status hujan, luas genangan, tinggi air, *confidence*. Temporal smoothing 3 siklus. |
| **5. Tarik BMKG** | BMKG Connector | Polling tiap beberapa jam (selaras update 2×/hari), bukan per menit. Cache per `adm4` di Redis. Jauh di bawah batas 60 req/menit. |
| **6. Fusi data** | Feature Builder | Gabung sensor lokal + CV + `R_bmkg` per kelurahan terdekat node. |
| **7. Prediksi** | Model Persamaan (1) + koreksi BMKG | Hasil `Ĥ(15)` dan `Ĥ(30)`. Jika melampaui ambang adaptif, status **SIAGA**. |
| **8. Zonasi** | Zone Classifier | Hijau/Kuning/Merah per node, lalu dipropagasi ke segmen jalan terdekat. |
| **9. Update graf** | Routing Engine | Bobot ruas dihitung ulang dengan Persamaan (2). Hanya segmen berubah yang diperbarui. |
| **10. Notifikasi** | Notification Service | Aturan: siaga baru, naik zona, atau ada peringatan BMKG → Web Push + WA/Telegram, dengan *dedup* agar tidak spam. |
| **11. Distribusi** | WebSocket/SSE | Diff zona ke PWA. Peta Google Maps memperbarui warna. |
| **12. Rute on-demand** | Permintaan pengguna | Routing FLORENCE (A*) → validasi silang Routes API → polyline di peta. |
| **13. Analitik** | Job DSS (harian) | Hitung `T_rec` dan DBI, tulis peringkat ke dashboard. |

**Ketahanan:** *dead-letter queue* untuk paket gagal, *health check* per node, dan *fallback* ke data sensor saja bila CCTV tidak tersedia. Bila BMKG tidak terjangkau, sistem memakai model tanpa fitur BMKG (*graceful degradation*).

---

### C.1 Akses Google Maps Platform: Rincian Teknis

**Prinsip:** peta dirender **langsung di dalam PWA FLORENCE** memakai **Maps JavaScript API**. Warga tidak diarahkan keluar ke aplikasi Google Maps terpisah. Tombol "Mulai di Google Maps" hanya opsi tambahan untuk navigasi belok-demi-belok.

#### C.1.1 Tiga Kunci API yang Dipisah

| Kunci | Dipakai oleh | API yang diaktifkan | Pembatasan |
|---|---|---|---|
| `GMAPS_BROWSER_KEY` | PWA (browser) | Maps JavaScript API (+ library `places`, `geometry`, `marker`) | HTTP referrer: domain produksi + staging saja |
| `GMAPS_SERVER_KEY` | Backend NestJS (rute) | Routes API | Pembatasan IP (egress NAT Cloud Run) + hanya Routes API |
| `GMAPS_SERVER_PLACES_KEY` | Backend (enrichment safe point) | Places API (New) | Pembatasan IP + hanya Places API (New) |

Kunci server disimpan di **Secret Manager**, tidak pernah dikirim ke browser. Atur juga kuota harian dan *budget alert* di Cloud Billing. Karena Directions API berstatus Legacy dan tidak bisa diaktifkan di proyek baru, jangan mengaktifkan API Legacy.

#### C.1.2 Merender Peta dan Overlay di PWA

- **Peta dasar:** komponen peta dibuat dengan `mapId` (wajib untuk Advanced Markers), pusat kawasan USU, dan zoom awal sekitar 15. Peta dimuat lazy (hanya di halaman peta) agar *first load* PWA tetap ringan.
- **Advanced Markers** untuk 50 titik pantau. Isi marker berupa elemen HTML kecil (ikon + warna zona + label ID node), sehingga warna dapat diubah tanpa membuat ulang marker.
- **Polyline ruas jalan:** geometri ruas dimuat sekali dari `GET /api/v1/segments` (GeoJSON dari PostGIS), lalu dibuat satu `google.maps.Polyline` per ruas dan disimpan dalam `Map<segmentId, Polyline>`.
- **Pembaruan warna dinamis:** saat pesan `zone.update` tiba via WebSocket/SSE, frontend hanya memanggil `polyline.setOptions({ strokeColor })` untuk ruas yang berubah. Tidak ada render ulang seluruh peta.

```tsx
// Ilustrasi: pembaruan warna polyline dari event real-time (Next.js, client component)
const ZONE_COLOR = { GREEN: "#2E7D32", YELLOW: "#F9A825", RED: "#C62828" } as const;

socket.on("zone.update", (msg: ZoneUpdate) => {
  for (const s of msg.segments) {
    polylineRegistry.get(s.id)?.setOptions({ strokeColor: ZONE_COLOR[s.zone] });
  }
  for (const n of msg.nodes) {
    markerRegistry.get(n.id)?.update(n.zone, n.h); // ubah kelas CSS + label marker
  }
  zoneStore.setSnapshot(msg.seq, msg); // simpan untuk mode offline
});
```

**Format pesan real-time (kontrak backend → frontend):**

```json
{
  "type": "zone.update",
  "seq": 10492,
  "ts": "2026-11-05T14:05:00+07:00",
  "nodes": [{ "id": "T-08", "h": 38.0, "zone": "RED", "trend": "rising", "conf": 0.91 }],
  "segments": [{ "id": "seg_01234", "zone": "RED" }]
}
```

Klien menyimpan `seq` terakhir. Saat koneksi putus lalu tersambung kembali, klien meminta `GET /api/v1/zones/snapshot?since=<seq>` agar tidak ada pembaruan yang terlewat.

#### C.1.3 Alur Rute Alternatif (Routing Engine + Routes API)

Routes API `computeRoutes` tidak mendukung parameter blokir ruas jalan kustom (`avoid` hanya untuk tol, jalan bebas hambatan, feri, dan indoor). Pembagian tugas:

| Tahap | Pelaku | Proses |
|---|---|---|
| 1 | Mesin routing FLORENCE (backend) | A* pada graf OSM dengan bobot Persamaan (2). Ruas Merah = ∞, ruas Kuning = penalti 10³ untuk motor dan 0 untuk mobil. Hasil: urutan simpul rute aman. |
| 2 | Backend | Rute disederhanakan (Douglas–Peucker) lalu diambil titik kunci tiap ±300–500 m sebagai *intermediate waypoints* bertipe `via: true`, agar Google mengikuti jalur FLORENCE tanpa berhenti di titik tersebut. Jumlah waypoint dibatasi sesuai kuota Routes API (verifikasi batas terbaru di dokumentasi). |
| 3 | Google Routes API | `computeRoutes` dengan `travelMode` `DRIVE` atau `TWO_WHEELER` (cek ketersediaan cakupan untuk Medan), `routingPreference: TRAFFIC_AWARE`, dan `polylineEncoding: ENCODED_POLYLINE`. Menghasilkan polyline yang menempel ke jalan, jarak, dan **ETA berbasis lalu lintas**. |
| 4 | Backend (PostGIS) | **Validasi geometri:** polyline Google diuji terhadap *buffer* ruas Merah/Kuning (`ST_Intersects`/`ST_DWithin`, toleransi ±15 m untuk selisih geometri OSM vs Google). |
| 5 | Backend | **Lolos** → kirim rute Google + ETA ke klien. **Gagal** → rapatkan jarak waypoint dan ulangi (maksimal 2 kali). Jika tetap gagal → kirim polyline FLORENCE sendiri dengan ETA dari Persamaan (2), diberi label "estimasi FLORENCE". |
| 6 | PWA | Dekode polyline dengan `google.maps.geometry.encoding.decodePath`, gambar sebagai `Polyline` biru di atas peta, dan tampilkan ETA di panel rute. |

```http
POST https://routes.googleapis.com/directions/v2:computeRoutes
X-Goog-Api-Key: ${GMAPS_SERVER_KEY}
X-Goog-FieldMask: routes.duration,routes.staticDuration,routes.distanceMeters,routes.polyline.encodedPolyline

{
  "origin":      { "location": { "latLng": { "latitude": 3.5617, "longitude": 98.6564 } } },
  "destination": { "location": { "latLng": { "latitude": 3.5589, "longitude": 98.6720 } } },
  "intermediates": [
    { "location": { "latLng": { "latitude": 3.5601, "longitude": 98.6612 } }, "via": true }
  ],
  "travelMode": "DRIVE",
  "routingPreference": "TRAFFIC_AWARE",
  "polylineEncoding": "ENCODED_POLYLINE"
}
```

*(Koordinat di atas hanya contoh format, bukan lokasi titik pantau.)*

**Kontrol biaya dan kepatuhan:**
- `X-Goog-FieldMask` wajib dan dibuat seminimal mungkin.
- Respons di-*cache* di Redis dengan kunci `(grid-asal, grid-tujuan, moda, hash-status-zona)` dan TTL 5 menit (selaras siklus data). Perubahan zona otomatis mengubah hash, sehingga cache lama tidak terpakai.
- Hasil Routes API dipakai dan ditampilkan di peta Google, bukan di peta pihak lain. Patuhi Ketentuan Layanan Google Maps Platform soal penyimpanan dan atribusi konten.
- Sertakan selalu pernyataan: *"Rekomendasi berbasis data tersedia, bukan jaminan rute aman."*

#### C.1.4 Places API (New) dan Safe Point

- **Autocomplete** (di browser, library `places`) untuk kotak pencarian tujuan, dengan bias lokasi ke Medan.
- **Nearby/Text Search** (di server, field mask minimal) untuk menambah fasilitas pendukung di sekitar rute. Hasil di-*cache* di PostGIS/Redis sesuai ketentuan penyimpanan Places.
- Data **kapasitas dan status buka safe point** bersumber dari tabel internal `safe_points` (diverifikasi BPBD/USU), bukan dari Places.

#### C.1.5 Catatan Mode Offline dan Peta Google

Ubin peta Google **tidak boleh** di-*precache* Service Worker, dan peta dasar membutuhkan koneksi. Karena itu, mode offline PWA dirancang sebagai berikut:
1. Daftar zona terakhir (tabel status per titik + waktu pembaruan), daftar safe point, dan nomor darurat tetap tampil dari cache.
2. Skema jalan sederhana (GeoJSON milik FLORENCE) digambar pada kanvas/SVG tanpa peta dasar Google sebagai *fallback* visual.
3. Peta Google penuh kembali aktif otomatis saat jaringan pulih.

---

### C.2 Integrasi Open Data BMKG: Rincian Teknis

#### C.2.1 Sumber dan Batasan

| Aspek | Ketentuan (sesuai dokumentasi BMKG) |
|---|---|
| Endpoint prakiraan | `GET https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4={kode_wilayah_tingkat_IV}` |
| Cakupan | Seluruh kelurahan/desa, prakiraan 3 hari, 8 data per hari (per 3 jam) |
| Pemutakhiran | 2 kali sehari |
| Format | JSON |
| Batas akses | 60 permintaan/menit/IP |
| Kewajiban | Mencantumkan BMKG sebagai sumber data pada aplikasi |
| Parameter utama | `local_datetime`, `t` (°C), `hu` (%), `weather_desc`, `ws` (**km/jam**), `wd`, `tcc` (%), `vs_text` (km), `analysis_date` |
| Peringatan dini | RSS/CAP peringatan dini cuaca BMKG (batas 60 permintaan/menit/IP). Verifikasi URL feed terbaru dari portal data.bmkg.go.id saat implementasi. |

#### C.2.2 Pemetaan Node ke Kode Wilayah

1. Tabel `adm4_regions(adm4, nama, geom)` memuat kode wilayah tingkat IV (kelurahan) untuk Kecamatan Medan Baru, Medan Selayang, dan sekitarnya, bersumber dari daftar kode wilayah resmi (Kepmendagri).
2. Tiap node pantau dipetakan ke kelurahan lewat `ST_Contains(adm4_regions.geom, node.geom)` dan disimpan di kolom `nodes.adm4`.
3. Jumlah kode `adm4` unik di kawasan pilot hanya beberapa buah, sehingga satu putaran polling hanya butuh beberapa permintaan, jauh di bawah batas 60/menit.

#### C.2.3 Scheduler Polling (Python/FastAPI atau NestJS Scheduler)

```
Cloud Scheduler (tiap 3 jam) ──► POST /internal/jobs/bmkg-sync (Cloud Run, IAM-protected)
        │
        ├─ ambil daftar adm4 unik dari tabel nodes
        ├─ untuk tiap adm4: GET BMKG  (token bucket ≤ 30 req/menit, timeout 10 dtk, retry 3× backoff eksponensial + jitter)
        ├─ bandingkan analysis_date dengan yang tersimpan → proses hanya jika baru
        ├─ normalisasi (ws km/jam → m/s ÷ 3,6; zona waktu lokal → UTC)
        ├─ tulis Redis  bmkg:forecast:{adm4}  (TTL 6 jam)
        └─ upsert PostgreSQL tabel bmkg_forecasts (riwayat untuk evaluasi akurasi)
```

Selain itu, job ringan tiap 5–10 menit memeriksa feed **peringatan dini cuaca** dan menyimpannya di `bmkg:warning:{wilayah}` untuk memicu ambang adaptif.

```python
# Ilustrasi: pengambil data BMKG dengan token bucket + cache (FastAPI service)
async def fetch_bmkg(adm4: str, client: httpx.AsyncClient, bucket: TokenBucket) -> dict | None:
    await bucket.acquire()                       # jaga laju < batas 60 req/menit/IP
    r = await client.get(
        "https://api.bmkg.go.id/publik/prakiraan-cuaca",
        params={"adm4": adm4}, timeout=10,
    )
    r.raise_for_status()
    return r.json()

async def sync_adm4(adm4: str):
    try:
        data = await fetch_bmkg(adm4, client, bucket)
        if is_new_analysis(adm4, data):          # bandingkan analysis_date
            await redis.set(f"bmkg:forecast:{adm4}", json.dumps(normalize(data)), ex=6*3600)
            await db.upsert_forecasts(adm4, data)
    except Exception:
        log.warning("BMKG gagal, pakai cache lama untuk %s", adm4)   # stale-while-error
```

#### C.2.4 Pencegahan Blokir IP (Rate Limiting dan Caching)

- **Pengguna tidak pernah memanggil BMKG langsung.** Browser hanya membaca `GET /api/v1/weather/context?node=T-08` dari backend FLORENCE, yang dilayani dari Redis.
- **Satu pemanggil terpusat:** hanya job scheduler yang menghubungi BMKG, dengan *token bucket* internal di bawah batas resmi.
- **Egress IP tetap:** Cloud Run keluar lewat Cloud NAT dengan IP statis, sehingga satu IP yang dipakai terprediksi dan batas 60 permintaan/menit tidak dibagi dengan layanan lain.
- **Stale-while-error:** bila BMKG tidak merespons, data cache tetap dipakai dan diberi label usia. Jika data lebih tua dari 12 jam, fitur BMKG dinonaktifkan dan model berjalan hanya dengan sensor lokal (*graceful degradation*).
- **Atribusi:** footer PWA dan dashboard menampilkan "Sumber data cuaca: BMKG".

#### C.2.5 Fusi Data Makro (BMKG) dan Mikro (Sensor 5 Menit)

**Pemetaan `weather_desc` → `R_bmkg`** (nilai teks BMKG dicocokkan dengan data aktual saat implementasi, karena label dapat berubah):

| `weather_desc` | `R_bmkg` |
|---|---|
| Cerah, Cerah Berawan, Berawan | 0 |
| Berawan Tebal, Kabut, Udara Kabur | 1 |
| Hujan Ringan, Hujan Lokal | 2 |
| Hujan Sedang | 3 |
| Hujan Lebat, Hujan Petir | 4 |

**Fitur konteks makro per node pada tiap siklus 5 menit:**
- `R_bmkg_now` dan `R_bmkg_next`: slot 3-jam yang sedang berlaku dan slot berikutnya.
- `hu_bmkg`, `tcc_bmkg`, `ws_bmkg` (dalam m/s), dan `wd_bmkg`.
- `warn_bmkg ∈ {0,1}`: ada peringatan dini cuaca ekstrem aktif untuk wilayah node.
- `bias_rain`: selisih berjalan antara indikasi hujan BMKG dan curah hujan rain gauge (koreksi lokal).

**Model prediksi (perluasan Persamaan 1):**

```
Ĥ(t+Δt) = Ht + α·ΔHt/Δt + β·It + γ·Wt·(Ht/Dmax) + δ·R_bmkg
```

**Ambang adaptif:**

```python
theta = 1.00                                   # rasio kapasitas normal: Ĥ ≥ Dmax
if r_bmkg >= 3 or warn_bmkg:                   # hujan sedang–lebat / peringatan dini aktif
    theta = 0.85
siaga = (h_pred_15 >= theta * d_max) or (h_pred_30 >= theta * d_max)
```

**Peran tiap sumber data:** sensor parit 5-menit adalah **pemicu utama** prediksi 15–30 menit, sedangkan BMKG (resolusi 3 jam) adalah **konteks dan penyetel sensitivitas**. Kontribusi `δ` dan ambang adaptif harus dibuktikan lewat uji ablasi (model tanpa BMKG sebagai baseline), sesuai catatan keterbatasan pada naskah.

---

### C.3 Pembagian Layanan dan Komunikasi Antar-Komponen

| Layanan | Teknologi | Tanggung jawab | Berkomunikasi dengan |
|---|---|---|---|
| `gateway-api` | NestJS | REST publik/pemerintah, auth, WebSocket/SSE, Web Push, pemanggil Routes/Places API, orkestrasi rute | Redis, PostgreSQL, `ai-engine` (HTTP/gRPC internal) |
| `ai-engine` | FastAPI (Python) | Inferensi YOLOv8, model prediksi, klasifikasi zona, mesin routing A*, job DSS/DBI | PostgreSQL/TimescaleDB, Redis, Pub/Sub |
| `ingestion` | FastAPI/NestJS | Konsumsi MQTT/HTTPS dari ESP32, validasi, tulis time-series | MQTT broker, TimescaleDB |
| `bmkg-sync` | FastAPI (job) | Polling BMKG, normalisasi, cache | BMKG, Redis, PostgreSQL |
| `notifier` | NestJS worker | Web Push (VAPID), WhatsApp/Telegram, deduplikasi | Pub/Sub, Redis |

- **Event bus:** Google Pub/Sub (topik `zone-changed`, `alert-raised`, `reading-ingested`). Redis Pub/Sub dipakai untuk *fan-out* ke banyak instance gateway agar setiap klien WebSocket menerima pembaruan.
- **Real-time:** WebSocket (Socket.IO atau `ws`) sebagai jalur utama, SSE sebagai cadangan di jaringan yang membatasi WebSocket. Cloud Run mendukung WebSocket dan SSE, tetapi atur batas waktu permintaan dan *session affinity*, dan klien harus siap menyambung ulang otomatis.

---
## D. Rekomendasi Tech Stack (Siap Implementasi)

### D.1 Ringkasan

| Domain | Teknologi utama |
|---|---|
| Frontend PWA | Next.js (App Router) + TypeScript + TailwindCSS + Workbox |
| API Gateway dan real-time | Node.js + NestJS (REST, WebSocket/SSE, Web Push) |
| AI dan analitik | Python + FastAPI + PyTorch/Ultralytics YOLOv8 |
| Database | PostgreSQL + PostGIS + TimescaleDB, Redis |
| Cloud | Google Cloud Platform (Cloud Run, Pub/Sub, Secret Manager, Cloud Storage, Vertex AI/Compute Engine GPU) |
| Peta dan rute | Google Maps JavaScript API, Routes API, Places API (New) |
| Cuaca makro | Open Data BMKG (prakiraan `adm4` + peringatan dini) |
| IoT | ESP32 + JSN-SR04T, BME280, anemometer, rain gauge, CCTV ATCS |

### D.2 Frontend (PWA)

| Komponen | Rincian |
|---|---|
| **Framework** | **Next.js (App Router)** dengan **TypeScript** (mode `strict`). Route group `app/(public)` dan `app/(gov)`; peta dan grafik sebagai *client components*, halaman statis/informasi sebagai *server components*. |
| **Styling** | **TailwindCSS** dengan token warna zona (`zone-green`, `zone-yellow`, `zone-red`) dan *dark mode*. Komponen UI: shadcn/ui atau Radix untuk aksesibilitas. |
| **Peta** | `@vis.gl/react-google-maps` (atau pemuat resmi Google) untuk Maps JavaScript API; komponen kustom `ZonePolyline` dan `NodeMarker` (Advanced Marker). |
| **State dan data** | TanStack Query (data REST), Zustand (snapshot zona real-time), Socket.IO client/EventSource (SSE). |
| **Grafik (dashboard)** | Apache ECharts atau Recharts untuk time-series tinggi air vs curah hujan dan tabel DBI. |
| **Service Worker dan offline-first** | **Workbox** (mode `injectManifest`, atau Serwist sebagai integrasi Next.js): *precache* app shell; `StaleWhileRevalidate` untuk `/api/v1/zones/snapshot`, `/api/v1/safe-points`, `/api/v1/weather/context`; `NetworkFirst` (timeout 3 detik) untuk status zona; `CacheFirst` untuk aset statis; **Background Sync** untuk antrean laporan warga; handler `push` dan `notificationclick` untuk Web Push. |
| **Penyimpanan klien** | IndexedDB (via `idb`) untuk snapshot zona terakhir, safe point, dan antrean laporan offline, lengkap dengan label usia data. |
| **Pengujian** | Vitest/Jest + Testing Library, Playwright (E2E, termasuk skenario offline), Lighthouse CI (target PWA dan performa). |

### D.3 Backend dan AI Engine

**API Gateway (Node.js + NestJS)**
- Modul: `auth` (OIDC/JWT + RBAC), `zones`, `routing` (orkestrasi mesin A* + Routes API), `safe-points`, `reports` (unggah foto via *signed URL* Cloud Storage), `alerts`, `realtime` (WebSocket/SSE gateway), `push` (library `web-push`, VAPID).
- Validasi dengan `class-validator`, dokumentasi OpenAPI/Swagger, *rate limiting* (`@nestjs/throttler`), logging terstruktur (pino).

**AI/CV Microservice (Python + FastAPI)**
- Endpoint internal: `/infer/frame` (YOLOv8: klasifikasi hujan, segmentasi genangan, pembacaan mistar), `/predict/overflow` (model prediksi dini + fusi BMKG), `/route/alt` (A*), `/dss/run` (hitung DBI).
- Library: Ultralytics YOLOv8, PyTorch, OpenCV, NumPy/pandas, scikit-learn/statsmodels (regresi Persamaan 1), NetworkX/OSMnx (graf jalan; atau pgRouting), Shapely/GeoPandas, Pydantic, SQLAlchemy/psycopg.
- Ekspor model ke ONNX/TensorRT untuk inferensi lebih cepat. Untuk 50 titik dengan satu snapshot per 5 menit, beban inferensi kecil dan bisa berjalan di CPU atau satu GPU kecil. GPU baru wajib bila kelak memproses stream video kontinu.

**Antar-layanan:** HTTP/gRPC internal (autentikasi layanan dengan identitas IAM Cloud Run), Pub/Sub untuk event asinkron.

### D.4 Database dan Spasial

| Komponen | Peran |
|---|---|
| **PostgreSQL + PostGIS** | Geometri ruas jalan (`LineString`), poligon zona dan wilayah `adm4`, titik node dan safe point; indeks GiST; fungsi `ST_DWithin`, `ST_Intersects`, `ST_Contains`. Opsional pgRouting untuk routing berbasis SQL. |
| **TimescaleDB** | *Hypertable* `readings` (partisi per waktu, kompresi kolumnar untuk data lama) dan `bmkg_forecasts`; *continuous aggregate* (ringkasan per jam dan per kejadian hujan); kebijakan retensi (mentah 90 hari). |
| **Redis** | Cache cuaca BMKG (`bmkg:forecast:{adm4}`, `bmkg:warning:*`), cache rute, *pub/sub* antar-instance gateway, rate limiting. |
| **Cloud Storage** | Foto laporan warga dan artefak model (bobot YOLOv8). |

> **Catatan penting (GCP):** **Cloud SQL for PostgreSQL mendukung PostGIS, tetapi TimescaleDB tidak termasuk ekstensi yang didukung Cloud SQL** (periksa daftar ekstensi terbaru sebelum memutuskan). Pilihan yang konsisten dengan kebutuhan *hypertable*:
> 1. **PostgreSQL + PostGIS + TimescaleDB pada Compute Engine** (satu VM dengan persistent disk, backup terjadwal), atau
> 2. **Timescale Cloud** (layanan terkelola) untuk data time-series, sementara PostGIS di Cloud SQL, atau
> 3. **Tetap Cloud SQL** dengan partisi deklaratif PostgreSQL + `pg_partman` sebagai pengganti hypertable (kehilangan kompresi dan *continuous aggregate* otomatis).
>
> Untuk pilot 50 titik, opsi 1 paling sederhana. Opsi 3 paling mudah dioperasikan tetapi memerlukan job agregasi sendiri.

### D.5 Infrastruktur dan Cloud (GCP)

| Kebutuhan | Layanan GCP | Catatan |
|---|---|---|
| Layanan backend | **Cloud Run** (`gateway-api`, `ai-engine`, `ingestion`, `bmkg-sync`, `notifier`) | Autoscaling, deploy kontainer; atur `min-instances` ≥ 1 untuk gateway real-time. |
| Database relasional/spasial | **Cloud SQL (PostgreSQL + PostGIS)** | Lihat catatan TimescaleDB di D.4. |
| Time-series | **Compute Engine** (PostgreSQL + TimescaleDB) atau Timescale Cloud | Sesuai opsi di D.4. |
| Cache | **Memorystore for Redis** | Akses dari Cloud Run melalui Direct VPC egress/VPC connector. |
| Inferensi YOLOv8 | **Vertex AI** (online prediction) atau **Compute Engine ber-GPU** (mis. NVIDIA T4/L4) | Pilih sesuai beban; model sedang (YOLOv8n/s) cukup ringan. |
| Event bus | **Pub/Sub** | Topik `reading-ingested`, `zone-changed`, `alert-raised`. |
| Penjadwalan | **Cloud Scheduler** | Memicu `bmkg-sync` (3 jam), pengecekan peringatan dini (5–10 menit), job DSS harian. |
| IP keluar tetap | **Cloud NAT + IP statis** | Untuk kunci server Google (pembatasan IP) dan kepatuhan batas BMKG per IP. |
| Rahasia | **Secret Manager** | Kunci Google, kunci VAPID, kredensial WhatsApp/Telegram. |
| Objek | **Cloud Storage** | Foto laporan, bobot model, ekspor laporan. |
| Edge dan CDN | **Cloud CDN / Load Balancer + Cloud Armor** | Aset PWA, perlindungan DDoS dan WAF. |
| Observabilitas | **Cloud Monitoring/Logging**, Grafana (opsional) | Alert untuk node offline, galat BMKG, dan kuota Maps. |
| CI/CD dan IaC | **Cloud Build / GitHub Actions**, Artifact Registry, Terraform | Pipeline per layanan, lingkungan *staging* dan *production*. |

### D.6 Lapisan IoT dan Perangkat Keras

| Komponen | Spesifikasi |
|---|---|
| **Mikrokontroler** | ESP32-WROOM/ESP32-S3 (firmware Arduino/ESP-IDF atau PlatformIO), modul 4G (SIM7600) |
| **Sensor** | JSN-SR04T (ultrasonik tahan air), BME280 (suhu, kelembapan, tekanan), anemometer RS485/pulsa, rain gauge *tipping bucket* (0,2 mm/tip) |
| **Kamera** | CCTV ATCS eksisting (RTSP, PoE), IR/low-light, ≥ 1080p |
| **Transport** | MQTT over TLS (broker EMQX/Mosquitto) atau HTTPS; OTA update firmware |
| **Daya** | Catu tiang ATCS + cadangan panel surya/baterai LiFePO₄ |

### D.7 AI dan Algoritma

| Fungsi | Pilihan |
|---|---|
| Deteksi dan segmentasi | Ultralytics **YOLOv8** (deteksi + segmentasi), PyTorch, ekspor ONNX/TensorRT |
| Prediksi dini | Regresi deret waktu multivariat sliding window (Persamaan 1 + `δ·R_bmkg`); pembanding: LightGBM/LSTM dan baseline sederhana (persistensi, ekstrapolasi linier) |
| Routing | **A\*** (heuristik haversine) sebagai algoritma utama, **Dijkstra** sebagai pembanding; graf OSM dengan bobot Persamaan (2); Routes API untuk ETA lalu lintas dan polyline |
| DSS | Perhitungan DBI (Persamaan 3) + pemeringkatan; deteksi anomali durasi surut |
| Evaluasi | MAE, RMSE, presisi, recall, F1; uji ablasi (tanpa BMKG, tanpa angin); pelaporan metrik terpisah untuk data fisik vs simulasi |

### D.8 Keamanan dan Kepatuhan

TLS di semua jalur, OIDC/RBAC untuk dashboard pemerintah, *rate limiting* dan Cloud Armor untuk API publik, kunci API dibatasi (referrer/IP/API), rahasia di Secret Manager, tanpa penyimpanan citra individu (hanya keluaran numerik, sesuai UU PDP No. 27/2022), serta log audit untuk aksi operator.

---

## Catatan Kepatuhan dan Kejujuran Ilmiah

1. **Batas BMKG:** data bersifat prakiraan 3-jam, bukan *nowcasting* menit-an. Perannya sebagai konteks makro dan *prior* risiko.
2. **Batas Google:** Routes API tidak mendukung penutupan ruas kustom, sehingga mesin routing FLORENCE tetap menjadi pengambil keputusan penghindaran banjir.
3. **Nilai tambah fusi BMKG** (suku `δ·R_bmkg` dan ambang adaptif) belum teruji. Rencanakan uji ablasi dan baseline sederhana pada penelitian lanjutan.
4. **Biaya:** estimasi biaya Maps Platform (per panggilan Routes/Places) dan cloud belum dihitung. Sebaiknya masuk ke rencana anggaran.
5. **Geofencing latar belakang** pada PWA terbatas. Jalur yang realistis adalah langganan zona, lalu aplikasi native pada fase berikutnya.
6. **TimescaleDB di GCP:** Cloud SQL tidak mendukung ekstensi TimescaleDB, sehingga data time-series membutuhkan VM Compute Engine, Timescale Cloud, atau partisi PostgreSQL biasa (lihat D.4).
7. **Mode offline dan peta Google:** ubin Google Maps tidak boleh di-*cache* dan butuh jaringan. Mode offline menampilkan snapshot zona, safe point, dan skema jalan milik FLORENCE (lihat C.1.5).
8. **Cakupan Routes API:** periksa ketersediaan rute `TWO_WHEELER`, batas jumlah waypoint, dan biaya per SKU di dokumentasi Google sebelum implementasi.
