(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/safeRoutingEngine.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MEDAN_PRESET_LOCATIONS",
    ()=>MEDAN_PRESET_LOCATIONS,
    "MEDAN_SAFE_BYPASS_WAYPOINTS",
    ()=>MEDAN_SAFE_BYPASS_WAYPOINTS,
    "bboxesOverlap",
    ()=>bboxesOverlap,
    "calculateFloodSafeRoute",
    ()=>calculateFloodSafeRoute,
    "computeBBox",
    ()=>computeBBox,
    "distanceMeters",
    ()=>distanceMeters,
    "isRouteNearSegment",
    ()=>isRouteNearSegment,
    "pointToSegmentDistMeters",
    ()=>pointToSegmentDistMeters
]);
function distanceMeters(p1, p2) {
    const dLat = (p2[1] - p1[1]) * 111320;
    const dLng = (p2[0] - p1[0]) * 111320 * Math.cos(p1[1] * Math.PI / 180);
    return Math.sqrt(dLat * dLat + dLng * dLng);
}
function pointToSegmentDistMeters(p, a, b) {
    const dx = b[0] - a[0];
    const dy = b[1] - a[1];
    const lenSq = dx * dx + dy * dy;
    if (lenSq === 0) return distanceMeters(p, a);
    let t = ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / lenSq;
    t = Math.max(0, Math.min(1, t));
    const proj = [
        a[0] + t * dx,
        a[1] + t * dy
    ];
    return distanceMeters(p, proj);
}
function computeBBox(coords) {
    let paddingMeters = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    let minLng = Infinity;
    let minLat = Infinity;
    let maxLng = -Infinity;
    let maxLat = -Infinity;
    for (const c of coords){
        if (c[0] < minLng) minLng = c[0];
        if (c[0] > maxLng) maxLng = c[0];
        if (c[1] < minLat) minLat = c[1];
        if (c[1] > maxLat) maxLat = c[1];
    }
    // Konversi padding meter ke derajat (~111.32 km per derajat)
    const degPadding = paddingMeters / 111320;
    return {
        minLng: minLng - degPadding,
        minLat: minLat - degPadding,
        maxLng: maxLng + degPadding,
        maxLat: maxLat + degPadding
    };
}
function bboxesOverlap(b1, b2) {
    return !(b1.maxLng < b2.minLng || b1.minLng > b2.maxLng || b1.maxLat < b2.minLat || b1.minLat > b2.maxLat);
}
function isRouteNearSegment(routeCoords, routeBBox, segmentCoords, segmentBBox, thresholdMeters) {
    if (!bboxesOverlap(routeBBox, segmentBBox)) {
        return false;
    }
    for (const pt of routeCoords){
        // Quick check: apakah titik berada dalam bounding box segmen
        if (pt[0] < segmentBBox.minLng || pt[0] > segmentBBox.maxLng || pt[1] < segmentBBox.minLat || pt[1] > segmentBBox.maxLat) {
            continue;
        }
        for(let i = 0; i < segmentCoords.length - 1; i++){
            if (pointToSegmentDistMeters(pt, segmentCoords[i], segmentCoords[i + 1]) <= thresholdMeters) {
                return true;
            }
        }
    }
    return false;
}
const MEDAN_SAFE_BYPASS_WAYPOINTS = [
    {
        name: 'Koridor By-pass Sunggal - Pasar 1',
        lng: 98.6440,
        lat: 3.5610
    },
    {
        name: 'Koridor Jl. Sei Serayu (Jalur Kering Medan Baru)',
        lng: 98.6420,
        lat: 3.5710
    },
    {
        name: 'Koridor Jl. Iskandar Muda (Medan Petisah)',
        lng: 98.6620,
        lat: 3.5780
    },
    {
        name: 'Koridor Ringroad Utara / Asrama (Bypass Gatsu)',
        lng: 98.6250,
        lat: 3.5820
    },
    {
        name: 'Koridor Jl. AH Nasution (Bypass Simpang Pos)',
        lng: 98.6630,
        lat: 3.5360
    },
    {
        name: 'Koridor Jl. Putri Hijau (Medan Barat)',
        lng: 98.6760,
        lat: 3.5990
    }
];
const MEDAN_PRESET_LOCATIONS = {
    'RS_USU': {
        name: 'RS Universitas Sumatera Utara',
        lng: 98.6525,
        lat: 3.5592
    },
    'AUDITORIUM_USU': {
        name: 'Auditorium USU (Titik Kumpul Evakuasi)',
        lng: 98.6547,
        lat: 3.5569
    },
    'PINTU_1_USU': {
        name: 'Pintu 1 USU (Jl. Dr. Mansyur)',
        lng: 98.6580,
        lat: 3.5630
    },
    'BALAI_KOTA': {
        name: 'Kantor Walikota Medan (Balai Kota)',
        lng: 98.6756,
        lat: 3.5852
    },
    'LAPANGAN_MERDEKA': {
        name: 'Lapangan Merdeka Medan',
        lng: 98.6775,
        lat: 3.5898
    },
    'SIMPANG_POS': {
        name: 'Simpang Pos (Flyover Jamin Ginting)',
        lng: 98.6526,
        lat: 3.5402
    },
    'KAMPUNG_LALANG': {
        name: 'Simpang Kampung Lalang (TB Simatupang)',
        lng: 98.6090,
        lat: 3.5960
    },
    'PLAZA_MEDAN_FAIR': {
        name: 'Plaza Medan Fair (Jl. Gatot Subroto)',
        lng: 98.6658,
        lat: 3.5901
    },
    'TASBI_RINGROAD': {
        name: 'Komp. Tasbi / Ringroad Manhattan',
        lng: 98.6275,
        lat: 3.5695
    },
    'SIMPANG_SUNGGAL': {
        name: 'Simpang Sunggal - Gatsu',
        lng: 98.6300,
        lat: 3.5850
    }
};
/**
 * Fetch Mapbox Directions dengan timeout yang aman (3500ms) untuk mencegah hang
 */ async function fetchMapboxDirections(coordinates, token) {
    let alternatives = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    const coordString = coordinates.map((c)=>"".concat(c.lng, ",").concat(c.lat)).join(';');
    const altParam = alternatives && coordinates.length === 2 ? 'true' : 'false';
    const url = "https://api.mapbox.com/directions/v5/mapbox/driving/".concat(coordString, "?alternatives=").concat(altParam, "&geometries=geojson&overview=full&access_token=").concat(token);
    const res = await fetch(url, {
        signal: AbortSignal.timeout(3500)
    });
    if (!res.ok) {
        throw new Error("Mapbox API HTTP ".concat(res.status));
    }
    return await res.json();
}
async function calculateFloodSafeRoute(param) {
    let { origin, destination, floodedSegments, cascadingRoutes = [], waterFactor = 1.0, mapboxToken, travelMode = 'driving' } = param;
    if (!mapboxToken) {
        return {
            success: false,
            geometry: {
                type: 'LineString',
                coordinates: []
            },
            distanceMeters: 0,
            baseDurationSeconds: 0,
            penaltySeconds: 0,
            totalDurationSeconds: 0,
            classification: 'BLOCKED_RED',
            avoidedRedCount: 0,
            avoidedRedNames: [],
            yellowAlerts: [],
            errorMessage: 'NEXT_PUBLIC_MAPBOX_TOKEN belum dikonfigurasi di .env.local.'
        };
    }
    const hazards = [];
    const redNames = [];
    for (const seg of floodedSegments){
        if (!seg.coordinates || seg.coordinates.length < 2) continue;
        var _seg_currentCm;
        const currentCm = (_seg_currentCm = seg.currentCm) !== null && _seg_currentCm !== void 0 ? _seg_currentCm : Math.round(seg.peakCm * waterFactor);
        const isRed = currentCm >= 40 || seg.severityGrade === 'extreme' || seg.severityGrade === 'very-critical' || seg.peakCm >= 40 && waterFactor >= 0.35;
        const threshold = isRed ? 45 : 35;
        const bbox = computeBBox(seg.coordinates, threshold);
        if (isRed) {
            redNames.push(seg.name);
        }
        hazards.push({
            name: seg.name,
            coordinates: seg.coordinates,
            bbox,
            isRed
        });
    }
    // Tambahkan rute kemacetan spillover ke daftar kuning
    for (const casc of cascadingRoutes){
        if (!casc.coordinates || casc.coordinates.length < 2) continue;
        const bbox = computeBBox(casc.coordinates, 30);
        hazards.push({
            name: casc.name,
            coordinates: casc.coordinates,
            bbox,
            isRed: false
        });
    }
    const redHazards = hazards.filter((h)=>h.isRed);
    const yellowHazards = hazards.filter((h)=>!h.isRed);
    // Verifikasi apakah titik Start atau Destinasi berada tepat di dalam genangan merah
    const originCoord = [
        origin.lng,
        origin.lat
    ];
    const destCoord = [
        destination.lng,
        destination.lat
    ];
    for (const red of redHazards){
        for(let i = 0; i < red.coordinates.length - 1; i++){
            const distStart = pointToSegmentDistMeters(originCoord, red.coordinates[i], red.coordinates[i + 1]);
            const distDest = pointToSegmentDistMeters(destCoord, red.coordinates[i], red.coordinates[i + 1]);
            if (distStart <= 45 || distDest <= 45) {
                const trapped = distStart <= 45 ? origin.name || 'Titik Asal' : destination.name || 'Titik Tujuan';
                return {
                    success: false,
                    geometry: {
                        type: 'LineString',
                        coordinates: []
                    },
                    distanceMeters: 0,
                    baseDurationSeconds: 0,
                    penaltySeconds: 0,
                    totalDurationSeconds: 0,
                    classification: 'BLOCKED_RED',
                    avoidedRedCount: redHazards.length,
                    avoidedRedNames: redNames,
                    yellowAlerts: [],
                    errorMessage: "⛔ AKSES DITUTUP TOTAL: ".concat(trapped, " berada tepat di dalam pusat genangan parah (").concat(red.name, "). Kendaraan dilarang melintas demi keselamatan. Silakan gunakan titik kumpul aman (Safe Point Evakuasi).")
                };
            }
        }
    }
    const evaluatedCandidates = [];
    try {
        const dirData = await fetchMapboxDirections([
            origin,
            destination
        ], mapboxToken, true);
        if (dirData.routes && dirData.routes.length > 0) {
            for (const route of dirData.routes){
                var _route_geometry;
                if (!((_route_geometry = route.geometry) === null || _route_geometry === void 0 ? void 0 : _route_geometry.coordinates) || route.geometry.coordinates.length < 2) continue;
                const routeCoords = route.geometry.coordinates;
                const routeBBox = computeBBox(routeCoords, 10);
                // Uji tabrakan terhadap zona merah
                const collidedReds = [];
                for (const red of redHazards){
                    if (isRouteNearSegment(routeCoords, routeBBox, red.coordinates, red.bbox, 45)) {
                        collidedReds.push(red.name);
                    }
                }
                // Uji tabrakan terhadap zona kuning
                const yellowCollisions = [];
                for (const yel of yellowHazards){
                    if (isRouteNearSegment(routeCoords, routeBBox, yel.coordinates, yel.bbox, 35)) {
                        if (!yellowCollisions.includes(yel.name)) {
                            yellowCollisions.push(yel.name);
                        }
                    }
                }
                evaluatedCandidates.push({
                    geometry: route.geometry,
                    distance: Math.round(route.distance),
                    duration: Math.round(route.duration),
                    hasRedCollision: collidedReds.length > 0,
                    collidedReds,
                    yellowCollisions
                });
            }
        }
    } catch (err) {
        console.warn('Mapbox primary directions warning:', err);
    }
    // Prioritas 1: Cari rute yang 100% bebas dari zona merah
    let safeCandidate = evaluatedCandidates.find((c)=>!c.hasRedCollision);
    // ── 3. INJEKSI KORIDOR BYPASS DINAMIS (JIKA SEMUA RUTE UTAMA TERHALANG BANJIR MERAH) ──
    if (!safeCandidate && redHazards.length > 0) {
        // Cari bypass yang tidak tenggelam di zona merah
        const availableBypasses = MEDAN_SAFE_BYPASS_WAYPOINTS.filter((wp)=>{
            const pt = [
                wp.lng,
                wp.lat
            ];
            return !redHazards.some((red)=>{
                for(let i = 0; i < red.coordinates.length - 1; i++){
                    if (pointToSegmentDistMeters(pt, red.coordinates[i], red.coordinates[i + 1]) <= 45) {
                        return true;
                    }
                }
                return false;
            });
        });
        // Batasi pengujian pada 2 bypass terdekat agar tidak membuat proses hang
        const sortedBypasses = availableBypasses.map((bp)=>{
            const d1 = distanceMeters(originCoord, [
                bp.lng,
                bp.lat
            ]);
            const d2 = distanceMeters([
                bp.lng,
                bp.lat
            ], destCoord);
            return {
                bp,
                totalDist: d1 + d2
            };
        }).sort((a, b)=>a.totalDist - b.totalDist).slice(0, 2);
        for (const item of sortedBypasses){
            try {
                var _bypassDirData_routes, _bypassRoute_geometry;
                const bypassDirData = await fetchMapboxDirections([
                    origin,
                    item.bp,
                    destination
                ], mapboxToken, false);
                const bypassRoute = (_bypassDirData_routes = bypassDirData.routes) === null || _bypassDirData_routes === void 0 ? void 0 : _bypassDirData_routes[0];
                if ((bypassRoute === null || bypassRoute === void 0 ? void 0 : (_bypassRoute_geometry = bypassRoute.geometry) === null || _bypassRoute_geometry === void 0 ? void 0 : _bypassRoute_geometry.coordinates) && bypassRoute.geometry.coordinates.length >= 2) {
                    const routeCoords = bypassRoute.geometry.coordinates;
                    const routeBBox = computeBBox(routeCoords, 10);
                    let hasRed = false;
                    for (const red of redHazards){
                        if (isRouteNearSegment(routeCoords, routeBBox, red.coordinates, red.bbox, 45)) {
                            hasRed = true;
                            break;
                        }
                    }
                    if (!hasRed) {
                        const yellowCollisions = [];
                        for (const yel of yellowHazards){
                            if (isRouteNearSegment(routeCoords, routeBBox, yel.coordinates, yel.bbox, 35)) {
                                if (!yellowCollisions.includes(yel.name)) {
                                    yellowCollisions.push(yel.name);
                                }
                            }
                        }
                        safeCandidate = {
                            geometry: bypassRoute.geometry,
                            distance: Math.round(bypassRoute.distance),
                            duration: Math.round(bypassRoute.duration),
                            hasRedCollision: false,
                            collidedReds: [],
                            yellowCollisions,
                            bypassUsed: item.bp
                        };
                        break;
                    }
                }
            } catch (e) {
            // Abaikan dan coba kandidat berikutnya
            }
        }
    }
    // Jika tetap tidak ada rute yang dapat menghindari zona merah
    if (!safeCandidate) {
        const allBlockedNames = Array.from(new Set(redNames));
        return {
            success: false,
            geometry: {
                type: 'LineString',
                coordinates: []
            },
            distanceMeters: 0,
            baseDurationSeconds: 0,
            penaltySeconds: 0,
            totalDurationSeconds: 0,
            classification: 'BLOCKED_RED',
            avoidedRedCount: redHazards.length,
            avoidedRedNames: allBlockedNames,
            yellowAlerts: [],
            errorMessage: "⛔ TIDAK ADA RUTE AMAN: Seluruh koridor penghubung menuju destinasi terputus oleh genangan parah (".concat(allBlockedNames.slice(0, 3).join(', '), "). Tim SAR & BPBD menyarankan menunda perjalanan.")
        };
    }
    // ── 4. ANALISIS PENALTI WAKTU & KLASIFIKASI JALAN (PUTIH vs KUNING) ──
    const isYellowTraversed = safeCandidate.yellowCollisions.length > 0;
    const penaltyPerYellow = travelMode === 'two-wheeler' ? 420 : 240; // Penalti 4 atau 7 menit
    const penaltySeconds = safeCandidate.yellowCollisions.length * penaltyPerYellow;
    const totalDurationSeconds = safeCandidate.duration + penaltySeconds;
    const yellowAlerts = safeCandidate.yellowCollisions.map((name)=>({
            name,
            penaltyMinutes: Math.round(penaltyPerYellow / 60)
        }));
    let classification = 'WHITE_PRIORITY';
    let warningMessage = undefined;
    if (isYellowTraversed) {
        classification = 'YELLOW_WARNING';
        const penaltyMins = Math.round(penaltySeconds / 60);
        warningMessage = "⚠️ PERINGATAN: Rute melintasi area genangan sedang / antrean lalu lintas (".concat(safeCandidate.yellowCollisions.slice(0, 2).join(', '), "). Waktu tempuh bertambah +").concat(penaltyMins, " mnt. ").concat(travelMode === 'two-wheeler' ? 'Pengendara motor wajib ekstra berhati-hati.' : 'Gunakan lajur tengah.');
    }
    return {
        success: true,
        geometry: safeCandidate.geometry,
        distanceMeters: safeCandidate.distance,
        baseDurationSeconds: safeCandidate.duration,
        penaltySeconds,
        totalDurationSeconds,
        classification,
        avoidedRedCount: redHazards.length,
        avoidedRedNames: redNames,
        yellowAlerts,
        warningMessage,
        usedBypassWaypoint: safeCandidate.bypassUsed
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/FloodSafeRouteNavigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FloodSafeRouteNavigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$safeRoutingEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/safeRoutingEngine.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function FloodSafeRouteNavigation(param) {
    let { floodedSegments, cascadingRoutes = [], waterFactor = 1.0, mapboxToken, onRouteCalculated, onPickingLocationChange, pickingLocationMode = null, externalStart = null, externalDest = null, isSafeState = false } = param;
    var _Object_entries_find, _Object_entries_find1;
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isMinimized, setIsMinimized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Titik Asal & Tujuan
    const [startPoint, setStartPoint] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(externalStart || __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$safeRoutingEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MEDAN_PRESET_LOCATIONS"]['RS_USU']);
    const [destPoint, setDestPoint] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(externalDest || __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$safeRoutingEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MEDAN_PRESET_LOCATIONS"]['BALAI_KOTA']);
    const [travelMode, setTravelMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('driving');
    const [routeResult, setRouteResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorMsg, setErrorMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [locating, setLocating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Update jika ada koordinat dari klik peta eksternal (di dalam useEffect agar tidak memicu infinite render loop)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FloodSafeRouteNavigation.useEffect": ()=>{
            if (externalStart) {
                setStartPoint(externalStart);
            }
        }
    }["FloodSafeRouteNavigation.useEffect"], [
        externalStart
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FloodSafeRouteNavigation.useEffect": ()=>{
            if (externalDest) {
                setDestPoint(externalDest);
            }
        }
    }["FloodSafeRouteNavigation.useEffect"], [
        externalDest
    ]);
    // Handle GPS pengguna saat ini
    function handleUseMyLocation(target) {
        if (!('geolocation' in navigator)) {
            setErrorMsg('Browser Anda tidak mendukung deteksi geolokasi GPS.');
            return;
        }
        setLocating(true);
        setErrorMsg(null);
        navigator.geolocation.getCurrentPosition((pos)=>{
            const pt = {
                name: 'Lokasi GPS Saya Saat Ini',
                lat: Number(pos.coords.latitude.toFixed(5)),
                lng: Number(pos.coords.longitude.toFixed(5))
            };
            if (target === 'start') {
                setStartPoint(pt);
            } else {
                setDestPoint(pt);
            }
            setLocating(false);
        }, (err)=>{
            setLocating(false);
            setErrorMsg("Gagal membaca GPS: ".concat(err.message, ". Silakan gunakan preset lokasi."));
        }, {
            enableHighAccuracy: true,
            timeout: 8000
        });
    }
    // Eksekusi kalkulasi rute aman
    async function handleCalculateRoute() {
        if (!startPoint || !destPoint) {
            setErrorMsg('Tentukan titik asal dan titik tujuan terlebih dahulu.');
            return;
        }
        if (startPoint.lat === destPoint.lat && startPoint.lng === destPoint.lng) {
            setErrorMsg('Titik asal dan tujuan tidak boleh berada di koordinat yang sama.');
            return;
        }
        setLoading(true);
        setErrorMsg(null);
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$safeRoutingEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateFloodSafeRoute"])({
                origin: startPoint,
                destination: destPoint,
                floodedSegments: isSafeState ? [] : floodedSegments,
                cascadingRoutes: isSafeState ? [] : cascadingRoutes,
                waterFactor: isSafeState ? 0 : waterFactor,
                mapboxToken,
                travelMode
            });
            if (!result.success) {
                setErrorMsg(result.errorMessage || 'Rute aman tidak dapat ditemukan.');
                setRouteResult(null);
                onRouteCalculated === null || onRouteCalculated === void 0 ? void 0 : onRouteCalculated(null);
            } else {
                setRouteResult(result);
                onRouteCalculated === null || onRouteCalculated === void 0 ? void 0 : onRouteCalculated(result);
            }
        } catch (err) {
            const msg = err instanceof Error ? err.message : 'Terjadi kesalahan kalkulasi rute.';
            setErrorMsg(msg);
            setRouteResult(null);
            onRouteCalculated === null || onRouteCalculated === void 0 ? void 0 : onRouteCalculated(null);
        } finally{
            setLoading(false);
        }
    }
    // Reset rute
    function handleReset() {
        setRouteResult(null);
        setErrorMsg(null);
        onRouteCalculated === null || onRouteCalculated === void 0 ? void 0 : onRouteCalculated(null);
        onPickingLocationChange === null || onPickingLocationChange === void 0 ? void 0 : onPickingLocationChange(null);
    }
    // Pilih skenario cepat
    function applyPresetScenario(startKey, destKey) {
        const s = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$safeRoutingEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MEDAN_PRESET_LOCATIONS"][startKey];
        const d = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$safeRoutingEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MEDAN_PRESET_LOCATIONS"][destKey];
        if (s && d) {
            setStartPoint(s);
            setDestPoint(d);
            setErrorMsg(null);
            setRouteResult(null);
            onRouteCalculated === null || onRouteCalculated === void 0 ? void 0 : onRouteCalculated(null);
        }
    }
    if (!isOpen) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: ()=>setIsOpen(true),
            className: "pointer-events-auto flex items-center gap-2 rounded-2xl border border-blue-500/50 bg-slate-900/95 px-4 py-2.5 text-xs font-black text-white shadow-2xl backdrop-blur-xl transition hover:bg-blue-600 hover:scale-105 active:scale-95 cursor-pointer ring-2 ring-blue-500/30",
            title: "Buka Navigasi Rute Bebas Banjir",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-base",
                    children: "🧭"
                }, void 0, false, {
                    fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                    lineNumber: 172,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "tracking-wide uppercase",
                    children: "Rute Aman Banjir"
                }, void 0, false, {
                    fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                    lineNumber: 173,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"
                }, void 0, false, {
                    fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                    lineNumber: 174,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
            lineNumber: 166,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "region",
        "aria-label": "Panel Navigasi Rute Bebas Banjir",
        className: "pointer-events-auto w-[340px] sm:w-[380px] max-w-[calc(100vw-2rem)] rounded-3xl border border-slate-700/80 bg-slate-900/95 p-4 text-xs text-white shadow-2xl backdrop-blur-2xl transition-all duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between border-b border-slate-800/80 pb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex h-7 w-7 items-center justify-center rounded-xl bg-blue-600 text-xs font-black text-white shadow-md shadow-blue-600/40",
                                children: "🧭"
                            }, void 0, false, {
                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-extrabold tracking-wide text-white text-sm flex items-center gap-1.5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Navigasi Rute Aman Banjir"
                                        }, void 0, false, {
                                            fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                            lineNumber: 193,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                        lineNumber: 192,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-slate-400",
                                        children: "Spatial Constraints (0% Jalan Merah · Prioritas Putih)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                        lineNumber: 195,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setIsMinimized(!isMinimized),
                                className: "flex h-7 w-7 items-center justify-center rounded-lg bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white transition cursor-pointer",
                                title: isMinimized ? 'Perbesar Panel' : 'Perkecil Panel',
                                children: isMinimized ? '▼' : '▲'
                            }, void 0, false, {
                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    setIsOpen(false);
                                    onPickingLocationChange === null || onPickingLocationChange === void 0 ? void 0 : onPickingLocationChange(null);
                                },
                                className: "flex h-7 w-7 items-center justify-center rounded-lg bg-slate-800 text-slate-400 hover:bg-red-600 hover:text-white transition cursor-pointer",
                                title: "Tutup Navigasi",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                lineNumber: 210,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this),
            !isMinimized && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 space-y-3.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold uppercase tracking-wider text-slate-400",
                                        children: "Skenario Cepat LKTI:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                        lineNumber: 229,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] text-blue-400 font-semibold",
                                        children: "1-Klik Pilih"
                                    }, void 0, false, {
                                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                        lineNumber: 232,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                lineNumber: 228,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>applyPresetScenario('TASBI_RINGROAD', 'BALAI_KOTA'),
                                        className: "truncate rounded-xl border border-slate-700/80 bg-slate-800/60 p-1.5 text-left text-[10px] font-medium text-slate-200 hover:bg-slate-700 hover:text-white transition active:scale-95",
                                        title: "Tasbi Ringroad ke Balai Kota (Prioritas 100% Jalan Putih Kering)",
                                        children: "⚪ Tasbi ➔ Balai Kota (Putih)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                        lineNumber: 235,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>applyPresetScenario('LAPANGAN_MERDEKA', 'TASBI_RINGROAD'),
                                        className: "truncate rounded-xl border border-slate-700/80 bg-slate-800/60 p-1.5 text-left text-[10px] font-medium text-slate-200 hover:bg-slate-700 hover:text-white transition active:scale-95",
                                        title: "Lapangan Merdeka ke Tasbi (Melintasi Antrean Jalan Kuning)",
                                        children: "🟡 Lap. Merdeka ➔ Tasbi (Kuning)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                        lineNumber: 243,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>applyPresetScenario('RS_USU', 'BALAI_KOTA'),
                                        className: "truncate rounded-xl border border-slate-700/80 bg-slate-800/60 p-1.5 text-left text-[10px] font-medium text-slate-200 hover:bg-slate-700 hover:text-white transition active:scale-95",
                                        title: "RS USU ke Balai Kota (Uji Blokir Total Jalan Merah Dr. Mansyur 130cm)",
                                        children: "🔴 RS USU ➔ Balai Kota (Merah)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                        lineNumber: 251,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>applyPresetScenario('SIMPANG_SUNGGAL', 'PLAZA_MEDAN_FAIR'),
                                        className: "truncate rounded-xl border border-slate-700/80 bg-slate-800/60 p-1.5 text-left text-[10px] font-medium text-slate-200 hover:bg-slate-700 hover:text-white transition active:scale-95",
                                        title: "Simpang Sunggal ke Plaza Medan Fair (Bypass Bebas Genangan)",
                                        children: "🛡️ Sunggal ➔ Medan Fair (Aman)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                        lineNumber: 259,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                lineNumber: 234,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                        lineNumber: 227,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2.5 rounded-2xl bg-slate-950/60 border border-slate-800/80 p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-[11px] font-bold text-emerald-400 flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                                        lineNumber: 276,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Titik Asal (Start)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                                lineNumber: 275,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>handleUseMyLocation('start'),
                                                        disabled: locating,
                                                        className: "text-[10px] font-bold text-blue-400 hover:text-blue-300 transition",
                                                        title: "Gunakan GPS Perangkat",
                                                        children: "◎ Lokasi Saya"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                                        lineNumber: 280,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-600",
                                                        children: "·"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>onPickingLocationChange === null || onPickingLocationChange === void 0 ? void 0 : onPickingLocationChange(pickingLocationMode === 'start' ? null : 'start'),
                                                        className: "text-[10px] font-bold transition ".concat(pickingLocationMode === 'start' ? 'text-amber-400 animate-pulse' : 'text-slate-400 hover:text-slate-200'),
                                                        title: "Klik di Peta untuk Titik Asal",
                                                        children: pickingLocationMode === 'start' ? '📍 Klik di Peta...' : '📍 Pilih Peta'
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                                        lineNumber: 290,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                                lineNumber: 279,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                        lineNumber: 274,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: ((_Object_entries_find = Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$safeRoutingEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MEDAN_PRESET_LOCATIONS"]).find((param)=>{
                                            let [_, pt] = param;
                                            return pt.lat === startPoint.lat && pt.lng === startPoint.lng;
                                        })) === null || _Object_entries_find === void 0 ? void 0 : _Object_entries_find[0]) || 'custom',
                                        onChange: (e)=>{
                                            if (e.target.value !== 'custom') {
                                                setStartPoint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$safeRoutingEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MEDAN_PRESET_LOCATIONS"][e.target.value]);
                                            }
                                        },
                                        className: "w-full rounded-xl border border-slate-700/80 bg-slate-900/90 px-3 py-2 text-xs text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500",
                                        children: [
                                            Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$safeRoutingEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MEDAN_PRESET_LOCATIONS"]).map((param)=>{
                                                let [key, loc] = param;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: key,
                                                    className: "bg-slate-900 text-white",
                                                    children: loc.name
                                                }, key, false, {
                                                    fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                                    lineNumber: 319,
                                                    columnNumber: 19
                                                }, this);
                                            }),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "custom",
                                                disabled: true,
                                                className: "bg-slate-900 text-slate-400",
                                                children: startPoint.name || "".concat(startPoint.lat.toFixed(4), ", ").concat(startPoint.lng.toFixed(4))
                                            }, void 0, false, {
                                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                                lineNumber: 323,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                        lineNumber: 305,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                lineNumber: 273,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-[11px] font-bold text-red-400 flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex h-2.5 w-2.5 rounded-full bg-red-500 shadow-sm shadow-red-500/50"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                                        lineNumber: 333,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Titik Tujuan (Destination)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                                lineNumber: 332,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>handleUseMyLocation('dest'),
                                                        disabled: locating,
                                                        className: "text-[10px] font-bold text-blue-400 hover:text-blue-300 transition",
                                                        title: "Gunakan GPS Perangkat",
                                                        children: "◎ Lokasi Saya"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                                        lineNumber: 337,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-600",
                                                        children: "·"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                                        lineNumber: 346,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>onPickingLocationChange === null || onPickingLocationChange === void 0 ? void 0 : onPickingLocationChange(pickingLocationMode === 'dest' ? null : 'dest'),
                                                        className: "text-[10px] font-bold transition ".concat(pickingLocationMode === 'dest' ? 'text-amber-400 animate-pulse' : 'text-slate-400 hover:text-slate-200'),
                                                        title: "Klik di Peta untuk Titik Tujuan",
                                                        children: pickingLocationMode === 'dest' ? '📍 Klik di Peta...' : '📍 Pilih Peta'
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                                        lineNumber: 347,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                                lineNumber: 336,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                        lineNumber: 331,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: ((_Object_entries_find1 = Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$safeRoutingEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MEDAN_PRESET_LOCATIONS"]).find((param)=>{
                                            let [_, pt] = param;
                                            return pt.lat === destPoint.lat && pt.lng === destPoint.lng;
                                        })) === null || _Object_entries_find1 === void 0 ? void 0 : _Object_entries_find1[0]) || 'custom',
                                        onChange: (e)=>{
                                            if (e.target.value !== 'custom') {
                                                setDestPoint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$safeRoutingEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MEDAN_PRESET_LOCATIONS"][e.target.value]);
                                            }
                                        },
                                        className: "w-full rounded-xl border border-slate-700/80 bg-slate-900/90 px-3 py-2 text-xs text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500",
                                        children: [
                                            Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$safeRoutingEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MEDAN_PRESET_LOCATIONS"]).map((param)=>{
                                                let [key, loc] = param;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: key,
                                                    className: "bg-slate-900 text-white",
                                                    children: loc.name
                                                }, key, false, {
                                                    fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                                    lineNumber: 376,
                                                    columnNumber: 19
                                                }, this);
                                            }),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "custom",
                                                disabled: true,
                                                className: "bg-slate-900 text-slate-400",
                                                children: destPoint.name || "".concat(destPoint.lat.toFixed(4), ", ").concat(destPoint.lng.toFixed(4))
                                            }, void 0, false, {
                                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                                lineNumber: 380,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                        lineNumber: 362,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                lineNumber: 330,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between pt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-semibold text-slate-400",
                                        children: "Moda Transportasi:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                        lineNumber: 388,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex rounded-xl bg-slate-900/90 p-0.5 border border-slate-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setTravelMode('driving'),
                                                className: "rounded-lg px-2.5 py-1 text-[10px] font-bold transition ".concat(travelMode === 'driving' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'),
                                                children: "🚗 Mobil"
                                            }, void 0, false, {
                                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                                lineNumber: 390,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setTravelMode('two-wheeler'),
                                                className: "rounded-lg px-2.5 py-1 text-[10px] font-bold transition ".concat(travelMode === 'two-wheeler' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'),
                                                children: "🏍️ Motor"
                                            }, void 0, false, {
                                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                                lineNumber: 399,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                        lineNumber: 389,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                lineNumber: 387,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                        lineNumber: 271,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleCalculateRoute,
                                disabled: loading,
                                className: "flex-1 flex h-11 items-center justify-center gap-2 rounded-2xl bg-blue-600 font-extrabold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500 active:scale-95 disabled:bg-slate-800 disabled:text-slate-500 cursor-pointer",
                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                            lineNumber: 422,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Mengevaluasi Spasial..."
                                        }, void 0, false, {
                                            fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                            lineNumber: 423,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "🚀"
                                        }, void 0, false, {
                                            fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                            lineNumber: 427,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Kalkulasi Rute Aman"
                                        }, void 0, false, {
                                            fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                            lineNumber: 428,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                lineNumber: 414,
                                columnNumber: 13
                            }, this),
                            routeResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleReset,
                                className: "flex h-11 px-3 items-center justify-center rounded-2xl border border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition active:scale-95 cursor-pointer",
                                title: "Hapus Rute",
                                children: "Reset"
                            }, void 0, false, {
                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                lineNumber: 434,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                        lineNumber: 413,
                        columnNumber: 11
                    }, this),
                    errorMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        role: "alert",
                        className: "rounded-2xl border border-red-500/40 bg-red-950/80 p-3 text-red-200 text-[11px] leading-relaxed shadow-lg flex items-start gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm shrink-0",
                                children: "⚠️"
                            }, void 0, false, {
                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                lineNumber: 451,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: errorMsg
                            }, void 0, false, {
                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                lineNumber: 452,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                        lineNumber: 447,
                        columnNumber: 13
                    }, this),
                    routeResult && routeResult.success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2.5 rounded-2xl border border-slate-700/80 bg-slate-950/70 p-3.5 animate-in fade-in duration-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold uppercase tracking-wider text-slate-400",
                                        children: "Status Rute Terpilih:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                        lineNumber: 461,
                                        columnNumber: 17
                                    }, this),
                                    routeResult.classification === 'WHITE_PRIORITY' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 px-2.5 py-0.5 text-[10px] font-black text-emerald-300 shadow-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                                lineNumber: 466,
                                                columnNumber: 21
                                            }, this),
                                            "⚪ Prioritas Jalan Putih"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                        lineNumber: 465,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 px-2.5 py-0.5 text-[10px] font-black text-amber-300 shadow-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                                lineNumber: 471,
                                                columnNumber: 21
                                            }, this),
                                            "🟡 Alternatif (Jalan Kuning)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                        lineNumber: 470,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                lineNumber: 460,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-slate-800 bg-slate-900/90 p-2.5 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] font-medium text-slate-400",
                                                children: "Total Waktu Tempuh"
                                            }, void 0, false, {
                                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                                lineNumber: 480,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg font-black text-white mt-0.5",
                                                children: [
                                                    Math.round(routeResult.totalDurationSeconds / 60),
                                                    " mnt"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                                lineNumber: 481,
                                                columnNumber: 19
                                            }, this),
                                            routeResult.penaltySeconds > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[9px] text-amber-400 font-bold mt-0.5",
                                                children: [
                                                    "(+",
                                                    Math.round(routeResult.penaltySeconds / 60),
                                                    " mnt penalti genangan)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                                lineNumber: 485,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                        lineNumber: 479,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-slate-800 bg-slate-900/90 p-2.5 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] font-medium text-slate-400",
                                                children: "Total Jarak Tempuh"
                                            }, void 0, false, {
                                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                                lineNumber: 492,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg font-black text-white mt-0.5",
                                                children: [
                                                    (routeResult.distanceMeters / 1000).toFixed(1),
                                                    " km"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                                lineNumber: 493,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[9px] text-emerald-400 font-bold mt-0.5",
                                                children: "Bebas Hambatan Merah"
                                            }, void 0, false, {
                                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                                lineNumber: 496,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                        lineNumber: 491,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                lineNumber: 478,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl border border-slate-800 bg-slate-900/60 p-2.5 space-y-1.5 text-[10px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between text-slate-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "h-2 w-2 rounded-full bg-red-600 shadow-xs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                                        lineNumber: 506,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Ruas Merah Diblokir:"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                                lineNumber: 505,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono font-bold text-red-400",
                                                children: [
                                                    routeResult.avoidedRedCount,
                                                    " Ruas (100% Terhindar)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                                lineNumber: 509,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                        lineNumber: 504,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between text-slate-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "h-2 w-2 rounded-full bg-amber-500 shadow-xs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                                        lineNumber: 516,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Ruas Kuning Dilewati:"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                                lineNumber: 515,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono font-bold text-amber-300",
                                                children: [
                                                    routeResult.yellowAlerts.length,
                                                    " Ruas"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                                lineNumber: 519,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                        lineNumber: 514,
                                        columnNumber: 17
                                    }, this),
                                    routeResult.usedBypassWaypoint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between text-blue-300 pt-1 border-t border-slate-800/80",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "h-2 w-2 rounded-full bg-blue-400 animate-ping"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                                        lineNumber: 527,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Koridor Elak Bypass:"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                                lineNumber: 526,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold truncate max-w-[150px]",
                                                children: routeResult.usedBypassWaypoint.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                                lineNumber: 530,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                        lineNumber: 525,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                lineNumber: 503,
                                columnNumber: 15
                            }, this),
                            routeResult.warningMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl border border-amber-500/40 bg-amber-950/50 p-2.5 text-amber-200 text-[10px] leading-relaxed",
                                children: routeResult.warningMessage
                            }, void 0, false, {
                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                lineNumber: 539,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                        lineNumber: 458,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-2 border-t border-slate-800/80 text-[10px] space-y-1 text-slate-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold text-slate-300 uppercase tracking-wider text-[9px]",
                                children: "Ketentuan Tata Ruang Routing:"
                            }, void 0, false, {
                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                lineNumber: 548,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "h-2 w-2 rounded-full bg-red-600 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                        lineNumber: 552,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-red-400",
                                                children: "Merah (≥40cm):"
                                            }, void 0, false, {
                                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                                lineNumber: 554,
                                                columnNumber: 17
                                            }, this),
                                            " Blokir total 100% (Buffer 45m)."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                        lineNumber: 553,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                lineNumber: 551,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "h-2 w-2 rounded-full bg-amber-500 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                        lineNumber: 558,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-amber-400",
                                                children: "Kuning (10-30cm):"
                                            }, void 0, false, {
                                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                                lineNumber: 560,
                                                columnNumber: 17
                                            }, this),
                                            " Penalti waktu & warning UI."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                        lineNumber: 559,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                lineNumber: 557,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "h-2 w-2 rounded-full bg-emerald-400 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                        lineNumber: 564,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-emerald-400",
                                                children: "Putih (<10cm):"
                                            }, void 0, false, {
                                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                                lineNumber: 566,
                                                columnNumber: 17
                                            }, this),
                                            " Jalur prioritas utama."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                        lineNumber: 565,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                                lineNumber: 563,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                        lineNumber: 547,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
                lineNumber: 225,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/FloodSafeRouteNavigation.tsx",
        lineNumber: 180,
        columnNumber: 5
    }, this);
}
_s(FloodSafeRouteNavigation, "oKl/nfDDEST05UmGdQYTktAbrXU=");
_c = FloodSafeRouteNavigation;
var _c;
__turbopack_context__.k.register(_c, "FloodSafeRouteNavigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/FloodSafeRouteNavigation.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/FloodSafeRouteNavigation.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=_6817bdff._.js.map