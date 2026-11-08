# Panduan Menjalankan FLORENCE (Lokal)

## Prasyarat

- Node.js 20+ dan npm
- Docker Desktop (untuk PostgreSQL/PostGIS)
- Redis (opsional, tersedia lewat Laragon)
- API key Google Maps (Maps JavaScript API) untuk menampilkan peta

## Ringkasan Port

| Layanan | Alamat |
|---|---|
| Frontend (Next.js) | http://localhost:3002 |
| Backend (NestJS) | http://localhost:3001 |
| PostgreSQL/PostGIS | localhost:5432 |
| Redis | localhost:6379 |

Frontend memakai port 3002 karena port 3000 bisa terpakai proses lain.

## 1. Frontend

Buat `frontend/.env.local`:

```env
NEXT_PUBLIC_API_URL="http://localhost:3001"
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="ISI_API_KEY_BROWSER"
NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID="DEMO_MAP_ID"
```

Jalankan:

```bash
cd frontend
npm install
npm run dev -- -p 3002
```

Buka http://localhost:3002. Restart server setiap kali `.env.local` diubah.

Tanpa backend, frontend tetap terbuka. Peta menampilkan "Menghubungkan ke server…" dan daftar zona serta Safe Point kosong.

## 2. Database (PostgreSQL + PostGIS)

Nyalakan Docker Desktop, lalu:

```bash
docker run --name florence-postgres \
  -e POSTGRES_USER=florence \
  -e POSTGRES_PASSWORD=florence_dev \
  -e POSTGRES_DB=florence \
  -p 5432:5432 \
  -d postgis/postgis:16-3.4
```

Pada Windows CMD, ganti `\` dengan `^`. Pada PowerShell, ganti dengan tanda backtick.

Pada run berikutnya cukup:

```bash
docker start florence-postgres
```

## 3. Redis (opsional)

```bash
redis-cli ping
```

Jawaban `PONG` berarti Redis aktif. Jika belum, nyalakan lewat Laragon. Tanpa Redis, backend tetap jalan tetapi cache prakiraan BMKG tidak tersimpan.

## 4. Backend

Buat `backend/.env`:

```env
DATABASE_URL="postgresql://florence:florence_dev@localhost:5432/florence?schema=public"
REDIS_URL="redis://localhost:6379"
GMAPS_SERVER_KEY=""
```

`GMAPS_SERVER_KEY` adalah key server untuk Routes API. Jika kosong, rute hanya dihitung oleh mesin A* FLORENCE tanpa validasi Google.

Jalankan:

```bash
cd backend
npm install
npm run prisma:generate
npm run prisma:migrate -- --name init
```

Aktifkan ekstensi PostGIS dan index spasial:

```bash
docker exec -i florence-postgres psql -U florence -d florence < prisma/postgis-setup.sql
```

Lalu start backend:

```bash
npm run start:dev
```

## 5. Endpoint Backend

| Method | Path | Fungsi |
|---|---|---|
| GET | `/api/v1/zones/snapshot` | Snapshot zona terbaru |
| GET | `/api/v1/zones/stream` | Stream SSE pembaruan zona |
| GET | `/api/v1/safe-points` | Daftar Safe Point |
| POST | `/api/v1/routing/alternative` | Rute alternatif menghindari Zona Merah |

Cek cepat:

```bash
curl http://localhost:3001/api/v1/zones/snapshot
```

## 6. Urutan Menyalakan

1. Docker Desktop, lalu `docker start florence-postgres`
2. Redis (opsional)
3. Backend: `npm run start:dev` di folder `backend`
4. Frontend: `npm run dev -- -p 3002` di folder `frontend`

## 7. Mode PWA

Service worker nonaktif saat development. Untuk mengujinya:

```bash
cd frontend
npm run build
npm start -- -p 3002
```

Kunjungan pertama harus online agar data darurat tersimpan. Detail pengujian offline ada di `frontend/PWA.md`.

## 8. Catatan Penting

- Database masih kosong. Tabel `nodes`, `safe_points`, dan `road_segments` perlu diisi sebelum peta dan daftar darurat menampilkan data.
- Belum ada consumer MQTT. Pembaruan zona berjalan jika ingestion memanggil `ZonesService.ingestReading()`.
- Endpoint backend belum memakai autentikasi. Jangan diekspos ke internet sebelum auth dan rate limiting ditambahkan.
- Jangan commit `.env` dan `.env.local`. Batasi key browser dengan HTTP referrer dan key server dengan IP.
- Jadwal sinkronisasi BMKG berjalan tiap 3 jam dan membaca kode `adm4` dari tabel `nodes`.

## 9. Troubleshooting

| Masalah | Penyebab | Solusi |
|---|---|---|
| `Missing script: "dev"` | Perintah dijalankan di folder yang salah | Jalankan dari folder `frontend` |
| Port 3000 sibuk | Ada proses lain | Pakai `-p 3002` |
| Docker error saat `docker run` | Docker Desktop belum jalan | Buka Docker Desktop, tunggu status running |
| Peta tidak muncul | API key belum diisi | Isi `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`, restart frontend |
| Backend gagal konek DB | Container mati atau `DATABASE_URL` salah | `docker start florence-postgres`, periksa `.env` |
| Frontend berhenti sendiri | Pernah terjadi sekali (exit code 4), penyebab belum diketahui | Jalankan ulang, catat log jika terulang |
