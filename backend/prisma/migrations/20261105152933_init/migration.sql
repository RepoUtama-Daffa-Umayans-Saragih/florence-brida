-- CreateEnum
CREATE TYPE "NodeType" AS ENUM ('PHYSICAL', 'SIMULATED');

-- CreateEnum
CREATE TYPE "NodeStatus" AS ENUM ('ONLINE', 'OFFLINE', 'STALE', 'MAINTENANCE');

-- CreateEnum
CREATE TYPE "Zone" AS ENUM ('GREEN', 'YELLOW', 'RED');

-- CreateEnum
CREATE TYPE "ReadingQuality" AS ENUM ('VALID', 'SUSPECT', 'INVALID');

-- CreateEnum
CREATE TYPE "ReportCategory" AS ENUM ('FLOODING', 'WASTE_BLOCKAGE', 'DAMAGED_DRAIN', 'OTHER');

-- CreateEnum
CREATE TYPE "ReportStatus" AS ENUM ('NEW', 'VERIFIED', 'IN_PROGRESS', 'RESOLVED', 'REJECTED');

-- CreateTable
CREATE TABLE "nodes" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT,
    "nodeType" "NodeType" NOT NULL DEFAULT 'SIMULATED',
    "status" "NodeStatus" NOT NULL DEFAULT 'ONLINE',
    "adm4" VARCHAR(20),
    "latitude" DECIMAL(10,7) NOT NULL,
    "longitude" DECIMAL(10,7) NOT NULL,
    "geom" geometry(Point, 4326),
    "dMaxCm" DECIMAL(8,2),
    "tNormMinutes" INTEGER,
    "cctvUrl" TEXT,
    "lastSeenAt" TIMESTAMP(3),
    "batteryPercent" DECIMAL(5,2),
    "signalStrength" DECIMAL(6,2),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "nodes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "readings" (
    "id" BIGSERIAL NOT NULL,
    "nodeId" TEXT NOT NULL,
    "measuredAt" TIMESTAMP(3) NOT NULL,
    "waterCm" DECIMAL(8,2),
    "drainCm" DECIMAL(8,2),
    "rainMmH" DECIMAL(8,3),
    "windMs" DECIMAL(8,3),
    "temperatureC" DECIMAL(6,2),
    "humidityPercent" DECIMAL(5,2),
    "pressureHpa" DECIMAL(8,2),
    "waterRiseCmMin" DECIMAL(8,3),
    "floodedAreaM2" DECIMAL(10,2),
    "cctvWaterCm" DECIMAL(8,2),
    "ultrasonicWaterCm" DECIMAL(8,2),
    "cctvConfidence" DECIMAL(5,4),
    "rainDetected" BOOLEAN,
    "zone" "Zone",
    "quality" "ReadingQuality" NOT NULL DEFAULT 'VALID',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "readings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "flood_forecasts" (
    "id" BIGSERIAL NOT NULL,
    "nodeId" TEXT NOT NULL,
    "generatedAt" TIMESTAMP(3) NOT NULL,
    "horizonMinutes" INTEGER NOT NULL,
    "predictedWaterCm" DECIMAL(8,2) NOT NULL,
    "thresholdCm" DECIMAL(8,2),
    "bmkgRiskOrdinal" INTEGER,
    "warningActive" BOOLEAN NOT NULL DEFAULT false,
    "alert" BOOLEAN NOT NULL DEFAULT false,
    "modelVersion" TEXT,

    CONSTRAINT "flood_forecasts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "safe_points" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "latitude" DECIMAL(10,7) NOT NULL,
    "longitude" DECIMAL(10,7) NOT NULL,
    "geom" geometry(Point, 4326),
    "capacity" INTEGER NOT NULL,
    "occupied" INTEGER NOT NULL DEFAULT 0,
    "isOpen" BOOLEAN NOT NULL DEFAULT true,
    "contactPhone" TEXT,
    "address" TEXT,
    "verifiedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "safe_points_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bmkg_forecasts" (
    "id" BIGSERIAL NOT NULL,
    "adm4" VARCHAR(20) NOT NULL,
    "validTime" TIMESTAMP(3) NOT NULL,
    "localDatetime" TIMESTAMP(3),
    "analysisDate" TIMESTAMP(3),
    "weatherCode" INTEGER,
    "weatherDesc" TEXT,
    "temperatureC" DECIMAL(6,2),
    "humidity" DECIMAL(5,2),
    "windMs" DECIMAL(8,3),
    "windDirection" TEXT,
    "cloudCover" DECIMAL(5,2),
    "visibilityKm" DECIMAL(8,2),
    "riskOrdinal" INTEGER,
    "fetchedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "rawPayload" JSONB,

    CONSTRAINT "bmkg_forecasts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "adm4_regions" (
    "adm4" VARCHAR(20) NOT NULL,
    "name" TEXT NOT NULL,
    "geom" geometry(MultiPolygon, 4326),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "adm4_regions_pkey" PRIMARY KEY ("adm4")
);

