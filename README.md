# FLORENCE project

## Run frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:3000`.

## Run backend

```bash
cd backend
npm install
copy .env.example .env
npm run prisma:generate
npm run prisma:migrate -- --name init
npm run start:dev
```

Backend runs on `http://localhost:3001`.

## BMKG sync job

The backend includes a NestJS cron service at `backend/src/bmkg-sync.service.ts`:

- Runs every 3 hours using `@nestjs/schedule`.
- Reads distinct `adm4` codes from `nodes`.
- Calls `https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=...`.
- Uses a token bucket limited to 30 requests/minute, below BMKG's 60 requests/minute/IP limit.
- Retries failed requests up to 3 times with exponential backoff.
- Stores normalized forecast slots in PostgreSQL through Prisma.
- Caches each region in Redis at `bmkg:forecast:{adm4}` for 6 hours.
- Converts BMKG wind speed from km/h to m/s.
- Uses stale PostgreSQL data when a BMKG or Redis request fails.

Redis is optional for local development; PostgreSQL is the durable source of truth.

## Flood-aware routing service

The routing endpoint is:

```text
POST /api/v1/routing/alternative
```

It performs the following steps:

1. Runs A* over the supplied FLORENCE graph.
2. Excludes any edge or endpoint node with zone `RED`.
3. Keeps `YELLOW` roads available, but applies a large penalty for `TWO_WHEELER`.
4. Sends the calculated path as `via: true` intermediate waypoints to Google Routes API `computeRoutes`.
5. Checks the returned Google geometry against all `RED` edge geometry with a 15-meter tolerance.
6. Returns the Google route when validation passes; otherwise returns the FLORENCE route and its own ETA.

Example request shape:

```json
{
  "origin": { "id": "A", "latitude": 3.5617, "longitude": 98.6564 },
  "destination": { "id": "B", "latitude": 3.5589, "longitude": 98.6720 },
  "travelMode": "DRIVE",
  "graph": {
    "nodes": [
      { "id": "A", "latitude": 3.5617, "longitude": 98.6564, "zone": "GREEN" },
      { "id": "B", "latitude": 3.5589, "longitude": 98.6720, "zone": "GREEN" }
    ],
    "edges": []
  }
}
```

The Google server key is read from `GMAPS_SERVER_KEY` and must be IP-restricted and limited to Routes API. The client must display: `Rekomendasi berbasis data tersedia, bukan jaminan rute aman.`

## Frontend components (mobile portal)

Four composable React client components are in `frontend/components/`:

| Component | Fungsi |
|---|---|
| `AlertBanner` | Sticky header menampilkan status banjir Hijau/Kuning/Merah; label SIAGA/WASPADA; detail expandable |
| `SearchBar` | Input tujuan pencarian dengan toggle Mobil/Motor; memanggil `onSearch` |
| `FloodMap` | Placeholder Google Maps dengan toggle lapisan, tombol lokasi saya, dan legenda zona |
| `RouteSheet` | Bottom sheet 3-level (peek / half / full) menampilkan ETA, jarak, area dihindari, dan tombol navigasi |

Portal publik (`frontend/app/page.tsx`) merangkai empat komponen di atas.

## Database model

- `nodes`: CCTV/sensor monitoring points, physical or simulated.
- `readings`: five-minute sensor and CCTV-derived readings; suitable for TimescaleDB hypertable.
- `flood_forecasts`: 15/30-minute predictions and BMKG context.
- `safe_points`: verified evacuation points with capacity and occupancy.
- `bmkg_forecasts`: three-hour BMKG forecast slots per `adm4` region.
- `adm4_regions`: kelurahan/desa boundaries used to map nodes to BMKG forecasts.
- `road_segments` and `node_segments`: flood-aware routing graph support.
- `citizen_reports`: reports that feed the DBI only after verification.

Prisma schema: `backend/prisma/schema.prisma`.

After the first migration, run `backend/prisma/postgis-setup.sql` on PostgreSQL/PostGIS for spatial indexes and optional TimescaleDB setup. Enable the TimescaleDB statements only when the extension is installed.

Dependencies are declared in each folder's `package.json`; installation has not been run yet.
