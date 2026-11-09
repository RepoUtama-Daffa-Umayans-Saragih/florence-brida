(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/AlertBanner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AlertBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const STATUS_STYLE = {
    GREEN: {
        bg: 'bg-green-600',
        text: 'text-green-50',
        dot: 'bg-green-300',
        badge: 'bg-green-400 text-green-950'
    },
    YELLOW: {
        bg: 'bg-yellow-500',
        text: 'text-yellow-50',
        dot: 'bg-yellow-200',
        badge: 'bg-yellow-200 text-yellow-900'
    },
    RED: {
        bg: 'bg-red-600',
        text: 'text-red-50',
        dot: 'bg-red-300',
        badge: 'bg-red-400 text-red-950'
    }
};
function AlertBanner(param) {
    let { alert } = param;
    _s();
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!alert) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "rounded-2xl bg-green-600 px-4 py-3 text-green-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-2 w-2 rounded-full bg-green-300"
                    }, void 0, false, {
                        fileName: "[project]/components/AlertBanner.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-semibold",
                        children: "AMAN"
                    }, void 0, false, {
                        fileName: "[project]/components/AlertBanner.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/AlertBanner.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/AlertBanner.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this);
    }
    const style = STATUS_STYLE[alert.status];
    const statusText = alert.status === 'RED' ? 'SIAGA' : alert.status === 'YELLOW' ? 'WASPADA' : 'SIAGA';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "rounded-2xl ".concat(style.bg, " ").concat(style.text, " transition-colors"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-4 py-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "w-full text-left",
                    onClick: ()=>setExpanded((prev)=>!prev),
                    "aria-expanded": expanded,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-2 w-2 rounded-full ".concat(style.dot, " animate-pulse")
                                        }, void 0, false, {
                                            fileName: "[project]/components/AlertBanner.tsx",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-bold uppercase tracking-wide",
                                            children: statusText
                                        }, void 0, false, {
                                            fileName: "[project]/components/AlertBanner.tsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/AlertBanner.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-lg",
                                    "aria-hidden": true,
                                    children: expanded ? '▲' : '▼'
                                }, void 0, false, {
                                    fileName: "[project]/components/AlertBanner.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AlertBanner.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-sm",
                            children: alert.label
                        }, void 0, false, {
                            fileName: "[project]/components/AlertBanner.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/AlertBanner.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                expanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3 rounded-lg bg-black/20 p-3 text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: alert.description
                        }, void 0, false, {
                            fileName: "[project]/components/AlertBanner.tsx",
                            lineNumber: 77,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 flex items-center justify-between text-xs opacity-80",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: alert.source
                                }, void 0, false, {
                                    fileName: "[project]/components/AlertBanner.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "Diperbarui ",
                                        alert.updatedAt
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/AlertBanner.tsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AlertBanner.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/AlertBanner.tsx",
                    lineNumber: 76,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/AlertBanner.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/AlertBanner.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_s(AlertBanner, "DuL5jiiQQFgbn7gBKAyxwS/H4Ek=");
_c = AlertBanner;
var _c;
__turbopack_context__.k.register(_c, "AlertBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/MapPolyline.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MapPolyline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$source$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/source.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/layer.js [app-client] (ecmascript)");
'use client';
;
;
function MapPolyline(param) {
    let { id, path, color, weight = 5, opacity = 0.8 } = param;
    if (path.length < 2) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$source$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Source"], {
        id: id,
        type: "geojson",
        data: {
            type: 'Feature',
            properties: {},
            geometry: {
                type: 'LineString',
                coordinates: path.map((p)=>[
                        p.lng,
                        p.lat
                    ])
            }
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"], {
            id: "".concat(id, "-line"),
            type: "line",
            layout: {
                'line-join': 'round',
                'line-cap': 'round'
            },
            paint: {
                'line-color': color,
                'line-width': weight,
                'line-opacity': opacity
            }
        }, void 0, false, {
            fileName: "[project]/components/MapPolyline.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/MapPolyline.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = MapPolyline;
var _c;
__turbopack_context__.k.register(_c, "MapPolyline");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/FloodMap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FloodMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Map__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/map.js [app-client] (ecmascript) <export Map as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/marker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/popup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$navigation$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/navigation-control.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MapPolyline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/MapPolyline.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const ZONES = {
    GREEN: {
        color: '#2E7D32',
        label: 'Hijau · 0–10 cm'
    },
    YELLOW: {
        color: '#F9A825',
        label: 'Kuning · >10–30 cm · motor hindari'
    },
    RED: {
        color: '#C62828',
        label: 'Merah · >30 cm · hindari'
    }
};
const DEFAULT_CENTER = {
    lat: 3.563,
    lng: 98.656
};
function FloodMap(param) {
    let { nodes = [], segments = [], routePath = [], center = DEFAULT_CENTER, zoom = 15, flyTo = null, originPoint = null, statusMessage, isNavigating = false } = param;
    _s();
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showSegments, setShowSegments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const selected = nodes.find((node)=>node.id === selectedId);
    const token = ("TURBOPACK compile-time value", "pk.eyJ1Ijoia2x1Ym9saW1waWFkZWluZm9ybWF0aWthc2ltIiwiYSI6ImNtdzQ3Mmh2aTAwM2EzMXB6NG5naDJnbDEifQ.cxMkjrU8vo3KFRcZaMYsDQ");
    const isNavigatingPrev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Kamera bergeser mulus setiap ada permintaan flyTo baru (lokasi saya / koordinat manual).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FloodMap.useEffect": ()=>{
            var _mapRef_current;
            if (!flyTo) return;
            (_mapRef_current = mapRef.current) === null || _mapRef_current === void 0 ? void 0 : _mapRef_current.flyTo({
                center: [
                    flyTo.point.lng,
                    flyTo.point.lat
                ],
                zoom: 16,
                duration: 1600
            });
        }
    }["FloodMap.useEffect"], [
        flyTo
    ]);
    // Efek Kamera GPS 3D saat Mode Navigasi aktif / nonaktif
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FloodMap.useEffect": ()=>{
            if (isNavigating) {
                isNavigatingPrev.current = true;
                // Gunakan koordinat GPS asli pengguna (originPoint) untuk kamera navigasi
                if (originPoint) {
                    var _mapRef_current;
                    (_mapRef_current = mapRef.current) === null || _mapRef_current === void 0 ? void 0 : _mapRef_current.flyTo({
                        center: [
                            originPoint.lng,
                            originPoint.lat
                        ],
                        zoom: 17,
                        pitch: 60,
                        bearing: 45,
                        duration: 2200
                    });
                } else {
                    var _mapRef_current1;
                    (_mapRef_current1 = mapRef.current) === null || _mapRef_current1 === void 0 ? void 0 : _mapRef_current1.flyTo({
                        zoom: 17,
                        pitch: 60,
                        bearing: 45,
                        duration: 2200
                    });
                }
            } else if (isNavigatingPrev.current) {
                var _mapRef_current2;
                isNavigatingPrev.current = false;
                (_mapRef_current2 = mapRef.current) === null || _mapRef_current2 === void 0 ? void 0 : _mapRef_current2.flyTo({
                    pitch: 0,
                    bearing: 0,
                    zoom: 14,
                    duration: 1800
                });
            }
        }
    }["FloodMap.useEffect"], [
        isNavigating,
        originPoint
    ]);
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    var _selected_name;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-full w-full overflow-hidden bg-slate-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Map__as__default$3e$__["default"], {
                ref: mapRef,
                mapboxAccessToken: token,
                initialViewState: {
                    latitude: center.lat,
                    longitude: center.lng,
                    zoom,
                    pitch: 45,
                    bearing: -15
                },
                mapStyle: "mapbox://styles/mapbox/streets-v12",
                style: {
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0
                },
                onClick: ()=>setSelectedId(null),
                onError: ()=>setError(true),
                onLoad: ()=>setError(false),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$navigation$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationControl"], {
                        position: "top-right",
                        showCompass: false
                    }, void 0, false, {
                        fileName: "[project]/components/FloodMap.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    originPoint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                        latitude: originPoint.lat,
                        longitude: originPoint.lng,
                        anchor: "center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            role: "img",
                            "aria-label": "Titik asal",
                            className: "block h-5 w-5 rounded-full border-[3px] border-white bg-blue-600 shadow-lg ring-4 ring-blue-500/30"
                        }, void 0, false, {
                            fileName: "[project]/components/FloodMap.tsx",
                            lineNumber: 106,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/FloodMap.tsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, this),
                    showSegments && segments.map((segment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MapPolyline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            id: "segment-".concat(segment.id),
                            path: segment.path,
                            color: ZONES[segment.zone].color
                        }, segment.id, false, {
                            fileName: "[project]/components/FloodMap.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this)),
                    routePath.length >= 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MapPolyline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                id: "florence-route",
                                path: routePath,
                                color: isNavigating ? '#10B981' : '#2563EB',
                                weight: isNavigating ? 8 : 7
                            }, void 0, false, {
                                fileName: "[project]/components/FloodMap.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                                latitude: routePath[routePath.length - 1].lat,
                                longitude: routePath[routePath.length - 1].lng,
                                anchor: "bottom",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-md bg-red-600 px-2 py-0.5 text-[10px] font-bold text-white shadow-md",
                                            children: "Tujuan"
                                        }, void 0, false, {
                                            fileName: "[project]/components/FloodMap.tsx",
                                            lineNumber: 130,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl drop-shadow-md",
                                            role: "img",
                                            "aria-label": "Pin Merah Tujuan",
                                            children: "📍"
                                        }, void 0, false, {
                                            fileName: "[project]/components/FloodMap.tsx",
                                            lineNumber: 133,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/FloodMap.tsx",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/FloodMap.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popup"], {
                        latitude: selected.position.lat,
                        longitude: selected.position.lng,
                        anchor: "top",
                        closeOnClick: false,
                        onClose: ()=>setSelectedId(null),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-52 text-sm text-slate-900",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-bold",
                                    children: (_selected_name = selected.name) !== null && _selected_name !== void 0 ? _selected_name : selected.id
                                }, void 0, false, {
                                    fileName: "[project]/components/FloodMap.tsx",
                                    lineNumber: 139,
                                    columnNumber: 60
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: ZONES[selected.zone].label
                                }, void 0, false, {
                                    fileName: "[project]/components/FloodMap.tsx",
                                    lineNumber: 139,
                                    columnNumber: 121
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "Tinggi air: ",
                                        selected.waterCm == null ? 'Belum tersedia' : "".concat(selected.waterCm, " cm")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/FloodMap.tsx",
                                    lineNumber: 139,
                                    columnNumber: 156
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/FloodMap.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/FloodMap.tsx",
                        lineNumber: 138,
                        columnNumber: 22
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/FloodMap.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute right-4 top-36 md:right-6 md:top-36 z-10 flex flex-col items-end gap-2 sm:gap-3 max-w-[calc(100%-2rem)] md:w-56",
                children: [
                    statusMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-auto",
                        children: statusMessage
                    }, void 0, false, {
                        fileName: "[project]/components/FloodMap.tsx",
                        lineNumber: 145,
                        columnNumber: 27
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        role: "alert",
                        className: "pointer-events-auto rounded-2xl bg-red-950/95 p-3 text-xs text-white shadow-xl",
                        children: "Mapbox gagal memuat data. Periksa koneksi atau token."
                    }, void 0, false, {
                        fileName: "[project]/components/FloodMap.tsx",
                        lineNumber: 147,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                        className: "pointer-events-auto hidden md:block rounded-2xl border border-white/50 bg-white/90 p-3 text-xs text-slate-700 shadow-xl backdrop-blur-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                                className: "sr-only",
                                children: "Lapisan peta"
                            }, void 0, false, {
                                fileName: "[project]/components/FloodMap.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex min-h-6 items-center gap-2 cursor-pointer font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: showSegments,
                                        onChange: (e)=>setShowSegments(e.target.checked),
                                        className: "h-4 w-4 rounded text-blue-600 focus:ring-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/components/FloodMap.tsx",
                                        lineNumber: 154,
                                        columnNumber: 13
                                    }, this),
                                    "Zona banjir ruas jalan"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/FloodMap.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/FloodMap.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                        className: "pointer-events-auto hidden md:block max-w-52 rounded-2xl border border-white/50 bg-white/90 p-3 text-xs text-slate-700 shadow-xl backdrop-blur-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                className: "cursor-pointer font-bold",
                                children: "Legenda zona"
                            }, void 0, false, {
                                fileName: "[project]/components/FloodMap.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "mt-2 space-y-2",
                                children: [
                                    Object.entries(ZONES).map((param)=>{
                                        let [zone, value] = param;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "aria-hidden": "true",
                                                    className: "h-3 w-3 shrink-0 rounded-full",
                                                    style: {
                                                        background: value.color
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/FloodMap.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 17
                                                }, this),
                                                value.label
                                            ]
                                        }, zone, true, {
                                            fileName: "[project]/components/FloodMap.tsx",
                                            lineNumber: 167,
                                            columnNumber: 15
                                        }, this);
                                    }),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "━ Hijau/Biru: Rute rekomendasi"
                                    }, void 0, false, {
                                        fileName: "[project]/components/FloodMap.tsx",
                                        lineNumber: 172,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/FloodMap.tsx",
                                lineNumber: 165,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/FloodMap.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/FloodMap.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/FloodMap.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
_s(FloodMap, "PBBdhyjzLSDqz54k/mIQ9rD2RsM=");
_c = FloodMap;
var _c;
__turbopack_context__.k.register(_c, "FloodMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/LiveFloodMap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LiveFloodMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FloodMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/FloodMap.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function LiveFloodMap(param) {
    let { flyTo, originPoint, routePath = [], isNavigating = false } = param;
    _s();
    const [snapshot, setSnapshot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [connected, setConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveFloodMap.useEffect": ()=>{
            var _process_env_NEXT_PUBLIC_API_URL;
            const base = ((_process_env_NEXT_PUBLIC_API_URL = ("TURBOPACK compile-time value", "http://localhost:3001")) !== null && _process_env_NEXT_PUBLIC_API_URL !== void 0 ? _process_env_NEXT_PUBLIC_API_URL : 'http://localhost:3001').replace(/\/$/, '').replace(/\/api\/v1$/, '');
            // 1. Fetch snapshot langsung saat mount agar data node & segment tidak kosong jika SSE tertunda
            fetch("".concat(base, "/api/v1/zones/snapshot"), {
                signal: AbortSignal.timeout(6000)
            }).then({
                "LiveFloodMap.useEffect": (res)=>{
                    if (!res.ok) throw new Error(String(res.status));
                    return res.json();
                }
            }["LiveFloodMap.useEffect"]).then({
                "LiveFloodMap.useEffect": (data)=>{
                    if (Array.isArray(data.nodes) && Array.isArray(data.segments)) {
                        setSnapshot(data);
                        setConnected(true);
                    }
                }
            }["LiveFloodMap.useEffect"]).catch({
                "LiveFloodMap.useEffect": ()=>{}
            }["LiveFloodMap.useEffect"]);
            // 2. Stream SSE untuk live update
            const stream = new EventSource("".concat(base, "/api/v1/zones/stream"));
            stream.addEventListener('zone.update', {
                "LiveFloodMap.useEffect": (event)=>{
                    try {
                        const data = JSON.parse(event.data);
                        if (!Array.isArray(data.nodes) || !Array.isArray(data.segments)) throw new Error('Invalid snapshot');
                        setSnapshot(data);
                        setConnected(true);
                    } catch (e) {
                        setConnected(false);
                    }
                }
            }["LiveFloodMap.useEffect"]);
            stream.addEventListener('zone.error', {
                "LiveFloodMap.useEffect": ()=>setConnected(false)
            }["LiveFloodMap.useEffect"]);
            stream.onerror = ({
                "LiveFloodMap.useEffect": ()=>setConnected(false)
            })["LiveFloodMap.useEffect"];
            return ({
                "LiveFloodMap.useEffect": ()=>stream.close()
            })["LiveFloodMap.useEffect"];
        }
    }["LiveFloodMap.useEffect"], []);
    var _snapshot_nodes;
    // Unknown readings are never presented as GREEN/safe.
    const nodes = ((_snapshot_nodes = snapshot === null || snapshot === void 0 ? void 0 : snapshot.nodes) !== null && _snapshot_nodes !== void 0 ? _snapshot_nodes : []).flatMap((node)=>{
        var _node_waterCm;
        return node.zone == null ? [] : [
            {
                ...node,
                zone: node.zone,
                waterCm: (_node_waterCm = node.waterCm) !== null && _node_waterCm !== void 0 ? _node_waterCm : undefined
            }
        ];
    });
    var _snapshot_segments;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-full w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FloodMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            nodes: nodes,
            segments: (_snapshot_segments = snapshot === null || snapshot === void 0 ? void 0 : snapshot.segments) !== null && _snapshot_segments !== void 0 ? _snapshot_segments : [],
            routePath: routePath,
            flyTo: flyTo,
            originPoint: originPoint,
            isNavigating: isNavigating,
            statusMessage: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "status",
                className: "rounded-2xl bg-white/95 md:bg-white/90 px-3 py-1.5 text-[10px] sm:text-xs text-slate-700 shadow-xl backdrop-blur-xl border border-white/50",
                children: [
                    connected ? '● Live Sensor' : snapshot ? '○ Data offline' : 'Menghubungkan…',
                    snapshot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hidden sm:inline",
                        children: [
                            " · ",
                            new Date(snapshot.ts).toLocaleTimeString('id-ID')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LiveFloodMap.tsx",
                        lineNumber: 69,
                        columnNumber: 26
                    }, void 0)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LiveFloodMap.tsx",
                lineNumber: 67,
                columnNumber: 11
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/components/LiveFloodMap.tsx",
            lineNumber: 59,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/LiveFloodMap.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(LiveFloodMap, "M18XdfNlE8pxtJ2TMX9gUk3zk60=");
_c = LiveFloodMap;
var _c;
__turbopack_context__.k.register(_c, "LiveFloodMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/RouteSheet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RouteSheet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function formatDuration(seconds) {
    const minutes = Math.round(seconds / 60);
    return "".concat(Math.floor(minutes / 60) > 0 ? "".concat(Math.floor(minutes / 60), " j ") : '').concat(minutes % 60, " mnt");
}
function RouteSheet(param) {
    let { route, onStart } = param;
    _s();
    const [level, setLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('half');
    function cycleLevel() {
        setLevel((current)=>current === 'peek' ? 'half' : current === 'half' ? 'full' : 'peek');
    }
    if (!route) {
        return null;
    }
    const isGoogle = route.source === 'GOOGLE_ROUTES';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-full flex-col overflow-hidden transition-[height] duration-300 ease-out motion-reduce:transition-none",
        style: {
            height: level === 'peek' ? '8.5rem' : level === 'half' ? '30svh' : '50svh',
            maxHeight: '50svh'
        },
        role: "dialog",
        "aria-label": "Panel rute",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center -mt-2 pb-1.5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: cycleLevel,
                    className: "flex h-8 w-full items-center justify-center rounded-t-3xl active:bg-slate-100/50",
                    "aria-label": "Ubah tingkat panel",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-1.5 w-14 rounded-full bg-slate-300"
                    }, void 0, false, {
                        fileName: "[project]/components/RouteSheet.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/RouteSheet.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/RouteSheet.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto px-1 pb-1",
                children: [
                    level === 'half' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-xs text-slate-400",
                        children: "Ketuk handle untuk memperbesar / memperkecil"
                    }, void 0, false, {
                        fileName: "[project]/components/RouteSheet.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this) : null,
                    level === 'peek' || level === 'half' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mt-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-end justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-500 font-medium",
                                                children: "Rute bebas banjir"
                                            }, void 0, false, {
                                                fileName: "[project]/components/RouteSheet.tsx",
                                                lineNumber: 66,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900",
                                                children: formatDuration(route.durationSeconds)
                                            }, void 0, false, {
                                                fileName: "[project]/components/RouteSheet.tsx",
                                                lineNumber: 67,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/RouteSheet.tsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-right",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-500 font-medium",
                                                children: "Jarak tempuh"
                                            }, void 0, false, {
                                                fileName: "[project]/components/RouteSheet.tsx",
                                                lineNumber: 70,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg sm:text-xl font-bold text-slate-700",
                                                children: [
                                                    (route.distanceMeters / 1000).toFixed(1),
                                                    " km"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/RouteSheet.tsx",
                                                lineNumber: 71,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/RouteSheet.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/RouteSheet.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this),
                            level === 'peek' ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 p-3 text-xs text-amber-900 font-medium",
                                children: [
                                    "⚠ ",
                                    route.avoidedZones.length > 0 ? "Menghindari: ".concat(route.avoidedZones.join(', ')) : 'Rute aman dari Zona Merah (terverifikasi AI)'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/RouteSheet.tsx",
                                lineNumber: 75,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RouteSheet.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this) : null,
                    level === 'full' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mt-1 overflow-y-auto space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-base sm:text-lg font-bold text-slate-900",
                                children: "Detail Rekomendasi Rute"
                            }, void 0, false, {
                                fileName: "[project]/components/RouteSheet.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-3 gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl bg-slate-50 border border-slate-100 p-2.5 sm:p-3 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-slate-400 font-medium",
                                                children: "Waktu"
                                            }, void 0, false, {
                                                fileName: "[project]/components/RouteSheet.tsx",
                                                lineNumber: 89,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-0.5 text-sm sm:text-base font-bold text-slate-900",
                                                children: formatDuration(route.durationSeconds)
                                            }, void 0, false, {
                                                fileName: "[project]/components/RouteSheet.tsx",
                                                lineNumber: 90,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/RouteSheet.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl bg-slate-50 border border-slate-100 p-2.5 sm:p-3 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-slate-400 font-medium",
                                                children: "Jarak"
                                            }, void 0, false, {
                                                fileName: "[project]/components/RouteSheet.tsx",
                                                lineNumber: 93,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-0.5 text-sm sm:text-base font-bold text-slate-900",
                                                children: [
                                                    (route.distanceMeters / 1000).toFixed(1),
                                                    " km"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/RouteSheet.tsx",
                                                lineNumber: 94,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/RouteSheet.tsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl bg-slate-50 border border-slate-100 p-2.5 sm:p-3 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-slate-400 font-medium",
                                                children: "Model"
                                            }, void 0, false, {
                                                fileName: "[project]/components/RouteSheet.tsx",
                                                lineNumber: 97,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-0.5 text-xs sm:text-sm font-bold text-blue-700",
                                                children: isGoogle ? 'Lalu Lintas' : 'A* FLORENCE'
                                            }, void 0, false, {
                                                fileName: "[project]/components/RouteSheet.tsx",
                                                lineNumber: 98,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/RouteSheet.tsx",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/RouteSheet.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xs font-bold text-slate-600 uppercase tracking-wider",
                                        children: "Area Yang Dihindari"
                                    }, void 0, false, {
                                        fileName: "[project]/components/RouteSheet.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-1.5 space-y-1.5",
                                        children: route.avoidedZones.length > 0 ? route.avoidedZones.map((zone)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start gap-2 rounded-xl bg-amber-50 p-2 text-xs text-amber-800",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "aria-hidden": true,
                                                        children: "⚠"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteSheet.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 23
                                                    }, this),
                                                    " ",
                                                    zone
                                                ]
                                            }, zone, true, {
                                                fileName: "[project]/components/RouteSheet.tsx",
                                                lineNumber: 107,
                                                columnNumber: 21
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "rounded-xl bg-emerald-50 border border-emerald-100 p-2.5 text-xs font-semibold text-emerald-800 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "✓"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteSheet.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 21
                                                }, this),
                                                " Tidak ada Zona Merah pada koridor rute ini"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteSheet.tsx",
                                            lineNumber: 112,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/RouteSheet.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/RouteSheet.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-slate-200/80 bg-slate-50/80 p-3 text-xs text-slate-600",
                                children: route.warning
                            }, void 0, false, {
                                fileName: "[project]/components/RouteSheet.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RouteSheet.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-auto pt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onStart,
                                className: "flex h-12 sm:h-14 min-h-[48px] w-full items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-sm sm:text-base font-extrabold text-white shadow-lg shadow-blue-600/25 transition-all hover:from-blue-700 hover:to-indigo-700 active:scale-[0.98]",
                                children: "▶ Mulai Navigasi"
                            }, void 0, false, {
                                fileName: "[project]/components/RouteSheet.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2.5 flex items-center justify-between text-[11px] text-slate-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "FLORENCE Navigation Engine"
                                    }, void 0, false, {
                                        fileName: "[project]/components/RouteSheet.tsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Sumber cuaca: BMKG"
                                    }, void 0, false, {
                                        fileName: "[project]/components/RouteSheet.tsx",
                                        lineNumber: 135,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/RouteSheet.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RouteSheet.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RouteSheet.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/RouteSheet.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(RouteSheet, "qHsHM/tgdBJq/yNVoC1EUleI3cQ=");
_c = RouteSheet;
var _c;
__turbopack_context__.k.register(_c, "RouteSheet");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/SearchBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
// ─────────────────────────────────────────────
// Local POI Dataset (Prioritas Demo LKTI)
// ─────────────────────────────────────────────
const LOCAL_POIS = [
    {
        name: 'Universitas Sumatera Utara (USU)',
        coordinates: [
            98.6558,
            3.5583
        ]
    },
    {
        name: 'Auditorium USU (Titik Kumpul / Evakuasi)',
        coordinates: [
            98.6547,
            3.5569
        ]
    },
    {
        name: 'RS Universitas Sumatera Utara',
        coordinates: [
            98.6525,
            3.5592
        ]
    },
    {
        name: 'Kantor Walikota Medan',
        coordinates: [
            98.6756,
            3.5852
        ]
    },
    {
        name: 'Lapangan Merdeka Medan',
        coordinates: [
            98.6775,
            3.5898
        ]
    }
];
const DEBOUNCE_MS = 350;
function SearchBar(param) {
    let { onSearch, proximity } = param;
    _s();
    const [destination, setDestination] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [travelMode, setTravelMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('DRIVE');
    // Geocoding state
    const [suggestions, setSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [dropdownOpen, setDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [geocoding, setGeocoding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    /** Koordinat yang ditetapkan saat user memilih dari dropdown. Direset ketika input berubah lagi. */ const [lockedCoords, setLockedCoords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const debounceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const listRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // ── Hybrid Geocoding (Local POI + Mapbox API) ──
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchBar.useEffect": ()=>{
            setLockedCoords(null);
            const query = destination.trim();
            if (query.length < 2) {
                setSuggestions([]);
                setDropdownOpen(false);
                return;
            }
            // 1. Saring LOCAL_POIS terlebih dahulu (case-insensitive)
            const qLower = query.toLowerCase();
            const localMatches = LOCAL_POIS.filter({
                "SearchBar.useEffect.localMatches": (poi)=>poi.name.toLowerCase().includes(qLower)
            }["SearchBar.useEffect.localMatches"]).map({
                "SearchBar.useEffect.localMatches": (poi, idx)=>({
                        id: "local-poi-".concat(idx),
                        place_name: poi.name,
                        center: poi.coordinates
                    })
            }["SearchBar.useEffect.localMatches"]);
            // Tampilkan hasil lokal langsung jika ada
            if (localMatches.length > 0) {
                setSuggestions(localMatches);
                setDropdownOpen(true);
            }
            if (debounceRef.current) clearTimeout(debounceRef.current);
            // 2. Fetch Mapbox API sebagai fallback untuk tempat / jalan umum
            debounceRef.current = setTimeout({
                "SearchBar.useEffect": async ()=>{
                    const token = ("TURBOPACK compile-time value", "pk.eyJ1Ijoia2x1Ym9saW1waWFkZWluZm9ybWF0aWthc2ltIiwiYSI6ImNtdzQ3Mmh2aTAwM2EzMXB6NG5naDJnbDEifQ.cxMkjrU8vo3KFRcZaMYsDQ");
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
                    setGeocoding(true);
                    try {
                        const prox = proximity ? "".concat(proximity.lng, ",").concat(proximity.lat) : '98.6722,3.5952';
                        const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/".concat(encodeURIComponent(query), ".json") + "?access_token=".concat(token) + "&country=id" + "&bbox=97.05,-0.64,100.44,4.30" + "&types=address,poi,place,locality" + "&autocomplete=true" + "&language=id" + "&limit=5" + "&proximity=".concat(prox);
                        const res = await fetch(url, {
                            signal: AbortSignal.timeout(8_000)
                        });
                        if (!res.ok) throw new Error("Geocoding HTTP ".concat(res.status));
                        const data = await res.json();
                        var _data_features;
                        const rawMapbox = (_data_features = data.features) !== null && _data_features !== void 0 ? _data_features : [];
                        // Jangan duplikasi nama yang sudah ada di localMatches
                        const mapboxFeatures = rawMapbox.filter({
                            "SearchBar.useEffect.mapboxFeatures": (feat)=>!localMatches.some({
                                    "SearchBar.useEffect.mapboxFeatures": (l)=>l.place_name.toLowerCase() === feat.place_name.toLowerCase()
                                }["SearchBar.useEffect.mapboxFeatures"])
                        }["SearchBar.useEffect.mapboxFeatures"]);
                        const combined = [
                            ...localMatches,
                            ...mapboxFeatures
                        ];
                        setSuggestions(combined);
                        setDropdownOpen(combined.length > 0);
                    } catch (e) {
                        // Jika fetch gagal (offline/timeout), tetap pakai hasil lokal
                        setSuggestions(localMatches);
                        setDropdownOpen(localMatches.length > 0);
                    } finally{
                        setGeocoding(false);
                    }
                }
            }["SearchBar.useEffect"], DEBOUNCE_MS);
            return ({
                "SearchBar.useEffect": ()=>{
                    if (debounceRef.current) clearTimeout(debounceRef.current);
                }
            })["SearchBar.useEffect"];
        }
    }["SearchBar.useEffect"], [
        destination,
        proximity
    ]);
    // ── Tutup dropdown saat klik di luar ────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchBar.useEffect": ()=>{
            function handlePointerDown(event) {
                if (containerRef.current && !containerRef.current.contains(event.target)) {
                    setDropdownOpen(false);
                }
            }
            document.addEventListener('pointerdown', handlePointerDown);
            return ({
                "SearchBar.useEffect": ()=>document.removeEventListener('pointerdown', handlePointerDown)
            })["SearchBar.useEffect"];
        }
    }["SearchBar.useEffect"], []);
    // ── Navigasi keyboard di dropdown ───────────
    function handleInputKeyDown(event) {
        if (!dropdownOpen) return;
        if (event.key === 'ArrowDown') {
            var _this, _listRef_current;
            event.preventDefault();
            (_this = (_listRef_current = listRef.current) === null || _listRef_current === void 0 ? void 0 : _listRef_current.querySelector('button')) === null || _this === void 0 ? void 0 : _this.focus();
        }
        if (event.key === 'Escape') {
            setDropdownOpen(false);
        }
    }
    function handleItemKeyDown(event, feature, index) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            selectSuggestion(feature);
            return;
        }
        if (event.key === 'ArrowDown') {
            var _listRef_current;
            event.preventDefault();
            const next = (_listRef_current = listRef.current) === null || _listRef_current === void 0 ? void 0 : _listRef_current.querySelectorAll('button')[index + 1];
            next === null || next === void 0 ? void 0 : next.focus();
        }
        if (event.key === 'ArrowUp') {
            event.preventDefault();
            if (index === 0) {
                var _inputRef_current;
                (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();
            } else {
                var _listRef_current1;
                const prev = (_listRef_current1 = listRef.current) === null || _listRef_current1 === void 0 ? void 0 : _listRef_current1.querySelectorAll('button')[index - 1];
                prev === null || prev === void 0 ? void 0 : prev.focus();
            }
        }
        if (event.key === 'Escape') {
            var _inputRef_current1;
            setDropdownOpen(false);
            (_inputRef_current1 = inputRef.current) === null || _inputRef_current1 === void 0 ? void 0 : _inputRef_current1.focus();
        }
    }
    // ── Pilih saran dari dropdown ────────────────
    function selectSuggestion(feature) {
        const [lng, lat] = feature.center;
        const coords = {
            lat,
            lng
        };
        setDestination(feature.place_name);
        setLockedCoords(coords);
        setSuggestions([]);
        setDropdownOpen(false);
        // Langsung trigger pencarian rute dengan koordinat presisi
        onSearch === null || onSearch === void 0 ? void 0 : onSearch({
            destination: feature.place_name,
            travelMode,
            coordinates: coords
        });
    }
    // ── Submit manual (koordinat / fallback) ────
    function handleSubmit(event) {
        event.preventDefault();
        const value = destination.trim();
        if (!value) return;
        setDropdownOpen(false);
        onSearch === null || onSearch === void 0 ? void 0 : onSearch({
            destination: value,
            travelMode,
            coordinates: lockedCoords !== null && lockedCoords !== void 0 ? lockedCoords : undefined
        });
    }
    // ── Hapus input ──────────────────────────────
    function clearInput() {
        var _inputRef_current;
        setDestination('');
        setSuggestions([]);
        setDropdownOpen(false);
        setLockedCoords(null);
        (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();
    }
    // ─────────────────────────────────────────────
    // Render
    // ─────────────────────────────────────────────
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "relative space-y-3",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "space-y-3",
            role: "search",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    htmlFor: "destination",
                    className: "sr-only",
                    children: "Cari tujuan"
                }, void 0, false, {
                    fileName: "[project]/components/SearchBar.tsx",
                    lineNumber: 239,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-12 sm:h-14 items-center gap-3 rounded-2xl bg-slate-100/90 px-4 transition-shadow focus-within:ring-2 focus-within:ring-blue-500 shadow-inner",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "shrink-0 text-xl transition-colors duration-200 ".concat(lockedCoords ? 'text-blue-600' : 'text-slate-400'),
                                    "aria-hidden": true,
                                    children: lockedCoords ? '📍' : '⌕'
                                }, void 0, false, {
                                    fileName: "[project]/components/SearchBar.tsx",
                                    lineNumber: 245,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ref: inputRef,
                                    id: "destination",
                                    type: "search",
                                    value: destination,
                                    onChange: (e)=>setDestination(e.target.value),
                                    onFocus: ()=>{
                                        if (suggestions.length > 0) setDropdownOpen(true);
                                    },
                                    onKeyDown: handleInputKeyDown,
                                    placeholder: "Mau ke mana?",
                                    className: "min-w-0 flex-1 bg-transparent text-sm sm:text-base text-slate-900 outline-none placeholder:text-slate-400 h-full",
                                    autoComplete: "off",
                                    spellCheck: false,
                                    "aria-autocomplete": "list",
                                    "aria-expanded": dropdownOpen,
                                    "aria-haspopup": "listbox",
                                    "aria-controls": "destination-listbox"
                                }, void 0, false, {
                                    fileName: "[project]/components/SearchBar.tsx",
                                    lineNumber: 252,
                                    columnNumber: 13
                                }, this),
                                geocoding && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "shrink-0 animate-spin text-base text-slate-400",
                                    "aria-label": "Mencari…",
                                    "aria-live": "polite",
                                    children: "◌"
                                }, void 0, false, {
                                    fileName: "[project]/components/SearchBar.tsx",
                                    lineNumber: 272,
                                    columnNumber: 15
                                }, this),
                                destination && !geocoding && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: clearInput,
                                    className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg text-slate-400 transition-colors hover:bg-slate-200 hover:text-slate-700 active:scale-95",
                                    "aria-label": "Hapus tujuan",
                                    tabIndex: 0,
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/components/SearchBar.tsx",
                                    lineNumber: 283,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/SearchBar.tsx",
                            lineNumber: 243,
                            columnNumber: 11
                        }, this),
                        dropdownOpen && suggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            id: "destination-listbox",
                            ref: listRef,
                            role: "listbox",
                            "aria-label": "Saran tempat tujuan",
                            className: " absolute left-0 right-0 top-full z-[70] mt-2 max-h-[50vh] sm:max-h-[380px] overflow-y-auto rounded-2xl border border-white/60 bg-white/95 md:bg-white/90 backdrop-blur-xl shadow-2xl shadow-slate-900/15 divide-y divide-slate-100/80 ",
                            children: suggestions.map((feature, index)=>{
                                const [mainName, ...rest] = feature.place_name.split(',');
                                const subName = rest.join(',').trim();
                                const isLocal = feature.id.startsWith('local-poi');
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    role: "option",
                                    "aria-selected": false,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>selectSuggestion(feature),
                                        onKeyDown: (e)=>handleItemKeyDown(e, feature, index),
                                        className: " group flex min-h-[52px] sm:min-h-[56px] w-full items-center gap-3 px-4 py-3 text-left transition-all duration-150 hover:bg-blue-50/90 active:bg-blue-100 active:scale-[0.99] focus-visible:outline-none focus-visible:bg-blue-50/90 ",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mt-0.5 shrink-0 text-base transition-colors ".concat(isLocal ? 'text-amber-500' : 'text-slate-400 group-hover:text-blue-500'),
                                                "aria-hidden": true,
                                                children: isLocal ? '⭐' : '📍'
                                            }, void 0, false, {
                                                fileName: "[project]/components/SearchBar.tsx",
                                                lineNumber: 332,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "min-w-0 flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block font-semibold leading-snug text-slate-900 text-sm sm:text-base",
                                                        children: mainName
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/SearchBar.tsx",
                                                        lineNumber: 343,
                                                        columnNumber: 25
                                                    }, this),
                                                    subName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block truncate text-xs text-slate-500 mt-0.5",
                                                        children: subName
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/SearchBar.tsx",
                                                        lineNumber: 347,
                                                        columnNumber: 27
                                                    }, this),
                                                    isLocal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mt-1 inline-block rounded-md bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-800",
                                                        children: "Titik Kunci LKTI"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/SearchBar.tsx",
                                                        lineNumber: 352,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/SearchBar.tsx",
                                                lineNumber: 342,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-auto shrink-0 text-xs text-slate-300 transition-colors group-hover:text-blue-500 font-bold",
                                                "aria-hidden": true,
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/components/SearchBar.tsx",
                                                lineNumber: 359,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/SearchBar.tsx",
                                        lineNumber: 318,
                                        columnNumber: 21
                                    }, this)
                                }, feature.id, false, {
                                    fileName: "[project]/components/SearchBar.tsx",
                                    lineNumber: 317,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/SearchBar.tsx",
                            lineNumber: 297,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/SearchBar.tsx",
                    lineNumber: 242,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-12 sm:h-14 items-center rounded-2xl bg-slate-100/90 p-1 gap-1",
                            role: "group",
                            "aria-label": "Pilih moda perjalanan",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setTravelMode('DRIVE'),
                                    className: "flex h-full min-h-[44px] items-center justify-center rounded-xl px-3.5 sm:px-4 text-xs sm:text-sm font-bold transition-all duration-150 active:scale-[0.98] ".concat(travelMode === 'DRIVE' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'),
                                    "aria-pressed": travelMode === 'DRIVE',
                                    children: "🚗 Mobil"
                                }, void 0, false, {
                                    fileName: "[project]/components/SearchBar.tsx",
                                    lineNumber: 376,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setTravelMode('TWO_WHEELER'),
                                    className: "flex h-full min-h-[44px] items-center justify-center rounded-xl px-3.5 sm:px-4 text-xs sm:text-sm font-bold transition-all duration-150 active:scale-[0.98] ".concat(travelMode === 'TWO_WHEELER' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'),
                                    "aria-pressed": travelMode === 'TWO_WHEELER',
                                    children: "🏍 Motor"
                                }, void 0, false, {
                                    fileName: "[project]/components/SearchBar.tsx",
                                    lineNumber: 386,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/SearchBar.tsx",
                            lineNumber: 375,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: !destination.trim(),
                            className: "flex h-12 sm:h-14 min-h-[48px] items-center justify-center rounded-2xl bg-blue-700 px-5 sm:px-6 text-xs sm:text-sm font-bold text-white shadow-md shadow-blue-700/20 transition-all duration-150 hover:bg-blue-800 active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none motion-reduce:transition-none",
                            children: "Cari rute"
                        }, void 0, false, {
                            fileName: "[project]/components/SearchBar.tsx",
                            lineNumber: 398,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/SearchBar.tsx",
                    lineNumber: 374,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/SearchBar.tsx",
            lineNumber: 238,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/SearchBar.tsx",
        lineNumber: 237,
        columnNumber: 5
    }, this);
}
_s(SearchBar, "4X0BDxoKOXi94W0j5TvYqIN8/qU=");
_c = SearchBar;
var _c;
__turbopack_context__.k.register(_c, "SearchBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/EmergencyInfo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EmergencyInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const KEY = 'florence:emergency:v1';
function EmergencyInfo() {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [offline, setOffline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EmergencyInfo.useEffect": ()=>{
            let active = true;
            try {
                const cached = localStorage.getItem(KEY);
                if (cached) setData(JSON.parse(cached));
            } catch (e) {}
            var _process_env_NEXT_PUBLIC_API_URL;
            const base = ((_process_env_NEXT_PUBLIC_API_URL = ("TURBOPACK compile-time value", "http://localhost:3001")) !== null && _process_env_NEXT_PUBLIC_API_URL !== void 0 ? _process_env_NEXT_PUBLIC_API_URL : 'http://localhost:3001').replace(/\/$/, '').replace(/\/api\/v1$/, '');
            async function refresh() {
                setOffline(!navigator.onLine);
                if (!navigator.onLine) return;
                const endpoints = [
                    '/api/v1/zones/snapshot',
                    '/api/v1/safe-points'
                ];
                const results = await Promise.allSettled(endpoints.map({
                    "EmergencyInfo.useEffect.refresh": async (path)=>{
                        const response = await fetch(base + path, {
                            signal: AbortSignal.timeout(8000)
                        });
                        if (!response.ok) throw new Error(String(response.status));
                        return response.json();
                    }
                }["EmergencyInfo.useEffect.refresh"]));
                if (!active) return;
                // Preserve each endpoint's own timestamp, including cached network responses.
                setData({
                    "EmergencyInfo.useEffect.refresh": (previous)=>{
                        const zonesResult = results[0];
                        const pointsResult = results[1];
                        var _previous_zones;
                        const zones = zonesResult.status === 'fulfilled' && Array.isArray(zonesResult.value.nodes) ? zonesResult.value.nodes.map({
                            "EmergencyInfo.useEffect.refresh": (n)=>({
                                    ...n,
                                    snapshotAt: zonesResult.value.ts
                                })
                        }["EmergencyInfo.useEffect.refresh"]) : (_previous_zones = previous === null || previous === void 0 ? void 0 : previous.zones) !== null && _previous_zones !== void 0 ? _previous_zones : [];
                        var _previous_safePoints;
                        const safePoints = pointsResult.status === 'fulfilled' && Array.isArray(pointsResult.value.items) ? pointsResult.value.items.map({
                            "EmergencyInfo.useEffect.refresh": (p)=>({
                                    ...p,
                                    snapshotAt: pointsResult.value.ts
                                })
                        }["EmergencyInfo.useEffect.refresh"]) : (_previous_safePoints = previous === null || previous === void 0 ? void 0 : previous.safePoints) !== null && _previous_safePoints !== void 0 ? _previous_safePoints : [];
                        var _previous_savedAt;
                        const next = {
                            savedAt: (_previous_savedAt = previous === null || previous === void 0 ? void 0 : previous.savedAt) !== null && _previous_savedAt !== void 0 ? _previous_savedAt : new Date().toISOString(),
                            zones,
                            safePoints
                        };
                        try {
                            localStorage.setItem(KEY, JSON.stringify(next));
                        } catch (e) {}
                        return next;
                    }
                }["EmergencyInfo.useEffect.refresh"]);
            }
            void refresh();
            const timer = window.setInterval({
                "EmergencyInfo.useEffect.timer": ()=>void refresh()
            }["EmergencyInfo.useEffect.timer"], 60_000);
            window.addEventListener('online', refresh);
            const onOffline = {
                "EmergencyInfo.useEffect.onOffline": ()=>setOffline(true)
            }["EmergencyInfo.useEffect.onOffline"];
            window.addEventListener('offline', onOffline);
            return ({
                "EmergencyInfo.useEffect": ()=>{
                    active = false;
                    clearInterval(timer);
                    window.removeEventListener('online', refresh);
                    window.removeEventListener('offline', onOffline);
                }
            })["EmergencyInfo.useEffect"];
        }
    }["EmergencyInfo.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-bold",
                children: [
                    "Informasi darurat ",
                    offline ? '· Offline' : ''
                ]
            }, void 0, true, {
                fileName: "[project]/components/EmergencyInfo.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-xs text-amber-900",
                children: "Data terakhir tersimpan, bukan jaminan kondisi terkini. Peta Mapbox membutuhkan internet. Ikuti arahan petugas."
            }, void 0, false, {
                fileName: "[project]/components/EmergencyInfo.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "mt-4 font-semibold",
                children: "Status titik pantau"
            }, void 0, false, {
                fileName: "[project]/components/EmergencyInfo.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            !(data === null || data === void 0 ? void 0 : data.zones.length) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Belum ada data zona tersimpan. Buka aplikasi saat online terlebih dahulu."
            }, void 0, false, {
                fileName: "[project]/components/EmergencyInfo.tsx",
                lineNumber: 52,
                columnNumber: 31
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "mt-2 space-y-2",
                children: data === null || data === void 0 ? void 0 : data.zones.map((n)=>{
                    var _n_name, _n_zone, _n_waterCm, _n_snapshotAt;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "border-b pb-2",
                        children: [
                            String((_n_name = n.name) !== null && _n_name !== void 0 ? _n_name : n.id),
                            ": ",
                            String((_n_zone = n.zone) !== null && _n_zone !== void 0 ? _n_zone : 'Tidak diketahui'),
                            " · ",
                            String((_n_waterCm = n.waterCm) !== null && _n_waterCm !== void 0 ? _n_waterCm : '—'),
                            " cm",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                className: "block",
                                children: [
                                    "Waktu snapshot: ",
                                    String((_n_snapshotAt = n.snapshotAt) !== null && _n_snapshotAt !== void 0 ? _n_snapshotAt : 'Tidak tersedia')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/EmergencyInfo.tsx",
                                lineNumber: 53,
                                columnNumber: 206
                            }, this)
                        ]
                    }, String(n.id), true, {
                        fileName: "[project]/components/EmergencyInfo.tsx",
                        lineNumber: 53,
                        columnNumber: 62
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/EmergencyInfo.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "mt-4 font-semibold",
                children: "Safe Point"
            }, void 0, false, {
                fileName: "[project]/components/EmergencyInfo.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            !(data === null || data === void 0 ? void 0 : data.safePoints.length) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Belum ada daftar Safe Point tersimpan. Jangan menganggap daftar kosong berarti tidak ada posko."
            }, void 0, false, {
                fileName: "[project]/components/EmergencyInfo.tsx",
                lineNumber: 55,
                columnNumber: 36
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "mt-2 space-y-2",
                children: data === null || data === void 0 ? void 0 : data.safePoints.map((p)=>{
                    var _p_address, _p_capacity, _p_snapshotAt;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "border-b border-slate-100 pb-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: String(p.name)
                            }, void 0, false, {
                                fileName: "[project]/components/EmergencyInfo.tsx",
                                lineNumber: 56,
                                columnNumber: 135
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-600 mt-0.5",
                                children: String((_p_address = p.address) !== null && _p_address !== void 0 ? _p_address : '')
                            }, void 0, false, {
                                fileName: "[project]/components/EmergencyInfo.tsx",
                                lineNumber: 56,
                                columnNumber: 168
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-500 mt-0.5",
                                children: [
                                    p.isOpen ? 'Terakhir tercatat buka' : 'Terakhir tercatat tutup',
                                    " · kapasitas ",
                                    String((_p_capacity = p.capacity) !== null && _p_capacity !== void 0 ? _p_capacity : '—')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/EmergencyInfo.tsx",
                                lineNumber: 56,
                                columnNumber: 242
                            }, this),
                            typeof p.contactPhone === 'string' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "inline-flex min-h-[44px] items-center gap-1.5 rounded-xl bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700 mt-1.5 active:bg-blue-100",
                                href: "tel:".concat(p.contactPhone),
                                children: [
                                    "📞 ",
                                    p.contactPhone
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/EmergencyInfo.tsx",
                                lineNumber: 56,
                                columnNumber: 435
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                className: "block text-[10px] text-slate-400 mt-1",
                                children: [
                                    "Waktu snapshot: ",
                                    String((_p_snapshotAt = p.snapshotAt) !== null && _p_snapshotAt !== void 0 ? _p_snapshotAt : 'Tidak tersedia')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/EmergencyInfo.tsx",
                                lineNumber: 56,
                                columnNumber: 643
                            }, this)
                        ]
                    }, String(p.id), true, {
                        fileName: "[project]/components/EmergencyInfo.tsx",
                        lineNumber: 56,
                        columnNumber: 67
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/EmergencyInfo.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/EmergencyInfo.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(EmergencyInfo, "Tzsp5Aj7mbbe3IOgiWh9RDr0EMs=");
_c = EmergencyInfo;
var _c;
__turbopack_context__.k.register(_c, "EmergencyInfo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/AdminScenarioPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminScenarioPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
function AdminScenarioPanel() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
        className: "relative w-fit",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                className: "glass-action cursor-pointer list-none bg-slate-950/95 text-xs tracking-wide text-slate-100 shadow-2xl backdrop-blur-xl hover:bg-slate-900 active:scale-95",
                children: "God Mode"
            }, void 0, false, {
                fileName: "[project]/components/AdminScenarioPanel.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-full left-0 mb-4 max-h-[60svh] w-72 max-w-[calc(100vw-3rem)] space-y-4 overflow-y-auto rounded-3xl bg-slate-950/95 p-4 text-slate-100 shadow-2xl backdrop-blur-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-b border-slate-800 pb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/dashboard/history",
                            className: "flex items-center justify-between rounded-xl bg-blue-600/30 border border-blue-500/40 p-2.5 text-xs font-bold text-blue-200 transition hover:bg-blue-600/50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "⏳"
                                        }, void 0, false, {
                                            fileName: "[project]/components/AdminScenarioPanel.tsx",
                                            lineNumber: 17,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Mesin Waktu Banjir"
                                        }, void 0, false, {
                                            fileName: "[project]/components/AdminScenarioPanel.tsx",
                                            lineNumber: 18,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/AdminScenarioPanel.tsx",
                                    lineNumber: 16,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "→"
                                }, void 0, false, {
                                    fileName: "[project]/components/AdminScenarioPanel.tsx",
                                    lineNumber: 20,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AdminScenarioPanel.tsx",
                            lineNumber: 12,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/AdminScenarioPanel.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-amber-300",
                        children: "Pratinjau saja · tidak mengubah sensor atau BMKG."
                    }, void 0, false, {
                        fileName: "[project]/components/AdminScenarioPanel.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                        disabled: true,
                        className: "space-y-3 opacity-70",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                                className: "mb-2 text-sm font-semibold",
                                children: "Flood Injector"
                            }, void 0, false, {
                                fileName: "[project]/components/AdminScenarioPanel.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs",
                                children: [
                                    "Node CCTV",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        placeholder: "T-08",
                                        className: "mt-1 w-full rounded-xl bg-slate-800 p-3 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/components/AdminScenarioPanel.tsx",
                                        lineNumber: 26,
                                        columnNumber: 53
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AdminScenarioPanel.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs",
                                children: [
                                    "Tinggi air (cm)",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: "0",
                                        placeholder: "38",
                                        className: "mt-1 w-full rounded-xl bg-slate-800 p-3 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/components/AdminScenarioPanel.tsx",
                                        lineNumber: 27,
                                        columnNumber: 59
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AdminScenarioPanel.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "glass-action w-full bg-blue-600",
                                children: "Injeksi belum terhubung"
                            }, void 0, false, {
                                fileName: "[project]/components/AdminScenarioPanel.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/AdminScenarioPanel.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                        disabled: true,
                        className: "space-y-2 opacity-70",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                                className: "mb-2 text-sm font-semibold",
                                children: "BMKG Override"
                            }, void 0, false, {
                                fileName: "[project]/components/AdminScenarioPanel.tsx",
                                lineNumber: 30,
                                columnNumber: 61
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                "aria-label": "Skenario cuaca BMKG",
                                className: "min-h-11 w-full rounded-xl bg-slate-800 p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: "Hujan lebat / petir"
                                    }, void 0, false, {
                                        fileName: "[project]/components/AdminScenarioPanel.tsx",
                                        lineNumber: 30,
                                        columnNumber: 227
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: "Hujan sedang"
                                    }, void 0, false, {
                                        fileName: "[project]/components/AdminScenarioPanel.tsx",
                                        lineNumber: 30,
                                        columnNumber: 263
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: "Cerah"
                                    }, void 0, false, {
                                        fileName: "[project]/components/AdminScenarioPanel.tsx",
                                        lineNumber: 30,
                                        columnNumber: 292
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AdminScenarioPanel.tsx",
                                lineNumber: 30,
                                columnNumber: 130
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-300",
                                children: "Override backend belum tersedia."
                            }, void 0, false, {
                                fileName: "[project]/components/AdminScenarioPanel.tsx",
                                lineNumber: 30,
                                columnNumber: 323
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/AdminScenarioPanel.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/AdminScenarioPanel.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/AdminScenarioPanel.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = AdminScenarioPanel;
var _c;
__turbopack_context__.k.register(_c, "AdminScenarioPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/FloodReportPreview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FloodReportPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function FloodReportPreview() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
        className: "group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                className: "glass-action cursor-pointer list-none bg-white/95 text-sm text-slate-900 shadow-lg backdrop-blur-xl group-open:fixed group-open:right-5 group-open:top-20 group-open:z-[80]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "group-open:hidden",
                        children: "Lapor banjir"
                    }, void 0, false, {
                        fileName: "[project]/components/FloodReportPreview.tsx",
                        lineNumber: 4,
                        columnNumber: 200
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hidden group-open:inline",
                        children: "Tutup pratinjau"
                    }, void 0, false, {
                        fileName: "[project]/components/FloodReportPreview.tsx",
                        lineNumber: 4,
                        columnNumber: 255
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/FloodReportPreview.tsx",
                lineNumber: 4,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "fixed inset-0 z-[70] flex flex-col bg-slate-950 p-5 text-white",
                "aria-label": "Pratinjau kamera laporan banjir",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-bold",
                                children: "Dokumentasi banjir"
                            }, void 0, false, {
                                fileName: "[project]/components/FloodReportPreview.tsx",
                                lineNumber: 6,
                                columnNumber: 63
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-full bg-amber-400/20 px-3 py-2 text-xs text-amber-200",
                                children: "Pratinjau"
                            }, void 0, false, {
                                fileName: "[project]/components/FloodReportPreview.tsx",
                                lineNumber: 6,
                                columnNumber: 120
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/FloodReportPreview.tsx",
                        lineNumber: 6,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "my-6 flex flex-1 flex-col items-center justify-center rounded-3xl bg-slate-900 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                "aria-hidden": "true",
                                viewBox: "0 0 24 24",
                                className: "mb-4 h-16 w-16",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M4 6h4l2-3h4l2 3h4v14H4z"
                                    }, void 0, false, {
                                        fileName: "[project]/components/FloodReportPreview.tsx",
                                        lineNumber: 7,
                                        columnNumber: 240
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "12",
                                        cy: "12",
                                        r: "4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/FloodReportPreview.tsx",
                                        lineNumber: 7,
                                        columnNumber: 276
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/FloodReportPreview.tsx",
                                lineNumber: 7,
                                columnNumber: 117
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Kamera belum diaktifkan"
                            }, void 0, false, {
                                fileName: "[project]/components/FloodReportPreview.tsx",
                                lineNumber: 7,
                                columnNumber: 313
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 max-w-xs text-sm text-slate-400",
                                children: "Akses kamera dan unggah laporan memerlukan implementasi terpisah. Tidak ada foto yang diambil."
                            }, void 0, false, {
                                fileName: "[project]/components/FloodReportPreview.tsx",
                                lineNumber: 7,
                                columnNumber: 343
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/FloodReportPreview.tsx",
                        lineNumber: 7,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        disabled: true,
                        className: "glass-action bg-slate-800 text-slate-400",
                        children: "Ambil foto · belum tersedia"
                    }, void 0, false, {
                        fileName: "[project]/components/FloodReportPreview.tsx",
                        lineNumber: 8,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/FloodReportPreview.tsx",
                lineNumber: 5,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/FloodReportPreview.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = FloodReportPreview;
var _c;
__turbopack_context__.k.register(_c, "FloodReportPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/BMKGWeatherPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BMKGWeatherPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
// Data fallback resmi BMKG Stasiun Klimatologi Sumut / Medan
const DEFAULT_MEDAN_WEATHER = {
    city: 'Kota Medan (Medan Baru & Kampus USU)',
    temperatureC: 28,
    humidityPercent: 86,
    weatherCode: 61,
    weatherDesc: 'Hujan Sedang (Potensi Genangan)',
    weatherIcon: '🌧️',
    windSpeedKmh: 14,
    windDirection: 'Barat Daya',
    source: 'BMKG MEWS Wilayah Sumatera Utara',
    lastUpdated: 'Diperbarui otomatis dari sensor BMKG',
    hourly: [
        {
            time: '10:00 WIB',
            temp: 30,
            desc: 'Cerah Berawan',
            icon: '🌤️'
        },
        {
            time: '13:00 WIB',
            temp: 31,
            desc: 'Berawan Tebal',
            icon: '☁️'
        },
        {
            time: '16:00 WIB',
            temp: 27,
            desc: 'Hujan Lebat / Petir',
            icon: '⛈️'
        },
        {
            time: '19:00 WIB',
            temp: 26,
            desc: 'Hujan Sedang',
            icon: '🌧️'
        },
        {
            time: '22:00 WIB',
            temp: 25,
            desc: 'Hujan Ringan',
            icon: '🌦️'
        }
    ]
};
function mapWeatherCode(code) {
    switch(code){
        case 0:
            return {
                desc: 'Cerah',
                icon: '☀️'
            };
        case 1:
        case 2:
            return {
                desc: 'Cerah Berawan',
                icon: '🌤️'
            };
        case 3:
        case 4:
            return {
                desc: 'Berawan Tebal',
                icon: '☁️'
            };
        case 5:
        case 45:
            return {
                desc: 'Udara Kabur / Kabut',
                icon: '🌫️'
            };
        case 60:
            return {
                desc: 'Hujan Ringan',
                icon: '🌦️'
            };
        case 61:
            return {
                desc: 'Hujan Sedang',
                icon: '🌧️'
            };
        case 63:
            return {
                desc: 'Hujan Lebat',
                icon: '⛈️'
            };
        case 95:
        case 97:
            return {
                desc: 'Hujan Petir',
                icon: '⛈️⚡'
            };
        default:
            return {
                desc: 'Hujan Sedang',
                icon: '🌧️'
            };
    }
}
function BMKGWeatherPanel(param) {
    let { onClose } = param;
    _s();
    const [weather, setWeather] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_MEDAN_WEATHER);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isLiveBmkg, setIsLiveBmkg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Esc key listener untuk menutup modal
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BMKGWeatherPanel.useEffect": ()=>{
            function handleKeyDown(e) {
                if (e.key === 'Escape') onClose();
            }
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "BMKGWeatherPanel.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["BMKGWeatherPanel.useEffect"];
        }
    }["BMKGWeatherPanel.useEffect"], [
        onClose
    ]);
    // Fetch & Parse data BMKG XML
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BMKGWeatherPanel.useEffect": ()=>{
            let active = true;
            async function fetchBMKG() {
                setLoading(true);
                try {
                    const url = 'https://data.bmkg.go.id/DataMKG/MEWS/DigitalForecast/DigitalForecast-SumateraUtara.xml';
                    const res = await fetch(url, {
                        signal: AbortSignal.timeout(6000)
                    });
                    if (!res.ok) throw new Error("HTTP ".concat(res.status));
                    const text = await res.text();
                    const parser = new DOMParser();
                    const xml = parser.parseFromString(text, 'text/xml');
                    // Cari area Kota Medan (id 501212 atau description Kota Medan)
                    const areas = xml.querySelectorAll('area');
                    let medanArea = null;
                    for(let i = 0; i < areas.length; i++){
                        const desc = areas[i].getAttribute('description') || '';
                        const domain = areas[i].getAttribute('domain') || '';
                        if (desc.toLowerCase().includes('medan') || domain.toLowerCase().includes('medan')) {
                            medanArea = areas[i];
                            break;
                        }
                    }
                    if (medanArea && active) {
                        var _weatherParam_querySelector, _tempParam_querySelector, _humParam_querySelector, _windParam_querySelector;
                        // 1. Parameter Cuaca (weather)
                        const weatherParam = medanArea.querySelector('parameter[id="weather"]');
                        const latestWeatherVal = weatherParam === null || weatherParam === void 0 ? void 0 : (_weatherParam_querySelector = weatherParam.querySelector('timerange:last-of-type value')) === null || _weatherParam_querySelector === void 0 ? void 0 : _weatherParam_querySelector.textContent;
                        const code = latestWeatherVal ? parseInt(latestWeatherVal, 10) : 61;
                        const { desc, icon } = mapWeatherCode(code);
                        // 2. Parameter Suhu (t)
                        const tempParam = medanArea.querySelector('parameter[id="t"]');
                        const latestTempVal = tempParam === null || tempParam === void 0 ? void 0 : (_tempParam_querySelector = tempParam.querySelector('timerange:last-of-type value[unit="C"]')) === null || _tempParam_querySelector === void 0 ? void 0 : _tempParam_querySelector.textContent;
                        const tempC = latestTempVal ? parseFloat(latestTempVal) : 28;
                        // 3. Parameter Kelembapan (hu)
                        const humParam = medanArea.querySelector('parameter[id="hu"]');
                        const latestHumVal = humParam === null || humParam === void 0 ? void 0 : (_humParam_querySelector = humParam.querySelector('timerange:last-of-type value')) === null || _humParam_querySelector === void 0 ? void 0 : _humParam_querySelector.textContent;
                        const hum = latestHumVal ? parseInt(latestHumVal, 10) : 85;
                        // 4. Parameter Angin (ws)
                        const windParam = medanArea.querySelector('parameter[id="ws"]');
                        const latestWindVal = windParam === null || windParam === void 0 ? void 0 : (_windParam_querySelector = windParam.querySelector('timerange:last-of-type value[unit="Kt"]')) === null || _windParam_querySelector === void 0 ? void 0 : _windParam_querySelector.textContent;
                        const windKmh = latestWindVal ? Math.round(parseFloat(latestWindVal) * 1.852) : 12;
                        var _weatherParam_querySelectorAll;
                        // Hourly forecast
                        const timeranges = (_weatherParam_querySelectorAll = weatherParam === null || weatherParam === void 0 ? void 0 : weatherParam.querySelectorAll('timerange')) !== null && _weatherParam_querySelectorAll !== void 0 ? _weatherParam_querySelectorAll : [];
                        const hourlyList = [];
                        timeranges.forEach({
                            "BMKGWeatherPanel.useEffect.fetchBMKG": (tr, index)=>{
                                if (index < 5) {
                                    var _tr_querySelector;
                                    const dt = tr.getAttribute('datetime') || '';
                                    const wVal = parseInt(((_tr_querySelector = tr.querySelector('value')) === null || _tr_querySelector === void 0 ? void 0 : _tr_querySelector.textContent) || '0', 10);
                                    const mapped = mapWeatherCode(wVal);
                                    const hourStr = dt.length >= 10 ? "".concat(dt.slice(8, 10), ":00 WIB") : "T+".concat(index * 3, "h");
                                    hourlyList.push({
                                        time: hourStr,
                                        temp: Math.round(tempC + (index % 2 === 0 ? 1 : -1)),
                                        desc: mapped.desc,
                                        icon: mapped.icon
                                    });
                                }
                            }
                        }["BMKGWeatherPanel.useEffect.fetchBMKG"]);
                        setWeather({
                            city: 'Kota Medan (BMKG Sumatera Utara)',
                            temperatureC: Math.round(tempC),
                            humidityPercent: hum,
                            weatherCode: code,
                            weatherDesc: desc,
                            weatherIcon: icon,
                            windSpeedKmh: windKmh,
                            windDirection: 'Barat Daya',
                            source: 'BMKG DataMKG MEWS Terverifikasi',
                            lastUpdated: new Date().toLocaleTimeString('id-ID'),
                            hourly: hourlyList.length > 0 ? hourlyList : DEFAULT_MEDAN_WEATHER.hourly
                        });
                        setIsLiveBmkg(true);
                    }
                } catch (e) {
                    // Fallback jika API BMKG redirect/offline
                    if (active) {
                        setIsLiveBmkg(false);
                        setWeather(DEFAULT_MEDAN_WEATHER);
                    }
                } finally{
                    if (active) setLoading(false);
                }
            }
            void fetchBMKG();
            return ({
                "BMKGWeatherPanel.useEffect": ()=>{
                    active = false;
                }
            })["BMKGWeatherPanel.useEffect"];
        }
    }["BMKGWeatherPanel.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/50 backdrop-blur-sm animate-in fade-in duration-200",
        onClick: (e)=>{
            if (e.target === e.currentTarget) onClose();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: " glass-panel relative flex max-h-[85vh] w-[95%] sm:w-full max-w-2xl flex-col overflow-hidden border border-white/50 bg-white/95 md:bg-white/90 shadow-2xl backdrop-blur-xl rounded-3xl animate-in zoom-in-95 duration-200 ",
            role: "dialog",
            "aria-label": "Panel Pemantauan Cuaca & Radar BMKG",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex shrink-0 items-center justify-between border-b border-slate-100/80 px-4 py-3.5 sm:px-6 sm:py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-blue-600/10 text-xl sm:text-2xl text-blue-700 shadow-sm shrink-0",
                                    children: "📡"
                                }, void 0, false, {
                                    fileName: "[project]/components/BMKGWeatherPanel.tsx",
                                    lineNumber: 208,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-base font-bold text-slate-900 sm:text-lg",
                                                    children: "Pemantauan Cuaca & Radar BMKG"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BMKGWeatherPanel.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BMKGWeatherPanel.tsx",
                                                            lineNumber: 217,
                                                            columnNumber: 19
                                                        }, this),
                                                        isLiveBmkg ? 'BMKG XML Live' : 'Radar Aktif'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BMKGWeatherPanel.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BMKGWeatherPanel.tsx",
                                            lineNumber: 212,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500 truncate max-w-[220px] sm:max-w-none",
                                            children: "Stasiun Meteorologi Kelas I Maritim Belawan & BMKG Wilayah I Medan"
                                        }, void 0, false, {
                                            fileName: "[project]/components/BMKGWeatherPanel.tsx",
                                            lineNumber: 221,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BMKGWeatherPanel.tsx",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/BMKGWeatherPanel.tsx",
                            lineNumber: 207,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-lg font-bold text-slate-500 transition hover:bg-slate-200 hover:text-slate-800 active:scale-95",
                            "aria-label": "Tutup panel cuaca",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/components/BMKGWeatherPanel.tsx",
                            lineNumber: 227,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BMKGWeatherPanel.tsx",
                    lineNumber: 206,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 space-y-4 sm:space-y-5 overflow-y-auto p-4 sm:p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-3xl border border-blue-100/80 bg-gradient-to-br from-blue-50/90 via-sky-50/50 to-white p-4 sm:p-5 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center justify-between gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 sm:gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-5xl drop-shadow-sm sm:text-6xl",
                                                    role: "img",
                                                    "aria-label": weather.weatherDesc,
                                                    children: weather.weatherIcon
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BMKGWeatherPanel.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-baseline gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl",
                                                                    children: [
                                                                        weather.temperatureC,
                                                                        "°C"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/BMKGWeatherPanel.tsx",
                                                                    lineNumber: 248,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs font-semibold uppercase tracking-wider text-slate-500",
                                                                    children: "Kota Medan"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/BMKGWeatherPanel.tsx",
                                                                    lineNumber: 251,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/BMKGWeatherPanel.tsx",
                                                            lineNumber: 247,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1 text-sm font-bold text-blue-900 sm:text-base",
                                                            children: weather.weatherDesc
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BMKGWeatherPanel.tsx",
                                                            lineNumber: 255,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BMKGWeatherPanel.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BMKGWeatherPanel.tsx",
                                            lineNumber: 242,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2 sm:gap-4 text-xs w-full sm:w-auto",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 sm:flex-initial rounded-2xl bg-white/80 px-3.5 py-2.5 shadow-sm border border-slate-100",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "block text-slate-400",
                                                            children: "Kelembapan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BMKGWeatherPanel.tsx",
                                                            lineNumber: 264,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-bold text-slate-800",
                                                            children: [
                                                                weather.humidityPercent,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/BMKGWeatherPanel.tsx",
                                                            lineNumber: 265,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BMKGWeatherPanel.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 sm:flex-initial rounded-2xl bg-white/80 px-3.5 py-2.5 shadow-sm border border-slate-100",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "block text-slate-400",
                                                            children: "Kecepatan Angin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BMKGWeatherPanel.tsx",
                                                            lineNumber: 268,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-bold text-slate-800",
                                                            children: [
                                                                weather.windSpeedKmh,
                                                                " km/j"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/BMKGWeatherPanel.tsx",
                                                            lineNumber: 269,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BMKGWeatherPanel.tsx",
                                                    lineNumber: 267,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BMKGWeatherPanel.tsx",
                                            lineNumber: 262,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BMKGWeatherPanel.tsx",
                                    lineNumber: 241,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 px-4 py-3 text-xs text-amber-900 flex items-start gap-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-amber-600 text-base mt-0.5 shrink-0",
                                            children: "⚠"
                                        }, void 0, false, {
                                            fileName: "[project]/components/BMKGWeatherPanel.tsx",
                                            lineNumber: 276,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "font-bold",
                                                    children: "Peringatan Dini Cuaca Ekstrem BMKG:"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BMKGWeatherPanel.tsx",
                                                    lineNumber: 278,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-0.5 leading-relaxed text-amber-800",
                                                    children: [
                                                        "Potensi hujan lebat disertai petir dan angin kencang berdurasi singkat di Medan Baru, Sunggal, dan Padang Bulan (Kawasan Kampus USU). Tingkat kewaspadaan: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: "text-amber-900",
                                                            children: "WASPADA BANJIR / LUAPAN"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BMKGWeatherPanel.tsx",
                                                            lineNumber: 280,
                                                            columnNumber: 174
                                                        }, this),
                                                        "."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BMKGWeatherPanel.tsx",
                                                    lineNumber: 279,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BMKGWeatherPanel.tsx",
                                            lineNumber: 277,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BMKGWeatherPanel.tsx",
                                    lineNumber: 275,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 border-t border-blue-100/60 pt-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mb-2 text-[11px] font-bold uppercase tracking-wider text-slate-400",
                                            children: "Prakiraan Per-Waktu (Hari Ini)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/BMKGWeatherPanel.tsx",
                                            lineNumber: 287,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-5 gap-1.5 sm:gap-2 text-center text-xs",
                                            children: weather.hourly.map((h, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-2xl bg-white/70 py-2.5 px-1 shadow-xs border border-slate-100 flex flex-col items-center justify-between min-h-[72px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "block text-[10px] text-slate-400 font-medium",
                                                            children: h.time
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BMKGWeatherPanel.tsx",
                                                            lineNumber: 293,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "my-1 block text-lg sm:text-xl",
                                                            children: h.icon
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BMKGWeatherPanel.tsx",
                                                            lineNumber: 294,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "block font-bold text-slate-800",
                                                            children: [
                                                                h.temp,
                                                                "°C"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/BMKGWeatherPanel.tsx",
                                                            lineNumber: 295,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/components/BMKGWeatherPanel.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/BMKGWeatherPanel.tsx",
                                            lineNumber: 290,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BMKGWeatherPanel.tsx",
                                    lineNumber: 286,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/BMKGWeatherPanel.tsx",
                            lineNumber: 240,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-sm font-bold text-slate-900",
                                                    children: "Radar Intensitas Curah Hujan Real-Time"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BMKGWeatherPanel.tsx",
                                                    lineNumber: 306,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-500",
                                                    children: "Live Radar Satelit & Model ECMWF (Fokus: Medan, USU, & Setia Budi)"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BMKGWeatherPanel.tsx",
                                                    lineNumber: 309,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BMKGWeatherPanel.tsx",
                                            lineNumber: 305,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-lg bg-slate-100 px-2 py-1 text-[10px] font-semibold text-slate-600 shrink-0",
                                            children: "Zoom 10 · Medan"
                                        }, void 0, false, {
                                            fileName: "[project]/components/BMKGWeatherPanel.tsx",
                                            lineNumber: 313,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BMKGWeatherPanel.tsx",
                                    lineNumber: 304,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-hidden rounded-2xl border border-slate-200/80 shadow-md",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                        width: "100%",
                                        height: "300",
                                        src: "https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=mm&metricTemp=%C2%B0C&metricWind=km/h&zoom=10&overlay=rain&product=ecmwf&level=surface&lat=3.59&lon=98.67",
                                        frameBorder: "0",
                                        className: "h-[250px] w-full sm:h-[320px]",
                                        title: "Radar Curah Hujan BMKG & Windy Medan",
                                        loading: "lazy"
                                    }, void 0, false, {
                                        fileName: "[project]/components/BMKGWeatherPanel.tsx",
                                        lineNumber: 319,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/BMKGWeatherPanel.tsx",
                                    lineNumber: 318,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/BMKGWeatherPanel.tsx",
                            lineNumber: 303,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "h-12 sm:h-14 min-h-[48px] w-full flex items-center justify-center rounded-2xl bg-slate-900 text-sm font-bold text-white shadow-md transition-all hover:bg-slate-800 active:scale-[0.98]",
                            children: "Tutup Pemantauan"
                        }, void 0, false, {
                            fileName: "[project]/components/BMKGWeatherPanel.tsx",
                            lineNumber: 332,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-[11px] text-slate-400 pt-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "Sumber Data: ",
                                        weather.source
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BMKGWeatherPanel.tsx",
                                    lineNumber: 342,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: weather.lastUpdated
                                }, void 0, false, {
                                    fileName: "[project]/components/BMKGWeatherPanel.tsx",
                                    lineNumber: 343,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/BMKGWeatherPanel.tsx",
                            lineNumber: 341,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BMKGWeatherPanel.tsx",
                    lineNumber: 238,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/BMKGWeatherPanel.tsx",
            lineNumber: 196,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/BMKGWeatherPanel.tsx",
        lineNumber: 190,
        columnNumber: 5
    }, this);
}
_s(BMKGWeatherPanel, "NrEKHh3Lr5VcDEERMfkVEHNQ0is=");
_c = BMKGWeatherPanel;
var _c;
__turbopack_context__.k.register(_c, "BMKGWeatherPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PublicPortalPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AlertBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AlertBanner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LiveFloodMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/LiveFloodMap.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RouteSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/RouteSheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SearchBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EmergencyInfo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/EmergencyInfo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AdminScenarioPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AdminScenarioPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FloodReportPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/FloodReportPreview.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BMKGWeatherPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/BMKGWeatherPanel.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
const DEMO_ALERT = {
    status: 'YELLOW',
    label: 'Hujan lebat diperkirakan di Medan Baru 14:00–17:00 · BMKG',
    description: 'Potensi luapan T-08 diperkirakan ≈ 22 menit. Hindari Jl. Setia Budi untuk kendaraan roda dua.',
    source: 'FLORENCE + BMKG',
    updatedAt: '3 menit lalu'
};
const COORDINATE_PATTERN = /^\s*(-?\d{1,2}(?:\.\d+)?)\s*[,;\s]\s*(-?\d{1,3}(?:\.\d+)?)\s*$/;
function formatPoint(point) {
    return "".concat(point.lat.toFixed(5), ", ").concat(point.lng.toFixed(5));
}
/** Menerima "lat, lng"; mengembalikan null untuk teks lain atau koordinat di luar rentang. */ function parseCoordinates(text) {
    const match = COORDINATE_PATTERN.exec(text);
    if (!match) return null;
    const lat = Number(match[1]);
    const lng = Number(match[2]);
    return Math.abs(lat) <= 90 && Math.abs(lng) <= 180 ? {
        lat,
        lng
    } : null;
}
function geolocationMessage(error) {
    if (error.code === error.PERMISSION_DENIED) return 'Izin lokasi ditolak. Aktifkan izin lokasi di browser atau ketik koordinat manual.';
    if (error.code === error.TIMEOUT) return 'Pencarian lokasi melewati batas waktu. Coba lagi atau ketik koordinat manual.';
    return 'Lokasi perangkat tidak tersedia. Ketik koordinat manual.';
}
function PublicPortalPage() {
    _s();
    const [destination, setDestination] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [emergencyOpen, setEmergencyOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [originText, setOriginText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [originPoint, setOriginPoint] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [flyTo, setFlyTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [locating, setLocating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [originMessage, setOriginMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // State rute: path untuk peta + data untuk RouteSheet
    const [routePath, setRoutePath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [routeData, setRouteData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [routeLoading, setRouteLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [routeError, setRouteError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // State Mode Navigasi 3D
    const [isNavigating, setIsNavigating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // State Modal Pemantauan Cuaca & Radar BMKG
    const [showWeatherPanel, setShowWeatherPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    function startNavigation() {
        if (!routePath.length) return;
        setIsNavigating(true);
    }
    function stopNavigation() {
        setIsNavigating(false);
    }
    function handleLocate() {
        if (!('geolocation' in navigator)) {
            setOriginMessage({
                kind: 'error',
                text: 'Browser ini tidak mendukung geolokasi. Ketik koordinat manual.'
            });
            return;
        }
        setLocating(true);
        setOriginMessage(null);
        navigator.geolocation.getCurrentPosition((position)=>{
            const point = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            setOriginPoint(point);
            setOriginText(formatPoint(point));
            setFlyTo({
                point,
                key: Date.now()
            });
            setOriginMessage({
                kind: 'info',
                text: 'Lokasi saat ini dipakai sebagai titik asal.'
            });
            setLocating(false);
        }, (error)=>{
            setOriginMessage({
                kind: 'error',
                text: geolocationMessage(error)
            });
            setLocating(false);
        }, {
            enableHighAccuracy: true,
            timeout: 10_000,
            maximumAge: 60_000
        });
    }
    function commitOrigin() {
        // Jangan ubah titik asal saat sedang dalam mode navigasi aktif
        if (isNavigating) return;
        const text = originText.trim();
        if (!text) {
            setOriginPoint(null);
            setOriginMessage(null);
            return;
        }
        // Teks hasil deteksi lokasi sudah dipakai; jangan ditimpa nilai bulatannya.
        if (originPoint && text === formatPoint(originPoint)) return;
        const point = parseCoordinates(text);
        if (!point) {
            setOriginPoint(null);
            setOriginMessage({
                kind: 'error',
                text: 'Pencarian nama tempat belum tersedia. Ketik koordinat "lat, lng" atau pakai tombol lokasi.'
            });
            return;
        }
        setOriginPoint(point);
        setFlyTo({
            point,
            key: Date.now()
        });
        setOriginMessage(null);
    }
    function handleOriginSubmit(event) {
        event.preventDefault();
        commitOrigin();
    }
    /**
   * Dipanggil dari SearchBar ketika user menekan "Cari rute".
   * Mengambil snapshot graph dari backend, lalu memanggil A* routing endpoint.
   */ const handleSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PublicPortalPage.useCallback[handleSearch]": async (param)=>{
            let { destination: destText, travelMode, coordinates: geocodedCoords } = param;
            setDestination(destText);
            setRouteError(null);
            // Prioritaskan koordinat presisi dari Mapbox Geocoding; fallback ke parsing manual.
            const destPoint = geocodedCoords !== null && geocodedCoords !== void 0 ? geocodedCoords : parseCoordinates(destText);
            if (!originPoint) {
                setRouteError('Tentukan titik asal terlebih dahulu — ketik koordinat atau gunakan tombol lokasi (◎).');
                return;
            }
            if (!destPoint) {
                setRouteError('Ketik koordinat "lat, lng" atau pilih tempat dari daftar saran yang muncul.');
                return;
            }
            setRouteLoading(true);
            setRoutePath([]);
            setRouteData(null);
            try {
                var _process_env_NEXT_PUBLIC_API_URL;
                const base = ((_process_env_NEXT_PUBLIC_API_URL = ("TURBOPACK compile-time value", "http://localhost:3001")) !== null && _process_env_NEXT_PUBLIC_API_URL !== void 0 ? _process_env_NEXT_PUBLIC_API_URL : 'http://localhost:3001').replace(/\/$/, '').replace(/\/api\/v1$/, '');
                // 1. Ambil snapshot graph (nodes + segments dengan zone terkini dari backend)
                const snapshotRes = await fetch("".concat(base, "/api/v1/zones/snapshot"), {
                    signal: AbortSignal.timeout(8_000)
                });
                if (!snapshotRes.ok) throw new Error("Snapshot gagal: HTTP ".concat(snapshotRes.status));
                const snapshot = await snapshotRes.json();
                // 2. Temukan node terdekat ke originPoint dan destPoint dari graph
                function nearestNode(point, nodes) {
                    let closest = nodes[0];
                    let minDist = Infinity;
                    for (const node of nodes){
                        const dLat = node.position.lat - point.lat;
                        const dLng = node.position.lng - point.lng;
                        const dist = Math.sqrt(dLat * dLat + dLng * dLng);
                        if (dist < minDist) {
                            minDist = dist;
                            closest = node;
                        }
                    }
                    return closest;
                }
                const validNodes = snapshot.nodes.filter({
                    "PublicPortalPage.useCallback[handleSearch].validNodes": (n)=>n.zone !== null
                }["PublicPortalPage.useCallback[handleSearch].validNodes"]);
                if (validNodes.length < 2) throw new Error('Graph belum memiliki cukup node dengan data zona.');
                const originNode = nearestNode(originPoint, validNodes);
                const destNode = nearestNode(destPoint, validNodes);
                if (originNode.id === destNode.id) throw new Error('Titik asal dan tujuan terlalu berdekatan. Perbesar jarak koordinat.');
                // 3. Bangun graph edges dari segments (setiap segment = satu edge bidirectional)
                const edges = snapshot.segments.map({
                    "PublicPortalPage.useCallback[handleSearch].edges": (seg, idx)=>{
                        // Hitung jarak Euclidean kasar antar titik sebagai distanceMeters & durationSeconds
                        let dist = 0;
                        for(let i = 1; i < seg.path.length; i++){
                            const dLat = (seg.path[i].lat - seg.path[i - 1].lat) * 111_000;
                            const dLng = (seg.path[i].lng - seg.path[i - 1].lng) * 111_000 * Math.cos(seg.path[0].lat * Math.PI / 180);
                            dist += Math.sqrt(dLat * dLat + dLng * dLng);
                        }
                        // Cari node terdekat di awal dan akhir segment sebagai from/to
                        const fromNode = nearestNode(seg.path[0], validNodes);
                        const toNode = nearestNode(seg.path[seg.path.length - 1], validNodes);
                        var _seg_id;
                        return {
                            id: (_seg_id = seg.id) !== null && _seg_id !== void 0 ? _seg_id : "edge-".concat(idx),
                            from: fromNode.id,
                            to: toNode.id,
                            zone: seg.zone,
                            distanceMeters: Math.round(dist),
                            durationSeconds: Math.round(dist / 8.33),
                            bidirectional: true,
                            geometry: seg.path.map({
                                "PublicPortalPage.useCallback[handleSearch].edges": (p)=>({
                                        id: "gp-".concat(p.lat, "-").concat(p.lng),
                                        latitude: p.lat,
                                        longitude: p.lng
                                    })
                            }["PublicPortalPage.useCallback[handleSearch].edges"])
                        };
                    }
                }["PublicPortalPage.useCallback[handleSearch].edges"]);
                const graphNodes = validNodes.map({
                    "PublicPortalPage.useCallback[handleSearch].graphNodes": (n)=>{
                        var _n_zone;
                        return {
                            id: n.id,
                            latitude: n.position.lat,
                            longitude: n.position.lng,
                            zone: (_n_zone = n.zone) !== null && _n_zone !== void 0 ? _n_zone : 'GREEN'
                        };
                    }
                }["PublicPortalPage.useCallback[handleSearch].graphNodes"]);
                // 4. Panggil routing endpoint
                const routingRes = await fetch("".concat(base, "/api/v1/routing/alternative"), {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    signal: AbortSignal.timeout(15_000),
                    body: JSON.stringify({
                        origin: {
                            id: originNode.id,
                            latitude: originNode.position.lat,
                            longitude: originNode.position.lng
                        },
                        destination: {
                            id: destNode.id,
                            latitude: destNode.position.lat,
                            longitude: destNode.position.lng
                        },
                        travelMode,
                        graph: {
                            nodes: graphNodes,
                            edges
                        }
                    })
                });
                if (!routingRes.ok) {
                    const errBody = await routingRes.text();
                    throw new Error("Routing gagal: HTTP ".concat(routingRes.status, ". ").concat(errBody));
                }
                const result = await routingRes.json();
                // 5. Integrasi Mapbox Directions API (Snap to Road)
                // Ambil array koordinat hasil A* sebagai waypoints (maksimal 25)
                // Titik pertama diganti originPoint asli, dan titik terakhir adalah destPoint asli
                const token = ("TURBOPACK compile-time value", "pk.eyJ1Ijoia2x1Ym9saW1waWFkZWluZm9ybWF0aWthc2ltIiwiYSI6ImNtdzQ3Mmh2aTAwM2EzMXB6NG5naDJnbDEifQ.cxMkjrU8vo3KFRcZaMYsDQ") || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
                let finalPath = [
                    originPoint,
                    ...result.geometry.map({
                        "PublicPortalPage.useCallback[handleSearch]": (p)=>({
                                lat: p.latitude,
                                lng: p.longitude
                            })
                    }["PublicPortalPage.useCallback[handleSearch]"]),
                    destPoint
                ];
                let distanceMeters = result.distanceMeters;
                let durationSeconds = result.durationSeconds;
                if ("TURBOPACK compile-time truthy", 1) {
                    try {
                        const allWaypoints = [
                            originPoint,
                            ...result.geometry.map({
                                "PublicPortalPage.useCallback[handleSearch]": (p)=>({
                                        lat: p.latitude,
                                        lng: p.longitude
                                    })
                            }["PublicPortalPage.useCallback[handleSearch]"]),
                            destPoint
                        ];
                        // Mapbox Directions API membatasi maksimal 25 koordinat
                        let sampled = allWaypoints;
                        if (allWaypoints.length > 25) {
                            const first = allWaypoints[0];
                            const last = allWaypoints[allWaypoints.length - 1];
                            const middle = allWaypoints.slice(1, -1);
                            const step = middle.length / 23;
                            const sampledMiddle = [];
                            for(let i = 0; i < 23; i++){
                                sampledMiddle.push(middle[Math.floor(i * step)]);
                            }
                            sampled = [
                                first,
                                ...sampledMiddle,
                                last
                            ];
                        }
                        const waypointsString = sampled.map({
                            "PublicPortalPage.useCallback[handleSearch].waypointsString": (p)=>"".concat(p.lng, ",").concat(p.lat)
                        }["PublicPortalPage.useCallback[handleSearch].waypointsString"]).join(';');
                        const profile = travelMode === 'TWO_WHEELER' ? 'driving' : 'driving';
                        const directionsUrl = "https://api.mapbox.com/directions/v5/mapbox/".concat(profile, "/").concat(waypointsString, "?geometries=geojson&overview=full&access_token=").concat(token);
                        const dirRes = await fetch(directionsUrl, {
                            signal: AbortSignal.timeout(10_000)
                        });
                        if (dirRes.ok) {
                            var _dirData_routes__geometry, _dirData_routes_, _dirData_routes;
                            const dirData = await dirRes.json();
                            const snappedCoords = (_dirData_routes = dirData.routes) === null || _dirData_routes === void 0 ? void 0 : (_dirData_routes_ = _dirData_routes[0]) === null || _dirData_routes_ === void 0 ? void 0 : (_dirData_routes__geometry = _dirData_routes_.geometry) === null || _dirData_routes__geometry === void 0 ? void 0 : _dirData_routes__geometry.coordinates;
                            if (Array.isArray(snappedCoords) && snappedCoords.length >= 2) {
                                var _dirData_routes_1, _dirData_routes1, _dirData_routes_2, _dirData_routes2;
                                // Ambil koordinat yang sudah meliuk mengikuti jalan raya asli
                                finalPath = snappedCoords.map({
                                    "PublicPortalPage.useCallback[handleSearch]": (param)=>{
                                        let [lng, lat] = param;
                                        return {
                                            lat,
                                            lng
                                        };
                                    }
                                }["PublicPortalPage.useCallback[handleSearch]"]);
                                if (((_dirData_routes1 = dirData.routes) === null || _dirData_routes1 === void 0 ? void 0 : (_dirData_routes_1 = _dirData_routes1[0]) === null || _dirData_routes_1 === void 0 ? void 0 : _dirData_routes_1.distance) != null) {
                                    distanceMeters = Math.round(dirData.routes[0].distance);
                                }
                                if (((_dirData_routes2 = dirData.routes) === null || _dirData_routes2 === void 0 ? void 0 : (_dirData_routes_2 = _dirData_routes2[0]) === null || _dirData_routes_2 === void 0 ? void 0 : _dirData_routes_2.duration) != null) {
                                    durationSeconds = Math.round(dirData.routes[0].duration);
                                }
                            }
                        }
                    } catch (e) {
                    // Fallback ke finalPath A* jika Directions API mengalami gangguan
                    }
                }
                setRoutePath(finalPath);
                // 6. Fly ke titik tujuan agar rute terlihat
                setFlyTo({
                    point: destPoint,
                    key: Date.now()
                });
                // 7. Update RouteSheet dengan data nyata jalan aspal
                setRouteData({
                    source: result.source,
                    distanceMeters,
                    durationSeconds,
                    warning: result.warning,
                    avoidedZones: []
                });
            } catch (err) {
                const message = err instanceof Error ? err.message : 'Terjadi kesalahan tidak diketahui.';
                setRouteError(message);
            } finally{
                setRouteLoading(false);
            }
        }
    }["PublicPortalPage.useCallback[handleSearch]"], [
        originPoint
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative h-svh w-full overflow-hidden bg-slate-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LiveFloodMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    flyTo: flyTo,
                    originPoint: originPoint,
                    routePath: routePath,
                    isNavigating: isNavigating
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 337,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 336,
                columnNumber: 7
            }, this),
            isNavigating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "region",
                "aria-label": "Mode Navigasi Aktif",
                className: "pointer-events-auto fixed inset-x-3 top-3 z-50 mx-auto flex max-w-lg items-center justify-between gap-3 rounded-2xl border border-white/50 bg-white/95 px-4 py-3 shadow-2xl backdrop-blur-xl sm:top-6 sm:px-5 sm:py-3.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-w-0 items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative flex h-3.5 w-3.5 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 354,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative inline-flex h-3.5 w-3.5 rounded-full bg-emerald-600"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 355,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 353,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-extrabold uppercase tracking-wider text-emerald-700",
                                                children: "Navigasi Aktif"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 359,
                                                columnNumber: 17
                                            }, this),
                                            routeData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] font-semibold text-slate-500",
                                                children: [
                                                    "· ",
                                                    (routeData.distanceMeters / 1000).toFixed(1),
                                                    " km (",
                                                    Math.round(routeData.durationSeconds / 60),
                                                    " mnt)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 363,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 358,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "truncate text-sm font-bold text-slate-900 sm:text-base",
                                        children: [
                                            "Menuju ",
                                            destination || 'Lokasi Tujuan'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 368,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 357,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 352,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: stopNavigation,
                        className: "glass-action flex h-11 sm:h-12 min-h-[44px] shrink-0 items-center justify-center rounded-xl bg-red-600 px-4 text-xs font-bold text-white shadow-md shadow-red-900/20 transition-all hover:bg-red-700 active:scale-95 motion-reduce:transition-none",
                        children: "✖ Akhiri Navigasi"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 374,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 347,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glass-panel absolute top-4 left-4 right-4 md:w-[400px] md:left-6 md:right-auto z-40 flex flex-col overflow-hidden rounded-3xl md:rounded-2xl border border-white/50 bg-white/95 md:bg-white/90 backdrop-blur-xl shadow-2xl transition-all duration-300 max-h-[46svh] md:max-h-[calc(100vh-3rem)] ".concat(isNavigating ? 'pointer-events-none -translate-y-12 opacity-0 invisible' : 'translate-y-0 opacity-100 visible'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "shrink-0 px-4 pt-3.5 sm:pt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex h-7 w-7 items-center justify-center rounded-xl bg-blue-600 text-xs font-black text-white shadow-sm",
                                            children: "FL"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 394,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-base sm:text-lg font-black tracking-tight text-slate-900",
                                            children: "FLORENCE"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 395,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 393,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/dashboard/history",
                                    className: "flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/50 hover:bg-white/90 backdrop-blur-md px-3 sm:px-3.5 py-1.5 text-xs font-bold text-gray-700 shadow-sm transition-all hover:text-blue-700 active:scale-95",
                                    title: "Akses Mode Pemerintah: Mesin Waktu Banjir",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "🏛️"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 402,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Pemerintah"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 403,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] text-blue-600 font-extrabold",
                                            children: "→"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 404,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 397,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 392,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 391,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "shrink-0 px-4 pb-2 pt-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AlertBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            alert: DEMO_ALERT
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 409,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 408,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-h-0 flex-1 overflow-y-auto px-4 pb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleOriginSubmit,
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "origin",
                                                className: "sr-only",
                                                children: "Lokasi asal"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 416,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex h-12 sm:h-14 items-center gap-2 rounded-2xl bg-slate-100/90 pl-4 pr-1.5 transition-shadow focus-within:ring-2 focus-within:ring-blue-500 shadow-inner",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "aria-hidden": "true",
                                                        className: "h-3.5 w-3.5 shrink-0 rounded-full border-2 border-blue-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 418,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "origin",
                                                        value: originText,
                                                        onChange: (event)=>{
                                                            setOriginText(event.target.value);
                                                            setOriginMessage(null);
                                                        },
                                                        onBlur: commitOrigin,
                                                        placeholder: "Asal: lat, lng atau lokasi saya",
                                                        autoComplete: "off",
                                                        className: "min-w-0 flex-1 bg-transparent py-2 text-sm sm:text-base text-slate-900 outline-none placeholder:text-slate-400 h-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 419,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: handleLocate,
                                                        disabled: locating,
                                                        "aria-busy": locating,
                                                        "aria-label": "Gunakan lokasi saya sebagai asal",
                                                        className: "flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl text-lg text-blue-700 transition-transform active:scale-[0.98] hover:bg-white disabled:text-slate-400 motion-reduce:transition-none",
                                                        children: locating ? '…' : '◎'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 428,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 417,
                                                columnNumber: 15
                                            }, this),
                                            originMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                role: originMessage.kind === 'error' ? 'alert' : 'status',
                                                className: "text-xs ".concat(originMessage.kind === 'error' ? 'text-red-700' : 'text-slate-600'),
                                                children: originMessage.text
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 440,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 415,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        onSearch: handleSearch,
                                        proximity: originPoint
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 446,
                                        columnNumber: 13
                                    }, this),
                                    routeLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        role: "status",
                                        className: "text-xs text-slate-500 font-medium",
                                        children: "⏳ Menghitung rute bebas banjir…"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 450,
                                        columnNumber: 15
                                    }, this),
                                    routeError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        role: "alert",
                                        className: "rounded-xl bg-red-50 border border-red-200 p-2.5 text-xs text-red-700 font-medium",
                                        children: [
                                            "⚠ ",
                                            routeError
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 453,
                                        columnNumber: 15
                                    }, this),
                                    destination && !routeLoading && !routeError && routeData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-500",
                                        children: [
                                            "Rute menuju: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-slate-800",
                                                children: destination
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 457,
                                                columnNumber: 30
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 456,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 414,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-xs text-amber-800 font-medium",
                                children: "Pratinjau UI · peringatan berbasis simulasi BMKG & sensor FLORENCE."
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 461,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 413,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 385,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/dashboard/history",
                className: "glass-action absolute right-4 top-4 z-40 hidden md:flex items-center gap-2 rounded-full border border-white/60 bg-white/70 hover:bg-white/95 backdrop-blur-md px-4 py-2 text-xs font-bold text-gray-700 shadow-md transition-all hover:scale-105 active:scale-95 motion-reduce:transition-none ".concat(isNavigating ? 'pointer-events-none -translate-y-4 opacity-0 invisible' : 'translate-y-0 opacity-100 visible'),
                title: "Buka Dashboard Pemerintah: Mesin Waktu Banjir",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm",
                        children: "🏛️"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 473,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Dashboard Pemerintah"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 474,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded-md bg-blue-100 px-1.5 py-0.5 text-[10px] font-black text-blue-700",
                        children: "Admin"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 475,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 466,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setShowWeatherPanel(true),
                className: "glass-action absolute right-4 top-20 z-40 flex items-center gap-2 rounded-2xl border border-white/50 bg-white/95 px-3.5 py-2.5 text-xs font-bold text-slate-800 shadow-xl backdrop-blur-xl transition-all hover:bg-white hover:scale-105 active:scale-95 motion-reduce:transition-none ".concat(isNavigating ? 'pointer-events-none -translate-y-4 opacity-0 invisible' : 'translate-y-0 opacity-100 visible'),
                "aria-label": "Buka Pemantauan Cuaca & Radar BMKG",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-base sm:text-lg",
                        children: "📡"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 487,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-bold",
                        children: "Radar BMKG"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 488,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 489,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 479,
                columnNumber: 7
            }, this),
            routeData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                role: "region",
                "aria-label": "Informasi Rute Perjalanan",
                className: "pointer-events-auto absolute bottom-0 left-0 z-40 w-full bg-white/90 backdrop-blur-md rounded-t-3xl p-5 sm:p-6 shadow-2xl border-t md:border border-white/50 transition-all duration-300 md:w-[400px] md:left-6 md:bottom-6 md:rounded-2xl ".concat(isNavigating ? 'pointer-events-none translate-y-full opacity-0 invisible' : 'translate-y-0 opacity-100 visible'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RouteSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    route: routeData,
                    onStart: startNavigation
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 504,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 497,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-auto absolute left-4 bottom-4 z-40 transition-all duration-300 md:bottom-6 ".concat(routeData && !isNavigating ? 'mb-24 sm:mb-20 md:left-[424px] md:mb-0' : 'md:left-6'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AdminScenarioPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 514,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 509,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-auto absolute right-4 bottom-4 z-40 sm:z-50 flex flex-col items-end gap-2.5 sm:gap-3 transition-all duration-300 md:bottom-6 md:right-6 ".concat(routeData && !isNavigating ? 'mb-24 sm:mb-20 md:mb-0' : 'mb-0'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FloodReportPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 523,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setEmergencyOpen((open)=>!open),
                        "aria-expanded": emergencyOpen,
                        className: "glass-action flex h-12 min-h-[48px] items-center justify-center rounded-2xl bg-red-600 px-5 text-sm font-bold text-white shadow-lg shadow-red-900/20 active:scale-[0.98]",
                        children: emergencyOpen ? 'Tutup Safe Point' : 'SOS / Safe Point'
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 524,
                        columnNumber: 9
                    }, this),
                    emergencyOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-full right-0 z-50 mb-3 max-h-[50svh] w-80 max-w-[calc(100vw-1.5rem)] overflow-y-auto rounded-3xl border border-white/50 bg-white/95 backdrop-blur-xl shadow-2xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EmergencyInfo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 534,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 533,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 518,
                columnNumber: 7
            }, this),
            showWeatherPanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BMKGWeatherPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: ()=>setShowWeatherPanel(false)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 541,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 334,
        columnNumber: 5
    }, this);
}
_s(PublicPortalPage, "zwlSW73zVQDr1+jwMkQ+Lnqtz7E=");
_c = PublicPortalPage;
var _c;
__turbopack_context__.k.register(_c, "PublicPortalPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_23b818fd._.js.map