-- CreateTable
CREATE TABLE "road_segments" (
    "id" TEXT NOT NULL,
    "externalId" TEXT,
    "name" TEXT,
    "geom" geometry(LineString, 4326),
    "lengthM" DECIMAL(10,2),
    "speedKmh" DECIMAL(6,2),
    "zone" "Zone" NOT NULL DEFAULT 'GREEN',
    "floodPenalty" DECIMAL(12,2),
    "isBlocked" BOOLEAN NOT NULL DEFAULT false,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "road_segments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "node_segments" (
    "nodeId" TEXT NOT NULL,
    "segmentId" TEXT NOT NULL,
    "distanceM" DECIMAL(10,2),

    CONSTRAINT "node_segments_pkey" PRIMARY KEY ("nodeId","segmentId")
);

-- CreateTable
CREATE TABLE "citizen_reports" (
    "id" TEXT NOT NULL,
    "nodeId" TEXT,
    "safePointId" TEXT,
    "category" "ReportCategory" NOT NULL,
    "description" TEXT,
    "photoObjectKey" TEXT,
    "latitude" DECIMAL(10,7) NOT NULL,
    "longitude" DECIMAL(10,7) NOT NULL,
    "geom" geometry(Point, 4326),
    "status" "ReportStatus" NOT NULL DEFAULT 'NEW',
    "verifiedAt" TIMESTAMP(3),
    "verifiedBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "citizen_reports_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "nodes_code_key" ON "nodes"("code");

-- CreateIndex
CREATE INDEX "nodes_adm4_idx" ON "nodes"("adm4");

-- CreateIndex
CREATE INDEX "nodes_status_idx" ON "nodes"("status");

-- CreateIndex
CREATE INDEX "readings_nodeId_measuredAt_idx" ON "readings"("nodeId", "measuredAt" DESC);

-- CreateIndex
CREATE INDEX "readings_measuredAt_idx" ON "readings"("measuredAt");

-- CreateIndex
CREATE UNIQUE INDEX "readings_nodeId_measuredAt_key" ON "readings"("nodeId", "measuredAt");

-- CreateIndex
CREATE INDEX "flood_forecasts_nodeId_generatedAt_idx" ON "flood_forecasts"("nodeId", "generatedAt" DESC);

-- CreateIndex
CREATE UNIQUE INDEX "flood_forecasts_nodeId_generatedAt_horizonMinutes_key" ON "flood_forecasts"("nodeId", "generatedAt", "horizonMinutes");

-- CreateIndex
CREATE INDEX "safe_points_isOpen_idx" ON "safe_points"("isOpen");

-- CreateIndex
CREATE INDEX "bmkg_forecasts_adm4_validTime_idx" ON "bmkg_forecasts"("adm4", "validTime");

-- CreateIndex
CREATE INDEX "bmkg_forecasts_fetchedAt_idx" ON "bmkg_forecasts"("fetchedAt");

-- CreateIndex
CREATE UNIQUE INDEX "bmkg_forecasts_adm4_validTime_key" ON "bmkg_forecasts"("adm4", "validTime");

-- CreateIndex
CREATE UNIQUE INDEX "road_segments_externalId_key" ON "road_segments"("externalId");

-- CreateIndex
CREATE INDEX "road_segments_zone_idx" ON "road_segments"("zone");

-- CreateIndex
CREATE INDEX "road_segments_isBlocked_idx" ON "road_segments"("isBlocked");

-- CreateIndex
CREATE INDEX "citizen_reports_status_createdAt_idx" ON "citizen_reports"("status", "createdAt" DESC);

-- CreateIndex
CREATE INDEX "citizen_reports_nodeId_idx" ON "citizen_reports"("nodeId");

-- AddForeignKey
ALTER TABLE "readings" ADD CONSTRAINT "readings_nodeId_fkey" FOREIGN KEY ("nodeId") REFERENCES "nodes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flood_forecasts" ADD CONSTRAINT "flood_forecasts_nodeId_fkey" FOREIGN KEY ("nodeId") REFERENCES "nodes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "node_segments" ADD CONSTRAINT "node_segments_nodeId_fkey" FOREIGN KEY ("nodeId") REFERENCES "nodes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "node_segments" ADD CONSTRAINT "node_segments_segmentId_fkey" FOREIGN KEY ("segmentId") REFERENCES "road_segments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "citizen_reports" ADD CONSTRAINT "citizen_reports_nodeId_fkey" FOREIGN KEY ("nodeId") REFERENCES "nodes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "citizen_reports" ADD CONSTRAINT "citizen_reports_safePointId_fkey" FOREIGN KEY ("safePointId") REFERENCES "safe_points"("id") ON DELETE SET NULL ON UPDATE CASCADE;
