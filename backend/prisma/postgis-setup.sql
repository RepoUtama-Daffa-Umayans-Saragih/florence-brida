-- FLORENCE PostgreSQL extensions and time-series setup.
-- Run after Prisma creates the tables.

CREATE EXTENSION IF NOT EXISTS postgis;

-- TimescaleDB is optional. Enable this block only when the server has TimescaleDB installed.
-- CREATE EXTENSION IF NOT EXISTS timescaledb;
-- SELECT create_hypertable('readings', 'measuredAt', if_not_exists => TRUE);

-- Spatial indexes for PostGIS columns.
CREATE INDEX IF NOT EXISTS nodes_geom_gist_idx
  ON nodes USING GIST (geom);

CREATE INDEX IF NOT EXISTS safe_points_geom_gist_idx
  ON safe_points USING GIST (geom);

CREATE INDEX IF NOT EXISTS adm4_regions_geom_gist_idx
  ON adm4_regions USING GIST (geom);

CREATE INDEX IF NOT EXISTS road_segments_geom_gist_idx
  ON road_segments USING GIST (geom);

CREATE INDEX IF NOT EXISTS citizen_reports_geom_gist_idx
  ON citizen_reports USING GIST (geom);

-- Enforce the supported flood zones at the database boundary.
ALTER TABLE readings
  ADD CONSTRAINT readings_zone_value_check
  CHECK (zone IS NULL OR zone IN ('GREEN', 'YELLOW', 'RED'));

-- Keep safe-point occupancy valid.
ALTER TABLE safe_points
  ADD CONSTRAINT safe_points_capacity_check CHECK (capacity >= 0),
  ADD CONSTRAINT safe_points_occupied_check CHECK (occupied >= 0 AND occupied <= capacity);

-- Useful retention/aggregation examples when TimescaleDB is available:
-- SELECT add_retention_policy('readings', INTERVAL '90 days', if_not_exists => TRUE);
-- CREATE MATERIALIZED VIEW readings_hourly
-- WITH (timescaledb.continuous) AS
-- SELECT nodeId, time_bucket(INTERVAL '1 hour', measuredAt) AS bucket,
--        avg(waterCm) AS avg_water_cm, max(waterCm) AS peak_water_cm,
--        avg(rainMmH) AS avg_rain_mm_h
-- FROM readings
-- GROUP BY nodeId, bucket;
