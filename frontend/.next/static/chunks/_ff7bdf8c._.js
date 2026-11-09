(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/TimelineSlider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TimelineSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function formatMinutesToWIB(minutes) {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return "".concat(String(h).padStart(2, '0'), ":").concat(String(m).padStart(2, '0'), " WIB");
}
function TimelineSlider(param) {
    let { selectedDate, onDateChange, timeMinutes, onTimeChange, isPlaying, onTogglePlay, playbackSpeed = 1, onSpeedChange } = param;
    _s();
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(timeMinutes);
    timeRef.current = timeMinutes;
    // Playback timer loop
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TimelineSlider.useEffect": ()=>{
            if (isPlaying) {
                const stepMs = Math.max(50, Math.floor(180 / playbackSpeed));
                intervalRef.current = setInterval({
                    "TimelineSlider.useEffect": ()=>{
                        const next = timeRef.current >= 1435 ? 0 : Math.min(1439, timeRef.current + 5);
                        onTimeChange(next);
                    }
                }["TimelineSlider.useEffect"], stepMs);
            } else if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
            return ({
                "TimelineSlider.useEffect": ()=>{
                    if (intervalRef.current) clearInterval(intervalRef.current);
                }
            })["TimelineSlider.useEffect"];
        }
    }["TimelineSlider.useEffect"], [
        isPlaying,
        playbackSpeed,
        onTimeChange
    ]);
    const percentage = timeMinutes / 1439 * 100;
    const isDateFormatted = /^\d{4}-\d{2}-\d{2}$/.test(selectedDate);
    const isTodayActive = selectedDate === 'Hari Ini' || selectedDate === 'today' || selectedDate.toLowerCase().includes('hari ini');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "region",
        "aria-label": "Panel Mesin Waktu Banjir",
        className: " absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-20 w-[calc(100%-1.5rem)] sm:w-[94%] max-w-4xl rounded-2xl border border-slate-800/90 bg-slate-900/90 backdrop-blur-md p-3 sm:p-4.5 shadow-2xl shadow-black/80 text-white ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 sm:gap-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2.5 shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-blue-600/20 border border-blue-500/30 text-base sm:text-lg text-blue-400 shrink-0",
                            children: "📅"
                        }, void 0, false, {
                            fileName: "[project]/components/TimelineSlider.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "history-date-picker",
                                    className: "block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400 leading-tight",
                                    children: "Tanggal Kejadian"
                                }, void 0, false, {
                                    fileName: "[project]/components/TimelineSlider.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "history-date-picker",
                                    type: "date",
                                    value: isDateFormatted ? selectedDate : '',
                                    onChange: (e)=>onDateChange(e.target.value),
                                    className: " mt-0.5 rounded-lg border border-slate-700/80 bg-slate-950/80 px-2.5 py-1 text-xs font-semibold text-slate-100 outline-none focus:ring-1 focus:ring-blue-500 [color-scheme:dark] "
                                }, void 0, false, {
                                    fileName: "[project]/components/TimelineSlider.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5 mt-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>onDateChange('Hari Ini'),
                                            className: "px-2 py-0.5 rounded-md text-[10px] font-bold border transition cursor-pointer ".concat(isTodayActive ? 'bg-emerald-600/30 border-emerald-500 text-emerald-300 ring-1 ring-emerald-500' : 'bg-slate-950/70 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'),
                                            title: "Status Terkini: Hari Ini (Aman / Normal)",
                                            children: "🟢 Hari Ini"
                                        }, void 0, false, {
                                            fileName: "[project]/components/TimelineSlider.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>onDateChange('2025-11-27'),
                                            className: "px-2 py-0.5 rounded-md text-[10px] font-bold border transition cursor-pointer ".concat(selectedDate === '2025-11-27' ? 'bg-red-600/30 border-red-500 text-red-300 ring-1 ring-red-500' : 'bg-slate-950/70 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'),
                                            title: "Banjir Masif 27 Nov 2025 (Ketinggian 50-130 cm)",
                                            children: "🔴 27 Nov 2025"
                                        }, void 0, false, {
                                            fileName: "[project]/components/TimelineSlider.tsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>onDateChange('2025-10-11'),
                                            className: "px-2 py-0.5 rounded-md text-[10px] font-bold border transition cursor-pointer ".concat(selectedDate === '2025-10-11' ? 'bg-amber-600/30 border-amber-500 text-amber-300 ring-1 ring-amber-500' : 'bg-slate-950/70 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'),
                                            title: "Luapan Babura 11 Okt 2025 (Ketinggian 30-60 cm)",
                                            children: "🟡 11 Okt 2025"
                                        }, void 0, false, {
                                            fileName: "[project]/components/TimelineSlider.tsx",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/TimelineSlider.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TimelineSlider.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/TimelineSlider.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex flex-col gap-1.5 min-w-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onTogglePlay,
                                    className: " flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-xs sm:text-sm font-black text-white shadow-lg shadow-blue-600/30 transition hover:from-blue-500 hover:to-indigo-500 active:scale-95 cursor-pointer ",
                                    "aria-label": isPlaying ? 'Jeda pemutaran' : 'Mulai pemutaran historis',
                                    children: isPlaying ? '⏸' : '▶'
                                }, void 0, false, {
                                    fileName: "[project]/components/TimelineSlider.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 relative flex items-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        min: "0",
                                        max: "1439",
                                        step: "5",
                                        value: timeMinutes,
                                        onChange: (e)=>onTimeChange(Number(e.target.value)),
                                        className: " w-full h-2 rounded-lg appearance-none cursor-pointer bg-slate-800 accent-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50 ",
                                        style: {
                                            background: "linear-gradient(to right, #3b82f6 0%, #6366f1 ".concat(percentage, "%, #1e293b ").concat(percentage, "%, #1e293b 100%)")
                                        },
                                        "aria-label": "Scrubber waktu kejadian"
                                    }, void 0, false, {
                                        fileName: "[project]/components/TimelineSlider.tsx",
                                        lineNumber: 159,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/TimelineSlider.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this),
                                onSpeedChange && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden sm:flex rounded-lg bg-slate-950/80 border border-slate-800 p-0.5 text-[10px] font-bold",
                                    children: [
                                        1,
                                        2,
                                        4
                                    ].map((spd)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>onSpeedChange(spd),
                                            className: "px-2 py-0.5 rounded-md transition cursor-pointer ".concat(playbackSpeed === spd ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-400 hover:text-slate-200'),
                                            children: [
                                                spd,
                                                "x"
                                            ]
                                        }, spd, true, {
                                            fileName: "[project]/components/TimelineSlider.tsx",
                                            lineNumber: 182,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/TimelineSlider.tsx",
                                    lineNumber: 180,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TimelineSlider.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between text-[10px] text-slate-500 font-medium pl-12 pr-1 font-mono",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "00:00"
                                }, void 0, false, {
                                    fileName: "[project]/components/TimelineSlider.tsx",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "06:00"
                                }, void 0, false, {
                                    fileName: "[project]/components/TimelineSlider.tsx",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden sm:inline",
                                    children: "12:00 (Siang)"
                                }, void 0, false, {
                                    fileName: "[project]/components/TimelineSlider.tsx",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "18:00"
                                }, void 0, false, {
                                    fileName: "[project]/components/TimelineSlider.tsx",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "23:59"
                                }, void 0, false, {
                                    fileName: "[project]/components/TimelineSlider.tsx",
                                    lineNumber: 205,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TimelineSlider.tsx",
                            lineNumber: 200,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/TimelineSlider.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 sm:border-l border-slate-800/80 pt-2 sm:pt-0 sm:pl-5 shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "h-2 w-2 rounded-full ".concat(isPlaying ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400')
                                }, void 0, false, {
                                    fileName: "[project]/components/TimelineSlider.tsx",
                                    lineNumber: 212,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-bold uppercase tracking-wider text-slate-400",
                                    children: isPlaying ? 'PLAYBACK AKTIF' : 'WAKTU TERPILIH'
                                }, void 0, false, {
                                    fileName: "[project]/components/TimelineSlider.tsx",
                                    lineNumber: 213,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TimelineSlider.tsx",
                            lineNumber: 211,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-lg sm:text-xl font-black tracking-tight text-white font-mono mt-0.5",
                            children: formatMinutesToWIB(timeMinutes)
                        }, void 0, false, {
                            fileName: "[project]/components/TimelineSlider.tsx",
                            lineNumber: 217,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/TimelineSlider.tsx",
                    lineNumber: 210,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/TimelineSlider.tsx",
            lineNumber: 75,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/TimelineSlider.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_s(TimelineSlider, "pil2vBxRfDsGpLBGOr0/EhWZePw=");
_c = TimelineSlider;
var _c;
__turbopack_context__.k.register(_c, "TimelineSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/dashboard/history/disasterAnalysisData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DISASTER_PROFILES",
    ()=>DISASTER_PROFILES,
    "getDisasterProfile",
    ()=>getDisasterProfile
]);
const DISASTER_PROFILES = {
    // Profil 1: Jl. Dr. Mansyur (USU)
    'SEG-NOV-01': {
        id: 'SEG-NOV-01',
        name: 'Jl. Dr. Mansyur (Pintu 1 USU s.d. RS USU)',
        roadKey: 'dr-mansyur',
        rootCause: 'Sedimentasi Parit Benggali mencapai 40% & fenomena Backwater luapan Sungai Babura akibat curah hujan ekstrem di hulu Tanah Karo/Sibolangit.',
        shortTermMitigation: 'Kirim 2 unit pompa mobile portabel 500 L/detik ke Pintu 1 USU, rekayasa lalu lintas masuk kampus via Jl. Prof. Sofyan, dan pemasangan tanggul pasir sementara di depan RS USU.',
        longTermMitigation: 'Pelebaran dimensi box culvert Parit Benggali menjadi 2.5m x 2.0m serta pengerukan sedimentasi muara Sungai Babura secara berkala.',
        atcsCctv: 'CCTV Pintu 1 USU (Tergenang 130 cm / Arus Kencang)',
        cctvStatus: 'WARNING',
        priorityStatus: 'SANGAT KRITIS (SIAGA 1)',
        assignedTeam: 'Tim Reaksi Cepat BPBD Posko 1 + 2 Pompa Alkon',
        estimatedRecedeHours: '5 - 7 Jam pasca puncak'
    },
    // Profil 2: Jl. Letjen Jamin Ginting (Flyover Simpang Pos)
    'SEG-NOV-02': {
        id: 'SEG-NOV-02',
        name: 'Jl. Letjen Jamin Ginting (Flyover Simpang Pos)',
        roadKey: 'jamin-ginting',
        rootCause: 'Cekungan topografi di kolong Flyover Simpang Pos tidak memiliki pompa submersible aktif & saluran outlet gravitasi ke anak sungai Belawan tersumbat sedimen.',
        shortTermMitigation: 'Aktivasi 1 unit pompa mobile BPBD & rekayasa buka-tutup jalur Flyover atas khusus kendaraan kecil guna menghindari penumpukan di kolong flyover.',
        longTermMitigation: 'Pembangunan sumur resapan dalam (deep well injection) dan instalasi stasiun pompa otomatis terintegrasi genset cadangan di kolong simpang.',
        atcsCctv: 'CCTV ATCS Simpang Pos (Kolong Terendam 80 cm)',
        cctvStatus: 'LIVE',
        priorityStatus: 'KRITIS (SIAGA 1)',
        assignedTeam: 'Satgas Dishub + 1 Pompa Sedot 300 L/detik',
        estimatedRecedeHours: '3 - 4 Jam'
    },
    // Profil 3: Jl. Ringroad / Gagak Hitam (Tasbi 1 & Manhattan)
    'SEG-NOV-03': {
        id: 'SEG-NOV-03',
        name: 'Jl. Ringroad / Gagak Hitam (Tasbi 1 & Manhattan)',
        roadKey: 'ringroad',
        rootCause: 'Kapasitas drainase tepi jalan arteri nasional tidak sebanding dengan limpasan debit air dari perumahan Tasbi 1 & saluran pembuang Sungai Badera yang meluap.',
        shortTermMitigation: 'Pembukaan sudetan darurat ke parit sekunder dan penyekatan lajur lambat agar truk dan kendaraan pribadi diarahkan hanya melintasi lajur cepat.',
        longTermMitigation: 'Konstruksi saluran drainase terpadu lintas perumahan dan peningkatan kapasitas kolam retensi Ringroad Sunggal.',
        atcsCctv: 'CCTV Ringroad Tasbi (Lajur Lambat Macet 3 km)',
        cctvStatus: 'LIVE',
        priorityStatus: 'KRITIS',
        assignedTeam: 'Polrestabes Medan + Dinas SDABMBK Unit 3',
        estimatedRecedeHours: '4 - 5 Jam'
    },
    // Profil 4: Jl. Gatot Subroto (Simpang Pondok Kelapa)
    'SEG-NOV-04': {
        id: 'SEG-NOV-04',
        name: 'Jl. Gatot Subroto (Simpang Pondok Kelapa / Underpass)',
        roadKey: 'gatot-subroto',
        rootCause: 'Limpasan permukaan jalan dari kawasan Sei Sikambing menuju cekungan underpass saat pompa drainase underpass mengalami kendala trip listrik PLN.',
        shortTermMitigation: 'Penyediaan genset darurat mobile untuk menghidupkan pompa underpass dan pengalihan arus kendaraan kecil melalui Jl. Asrama.',
        longTermMitigation: 'Peningkatan kapasitas rumah pompa underpass dan sistem otomatisasi SCADA anti-banjir terhubung pemantauan real-time.',
        atcsCctv: 'CCTV Underpass Gatsu (Arus Limpasan Deras)',
        cctvStatus: 'WARNING',
        priorityStatus: 'KRITIS',
        assignedTeam: 'Tim Teknisi Pompa PUPR + Patroli Sabhara',
        estimatedRecedeHours: '3 - 5 Jam'
    },
    // Profil 5: Jl. TB Simatupang (Simpang Kampung Lalang)
    'SEG-NOV-05': {
        id: 'SEG-NOV-05',
        name: 'Jl. TB Simatupang (Simpang Kampung Lalang)',
        roadKey: 'kampung-lalang',
        rootCause: 'Tanggul Sungai Belawan jebol sebagian akibat debit banjir bandang hulu Deli Serdang dan pertemuan fenomena pasang air laut (rob).',
        shortTermMitigation: 'Pengerahan 4 perahu karet Basarnas/BPBD untuk evakuasi warga bantaran dan penutupan jalur Medan–Binjai untuk kendaraan roda 2.',
        longTermMitigation: 'Perkuatan tanggul permanen beton (sheet pile) sepanjang 1.2 km di sepanjang bantaran kritis Sungai Belawan.',
        atcsCctv: 'CCTV Jembatan Belawan (Air Menyentuh Gelagar / 120 cm)',
        cctvStatus: 'WARNING',
        priorityStatus: 'EKSTREM / DARURAT BENCANA',
        assignedTeam: 'Tim SAR Gabungan Basarnas + Koramil Sunggal',
        estimatedRecedeHours: '8 - 12 Jam (tergantung pasang laut)'
    },
    // Profil 6: Jl. Setia Budi (Tanjung Sari)
    'SEG-NOV-06': {
        id: 'SEG-NOV-06',
        name: 'Jl. Setia Budi (Tanjung Sari / Pasar 1 - 2)',
        roadKey: 'setia-budi',
        rootCause: 'Parit primer tersumbat sampah domestik dan penyempitan saluran pada crossing gorong-gorong jembatan pertokoan.',
        shortTermMitigation: 'Pembersihan manual sampah sumbatan menggunakan excavator mini BPBD/Dinas SDABMBK.',
        longTermMitigation: 'Penertiban jembatan liar di atas drainase dan pembuatan crossing saluran baru berdiameter 1.8 meter.',
        atcsCctv: 'CCTV Simpang Pemda (Genangan 75 cm)',
        cctvStatus: 'LIVE',
        priorityStatus: 'KRITIS',
        assignedTeam: 'Tim Reaksi Cepat Kebersihan & SDA Medan',
        estimatedRecedeHours: '3 - 4 Jam'
    },
    // Profil 7: Jl. Brigjend Katamso (Simpang Juanda)
    'SEG-NOV-07': {
        id: 'SEG-NOV-07',
        name: 'Jl. Brigjend Katamso (Kawasan Simpang Juanda)',
        roadKey: 'katamso',
        rootCause: 'Luapan Sungai Deli di kelokan sungai Kampung Aur/Sei Mati yang tidak memiliki parapet penahan banjir yang memadai.',
        shortTermMitigation: 'Pemberlakuan tanggap darurat evakuasi warga ke Masjid Raya/sekolah terdekat dan pemadaman gardu listrik darurat PLN.',
        longTermMitigation: 'Pembangunan dinding parapet penahan banjir setinggi 2.5 meter di sepanjang bantaran Sungai Deli Kampung Aur.',
        atcsCctv: 'CCTV Simpang Juanda (Air Meluap ke Jalan 90 cm)',
        cctvStatus: 'LIVE',
        priorityStatus: 'KRITIS',
        assignedTeam: 'Satgas Gabungan BPBD + Tagana',
        estimatedRecedeHours: '6 - 8 Jam'
    }
};
function getDisasterProfile(segmentId, segmentName) {
    if (segmentId && DISASTER_PROFILES[segmentId]) {
        return DISASTER_PROFILES[segmentId];
    }
    // Pencocokan berdasarkan nama ruas jalan
    if (segmentName) {
        const lower = segmentName.toLowerCase();
        if (lower.includes('mansyur')) return DISASTER_PROFILES['SEG-NOV-01'];
        if (lower.includes('jamin ginting') || lower.includes('simpang pos')) return DISASTER_PROFILES['SEG-NOV-02'];
        if (lower.includes('ringroad') || lower.includes('gagak hitam')) return DISASTER_PROFILES['SEG-NOV-03'];
        if (lower.includes('gatot subroto') || lower.includes('pondok kelapa')) return DISASTER_PROFILES['SEG-NOV-04'];
        if (lower.includes('lalang') || lower.includes('simatupang')) return DISASTER_PROFILES['SEG-NOV-05'];
        if (lower.includes('setia budi')) return DISASTER_PROFILES['SEG-NOV-06'];
        if (lower.includes('katamso')) return DISASTER_PROFILES['SEG-NOV-07'];
    }
    // Default fallback profil
    return {
        id: segmentId || 'GENERIC',
        name: segmentName || 'Ruas Jalan Tergenang',
        roadKey: 'generic',
        rootCause: 'Kapasitas drainase lokal terlampaui akibat intensitas curah hujan ekstrem dan sedimentasi saluran primer.',
        shortTermMitigation: 'Pengerahan unit pompa mobile dan penyekatan lajur jalan terdampak oleh tim gabungan BPBD.',
        longTermMitigation: 'Normalisasi sedimentasi drainase primer dan integrasi sumur resapan komunal.',
        atcsCctv: 'CCTV Wilayah Terkait (Pantauan Visual Aktif)',
        cctvStatus: 'LIVE',
        priorityStatus: 'KRITIS',
        assignedTeam: 'Tim Reaksi Cepat BPBD Kota Medan',
        estimatedRecedeHours: '4 - 6 Jam'
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/StatsPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatsPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$history$2f$disasterAnalysisData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/dashboard/history/disasterAnalysisData.ts [app-client] (ecmascript)");
'use client';
;
;
function StatsPanel(param) {
    let { timeMinutes = 720, selectedDate = '2025-11-27', selectedZone, onCloseZone, isSafeState = false, onSelectCCTV } = param;
    const isToday = selectedDate === 'Hari Ini' || selectedDate === 'today' || selectedDate.toLowerCase().includes('hari ini');
    const isNov27 = !isToday && (selectedDate.includes('11-27') || selectedDate.includes('November') || selectedDate.includes('Nov'));
    const isOct11 = !isToday && (selectedDate.includes('10-11') || selectedDate.includes('Oktober') || selectedDate.includes('Okt'));
    const effectiveSafeState = isSafeState || isToday || !isNov27 && !isOct11;
    // Hitung fase waktu
    const isPeak = timeMinutes >= 600 && timeMinutes <= 960; // 10:00 - 16:00
    const isReceding = timeMinutes > 960; // 16:00 - 23:59
    // Faktor perhitungan simulasi air
    const factor = isNov27 ? timeMinutes < 360 ? 0.60 : timeMinutes < 540 ? 0.70 + (timeMinutes - 360) * 0.001 : timeMinutes < 780 ? 0.88 + (timeMinutes - 540) * 0.0005 : timeMinutes < 1020 ? 1.0 - (timeMinutes - 780) * 0.0003 : Math.max(0.65, 0.92 - (timeMinutes - 1020) * 0.0007) : isOct11 ? timeMinutes < 360 ? 0.08 : timeMinutes < 540 ? 0.15 + (timeMinutes - 360) * 0.0012 : timeMinutes < 780 ? 0.45 + (timeMinutes - 540) * 0.002 : timeMinutes < 960 ? 0.95 - (timeMinutes - 780) * 0.001 : timeMinutes < 1200 ? 0.70 - (timeMinutes - 960) * 0.002 : Math.max(0.1, 0.20 - (timeMinutes - 1200) * 0.0004) : isPeak ? 1.0 : 0.5;
    // Status peringatan Kota (Kondisi A)
    let statusCityLabel = 'SIAGA 1 (STATUS KRITIS - DARURAT BANJIR)';
    let statusCityColor = 'text-red-400 bg-red-500/10 border-red-500/30';
    if (effectiveSafeState) {
        statusCityLabel = 'KONDISI NORMAL';
        statusCityColor = 'bg-emerald-100 text-emerald-800 border-emerald-300';
    } else if (!isNov27 && isOct11) {
        statusCityLabel = isPeak ? 'SIAGA 2 (LUAPAN BABURA & DELI)' : isReceding ? 'WASPADA (BERANGSUR SURUT)' : 'WASPADA (AWAL GENANGAN)';
        statusCityColor = isPeak ? 'text-amber-400 bg-amber-500/10 border-amber-500/30' : isReceding ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' : 'text-blue-400 bg-blue-500/10 border-blue-500/30';
    }
    // Profil Bencana Ruas Terpilih (Kondisi B)
    const profile = selectedZone ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$history$2f$disasterAnalysisData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDisasterProfile"])(selectedZone.id, selectedZone.name) : null;
    const currentZoneCm = selectedZone ? Math.round(selectedZone.peakCm * factor) : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        role: "region",
        "aria-label": "Smart Inspector Panel - Decision Support System",
        className: " fixed sm:absolute z-30 transition-all duration-300 /* Mobile: Menempel rapi di atas panel timeline bawah */ inset-x-3 bottom-36 sm:bottom-auto /* Desktop: Melayang rapi di kanan atas, tinggi dibatasi agar TIDAK MENIMPA timeline bawah */ sm:top-20 sm:right-6 sm:left-auto sm:w-[380px] lg:w-[400px] sm:max-w-md max-h-[52vh] sm:max-h-[calc(100vh-14.5rem)] flex flex-col rounded-2xl border border-slate-800/90 bg-slate-900/90 backdrop-blur-md p-4 sm:p-5 shadow-2xl shadow-black/80 text-white overflow-hidden ",
        children: selectedZone && profile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col h-full overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start justify-between border-b border-slate-800/80 pb-3 shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex h-8 w-8 items-center justify-center rounded-lg bg-red-600/20 text-base text-red-400 border border-red-500/30",
                                    children: "🔍"
                                }, void 0, false, {
                                    fileName: "[project]/components/StatsPanel.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-sm font-extrabold tracking-tight text-white",
                                            children: "Diagnosis & Mitigasi"
                                        }, void 0, false, {
                                            fileName: "[project]/components/StatsPanel.tsx",
                                            lineNumber: 127,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-blue-400 font-semibold",
                                            children: "Decision Support System (DSS)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/StatsPanel.tsx",
                                            lineNumber: 130,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/StatsPanel.tsx",
                                    lineNumber: 126,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/StatsPanel.tsx",
                            lineNumber: 122,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onCloseZone,
                            className: " flex h-7 w-7 items-center justify-center rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/60 hover:bg-red-600 hover:text-white transition active:scale-95 cursor-pointer ",
                            "aria-label": "Tutup panel diagnosis dan kembali ke ringkasan kota",
                            title: "Kembali ke Ringkasan Kota",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/components/StatsPanel.tsx",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/StatsPanel.tsx",
                    lineNumber: 121,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 min-h-0 overflow-y-auto space-y-3 pt-3 pr-1 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-950/20 [&::-webkit-scrollbar-thumb]:bg-slate-700/60 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-600",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl border border-slate-800 bg-slate-950/70 p-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-bold uppercase tracking-wider text-slate-400",
                                    children: "Ruas Jalan Terpantau"
                                }, void 0, false, {
                                    fileName: "[project]/components/StatsPanel.tsx",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-black text-white mt-0.5 leading-snug",
                                    children: selectedZone.name
                                }, void 0, false, {
                                    fileName: "[project]/components/StatsPanel.tsx",
                                    lineNumber: 159,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 flex items-center gap-2 flex-wrap",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-lg bg-red-600/20 border border-red-500/40 px-2 py-0.5 text-xs font-black text-red-400 flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "h-2 w-2 rounded-full bg-red-500 animate-ping"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/StatsPanel.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 19
                                                }, this),
                                                "Air: ",
                                                currentZoneCm,
                                                " cm"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/StatsPanel.tsx",
                                            lineNumber: 165,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-lg bg-slate-800 px-2 py-0.5 text-[11px] font-bold text-slate-300 border border-slate-700",
                                            children: [
                                                "Rekor: ",
                                                selectedZone.peakCm,
                                                " cm"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/StatsPanel.tsx",
                                            lineNumber: 169,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 text-[10px] font-bold",
                                            children: profile.priorityStatus
                                        }, void 0, false, {
                                            fileName: "[project]/components/StatsPanel.tsx",
                                            lineNumber: 172,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/StatsPanel.tsx",
                                    lineNumber: 164,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/StatsPanel.tsx",
                            lineNumber: 155,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl border border-red-900/40 bg-red-950/20 p-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-red-400 mb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs",
                                            children: "⚠️"
                                        }, void 0, false, {
                                            fileName: "[project]/components/StatsPanel.tsx",
                                            lineNumber: 181,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-xs font-extrabold uppercase tracking-wide",
                                            children: "Diagnosis Akar Masalah"
                                        }, void 0, false, {
                                            fileName: "[project]/components/StatsPanel.tsx",
                                            lineNumber: 182,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/StatsPanel.tsx",
                                    lineNumber: 180,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs leading-relaxed text-slate-200",
                                    children: profile.rootCause
                                }, void 0, false, {
                                    fileName: "[project]/components/StatsPanel.tsx",
                                    lineNumber: 186,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/StatsPanel.tsx",
                            lineNumber: 179,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl border border-amber-900/40 bg-amber-950/20 p-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-amber-400 mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs",
                                                    children: "⚡"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/StatsPanel.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-xs font-extrabold uppercase tracking-wide",
                                                    children: "Solusi Taktis (Jangka Pendek)"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/StatsPanel.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/StatsPanel.tsx",
                                            lineNumber: 195,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs leading-relaxed text-amber-100",
                                            children: profile.shortTermMitigation
                                        }, void 0, false, {
                                            fileName: "[project]/components/StatsPanel.tsx",
                                            lineNumber: 201,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/StatsPanel.tsx",
                                    lineNumber: 194,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl border border-blue-900/40 bg-blue-950/20 p-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-blue-400 mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs",
                                                    children: "🏗️"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/StatsPanel.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-xs font-extrabold uppercase tracking-wide",
                                                    children: "Solusi Strategis (Jangka Panjang)"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/StatsPanel.tsx",
                                                    lineNumber: 210,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/StatsPanel.tsx",
                                            lineNumber: 208,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs leading-relaxed text-blue-100",
                                            children: profile.longTermMitigation
                                        }, void 0, false, {
                                            fileName: "[project]/components/StatsPanel.tsx",
                                            lineNumber: 214,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/StatsPanel.tsx",
                                    lineNumber: 207,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/StatsPanel.tsx",
                            lineNumber: 192,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl border border-slate-800 bg-slate-950/70 p-3 text-xs space-y-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-slate-400",
                                            children: "Tim Lapangan:"
                                        }, void 0, false, {
                                            fileName: "[project]/components/StatsPanel.tsx",
                                            lineNumber: 223,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-slate-200 text-right truncate max-w-[190px]",
                                            children: profile.assignedTeam
                                        }, void 0, false, {
                                            fileName: "[project]/components/StatsPanel.tsx",
                                            lineNumber: 224,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/StatsPanel.tsx",
                                    lineNumber: 222,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between border-t border-slate-800/80 pt-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-slate-400",
                                            children: "Estimasi Surut:"
                                        }, void 0, false, {
                                            fileName: "[project]/components/StatsPanel.tsx",
                                            lineNumber: 229,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-extrabold text-emerald-400",
                                            children: profile.estimatedRecedeHours
                                        }, void 0, false, {
                                            fileName: "[project]/components/StatsPanel.tsx",
                                            lineNumber: 230,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/StatsPanel.tsx",
                                    lineNumber: 228,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/StatsPanel.tsx",
                            lineNumber: 221,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/StatsPanel.tsx",
                    lineNumber: 153,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-2.5 mt-2 border-t border-slate-800/80 flex items-center gap-2 shrink-0",
                    children: [
                        selectedZone.sourceUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: selectedZone.sourceUrl,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: " flex-1 text-center py-2 px-3 rounded-xl border border-blue-500/40 bg-blue-600/20 hover:bg-blue-600/40 text-blue-300 font-bold text-xs transition ",
                            children: "↗ Sumber Berita"
                        }, void 0, false, {
                            fileName: "[project]/components/StatsPanel.tsx",
                            lineNumber: 240,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onCloseZone,
                            className: " flex-1 text-center py-2 px-3 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition cursor-pointer ",
                            children: "← Kembali ke Kota"
                        }, void 0, false, {
                            fileName: "[project]/components/StatsPanel.tsx",
                            lineNumber: 252,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/StatsPanel.tsx",
                    lineNumber: 238,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/StatsPanel.tsx",
            lineNumber: 119,
            columnNumber: 9
        }, this) : /* ─────────────────────────────────────────────────────────────
            KONDISI A: DEFAULT (selectedZone === null)
            Tampilkan 'Ringkasan Kota' (City-wide Flood Overview)
           ───────────────────────────────────────────────────────────── */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col h-full overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-b border-slate-800/80 pb-3 shrink-0 space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600/20 text-sm text-blue-400 border border-blue-500/30",
                                            children: "🏙️"
                                        }, void 0, false, {
                                            fileName: "[project]/components/StatsPanel.tsx",
                                            lineNumber: 274,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-sm font-extrabold tracking-tight text-white leading-tight",
                                                    children: "Ringkasan Kota"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/StatsPanel.tsx",
                                                    lineNumber: 278,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-slate-400",
                                                    children: "Overview Bencana Kota Medan"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/StatsPanel.tsx",
                                                    lineNumber: 281,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/StatsPanel.tsx",
                                            lineNumber: 277,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/StatsPanel.tsx",
                                    lineNumber: 273,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rounded-full bg-slate-800 px-2 py-0.5 text-[10px] font-bold text-slate-300 border border-slate-700",
                                    children: effectiveSafeState ? selectedDate === 'Hari Ini' ? 'Hari Ini' : selectedDate : isNov27 ? '27 Nov 2025' : '11 Okt 2025'
                                }, void 0, false, {
                                    fileName: "[project]/components/StatsPanel.tsx",
                                    lineNumber: 286,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/StatsPanel.tsx",
                            lineNumber: 272,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 rounded-xl border px-3 py-1.5 text-xs font-bold ".concat(statusCityColor),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "relative flex h-2 w-2 shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute inline-flex h-full w-full rounded-full bg-current ".concat(effectiveSafeState ? 'opacity-30' : 'animate-ping opacity-75')
                                        }, void 0, false, {
                                            fileName: "[project]/components/StatsPanel.tsx",
                                            lineNumber: 294,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative inline-flex h-2 w-2 rounded-full bg-current"
                                        }, void 0, false, {
                                            fileName: "[project]/components/StatsPanel.tsx",
                                            lineNumber: 295,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/StatsPanel.tsx",
                                    lineNumber: 293,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "leading-tight truncate",
                                    children: statusCityLabel
                                }, void 0, false, {
                                    fileName: "[project]/components/StatsPanel.tsx",
                                    lineNumber: 297,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/StatsPanel.tsx",
                            lineNumber: 292,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/StatsPanel.tsx",
                    lineNumber: 271,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 min-h-0 overflow-y-auto space-y-3 pt-3 pr-1 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-950/20 [&::-webkit-scrollbar-thumb]:bg-slate-700/60 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-600",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-2 sm:gap-2.5 shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl border border-slate-800/90 bg-slate-950/70 p-2.5 sm:p-3 hover:border-slate-700 transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] text-slate-400 block font-medium",
                                            children: "Ruas Tergenang"
                                        }, void 0, false, {
                                            fileName: "[project]/components/StatsPanel.tsx",
                                            lineNumber: 307,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg sm:text-xl font-black text-white font-mono mt-0.5 block leading-tight",
                                            children: effectiveSafeState ? '0 Titik' : isNov27 ? '7 Ruas' : '7 Titik'
                                        }, void 0, false, {
                                            fileName: "[project]/components/StatsPanel.tsx",
                                            lineNumber: 308,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[9px] font-bold block mt-0.5 truncate ".concat(effectiveSafeState ? 'text-emerald-400' : 'text-red-400'),
                                            children: effectiveSafeState ? 'Seluruh Arteri Lancar' : isNov27 ? '5 Arteri Kritis' : 'Luapan Sedang'
                                        }, void 0, false, {
                                            fileName: "[project]/components/StatsPanel.tsx",
                                            lineNumber: 311,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/StatsPanel.tsx",
                                    lineNumber: 306,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl border border-slate-800/90 bg-slate-950/70 p-2.5 sm:p-3 hover:border-slate-700 transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] text-slate-400 block font-medium",
                                            children: "Puncak Genangan"
                                        }, void 0, false, {
                                            fileName: "[project]/components/StatsPanel.tsx",
                                            lineNumber: 318,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg sm:text-xl font-black font-mono mt-0.5 block leading-tight ".concat(effectiveSafeState ? 'text-emerald-400' : 'text-red-400'),
                                            children: effectiveSafeState ? '0.00 m' : isNov27 ? '1.30 m' : '0.60 m'
                                        }, void 0, false, {
                                            fileName: "[project]/components/StatsPanel.tsx",
                                            lineNumber: 319,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[9px] text-slate-400 block mt-0.5 truncate",
                                            children: effectiveSafeState ? 'Ketinggian Normal (Aman)' : isNov27 ? 'Pintu 1 USU' : 'Babura / RS USU'
                                        }, void 0, false, {
                                            fileName: "[project]/components/StatsPanel.tsx",
                                            lineNumber: 322,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/StatsPanel.tsx",
                                    lineNumber: 317,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl border border-slate-800/90 bg-slate-950/70 p-2.5 sm:p-3 hover:border-slate-700 transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] text-slate-400 block font-medium",
                                            children: "Laporan Tervalidasi"
                                        }, void 0, false, {
                                            fileName: "[project]/components/StatsPanel.tsx",
                                            lineNumber: 329,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg sm:text-xl font-black font-mono mt-0.5 block leading-tight ".concat(effectiveSafeState ? 'text-slate-200' : 'text-blue-400'),
                                            children: effectiveSafeState ? '0' : isNov27 ? '342' : '128'
                                        }, void 0, false, {
                                            fileName: "[project]/components/StatsPanel.tsx",
                                            lineNumber: 330,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[9px] text-slate-400 block mt-0.5 truncate",
                                            children: effectiveSafeState ? 'Nihil Kejadian' : 'AI + Warga + BPBD'
                                        }, void 0, false, {
                                            fileName: "[project]/components/StatsPanel.tsx",
                                            lineNumber: 333,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/StatsPanel.tsx",
                                    lineNumber: 328,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl border border-slate-800/90 bg-slate-950/70 p-2.5 sm:p-3 hover:border-slate-700 transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] text-slate-400 block font-medium",
                                            children: "Durasi Kritis"
                                        }, void 0, false, {
                                            fileName: "[project]/components/StatsPanel.tsx",
                                            lineNumber: 340,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg sm:text-xl font-black font-mono mt-0.5 block leading-tight ".concat(effectiveSafeState ? 'text-slate-200' : 'text-amber-400'),
                                            children: effectiveSafeState ? '0j 0m' : isNov27 ? '14j 30m' : '5j 45m'
                                        }, void 0, false, {
                                            fileName: "[project]/components/StatsPanel.tsx",
                                            lineNumber: 341,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[9px] text-slate-400 block mt-0.5 truncate",
                                            children: effectiveSafeState ? 'Kondisi Kondusif' : 'Hujan 3 Hari Badai'
                                        }, void 0, false, {
                                            fileName: "[project]/components/StatsPanel.tsx",
                                            lineNumber: 344,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/StatsPanel.tsx",
                                    lineNumber: 339,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/StatsPanel.tsx",
                            lineNumber: 304,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl border border-slate-800/90 bg-slate-950/70 p-3 space-y-2 shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1.5 text-slate-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs",
                                                    children: "📹"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/StatsPanel.tsx",
                                                    lineNumber: 354,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] font-extrabold uppercase tracking-wide text-white",
                                                    children: "Pantauan CCTV ATCS"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/StatsPanel.tsx",
                                                    lineNumber: 355,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/StatsPanel.tsx",
                                            lineNumber: 353,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20",
                                            children: "LIVE STREAMS"
                                        }, void 0, false, {
                                            fileName: "[project]/components/StatsPanel.tsx",
                                            lineNumber: 359,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/StatsPanel.tsx",
                                    lineNumber: 352,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1.5 max-h-48 overflow-y-auto pr-1 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-slate-700/60 [&::-webkit-scrollbar-thumb]:rounded-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>onSelectCCTV === null || onSelectCCTV === void 0 ? void 0 : onSelectCCTV('CCTV Pintu 1 USU'),
                                            className: "w-full flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-800/90 hover:bg-slate-800 hover:border-blue-500/50 cursor-pointer transition-all group text-left",
                                            title: "Klik untuk membuka siaran live CCTV Pintu 1 USU",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 truncate",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex h-5 w-5 shrink-0 items-center justify-center rounded bg-blue-600/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors text-[9px]",
                                                            children: "▶"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/StatsPanel.tsx",
                                                            lineNumber: 373,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "truncate text-slate-300 font-medium group-hover:text-white text-xs",
                                                            children: "CCTV Pintu 1 USU"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/StatsPanel.tsx",
                                                            lineNumber: 376,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/StatsPanel.tsx",
                                                    lineNumber: 372,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-bold shrink-0 ml-1.5 ".concat(effectiveSafeState ? 'text-emerald-400' : 'text-red-400 font-black'),
                                                    children: effectiveSafeState ? 'Aman (0cm)' : '⚠️ Terendam (130cm)'
                                                }, void 0, false, {
                                                    fileName: "[project]/components/StatsPanel.tsx",
                                                    lineNumber: 380,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/StatsPanel.tsx",
                                            lineNumber: 366,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>onSelectCCTV === null || onSelectCCTV === void 0 ? void 0 : onSelectCCTV('CCTV Simpang Pos'),
                                            className: "w-full flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-800/90 hover:bg-slate-800 hover:border-blue-500/50 cursor-pointer transition-all group text-left",
                                            title: "Klik untuk membuka siaran live CCTV Simpang Pos",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 truncate",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex h-5 w-5 shrink-0 items-center justify-center rounded bg-blue-600/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors text-[9px]",
                                                            children: "▶"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/StatsPanel.tsx",
                                                            lineNumber: 392,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "truncate text-slate-300 font-medium group-hover:text-white text-xs",
                                                            children: "CCTV Simpang Pos"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/StatsPanel.tsx",
                                                            lineNumber: 395,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/StatsPanel.tsx",
                                                    lineNumber: 391,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-bold shrink-0 ml-1.5 ".concat(effectiveSafeState ? 'text-emerald-400' : 'text-amber-400'),
                                                    children: effectiveSafeState ? 'Aman (0cm)' : '🔴 Kolong 80cm'
                                                }, void 0, false, {
                                                    fileName: "[project]/components/StatsPanel.tsx",
                                                    lineNumber: 399,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/StatsPanel.tsx",
                                            lineNumber: 385,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>onSelectCCTV === null || onSelectCCTV === void 0 ? void 0 : onSelectCCTV('CCTV Underpass Gatsu'),
                                            className: "w-full flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-800/90 hover:bg-slate-800 hover:border-blue-500/50 cursor-pointer transition-all group text-left",
                                            title: "Klik untuk membuka siaran live CCTV Underpass Gatsu",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 truncate",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex h-5 w-5 shrink-0 items-center justify-center rounded bg-blue-600/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors text-[9px]",
                                                            children: "▶"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/StatsPanel.tsx",
                                                            lineNumber: 411,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "truncate text-slate-300 font-medium group-hover:text-white text-xs",
                                                            children: "CCTV Underpass Gatsu"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/StatsPanel.tsx",
                                                            lineNumber: 414,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/StatsPanel.tsx",
                                                    lineNumber: 410,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-bold shrink-0 ml-1.5 ".concat(effectiveSafeState ? 'text-emerald-400' : 'text-amber-400'),
                                                    children: effectiveSafeState ? 'Aman (0cm)' : '🟡 Pompa Trip (50cm)'
                                                }, void 0, false, {
                                                    fileName: "[project]/components/StatsPanel.tsx",
                                                    lineNumber: 418,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/StatsPanel.tsx",
                                            lineNumber: 404,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>onSelectCCTV === null || onSelectCCTV === void 0 ? void 0 : onSelectCCTV('CCTV Jembatan Belawan'),
                                            className: "w-full flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-800/90 hover:bg-slate-800 hover:border-blue-500/50 cursor-pointer transition-all group text-left",
                                            title: "Klik untuk membuka siaran live CCTV Jembatan Belawan",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 truncate",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex h-5 w-5 shrink-0 items-center justify-center rounded bg-blue-600/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors text-[9px]",
                                                            children: "▶"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/StatsPanel.tsx",
                                                            lineNumber: 430,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "truncate text-slate-300 font-medium group-hover:text-white text-xs",
                                                            children: "CCTV Jembatan Belawan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/StatsPanel.tsx",
                                                            lineNumber: 433,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/StatsPanel.tsx",
                                                    lineNumber: 429,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-bold shrink-0 ml-1.5 ".concat(effectiveSafeState ? 'text-emerald-400' : 'text-red-400 font-black'),
                                                    children: effectiveSafeState ? 'Aman (0cm)' : '🌊 Luapan (90cm)'
                                                }, void 0, false, {
                                                    fileName: "[project]/components/StatsPanel.tsx",
                                                    lineNumber: 437,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/StatsPanel.tsx",
                                            lineNumber: 423,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/StatsPanel.tsx",
                                    lineNumber: 365,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/StatsPanel.tsx",
                            lineNumber: 351,
                            columnNumber: 13
                        }, this),
                        effectiveSafeState ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl border border-emerald-500/30 bg-emerald-600/10 p-3 text-[11px] leading-relaxed text-emerald-200 shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-extrabold block text-emerald-300 mb-0.5",
                                    children: "✅ Status Pemantauan Wilayah:"
                                }, void 0, false, {
                                    fileName: "[project]/components/StatsPanel.tsx",
                                    lineNumber: 447,
                                    columnNumber: 17
                                }, this),
                                "Kondisi seluruh ruas arteri Kota Medan saat ini terpantau normal dan aman. Tidak ada indikasi titik genangan air atau disrupsi lalu lintas terdeteksi."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/StatsPanel.tsx",
                            lineNumber: 446,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl border border-blue-500/30 bg-blue-600/10 p-3 text-[11px] leading-relaxed text-blue-200 shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-extrabold block text-blue-300 mb-0.5",
                                    children: "💡 Smart Decision Support:"
                                }, void 0, false, {
                                    fileName: "[project]/components/StatsPanel.tsx",
                                    lineNumber: 454,
                                    columnNumber: 17
                                }, this),
                                "Klik salah satu garis ruas jalan merah atau pin lokasi di peta untuk menampilkan",
                                ' ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "text-white",
                                    children: "Diagnosis Akar Masalah"
                                }, void 0, false, {
                                    fileName: "[project]/components/StatsPanel.tsx",
                                    lineNumber: 458,
                                    columnNumber: 17
                                }, this),
                                " dan",
                                ' ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "text-white",
                                    children: "Rekomendasi Tindakan BPBD"
                                }, void 0, false, {
                                    fileName: "[project]/components/StatsPanel.tsx",
                                    lineNumber: 459,
                                    columnNumber: 17
                                }, this),
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/StatsPanel.tsx",
                            lineNumber: 453,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/StatsPanel.tsx",
                    lineNumber: 302,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/StatsPanel.tsx",
            lineNumber: 269,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/StatsPanel.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_c = StatsPanel;
var _c;
__turbopack_context__.k.register(_c, "StatsPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/CCTVModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CCTV_LOCATIONS",
    ()=>CCTV_LOCATIONS,
    "default",
    ()=>CCTVModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const CCTV_LOCATIONS = [
    {
        id: 'cctv-usu',
        camLabel: 'ATCS CAM 01',
        name: 'CCTV Pintu 1 USU',
        location: 'Jl. Dr. Mansyur (Depan Pintu 1 USU)',
        coordinates: {
            lat: 3.5620,
            lng: 98.6565
        },
        streamCode: 'ATCS-MED-01-USU',
        floodStatus: '⚠️ Terendam (130cm)',
        safeStatus: 'Aman (Tidak Tergenang)',
        floodDepthCm: 130,
        direction: 'Menghadap Utara (Arah Jl. Setiabudi)',
        resolution: '1080p FHD · 25 FPS'
    },
    {
        id: 'cctv-simpang-pos',
        camLabel: 'ATCS CAM 02',
        name: 'CCTV Simpang Pos',
        location: 'Underpass & Flyover Simpang Pos (Jl. Jamin Ginting)',
        coordinates: {
            lat: 3.5402,
            lng: 98.6526
        },
        streamCode: 'ATCS-MED-02-SPOS',
        floodStatus: '🔴 Kolong 80cm',
        safeStatus: 'Aman (Tidak Tergenang)',
        floodDepthCm: 80,
        direction: 'Menghadap Selatan (Arah Padang Bulan)',
        resolution: '1080p FHD · 25 FPS'
    },
    {
        id: 'cctv-gatsu',
        camLabel: 'ATCS CAM 03',
        name: 'CCTV Underpass Gatsu',
        location: 'Underpass Jl. Gatot Subroto (Manhattan Mall)',
        coordinates: {
            lat: 3.5910,
            lng: 98.6265
        },
        streamCode: 'ATCS-MED-03-GATSU',
        floodStatus: '🟡 Pompa Trip Listrik',
        safeStatus: 'Aman (Tidak Tergenang)',
        floodDepthCm: 50,
        direction: 'Menghadap Barat (Arah Binjai)',
        resolution: '1080p FHD · 25 FPS'
    },
    {
        id: 'cctv-belawan',
        camLabel: 'ATCS CAM 04',
        name: 'CCTV Jembatan Belawan',
        location: 'Jembatan Sungai Belawan (Jl. Kol. Yos Sudarso)',
        coordinates: {
            lat: 3.6300,
            lng: 98.6680
        },
        streamCode: 'ATCS-MED-04-BLWN',
        floodStatus: '🌊 Luapan Ekstrem',
        safeStatus: 'Aman (Tidak Tergenang)',
        floodDepthCm: 90,
        direction: 'Menghadap Timur Laut (Arah Pelabuhan)',
        resolution: '1080p FHD · 25 FPS'
    }
];
// URL Gambar Realistis Feed CCTV (Kondisi Aman vs Kondisi Banjir)
const NORMAL_ROAD_IMG = 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800';
const FLOOD_ROAD_IMG = 'https://images.unsplash.com/photo-1542282811-943ef1a647a5?auto=format&fit=crop&q=80&w=800';
// Helper untuk format timestamp live sesuai standar CCTV ATCS
function formatCCTVTimestamp(date, hour, minute, second) {
    const timeStr = "".concat(String(hour).padStart(2, '0'), ":").concat(String(minute).padStart(2, '0'), ":").concat(String(second).padStart(2, '0'), " WIB");
    if (date === 'Hari Ini' || date === 'today' || date.toLowerCase().includes('hari ini')) {
        const todayStr = new Date().toISOString().split('T')[0];
        return "".concat(todayStr, " ").concat(timeStr);
    }
    if (date.includes('27 Nov') || date.includes('11-27')) {
        return "2025-11-27 ".concat(timeStr);
    }
    if (date.includes('11 Okt') || date.includes('10-11')) {
        return "2025-10-11 ".concat(timeStr);
    }
    if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
        return "".concat(date, " ").concat(timeStr);
    }
    return "".concat(date, " ").concat(timeStr);
}
function CCTVModal(param) {
    let { cctvName, selectedDate, timeMinutes = 720, isSafeState = false, onClose } = param;
    _s();
    const [seconds, setSeconds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isFlashing, setIsFlashing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [snapshotMsg, setSnapshotMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [panX, setPanX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [panY, setPanY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [zoom, setZoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    // Cari data CCTV berdasarkan nama atau id
    const camera = CCTV_LOCATIONS.find((c)=>c.name.toLowerCase() === cctvName.toLowerCase() || c.id === cctvName) || CCTV_LOCATIONS[0];
    // Ticking second timer untuk clock HUD kamera
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CCTVModal.useEffect": ()=>{
            const timer = setInterval({
                "CCTVModal.useEffect.timer": ()=>{
                    setSeconds({
                        "CCTVModal.useEffect.timer": (prev)=>(prev + 1) % 60
                    }["CCTVModal.useEffect.timer"]);
                }
            }["CCTVModal.useEffect.timer"], 1000);
            return ({
                "CCTVModal.useEffect": ()=>clearInterval(timer)
            })["CCTVModal.useEffect"];
        }
    }["CCTVModal.useEffect"], []);
    // Keyboard shortcut ESC untuk menutup modal
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CCTVModal.useEffect": ()=>{
            const handleKeyDown = {
                "CCTVModal.useEffect.handleKeyDown": (e)=>{
                    if (e.key === 'Escape') onClose();
                }
            }["CCTVModal.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "CCTVModal.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["CCTVModal.useEffect"];
        }
    }["CCTVModal.useEffect"], [
        onClose
    ]);
    // Format jam dan tanggal live
    const hour = Math.floor(timeMinutes / 60);
    const minute = timeMinutes % 60;
    const liveTimestamp = formatCCTVTimestamp(selectedDate, hour, minute, seconds);
    // Tangkap snapshot dummy
    const handleSnapshot = ()=>{
        setIsFlashing(true);
        setSnapshotMsg("Snapshot ".concat(camera.streamCode, " tersimpan ke log BPBD"));
        setTimeout(()=>setIsFlashing(false), 250);
        setTimeout(()=>setSnapshotMsg(null), 3000);
    };
    // Reset PTZ control
    const handleResetPTZ = ()=>{
        setPanX(0);
        setPanY(0);
        setZoom(1);
    };
    // Logika Gambar Feed: Jika isSafeState true gunakan jalanan normal, jika false gunakan jalanan banjir
    const currentFeedImage = isSafeState ? NORMAL_ROAD_IMG : FLOOD_ROAD_IMG;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "cctv-modal-title",
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-2xl w-[640px] max-w-[95vw] text-white flex flex-col animate-in fade-in zoom-in-95 duration-200",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 text-sm",
                                    children: "📹"
                                }, void 0, false, {
                                    fileName: "[project]/components/CCTVModal.tsx",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    id: "cctv-modal-title",
                                                    className: "text-sm font-black text-white tracking-tight",
                                                    children: [
                                                        "ATCS CAM · ",
                                                        camera.name.replace('CCTV ', '')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/CCTVModal.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 text-[10px] font-black animate-pulse",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "h-1.5 w-1.5 rounded-full bg-red-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/CCTVModal.tsx",
                                                            lineNumber: 195,
                                                            columnNumber: 19
                                                        }, this),
                                                        "🔴 LIVE"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/CCTVModal.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CCTVModal.tsx",
                                            lineNumber: 190,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-slate-400",
                                            children: [
                                                liveTimestamp,
                                                " · ",
                                                camera.streamCode
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CCTVModal.tsx",
                                            lineNumber: 199,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CCTVModal.tsx",
                                    lineNumber: 189,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CCTVModal.tsx",
                            lineNumber: 185,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "flex h-7 w-7 items-center justify-center rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/60 hover:bg-red-600 hover:text-white transition active:scale-95",
                            "aria-label": "Tutup jendela pemantauan CCTV",
                            title: "Tutup (Esc)",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/components/CCTVModal.tsx",
                            lineNumber: 205,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CCTVModal.tsx",
                    lineNumber: 184,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative aspect-video w-full bg-black overflow-hidden select-none group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: currentFeedImage,
                            alt: "Live feed CCTV ".concat(camera.name),
                            className: "w-full h-full object-cover grayscale-[20%] contrast-125 brightness-90 transition-transform duration-200 ease-out select-none pointer-events-none",
                            style: {
                                transform: "translate(".concat(panX, "px, ").concat(panY, "px) scale(").concat(zoom, ")")
                            },
                            loading: "eager",
                            draggable: false
                        }, void 0, false, {
                            fileName: "[project]/components/CCTVModal.tsx",
                            lineNumber: 219,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]"
                        }, void 0, false, {
                            fileName: "[project]/components/CCTVModal.tsx",
                            lineNumber: 231,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none absolute inset-0 z-10 shadow-[inset_0_0_80px_rgba(0,0,0,0.7)]"
                        }, void 0, false, {
                            fileName: "[project]/components/CCTVModal.tsx",
                            lineNumber: 234,
                            columnNumber: 11
                        }, this),
                        isFlashing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none absolute inset-0 z-30 bg-white/80 transition-opacity duration-200"
                        }, void 0, false, {
                            fileName: "[project]/components/CCTVModal.tsx",
                            lineNumber: 238,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-3 left-3.5 z-20 flex items-center gap-2 font-mono text-white text-sm drop-shadow-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-1.5 font-bold bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded border border-white/10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-2.5 w-2.5 rounded-full bg-red-600 animate-pulse shadow-sm shadow-red-500"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CCTVModal.tsx",
                                            lineNumber: 244,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-500 font-extrabold tracking-wider",
                                            children: "REC"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CCTVModal.tsx",
                                            lineNumber: 245,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CCTVModal.tsx",
                                    lineNumber: 243,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded font-bold tracking-wide border border-white/10",
                                    children: camera.camLabel || 'ATCS CAM 04'
                                }, void 0, false, {
                                    fileName: "[project]/components/CCTVModal.tsx",
                                    lineNumber: 247,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CCTVModal.tsx",
                            lineNumber: 242,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-3 right-3.5 z-20 font-mono text-white text-sm drop-shadow-md font-bold tracking-tight bg-black/50 backdrop-blur-xs px-2.5 py-0.5 rounded border border-white/10",
                            children: liveTimestamp
                        }, void 0, false, {
                            fileName: "[project]/components/CCTVModal.tsx",
                            lineNumber: 253,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-3 left-3.5 z-20 flex flex-col gap-1 font-mono text-[10px] text-white drop-shadow-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded text-slate-200 border border-white/10 max-w-[280px] sm:max-w-none truncate",
                                    children: [
                                        camera.location,
                                        " · ",
                                        camera.coordinates.lat.toFixed(4),
                                        "°N ",
                                        camera.coordinates.lng.toFixed(4),
                                        "°E"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CCTVModal.tsx",
                                    lineNumber: 259,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-2 py-0.5 rounded font-bold w-fit shadow-xs ".concat(isSafeState ? 'bg-emerald-950/90 border border-emerald-500/70 text-emerald-300' : 'bg-red-950/90 border border-red-500/70 text-red-300 animate-pulse'),
                                    children: isSafeState ? 'STATUS: ARTERI NORMAL (LANCAR)' : "ELEVASI GENANGAN: ".concat(camera.floodDepthCm, " CM (KRITIS)")
                                }, void 0, false, {
                                    fileName: "[project]/components/CCTVModal.tsx",
                                    lineNumber: 262,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CCTVModal.tsx",
                            lineNumber: 258,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-3 right-3.5 z-20 flex flex-col items-end gap-1 font-mono text-[10px] text-white drop-shadow-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded text-emerald-400 font-bold border border-white/10",
                                    children: "SIGNAL: ████ 98% · 25.0 FPS"
                                }, void 0, false, {
                                    fileName: "[project]/components/CCTVModal.tsx",
                                    lineNumber: 275,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded text-slate-300 border border-white/10",
                                    children: [
                                        "PTZ: Z",
                                        zoom.toFixed(1),
                                        "x ",
                                        panX !== 0 || panY !== 0 ? "[P:".concat(panX, " T:").concat(panY, "]") : '[CTR]'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CCTVModal.tsx",
                                    lineNumber: 278,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CCTVModal.tsx",
                            lineNumber: 274,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CCTVModal.tsx",
                    lineNumber: 217,
                    columnNumber: 9
                }, this),
                snapshotMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-emerald-950 border-y border-emerald-500/40 px-4 py-1.5 text-xs text-emerald-300 font-bold flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "📸"
                                }, void 0, false, {
                                    fileName: "[project]/components/CCTVModal.tsx",
                                    lineNumber: 288,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: snapshotMsg
                                }, void 0, false, {
                                    fileName: "[project]/components/CCTVModal.tsx",
                                    lineNumber: 289,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CCTVModal.tsx",
                            lineNumber: 287,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] text-emerald-400 font-normal",
                            children: "Tersimpan"
                        }, void 0, false, {
                            fileName: "[project]/components/CCTVModal.tsx",
                            lineNumber: 291,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CCTVModal.tsx",
                    lineNumber: 286,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3.5 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-w-0 flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block font-bold text-slate-200 text-xs truncate",
                                    children: camera.location
                                }, void 0, false, {
                                    fileName: "[project]/components/CCTVModal.tsx",
                                    lineNumber: 299,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block text-[11px] text-slate-400 truncate mt-0.5",
                                    children: [
                                        "Status Operasional: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            className: isSafeState ? 'text-emerald-400' : 'text-red-400',
                                            children: isSafeState ? camera.safeStatus : camera.floodStatus
                                        }, void 0, false, {
                                            fileName: "[project]/components/CCTVModal.tsx",
                                            lineNumber: 303,
                                            columnNumber: 35
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CCTVModal.tsx",
                                    lineNumber: 302,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CCTVModal.tsx",
                            lineNumber: 298,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-lg p-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setPanX((p)=>Math.max(-40, p - 10)),
                                            className: "h-6 w-6 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center font-bold text-[10px] transition",
                                            title: "Geser Kiri (Pan Left)",
                                            children: "◀"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CCTVModal.tsx",
                                            lineNumber: 311,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setPanY((p)=>Math.min(30, p + 10)),
                                            className: "h-6 w-6 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center font-bold text-[10px] transition",
                                            title: "Geser Atas (Tilt Up)",
                                            children: "▲"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CCTVModal.tsx",
                                            lineNumber: 319,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setPanY((p)=>Math.max(-30, p - 10)),
                                            className: "h-6 w-6 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center font-bold text-[10px] transition",
                                            title: "Geser Bawah (Tilt Down)",
                                            children: "▼"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CCTVModal.tsx",
                                            lineNumber: 327,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setPanX((p)=>Math.min(40, p + 10)),
                                            className: "h-6 w-6 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center font-bold text-[10px] transition",
                                            title: "Geser Kanan (Pan Right)",
                                            children: "▶"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CCTVModal.tsx",
                                            lineNumber: 335,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setZoom((z)=>Math.min(2.5, z + 0.25)),
                                            className: "h-6 w-6 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center font-bold text-[10px] transition",
                                            title: "Zoom In",
                                            children: "+"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CCTVModal.tsx",
                                            lineNumber: 343,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setZoom((z)=>Math.max(1, z - 0.25)),
                                            className: "h-6 w-6 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center font-bold text-[10px] transition",
                                            title: "Zoom Out",
                                            children: "-"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CCTVModal.tsx",
                                            lineNumber: 351,
                                            columnNumber: 15
                                        }, this),
                                        (panX !== 0 || panY !== 0 || zoom !== 1) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: handleResetPTZ,
                                            className: "px-1.5 h-6 rounded bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold text-[9px] transition",
                                            title: "Reset Posisi Kamera",
                                            children: "Reset"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CCTVModal.tsx",
                                            lineNumber: 360,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CCTVModal.tsx",
                                    lineNumber: 310,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleSnapshot,
                                    className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow transition active:scale-95 cursor-pointer",
                                    title: "Ambil tangkapan layar CCTV untuk arsip pelaporan",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "📸"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CCTVModal.tsx",
                                            lineNumber: 378,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden sm:inline",
                                            children: "Snapshot"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CCTVModal.tsx",
                                            lineNumber: 379,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CCTVModal.tsx",
                                    lineNumber: 372,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CCTVModal.tsx",
                            lineNumber: 308,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CCTVModal.tsx",
                    lineNumber: 296,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/CCTVModal.tsx",
            lineNumber: 179,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/CCTVModal.tsx",
        lineNumber: 172,
        columnNumber: 5
    }, this);
}
_s(CCTVModal, "p3QXg9Bo94EKU8bVdQA+CEi08IM=");
_c = CCTVModal;
var _c;
__turbopack_context__.k.register(_c, "CCTVModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/dashboard/history/snapped-segments.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"nov2025\":[{\"id\":\"SEG-NOV-01\",\"name\":\"Jl. Dr. Mansyur (Pintu 1 s.d. RS USU)\",\"start\":{\"lng\":98.6575,\"lat\":3.5627},\"end\":{\"lng\":98.6525,\"lat\":3.5592},\"center\":{\"lng\":98.6565,\"lat\":3.562},\"peakCm\":130,\"severityGrade\":\"very-critical\",\"badgeLabel\":\"Sangat Kritis (130 cm)\",\"lineColor\":\"#991b1b\",\"notes\":\"Jalanan bak lautan lepas (50–130 cm), ruko tutup total, puluhan kendaraan mogok.\",\"sourceUrl\":\"https://www.detik.com/sumut/berita/d-banjir-medan-dr-mansyur-depan-usu-bak-lautan-november-2025\",\"coordinates\":[[98.657619,3.562702],[98.657615,3.562938],[98.657774,3.562943],[98.658287,3.562958],[98.658324,3.562958],[98.658447,3.562962],[98.659296,3.562981],[98.659777,3.563001],[98.660102,3.56301],[98.660222,3.563014],[98.660208,3.56339],[98.66019,3.563867],[98.660161,3.564681],[98.660142,3.565229],[98.660141,3.565259],[98.660126,3.56567],[98.660113,3.566054],[98.660099,3.566558],[98.66008,3.567333],[98.659855,3.567334],[98.659529,3.567336],[98.659001,3.567338],[98.658809,3.567339],[98.658478,3.56734],[98.657693,3.567341],[98.657674,3.567343],[98.657547,3.567345],[98.656288,3.567351],[98.65592,3.567352],[98.655797,3.567352],[98.654871,3.567353],[98.653488,3.567382],[98.6533,3.567386],[98.653219,3.567388],[98.653047,3.567399],[98.652853,3.567415],[98.652418,3.567432],[98.652393,3.566662],[98.652382,3.566304],[98.652361,3.565818],[98.652327,3.565233],[98.652271,3.564282],[98.652238,3.563565],[98.652221,3.563145],[98.652206,3.562897],[98.652175,3.562383],[98.652155,3.561912],[98.652144,3.561519],[98.652143,3.561258],[98.652133,3.560694],[98.652116,3.559049],[98.652393,3.559042]]},{\"id\":\"SEG-NOV-02\",\"name\":\"Jl. Letjen Jamin Ginting (Flyover Simpang Pos)\",\"start\":{\"lng\":98.6535,\"lat\":3.542},\"end\":{\"lng\":98.6515,\"lat\":3.5375},\"center\":{\"lng\":98.6526,\"lat\":3.5402},\"peakCm\":80,\"severityGrade\":\"critical\",\"badgeLabel\":\"Kritis (80 cm)\",\"lineColor\":\"#dc2626\",\"notes\":\"Cekungan kolong flyover Simpang Pos terendam parah hingga 80 cm, jalur Medan–Berastagi terputus >12 jam.\",\"sourceUrl\":\"https://www.dnaberita.com/berita/medan-dikepung-banjir-raya-simpang-kampung-lalang-gatot-subroto\",\"coordinates\":[[98.653815,3.541991],[98.653811,3.541698],[98.654151,3.541716],[98.655125,3.541754],[98.655759,3.542513],[98.655851,3.542511],[98.655391,3.541933],[98.655223,3.541733],[98.655205,3.541712],[98.654668,3.541085],[98.65444,3.540824],[98.654381,3.54075],[98.654348,3.540713],[98.654297,3.540654],[98.654179,3.540518],[98.653905,3.540208],[98.653848,3.540147],[98.653367,3.539575],[98.652575,3.538684],[98.652424,3.538512],[98.65224,3.538293],[98.652154,3.53819],[98.651952,3.537963],[98.651529,3.537475]]},{\"id\":\"SEG-NOV-03\",\"name\":\"Jl. Ringroad / Gagak Hitam (Sekitar Tasbi 1 & Manhattan)\",\"start\":{\"lng\":98.627,\"lat\":3.5725},\"end\":{\"lng\":98.6278,\"lat\":3.5665},\"center\":{\"lng\":98.6275,\"lat\":3.5695},\"peakCm\":65,\"severityGrade\":\"critical\",\"badgeLabel\":\"Kritis (65 cm)\",\"lineColor\":\"#dc2626\",\"notes\":\"Lajur lambat dan putaran balik terendam 65 cm, antrean macet mobil dan truk mengular >3 km.\",\"sourceUrl\":\"https://www.dnaberita.com/berita/medan-dikepung-banjir-raya-simpang-kampung-lalang-gatot-subroto\",\"coordinates\":[[98.627127,3.572495],[98.627113,3.572154],[98.626708,3.572176],[98.626215,3.572211],[98.626178,3.570925],[98.626161,3.56993],[98.626163,3.569871],[98.626193,3.569134],[98.626221,3.568427],[98.626201,3.567667],[98.6262,3.567548],[98.626402,3.567533],[98.627779,3.567472],[98.627843,3.567476],[98.628064,3.566939],[98.628517,3.565921],[98.628838,3.565141],[98.628997,3.564769],[98.629104,3.564535],[98.629139,3.564459],[98.629179,3.564376],[98.629166,3.5643],[98.629178,3.56427],[98.629183,3.56424],[98.629178,3.564214],[98.629171,3.564198],[98.629162,3.564183],[98.62915,3.56417],[98.629136,3.564159],[98.62912,3.564151],[98.629103,3.564146],[98.629048,3.564149],[98.629002,3.564181],[98.628981,3.564232],[98.628715,3.564278],[98.628491,3.564329],[98.628504,3.564397],[98.628522,3.564626],[98.628467,3.564888],[98.628403,3.565032],[98.628316,3.565152],[98.628198,3.565297],[98.628111,3.565372],[98.628016,3.565436],[98.628053,3.565714],[98.628012,3.565903],[98.627823,3.566271],[98.627736,3.566473]]},{\"id\":\"SEG-NOV-04\",\"name\":\"Jl. Gatot Subroto (Simpang Pondok Kelapa / Underpass)\",\"start\":{\"lng\":98.6235,\"lat\":3.593},\"end\":{\"lng\":98.6295,\"lat\":3.5895},\"center\":{\"lng\":98.6265,\"lat\":3.591},\"peakCm\":85,\"severityGrade\":\"critical\",\"badgeLabel\":\"Kritis (85 cm)\",\"lineColor\":\"#dc2626\",\"notes\":\"Arus limpasan jalan raya sangat deras dan berbahaya, angkutan antar-kota terjebak total.\",\"sourceUrl\":\"https://www.dnaberita.com/berita/medan-dikepung-banjir-raya-simpang-kampung-lalang-gatot-subroto\",\"coordinates\":[[98.623527,3.59299],[98.623375,3.592592],[98.623325,3.592341],[98.62329,3.592251],[98.623773,3.592053],[98.624038,3.591949],[98.624409,3.591857],[98.624657,3.591813],[98.624886,3.591795],[98.626976,3.591685],[98.627432,3.591662],[98.629386,3.591501],[98.629995,3.591451],[98.630124,3.591445],[98.630308,3.591438],[98.630591,3.591426],[98.630849,3.591415],[98.630963,3.59141],[98.631148,3.591402],[98.631217,3.591399],[98.631525,3.591386],[98.6316,3.591383],[98.631765,3.591372],[98.63176,3.591282],[98.631605,3.591285],[98.631443,3.59129],[98.631147,3.591307],[98.631147,3.59122],[98.631145,3.590195],[98.630631,3.590211],[98.630528,3.59022],[98.630149,3.590251],[98.629804,3.590268],[98.629765,3.589519]]},{\"id\":\"SEG-NOV-05\",\"name\":\"Jl. TB Simatupang (Simpang Kampung Lalang & Pinang Baris)\",\"start\":{\"lng\":98.609,\"lat\":3.596},\"end\":{\"lng\":98.614,\"lat\":3.5915},\"center\":{\"lng\":98.6115,\"lat\":3.5938},\"peakCm\":120,\"severityGrade\":\"extreme\",\"badgeLabel\":\"Ekstrem (120 cm)\",\"lineColor\":\"#7f1d1d\",\"notes\":\"Ketinggian air mencapai dada orang dewasa (1.2m), jalur utama Medan–Binjai lumpuh 2 hari penuh.\",\"sourceUrl\":\"https://regional.kompas.com/read/2025/11/27/banjir-kota-medan-19-kecamatan-terdampak\",\"coordinates\":[[98.609121,3.596008],[98.609109,3.596189],[98.609105,3.596304],[98.609065,3.596707],[98.609161,3.596711],[98.609244,3.596685],[98.609812,3.596471],[98.610056,3.596392],[98.610255,3.596313],[98.610363,3.596262],[98.610502,3.596174],[98.610578,3.596136],[98.610864,3.596027],[98.611233,3.595925],[98.611004,3.595375],[98.610949,3.595211],[98.610942,3.595157],[98.610944,3.595124],[98.610948,3.59508],[98.611246,3.594942],[98.611528,3.594807],[98.612087,3.594556],[98.61241,3.594415],[98.612806,3.594239],[98.613147,3.594112],[98.613643,3.59394],[98.613428,3.593308],[98.613363,3.593119],[98.614529,3.592621],[98.61442,3.592379],[98.614392,3.592251],[98.614351,3.591963],[98.614327,3.591704],[98.614299,3.591274],[98.614282,3.591149],[98.613859,3.591185],[98.613847,3.591192],[98.613835,3.591218],[98.613867,3.591514]]},{\"id\":\"SEG-NOV-06\",\"name\":\"Jl. Setia Budi (Tanjung Sari / Pasar 1 - 2)\",\"start\":{\"lng\":98.647,\"lat\":3.562},\"end\":{\"lng\":98.649,\"lat\":3.557},\"center\":{\"lng\":98.6482,\"lat\":3.5595},\"peakCm\":75,\"severityGrade\":\"critical\",\"badgeLabel\":\"Kritis (75 cm)\",\"lineColor\":\"#dc2626\",\"notes\":\"Drainase primer meluap mengisolasi permukiman kos mahasiswa Tanjung Sari.\",\"sourceUrl\":\"https://regional.kompas.com/read/2025/11/27/banjir-kota-medan-19-kecamatan-terdampak\",\"coordinates\":[[98.646982,3.561886],[98.646969,3.561315],[98.648094,3.561297],[98.64837,3.561294],[98.648397,3.561306],[98.648406,3.561338],[98.648413,3.561714],[98.648411,3.562133],[98.648414,3.562927],[98.649337,3.5629],[98.650028,3.562906],[98.650182,3.562909],[98.650868,3.562899],[98.652136,3.562899],[98.652185,3.562898],[98.652206,3.562897],[98.652175,3.562383],[98.652155,3.561912],[98.652144,3.561519],[98.652143,3.561258],[98.652133,3.560694],[98.652116,3.559049],[98.651947,3.559047],[98.651308,3.559055],[98.651177,3.559055],[98.650866,3.55905],[98.65019,3.559049],[98.650021,3.559058],[98.649817,3.559061],[98.649457,3.559053],[98.649309,3.559054],[98.648992,3.559058],[98.648831,3.559059],[98.648613,3.559057],[98.648614,3.559001],[98.648633,3.557366],[98.648647,3.556987]]},{\"id\":\"SEG-NOV-07\",\"name\":\"Jl. Brigjend Katamso (Kawasan Simpang Juanda)\",\"start\":{\"lng\":98.6835,\"lat\":3.5715},\"end\":{\"lng\":98.6865,\"lat\":3.5665},\"center\":{\"lng\":98.685,\"lat\":3.569},\"peakCm\":90,\"severityGrade\":\"critical\",\"badgeLabel\":\"Kritis (90 cm)\",\"lineColor\":\"#dc2626\",\"notes\":\"Luapan Sungai Deli sangat deras mencapai aspal jalan 90 cm.\",\"sourceUrl\":\"https://www.beritasatu.com/nusantara/2025/11/banjir-besar-kota-medan-evakuasi-sar\",\"coordinates\":[[98.683564,3.571314],[98.683656,3.57131],[98.683751,3.571316],[98.683829,3.571328],[98.68388,3.571345],[98.683861,3.571492],[98.683851,3.571719],[98.683852,3.571747],[98.683822,3.572258],[98.683818,3.572341],[98.683562,3.572334],[98.683279,3.572326],[98.682772,3.572303],[98.682726,3.572302],[98.68223,3.572278],[98.681859,3.572255],[98.681735,3.572238],[98.681699,3.572236],[98.681667,3.572243],[98.681601,3.572264],[98.68156,3.572244],[98.681515,3.572239],[98.681467,3.572254],[98.681429,3.572286],[98.681406,3.57233],[98.681403,3.57238],[98.681419,3.572427],[98.681448,3.572459],[98.681485,3.57248],[98.68152,3.572484],[98.681572,3.572478],[98.681636,3.572422],[98.681728,3.572378],[98.681785,3.572355],[98.681837,3.572346],[98.682221,3.572347],[98.682725,3.572372],[98.68329,3.572397],[98.683793,3.572426],[98.684132,3.572432],[98.684287,3.572435],[98.684811,3.572448],[98.68526,3.572466],[98.685316,3.57247],[98.685469,3.572471],[98.685589,3.572476],[98.685691,3.572481],[98.685716,3.572407],[98.685778,3.572217],[98.685798,3.572155],[98.685871,3.571921],[98.685947,3.571675],[98.686045,3.571372],[98.686261,3.570687],[98.686334,3.570498],[98.686405,3.570324],[98.686529,3.570062],[98.686631,3.569814],[98.686742,3.569563],[98.686793,3.569448],[98.68687,3.569277],[98.686918,3.569168],[98.687063,3.56883],[98.687221,3.568491],[98.687261,3.568401],[98.687558,3.567733],[98.687723,3.56744],[98.687768,3.567376],[98.687904,3.567188],[98.688017,3.56703],[98.688164,3.566845],[98.688363,3.566585],[98.688642,3.56624],[98.688716,3.566141],[98.688931,3.565839],[98.689067,3.565656],[98.688994,3.565608],[98.688735,3.565987],[98.688594,3.566184],[98.688363,3.566464],[98.688226,3.566645],[98.688129,3.566772],[98.687946,3.567003],[98.686908,3.566566],[98.686776,3.566506],[98.686724,3.56647],[98.686564,3.566482],[98.686546,3.56648],[98.686523,3.566472]]}],\"oct2025\":[{\"id\":\"SEG-OCT-01\",\"name\":\"Jl. Dr. Mansyur (RS USU & Kolam Retensi)\",\"start\":{\"lng\":98.654,\"lat\":3.5605},\"end\":{\"lng\":98.6515,\"lat\":3.5585},\"center\":{\"lng\":98.6525,\"lat\":3.5592},\"peakCm\":45,\"severityGrade\":\"moderate\",\"badgeLabel\":\"Sedang (45 cm)\",\"lineColor\":\"#d97706\",\"notes\":\"Air cokelat pekat luapan Sungai Babura & saluran Parit Benggali.\",\"sourceUrl\":\"https://medan.kompas.com/read/2025/10/12/banjir-medan-sejumlah-ruas-jalan-terendam\",\"coordinates\":[[98.654051,3.560678],[98.654198,3.560675],[98.654676,3.56067],[98.655409,3.560661],[98.655919,3.560654],[98.65592,3.560632],[98.655932,3.560168],[98.655955,3.559463],[98.655969,3.559331],[98.655989,3.559135],[98.655885,3.55906],[98.655006,3.559061],[98.654629,3.559062],[98.654598,3.559061],[98.654035,3.559056],[98.653034,3.559047],[98.65299,3.559046],[98.652909,3.559046],[98.652951,3.560748],[98.652992,3.562445],[98.653011,3.563091],[98.653021,3.563428],[98.653062,3.564409],[98.653099,3.565092],[98.653154,3.565966],[98.653172,3.566351],[98.65321,3.56718],[98.653212,3.567207],[98.653213,3.567243],[98.653219,3.567388],[98.653047,3.567399],[98.652853,3.567415],[98.652418,3.567432],[98.652393,3.566662],[98.652382,3.566304],[98.652361,3.565818],[98.652327,3.565233],[98.652271,3.564282],[98.652238,3.563565],[98.652221,3.563145],[98.652206,3.562897],[98.652175,3.562383],[98.652155,3.561912],[98.652144,3.561519],[98.652143,3.561258],[98.652133,3.560694],[98.652116,3.559049],[98.651947,3.559047],[98.651308,3.559055],[98.65132,3.558496]]},{\"id\":\"SEG-OCT-02\",\"name\":\"Jl. Letjen Jamin Ginting (Pajus / Pasar Baru)\",\"start\":{\"lng\":98.658,\"lat\":3.553},\"end\":{\"lng\":98.66,\"lat\":3.549},\"center\":{\"lng\":98.659,\"lat\":3.551},\"peakCm\":35,\"severityGrade\":\"moderate\",\"badgeLabel\":\"Sedang (35 cm)\",\"lineColor\":\"#d97706\",\"notes\":\"Genangan merata di depan Pasar Sore/Pajus hingga Simpang Pasar Baru.\",\"sourceUrl\":\"https://www.detik.com/sumut/berita/d-banjir-medan-dr-mansyur-usu-oktober-2025\",\"coordinates\":[[98.657992,3.553],[98.657991,3.552754],[98.65799,3.552088],[98.65943,3.552075],[98.660074,3.552072],[98.660147,3.552065],[98.66005,3.551746],[98.660027,3.55167],[98.659993,3.551549],[98.65997,3.551469],[98.659918,3.551212],[98.659899,3.55103],[98.659766,3.549278],[98.659758,3.549158],[98.660096,3.549144],[98.660076,3.54899]]},{\"id\":\"SEG-OCT-03\",\"name\":\"Jl. Wahid Hasyim (Kecamatan Medan Baru)\",\"start\":{\"lng\":98.655,\"lat\":3.573},\"end\":{\"lng\":98.657,\"lat\":3.569},\"center\":{\"lng\":98.656,\"lat\":3.571},\"peakCm\":35,\"severityGrade\":\"moderate\",\"badgeLabel\":\"Sedang (35 cm)\",\"lineColor\":\"#d97706\",\"notes\":\"Luapan saluran drainase sekunder merendam badan jalan.\",\"sourceUrl\":\"https://www.detik.com/sumut/berita/d-banjir-medan-dr-mansyur-usu-oktober-2025\",\"coordinates\":[[98.65507,3.572809],[98.655056,3.572436],[98.655351,3.572428],[98.655815,3.572412],[98.655798,3.571737],[98.654293,3.571783],[98.653225,3.571803],[98.653137,3.571802],[98.653066,3.571805],[98.653036,3.571806],[98.652998,3.571717],[98.65296,3.571626],[98.652918,3.571553],[98.652871,3.571473],[98.652802,3.571351],[98.652776,3.571296],[98.652764,3.571233],[98.652764,3.57116],[98.652764,3.571102],[98.652757,3.571051],[98.652747,3.571008],[98.652709,3.570905],[98.652667,3.570799],[98.652608,3.570589],[98.652551,3.570389],[98.652522,3.570277],[98.652425,3.569504],[98.652403,3.569349],[98.652385,3.569197],[98.652365,3.569001],[98.652333,3.56887],[98.652296,3.568734],[98.652264,3.568655],[98.652252,3.568585],[98.652252,3.568523],[98.652264,3.568453],[98.65228,3.568409],[98.652321,3.568355],[98.65236,3.568299],[98.652378,3.568263],[98.652383,3.56824],[98.652385,3.568214],[98.652371,3.568095],[98.652352,3.567967],[98.652346,3.567862],[98.652332,3.567499],[98.652354,3.567497],[98.652429,3.567494],[98.652824,3.567488],[98.653243,3.567467],[98.654864,3.567453],[98.6558,3.567455],[98.655804,3.567766],[98.655815,3.56929],[98.655818,3.569427],[98.655822,3.569543],[98.657121,3.569468],[98.656614,3.569038],[98.656608,3.569027],[98.65661,3.569016],[98.657,3.569006]]},{\"id\":\"SEG-OCT-04\",\"name\":\"Jl. Kapten Patimura (Simpang Babura / RS Elisabeth)\",\"start\":{\"lng\":98.6635,\"lat\":3.57},\"end\":{\"lng\":98.6665,\"lat\":3.566},\"center\":{\"lng\":98.665,\"lat\":3.568},\"peakCm\":30,\"severityGrade\":\"moderate\",\"badgeLabel\":\"Sedang (30 cm)\",\"lineColor\":\"#d97706\",\"notes\":\"Air sungai meluap di sekitar jembatan Sungai Babura.\",\"sourceUrl\":\"https://www.cnnindonesia.com/nasional/20251012-banjir-medan-tujuh-kecamatan\",\"coordinates\":[[98.66331,3.570005],[98.663304,3.569762],[98.663324,3.569761],[98.663737,3.569741],[98.664886,3.569687],[98.665329,3.569709],[98.665934,3.56825],[98.666069,3.567893],[98.666177,3.567621],[98.666297,3.567335],[98.666401,3.567072],[98.666457,3.566892],[98.666467,3.566864],[98.666475,3.566842],[98.666484,3.566825],[98.666493,3.56681],[98.666505,3.566797],[98.666519,3.566787],[98.666538,3.566779],[98.666561,3.566774],[98.666822,3.566753],[98.666801,3.566581],[98.666795,3.566482],[98.666794,3.566424],[98.666797,3.56638],[98.666804,3.566325],[98.666822,3.566273],[98.666853,3.566219]]},{\"id\":\"SEG-OCT-05\",\"name\":\"Jl. Sei Batang Hari (Babura Sunggal)\",\"start\":{\"lng\":98.645,\"lat\":3.574},\"end\":{\"lng\":98.649,\"lat\":3.57},\"center\":{\"lng\":98.647,\"lat\":3.572},\"peakCm\":40,\"severityGrade\":\"moderate\",\"badgeLabel\":\"Sedang (40 cm)\",\"lineColor\":\"#d97706\",\"notes\":\"Limpasan anak sungai Babura meluap ke aspal dan pemukiman.\",\"sourceUrl\":\"https://mistar.id/medan/kolam-retensi-usu-meluber-drainase-medan\",\"coordinates\":[[98.644875,3.574149],[98.643836,3.574164],[98.643836,3.573958],[98.643841,3.573807],[98.643849,3.573594],[98.643858,3.573049],[98.643977,3.573037],[98.644431,3.573025],[98.644922,3.573004],[98.644902,3.572037],[98.644896,3.571909],[98.644886,3.571681],[98.644854,3.571453],[98.644804,3.570967],[98.644795,3.570881],[98.644769,3.570521],[98.646468,3.570436],[98.646577,3.570422],[98.646652,3.570403],[98.646754,3.570353],[98.646856,3.570275],[98.646887,3.570298],[98.646945,3.570304],[98.647322,3.570285],[98.647589,3.570285],[98.647763,3.570283],[98.647933,3.570282],[98.648227,3.570288],[98.648463,3.570286],[98.648998,3.570293],[98.649094,3.570295],[98.649305,3.570296],[98.64929,3.569829],[98.649285,3.569814],[98.64927,3.569805],[98.649186,3.569804]]},{\"id\":\"SEG-OCT-06\",\"name\":\"Jl. Ayahanda (Depan RS Royal Prima)\",\"start\":{\"lng\":98.6565,\"lat\":3.59},\"end\":{\"lng\":98.6595,\"lat\":3.586},\"center\":{\"lng\":98.658,\"lat\":3.588},\"peakCm\":35,\"severityGrade\":\"moderate\",\"badgeLabel\":\"Sedang (35 cm)\",\"lineColor\":\"#d97706\",\"notes\":\"Genangan mencapai 35 cm di depan RS Royal Prima.\",\"sourceUrl\":\"https://www.viva.co.id/berita/nasional/banjir-medan-peninjauan-wali-kota\",\"coordinates\":[[98.656502,3.590042],[98.656296,3.590052],[98.656145,3.590059],[98.655703,3.590082],[98.655706,3.590212],[98.65806,3.590093],[98.658083,3.590092],[98.658165,3.590091],[98.658251,3.590087],[98.658256,3.589983],[98.658252,3.589765],[98.658261,3.589578],[98.65828,3.589225],[98.658906,3.589333],[98.659633,3.589481],[98.659613,3.588689],[98.659618,3.588097],[98.659599,3.587536],[98.659578,3.586966],[98.659559,3.586422],[98.659524,3.585998]]},{\"id\":\"SEG-OCT-07\",\"name\":\"Jl. Brigjend Katamso (Kampung Aur & Sei Mati)\",\"start\":{\"lng\":98.6815,\"lat\":3.576},\"end\":{\"lng\":98.6845,\"lat\":3.572},\"center\":{\"lng\":98.683,\"lat\":3.574},\"peakCm\":50,\"severityGrade\":\"critical\",\"badgeLabel\":\"Kritis Bantaran (50 cm)\",\"lineColor\":\"#dc2626\",\"notes\":\"Luapan Sungai Deli meluap ke badan jalan raya 50 cm.\",\"sourceUrl\":\"https://medan.kompas.com/read/2025/10/12/banjir-medan-sejumlah-ruas-jalan-terendam\",\"coordinates\":[[98.6815,3.575984],[98.680268,3.575956],[98.680438,3.575494],[98.68015,3.575419],[98.680132,3.575396],[98.680059,3.575368],[98.680002,3.575342],[98.680001,3.575298],[98.679986,3.575268],[98.679914,3.575233],[98.680135,3.574905],[98.680137,3.574902],[98.680185,3.574832],[98.680552,3.574404],[98.680775,3.574176],[98.681045,3.573969],[98.681119,3.573891],[98.681161,3.573839],[98.68121,3.573746],[98.681232,3.573662],[98.681223,3.573553],[98.681197,3.573433],[98.6809,3.573111],[98.681,3.573073],[98.681117,3.57303],[98.681214,3.572979],[98.681281,3.572922],[98.681375,3.572792],[98.681448,3.57271],[98.681496,3.572631],[98.681572,3.572478],[98.681636,3.572422],[98.681728,3.572378],[98.681785,3.572355],[98.681837,3.572346],[98.682221,3.572347],[98.682725,3.572372],[98.68329,3.572397],[98.683793,3.572426],[98.684132,3.572432],[98.684287,3.572435],[98.684811,3.572448],[98.68526,3.572466],[98.685316,3.57247],[98.685366,3.572507],[98.685417,3.572551],[98.685444,3.572581],[98.685469,3.572615],[98.685491,3.57266],[98.685506,3.572709],[98.685513,3.572759],[98.685385,3.573192],[98.685235,3.573693],[98.685194,3.573816],[98.685063,3.57428],[98.685005,3.574468],[98.684943,3.574765],[98.68504,3.574786],[98.685059,3.574687],[98.685158,3.574266],[98.685268,3.573865],[98.685314,3.573709],[98.685372,3.573526],[98.685484,3.573138],[98.685584,3.572826],[98.685615,3.572728],[98.685631,3.572676],[98.685662,3.572576],[98.685691,3.572481],[98.685716,3.572407],[98.685611,3.572401],[98.685476,3.572394],[98.68544,3.572392],[98.68542,3.57239],[98.685379,3.572387],[98.684952,3.57237],[98.684867,3.572368],[98.684491,3.572358]]}]}"));}),
"[project]/app/dashboard/history/cascading-traffic.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"nov2025\":[{\"id\":\"CASC-NOV-1\",\"spotId\":\"SEG-NOV-01\",\"tier\":\"orange\",\"name\":\"Antrean Dr. Mansyur Timur (ke Jembatan Babura)\",\"coordinates\":[[98.657619,3.562702],[98.657615,3.562938],[98.657774,3.562943],[98.658287,3.562958],[98.658324,3.562958],[98.658447,3.562962],[98.659296,3.562981],[98.659777,3.563001],[98.660102,3.56301],[98.660222,3.563014],[98.660318,3.563017],[98.660324,3.562856],[98.660366,3.562858],[98.660504,3.562862]]},{\"id\":\"CASC-NOV-2\",\"spotId\":\"SEG-NOV-01\",\"tier\":\"orange\",\"name\":\"Antrean Dr. Mansyur Barat (ke Simpang Setia Budi)\",\"coordinates\":[[98.652393,3.559042],[98.652116,3.559049],[98.651947,3.559047],[98.651308,3.559055],[98.651177,3.559055],[98.650866,3.55905],[98.65019,3.559049],[98.650021,3.559058],[98.649817,3.559061],[98.649457,3.559053],[98.649309,3.559054],[98.648992,3.559058],[98.648831,3.559059],[98.648613,3.559057],[98.648441,3.559057],[98.648158,3.559054],[98.648159,3.559109]]},{\"id\":\"CASC-NOV-3\",\"spotId\":\"SEG-NOV-01\",\"tier\":\"yellow\",\"name\":\"Pengalihan Patimura (Babura ke RS Elisabeth)\",\"coordinates\":[[98.660504,3.562862],[98.660366,3.562858],[98.660324,3.562856],[98.660335,3.562576],[98.660238,3.562565],[98.660222,3.563014],[98.660208,3.56339],[98.66019,3.563867],[98.660161,3.564681],[98.660142,3.565229],[98.660141,3.565259],[98.660126,3.56567],[98.660113,3.566054],[98.660099,3.566558],[98.66008,3.567333],[98.659855,3.567334],[98.659529,3.567336],[98.659001,3.567338],[98.658809,3.567339],[98.658478,3.56734],[98.657693,3.567341],[98.657674,3.567343],[98.657547,3.567345],[98.657549,3.567436],[98.657574,3.567435],[98.658497,3.567418],[98.65881,3.56741],[98.659005,3.567412],[98.660073,3.567423],[98.660538,3.567425],[98.660582,3.56749],[98.660609,3.56756],[98.66063,3.567651],[98.660025,3.568394],[98.659968,3.568505],[98.659891,3.568677],[98.659857,3.568833],[98.659838,3.569004],[98.65984,3.569402],[98.659854,3.569513],[98.659882,3.569734],[98.659883,3.569808],[98.659919,3.569992],[98.660017,3.570377],[98.660096,3.570635],[98.660127,3.570741],[98.660149,3.570822],[98.660279,3.571012],[98.660407,3.571178],[98.660583,3.571378],[98.660704,3.571523],[98.660801,3.571637],[98.660874,3.571706],[98.660946,3.571786],[98.661152,3.572038],[98.661865,3.572891],[98.661902,3.572942],[98.662229,3.573366],[98.662307,3.573469],[98.662378,3.573519],[98.662521,3.573673],[98.66267,3.573833],[98.662731,3.573903],[98.662845,3.574003],[98.662961,3.574091],[98.66313,3.57418],[98.663291,3.574232],[98.663498,3.574278],[98.663659,3.574318],[98.6639,3.574369],[98.663932,3.574376],[98.664259,3.574454],[98.66441,3.574486],[98.664617,3.57454],[98.664687,3.57456],[98.664835,3.574592],[98.664981,3.574638],[98.665106,3.57468],[98.665268,3.574762],[98.665333,3.574798],[98.665366,3.574818],[98.665423,3.574847],[98.665563,3.574951],[98.665612,3.57499],[98.665685,3.575076],[98.665753,3.575178],[98.66583,3.575289],[98.665882,3.575387],[98.665935,3.575488],[98.665998,3.575624],[98.666001,3.575629],[98.666054,3.575738],[98.666191,3.576018],[98.66628,3.576198],[98.666347,3.576336],[98.666481,3.57663],[98.666547,3.576709],[98.666559,3.576734],[98.666701,3.577054],[98.666768,3.577079],[98.666857,3.577113],[98.666941,3.577127],[98.667103,3.577097],[98.667224,3.577077],[98.667525,3.577011],[98.66765,3.576975],[98.667803,3.576929],[98.668081,3.57684],[98.668187,3.576797],[98.66824,3.576765],[98.668273,3.576748],[98.668332,3.576702],[98.668393,3.576652],[98.668446,3.576595],[98.668503,3.57652],[98.668692,3.576202],[98.668843,3.575967],[98.668881,3.575904],[98.668943,3.57583],[98.669006,3.575767],[98.669084,3.575702],[98.669199,3.575617],[98.669367,3.575516],[98.66946,3.575473],[98.669738,3.575336],[98.669889,3.575276],[98.66997,3.575249],[98.669984,3.57518],[98.670006,3.575117],[98.670038,3.575045],[98.670074,3.574958],[98.67013,3.574869],[98.670182,3.574828],[98.670202,3.57479],[98.670316,3.57459],[98.670324,3.574453],[98.67032,3.574326],[98.670304,3.574205],[98.670266,3.574088],[98.670203,3.57397],[98.670125,3.573866],[98.670005,3.573753],[98.669803,3.573581],[98.669467,3.573313],[98.669413,3.573273],[98.669314,3.573207],[98.669217,3.573191],[98.668643,3.573214],[98.668059,3.573219],[98.667951,3.573194],[98.667816,3.573136],[98.667659,3.572955],[98.667346,3.572594],[98.667053,3.572254],[98.666538,3.571646],[98.666515,3.571566],[98.666497,3.5715],[98.666473,3.571397],[98.666433,3.571213],[98.666428,3.57119],[98.666355,3.571192],[98.665844,3.571173],[98.665629,3.571174],[98.665431,3.571176],[98.665476,3.570075],[98.665329,3.569709],[98.665934,3.56825],[98.666069,3.567893],[98.666177,3.567621],[98.666297,3.567335],[98.666401,3.567072],[98.666457,3.566892],[98.666467,3.566864],[98.666475,3.566842],[98.666484,3.566825],[98.666458,3.566813],[98.666415,3.566804],[98.666361,3.5668],[98.666281,3.566798],[98.666032,3.566808]]},{\"id\":\"CASC-NOV-4\",\"spotId\":\"SEG-NOV-01\",\"tier\":\"yellow\",\"name\":\"Pengalihan Setia Budi Utara (ke Pasar 1)\",\"coordinates\":[[98.648159,3.559109],[98.648158,3.559054],[98.647693,3.559045],[98.647591,3.559044],[98.647493,3.559042],[98.647254,3.559042],[98.647004,3.559049],[98.646822,3.559044],[98.646381,3.559047],[98.64569,3.559051],[98.644009,3.559075],[98.643946,3.559075],[98.643574,3.559072],[98.643514,3.559071],[98.643466,3.559067],[98.643416,3.559059],[98.64337,3.559047],[98.643324,3.559025],[98.643164,3.558937],[98.643124,3.558922],[98.643072,3.55891],[98.643014,3.558902],[98.642848,3.558892],[98.642326,3.558879],[98.641944,3.558885],[98.641651,3.558883],[98.641358,3.558877],[98.641313,3.558879],[98.640668,3.558863],[98.640027,3.558857],[98.639967,3.558858],[98.639707,3.558851],[98.639358,3.558855],[98.639239,3.558841],[98.638831,3.558858],[98.638623,3.55886],[98.638626,3.559013],[98.638642,3.559498],[98.638623,3.560233],[98.638743,3.560246],[98.638882,3.560275],[98.639008,3.560298],[98.639363,3.56035],[98.639613,3.560369],[98.639736,3.56037],[98.639769,3.561135],[98.639778,3.561586],[98.639939,3.561587],[98.640169,3.561589],[98.64054,3.56159],[98.640846,3.561594],[98.64104,3.561593],[98.641408,3.561595],[98.641593,3.561596],[98.641933,3.561602],[98.64248,3.561622]]},{\"id\":\"CASC-NOV-5\",\"spotId\":\"SEG-NOV-02\",\"tier\":\"orange\",\"name\":\"Antrean Jamin Ginting Utara (ke Pasar Baru Padang Bulan)\",\"coordinates\":[[98.653815,3.541991],[98.653811,3.541698],[98.654151,3.541716],[98.655125,3.541754],[98.655759,3.542513],[98.656332,3.543173],[98.656594,3.543483],[98.656734,3.543639],[98.656967,3.543909],[98.657623,3.544684],[98.658161,3.545296],[98.658631,3.545823],[98.658777,3.546017],[98.659032,3.546385],[98.659155,3.546607],[98.659272,3.54685],[98.659325,3.546986],[98.65936,3.547098],[98.659486,3.547542],[98.659559,3.547902],[98.659567,3.547969],[98.659583,3.54811],[98.659663,3.548977],[98.659622,3.548999],[98.659575,3.549028],[98.659508,3.549061],[98.659418,3.549099],[98.659326,3.549137],[98.658719,3.549119],[98.658517,3.549118],[98.658001,3.549121]]},{\"id\":\"CASC-NOV-6\",\"spotId\":\"SEG-NOV-02\",\"tier\":\"orange\",\"name\":\"Antrean Ngumban Surbakti Barat\",\"coordinates\":[[98.651529,3.537475],[98.65014,3.535871],[98.65007,3.535944],[98.650569,3.536513],[98.651338,3.537409],[98.651741,3.537861],[98.651865,3.53799],[98.652613,3.53889],[98.653109,3.53944],[98.653726,3.540175],[98.654002,3.540514],[98.654038,3.540553],[98.654212,3.540747],[98.654264,3.540805],[98.654361,3.540914],[98.654999,3.541613],[98.6551,3.541724],[98.655125,3.541754],[98.655759,3.542513],[98.655346,3.54254],[98.65485,3.542556],[98.654369,3.542573],[98.654225,3.542578],[98.653792,3.542595],[98.653549,3.542593],[98.653235,3.542604],[98.652882,3.542604],[98.652508,3.54261],[98.652066,3.542626],[98.652049,3.542619],[98.65179,3.542625],[98.651498,3.54263],[98.651472,3.542634],[98.651206,3.542641],[98.651149,3.542642],[98.651123,3.542643],[98.650778,3.542654],[98.650632,3.542657],[98.650596,3.542657],[98.650293,3.542668],[98.649995,3.542676],[98.649948,3.542679],[98.649549,3.542677],[98.649537,3.544041],[98.649529,3.544858],[98.649264,3.544852],[98.648982,3.544856],[98.648715,3.544868],[98.648401,3.544895],[98.648221,3.544882],[98.648141,3.544893],[98.647763,3.544898],[98.647579,3.544898],[98.647229,3.544881],[98.646828,3.544884],[98.646739,3.544888],[98.646332,3.544905],[98.64626,3.544906],[98.645774,3.544921],[98.645685,3.544912],[98.645147,3.544927],[98.64504,3.544241]]},{\"id\":\"CASC-NOV-7\",\"spotId\":\"SEG-NOV-02\",\"tier\":\"yellow\",\"name\":\"Pengalihan Jamin Ginting Selatan (Arah Pancur Batu)\",\"coordinates\":[[98.651529,3.537475],[98.65014,3.535871],[98.649766,3.535453],[98.649621,3.535287],[98.649196,3.534783],[98.648929,3.534475],[98.648662,3.534178],[98.648466,3.533991],[98.648246,3.533815],[98.648028,3.533663],[98.647914,3.533583],[98.647797,3.533508],[98.647534,3.533348],[98.646849,3.533058],[98.646982,3.532749],[98.647086,3.532454],[98.647105,3.532391],[98.647119,3.532344],[98.647127,3.532267],[98.647125,3.53216],[98.647078,3.532026],[98.647069,3.531869],[98.64708,3.531671],[98.647056,3.531331],[98.647049,3.53089],[98.64728,3.530906],[98.647313,3.530908],[98.647342,3.530905],[98.647384,3.530896],[98.64745,3.530874],[98.647491,3.530825]]},{\"id\":\"CASC-NOV-8\",\"spotId\":\"SEG-NOV-02\",\"tier\":\"yellow\",\"name\":\"Pengalihan AH Nasution Timur (Arah Tritura)\",\"coordinates\":[[98.653815,3.541991],[98.653811,3.541698],[98.654151,3.541716],[98.655125,3.541754],[98.655759,3.542513],[98.655851,3.542511],[98.655391,3.541933],[98.655223,3.541733],[98.655205,3.541712],[98.654668,3.541085],[98.654679,3.541024],[98.654697,3.540965],[98.654721,3.540908],[98.654751,3.540854],[98.654787,3.540803],[98.654829,3.540758],[98.654981,3.54076],[98.655315,3.54076],[98.656341,3.540747],[98.656517,3.540746],[98.656644,3.540744],[98.656931,3.54072],[98.657183,3.540702],[98.657322,3.540674],[98.657495,3.540643],[98.657931,3.540625],[98.658113,3.540622],[98.658315,3.540627],[98.658452,3.54065],[98.658635,3.540708],[98.65886,3.540781],[98.659234,3.540883],[98.660543,3.541243],[98.660903,3.541336],[98.661149,3.541379],[98.661322,3.541402],[98.661685,3.541423],[98.662811,3.541519],[98.663579,3.541598],[98.665029,3.541743],[98.665757,3.541824],[98.66626,3.541872],[98.666598,3.541907],[98.666614,3.541797],[98.666518,3.541785],[98.666094,3.541733],[98.665215,3.541623],[98.665126,3.541616],[98.664921,3.541597],[98.663542,3.541463],[98.66329,3.541441],[98.662867,3.541399],[98.662892,3.541112],[98.662936,3.540661],[98.663058,3.539824],[98.663073,3.539686],[98.66308,3.53915],[98.663078,3.538808],[98.663058,3.53794],[98.663059,3.5377],[98.663052,3.537318],[98.663051,3.53724],[98.663053,3.537152],[98.663039,3.53646],[98.663029,3.535642],[98.663049,3.535306],[98.663049,3.535303],[98.663049,3.535135],[98.663049,3.535133],[98.663047,3.534989],[98.663046,3.534953],[98.663037,3.534454],[98.663033,3.534381],[98.66303,3.534034],[98.663032,3.533973],[98.663029,3.533713],[98.663038,3.533177],[98.663038,3.532837],[98.663048,3.532311],[98.663046,3.532195],[98.663057,3.531964],[98.663055,3.531902],[98.663052,3.53178],[98.663043,3.531595],[98.663035,3.530736],[98.663025,3.530034],[98.663024,3.529806],[98.663024,3.529543],[98.662991,3.529543],[98.662995,3.52981],[98.663001,3.530638],[98.663002,3.530704],[98.663003,3.530736],[98.663004,3.531002],[98.663006,3.531315],[98.663007,3.531602],[98.663012,3.531953],[98.663006,3.532198],[98.663006,3.532309],[98.662997,3.532723],[98.662992,3.533115],[98.662984,3.533689],[98.662984,3.533714],[98.662985,3.533968],[98.662987,3.534031],[98.662986,3.534383],[98.662996,3.534719],[98.663,3.534984],[98.663003,3.535134],[98.662997,3.535307],[98.66298,3.535657],[98.662982,3.536462],[98.662996,3.536749],[98.663006,3.537137],[98.663006,3.537155],[98.663007,3.537211],[98.663011,3.537337],[98.663004,3.537943],[98.663009,3.538265],[98.663016,3.538554],[98.663019,3.539]]},{\"id\":\"CASC-NOV-9\",\"spotId\":\"SEG-NOV-03\",\"tier\":\"orange\",\"name\":\"Antrean Ringroad Utara (Depan Tasbi 1)\",\"coordinates\":[[98.627127,3.572495],[98.627113,3.572154],[98.626708,3.572176],[98.626215,3.572211],[98.626178,3.570925],[98.626057,3.570913],[98.626064,3.571397],[98.626099,3.572238],[98.626137,3.573426],[98.626186,3.574151],[98.626212,3.574463],[98.626262,3.575134],[98.626271,3.575262],[98.626273,3.575291],[98.626276,3.575352],[98.626294,3.575695],[98.626313,3.57607],[98.626318,3.57618],[98.626448,3.578341],[98.626547,3.578364],[98.62696,3.578442],[98.627011,3.578455]]},{\"id\":\"CASC-NOV-10\",\"spotId\":\"SEG-NOV-03\",\"tier\":\"orange\",\"name\":\"Antrean Ringroad Selatan (Simpang Asam Kumbang)\",\"coordinates\":[[98.627736,3.566473],[98.627823,3.566271],[98.628012,3.565903],[98.628053,3.565714],[98.628016,3.565436],[98.628111,3.565372],[98.628198,3.565297],[98.628316,3.565152],[98.628403,3.565032],[98.628467,3.564888],[98.628522,3.564626],[98.628504,3.564397],[98.628748,3.564349],[98.628997,3.564302],[98.629018,3.564324],[98.629045,3.564339],[98.629075,3.564346],[98.629106,3.564343],[98.628914,3.5648],[98.628778,3.565113],[98.628436,3.56589],[98.628005,3.566915],[98.627779,3.567472],[98.626402,3.567533],[98.6262,3.567548],[98.626178,3.567097],[98.626157,3.566158],[98.626104,3.565033],[98.626102,3.564993],[98.6261,3.564932],[98.6261,3.564888],[98.626099,3.564822],[98.626077,3.563067],[98.62609,3.562624],[98.626106,3.562227],[98.626117,3.562024],[98.626126,3.561853],[98.626133,3.561721],[98.626137,3.561665],[98.626149,3.561468],[98.626228,3.560367],[98.626244,3.560134],[98.626279,3.559193],[98.626308,3.558765],[98.626628,3.558756],[98.626816,3.558755],[98.6273,3.558751],[98.627555,3.558757],[98.627707,3.55876],[98.627754,3.558762],[98.627923,3.55877],[98.628229,3.558778],[98.628285,3.558779],[98.628621,3.558778],[98.628755,3.558781],[98.628976,3.558784],[98.628944,3.560069],[98.628938,3.560499]]},{\"id\":\"CASC-NOV-11\",\"spotId\":\"SEG-NOV-03\",\"tier\":\"yellow\",\"name\":\"Pengalihan Ringroad ke Simpang Sunggal\",\"coordinates\":[[98.627011,3.578455],[98.62696,3.578442],[98.626547,3.578364],[98.626448,3.578341],[98.626474,3.579175],[98.626483,3.579345],[98.626497,3.579627],[98.626513,3.579882],[98.626543,3.580416],[98.626551,3.580573],[98.626556,3.580658],[98.62656,3.580765],[98.626563,3.580815],[98.626583,3.581142],[98.626602,3.581415],[98.626619,3.581672],[98.626623,3.581806],[98.626655,3.58236],[98.626705,3.583258],[98.626735,3.5837],[98.626787,3.584585],[98.626802,3.584815],[98.626805,3.584861],[98.626815,3.58505],[98.626836,3.585339],[98.626718,3.585351],[98.626693,3.585352],[98.626667,3.585354],[98.626677,3.585333],[98.62668,3.585311],[98.626661,3.585107],[98.626657,3.58509],[98.62665,3.585073],[98.62664,3.585063],[98.626618,3.585055],[98.626586,3.585051],[98.626502,3.585055]]},{\"id\":\"CASC-NOV-12\",\"spotId\":\"SEG-NOV-03\",\"tier\":\"yellow\",\"name\":\"Pengalihan Asam Kumbang ke Bunga Raya\",\"coordinates\":[[98.628938,3.560499],[98.628944,3.560069],[98.628976,3.558784],[98.629069,3.558784],[98.629353,3.558783],[98.62971,3.558782],[98.62982,3.558783],[98.629929,3.558786],[98.630076,3.558786],[98.630431,3.558794],[98.630421,3.556885],[98.630547,3.556885],[98.630559,3.555598],[98.630555,3.554945],[98.630732,3.554946],[98.631198,3.55495],[98.631421,3.554952],[98.63166,3.554954],[98.631877,3.554956],[98.632134,3.554962],[98.632685,3.55499],[98.632784,3.554975],[98.633143,3.554974],[98.633383,3.554974],[98.633724,3.554974],[98.633824,3.554974],[98.634,3.554973]]},{\"id\":\"CASC-NOV-13\",\"spotId\":\"SEG-NOV-04\",\"tier\":\"orange\",\"name\":\"Antrean Gatsu Timur (Underpass ke Sei Sikambing)\",\"coordinates\":[[98.629765,3.589519],[98.629804,3.590268],[98.630149,3.590251],[98.630528,3.59022],[98.630631,3.590211],[98.631145,3.590195],[98.631106,3.589664],[98.63112,3.589531],[98.631134,3.589399],[98.631161,3.589208],[98.631193,3.588976],[98.631194,3.58883],[98.631181,3.588622],[98.631125,3.588093],[98.631648,3.588064],[98.63179,3.588056],[98.632015,3.588052],[98.632131,3.588041],[98.632305,3.58803],[98.632572,3.588012],[98.632677,3.588007],[98.632736,3.588005],[98.632885,3.587999],[98.633291,3.587983],[98.633895,3.58797],[98.634063,3.587966],[98.634326,3.587952],[98.634526,3.587947],[98.63485,3.587923],[98.635011,3.587915],[98.635073,3.587912],[98.635128,3.587909],[98.635338,3.587898],[98.635466,3.587897],[98.635615,3.587895],[98.635636,3.587894],[98.635727,3.587891],[98.635815,3.587889],[98.635998,3.587886]]},{\"id\":\"CASC-NOV-14\",\"spotId\":\"SEG-NOV-04\",\"tier\":\"orange\",\"name\":\"Antrean Jl. Asrama Utara (Dekat Kodam)\",\"coordinates\":[[98.626224,3.591007],[98.626234,3.591435],[98.626238,3.591536],[98.62607,3.591547],[98.625964,3.591552],[98.625825,3.591559],[98.625579,3.591573],[98.625251,3.59159],[98.625148,3.591595],[98.625077,3.591599],[98.625007,3.591603],[98.624641,3.591669],[98.62435,3.591748],[98.624171,3.591817],[98.624016,3.591876],[98.6238,3.591953],[98.623739,3.591974],[98.62367,3.592002],[98.62355,3.59205],[98.623256,3.592167],[98.62329,3.592251],[98.623773,3.592053],[98.624038,3.591949],[98.624456,3.591914],[98.625266,3.591871],[98.625707,3.591848],[98.625891,3.591838],[98.626145,3.591824],[98.6265,3.591806],[98.626722,3.591794],[98.626955,3.591809],[98.627018,3.591841],[98.627073,3.591899],[98.627108,3.591958],[98.627184,3.592205],[98.627179,3.592997],[98.627189,3.593274],[98.62719,3.593305],[98.627223,3.594253],[98.627231,3.594503],[98.627243,3.594853],[98.627253,3.595151],[98.627273,3.595729],[98.627279,3.595906],[98.627338,3.596984],[98.627343,3.597246],[98.627363,3.597656],[98.627386,3.598248],[98.62746,3.599297],[98.627468,3.599379],[98.627534,3.599787],[98.627642,3.600464],[98.627771,3.600439],[98.627667,3.599847],[98.627597,3.599412],[98.627544,3.59835],[98.627502,3.597377],[98.6276,3.597374],[98.627798,3.597367],[98.627826,3.597366],[98.627841,3.597356],[98.62785,3.597345],[98.627868,3.597283],[98.627861,3.597003]]},{\"id\":\"CASC-NOV-15\",\"spotId\":\"SEG-NOV-04\",\"tier\":\"yellow\",\"name\":\"Pengalihan Gatsu ke Tomang Elok\",\"coordinates\":[[98.635998,3.587886],[98.636172,3.587884],[98.636279,3.587876],[98.636305,3.587876],[98.636535,3.587864],[98.636779,3.58785],[98.636987,3.587834],[98.637173,3.58782],[98.637207,3.587818],[98.637593,3.587792],[98.637683,3.587786],[98.638008,3.587772],[98.638795,3.58774],[98.638923,3.587735],[98.639018,3.58773],[98.639238,3.587726],[98.639449,3.58772],[98.639844,3.587704],[98.639874,3.587703],[98.640043,3.5877],[98.640324,3.587681],[98.640372,3.587678],[98.640494,3.587672],[98.640626,3.587669],[98.640876,3.587653],[98.64103,3.587643],[98.641129,3.587636],[98.641301,3.587625],[98.641705,3.5876],[98.642292,3.587547],[98.642429,3.587811],[98.642453,3.587867],[98.642538,3.587841],[98.642634,3.587811],[98.642698,3.587793],[98.642781,3.587781],[98.642988,3.58776],[98.643573,3.587713],[98.643569,3.587663],[98.643562,3.587523],[98.643559,3.587443],[98.643555,3.58735],[98.643553,3.587285],[98.643547,3.587192],[98.642991,3.587257],[98.642968,3.587242],[98.642949,3.587221],[98.642937,3.587186],[98.642937,3.587035],[98.642942,3.586993]]},{\"id\":\"CASC-NOV-16\",\"spotId\":\"SEG-NOV-04\",\"tier\":\"yellow\",\"name\":\"Pengalihan Ringroad Utara ke Pondok Kelapa\",\"coordinates\":[[98.623527,3.59299],[98.623375,3.592592],[98.623325,3.592341],[98.62329,3.592251],[98.623256,3.592167],[98.622275,3.592554],[98.621786,3.592763],[98.621545,3.592867],[98.62139,3.592929],[98.621297,3.592968],[98.620855,3.593148],[98.620727,3.593196],[98.620558,3.593263],[98.620481,3.593294],[98.620268,3.59338],[98.620234,3.593394],[98.62018,3.593415],[98.620114,3.593443],[98.619692,3.593616],[98.619621,3.593643],[98.6195,3.593693],[98.619128,3.593848],[98.619064,3.593872],[98.618922,3.59393],[98.618501,3.594088],[98.618253,3.594183],[98.618209,3.594073],[98.618184,3.594009],[98.618131,3.593836],[98.617962,3.5939]]},{\"id\":\"CASC-NOV-17\",\"spotId\":\"SEG-NOV-05\",\"tier\":\"orange\",\"name\":\"Antrean Jembatan Belawan Barat (Jalur Binjai)\",\"coordinates\":[[98.609121,3.596008],[98.609109,3.596189],[98.609105,3.596304],[98.609065,3.596707],[98.60903,3.596896],[98.60901,3.597065],[98.608957,3.597417],[98.608937,3.597681],[98.608825,3.597874],[98.608811,3.597899],[98.608746,3.597984],[98.608287,3.59818],[98.607674,3.598436],[98.606997,3.598689],[98.60672,3.598788],[98.606228,3.598941],[98.605957,3.59901],[98.605522,3.599106],[98.605042,3.599192],[98.604589,3.599274],[98.604569,3.599275],[98.604427,3.599283],[98.603967,3.599308],[98.60339,3.599337],[98.60253,3.599282],[98.601525,3.599219],[98.601532,3.599159],[98.601571,3.598106],[98.601571,3.598002]]},{\"id\":\"CASC-NOV-18\",\"spotId\":\"SEG-NOV-05\",\"tier\":\"orange\",\"name\":\"Antrean Jl. Kelambir V Utara\",\"coordinates\":[[98.611485,3.593781],[98.611511,3.594201],[98.611528,3.594807],[98.611246,3.594942],[98.610948,3.59508],[98.610944,3.595124],[98.610942,3.595157],[98.610949,3.595211],[98.611004,3.595375],[98.611233,3.595925],[98.611298,3.596118],[98.6114,3.596367],[98.611452,3.596486],[98.611605,3.596851],[98.611259,3.596993],[98.61129,3.597074],[98.611602,3.596955],[98.611618,3.597174],[98.61163,3.597398],[98.611635,3.59769],[98.611647,3.597925],[98.611677,3.598687],[98.611698,3.599484],[98.611731,3.600282],[98.611769,3.601092],[98.612161,3.601058],[98.612439,3.601028],[98.612997,3.60097]]},{\"id\":\"CASC-NOV-19\",\"spotId\":\"SEG-NOV-05\",\"tier\":\"yellow\",\"name\":\"Pengalihan Simatupang ke Pinang Baris\",\"coordinates\":[[98.613867,3.591514],[98.613835,3.591218],[98.613847,3.591192],[98.613859,3.591185],[98.614282,3.591149],[98.614299,3.591274],[98.614327,3.591704],[98.614351,3.591963],[98.614392,3.592251],[98.61442,3.592379],[98.614529,3.592621],[98.615714,3.592113],[98.616035,3.591986],[98.616253,3.591888],[98.61652,3.591782],[98.61656,3.59176],[98.616755,3.59169],[98.617172,3.591511],[98.617595,3.591329],[98.617563,3.590878],[98.617551,3.590389],[98.617538,3.590151],[98.617542,3.589975],[98.61753,3.589664],[98.617532,3.589615],[98.617525,3.589251],[98.617522,3.589035],[98.617522,3.588934],[98.617514,3.588727],[98.617512,3.588547],[98.617508,3.588445],[98.617508,3.588329],[98.6175,3.588258],[98.617492,3.587946],[98.61749,3.587899],[98.617473,3.587589],[98.617455,3.587141],[98.617455,3.587129],[98.617439,3.586588],[98.617421,3.585437],[98.617298,3.585429],[98.617265,3.584781],[98.617991,3.584755]]},{\"id\":\"CASC-NOV-20\",\"spotId\":\"SEG-NOV-05\",\"tier\":\"yellow\",\"name\":\"Pengalihan Lintas Medan-Binjai km 12\",\"coordinates\":[[98.601571,3.598002],[98.601571,3.598106],[98.601532,3.599159],[98.601525,3.599219],[98.601466,3.599215],[98.600978,3.599178],[98.60001,3.599119],[98.599858,3.599106],[98.599075,3.599083],[98.597776,3.599127],[98.596772,3.599148],[98.596034,3.599165],[98.59593,3.599168],[98.595224,3.599191],[98.595017,3.599193],[98.594434,3.599205],[98.594314,3.599208],[98.594157,3.599212],[98.593591,3.599221],[98.593302,3.599229],[98.592758,3.599244],[98.592759,3.599321],[98.593277,3.599305],[98.593304,3.599304],[98.594315,3.599286],[98.594356,3.599819],[98.594347,3.599852],[98.594319,3.599875],[98.594232,3.599914],[98.594216,3.599932],[98.594212,3.59995],[98.594191,3.600513],[98.594174,3.600746],[98.594191,3.600986]]},{\"id\":\"CASC-NOV-21\",\"spotId\":\"SEG-NOV-06\",\"tier\":\"orange\",\"name\":\"Antrean Setia Budi Pasar 2\",\"coordinates\":[[98.648647,3.556987],[98.648692,3.555786],[98.648695,3.55571],[98.649097,3.555703],[98.649523,3.555687],[98.649974,3.555692],[98.650626,3.555671],[98.651106,3.55566],[98.651498,3.555656],[98.651634,3.555653],[98.651934,3.555646],[98.65305,3.555631],[98.655825,3.55562],[98.655823,3.555035],[98.653801,3.55502],[98.6538,3.55449],[98.653796,3.553912],[98.653789,3.553342],[98.65379,3.552773],[98.65379,3.552107],[98.653081,3.552092],[98.65306,3.551294],[98.652444,3.551287],[98.652153,3.551295],[98.651921,3.551294],[98.651607,3.551303],[98.651479,3.551306],[98.651269,3.551311],[98.651152,3.551313],[98.650879,3.551326],[98.650671,3.551335],[98.650498,3.551339],[98.650386,3.551339],[98.650109,3.551354],[98.649484,3.551381],[98.649094,3.551378],[98.648946,3.551379],[98.648592,3.551392],[98.64855,3.551392],[98.647911,3.551389],[98.647686,3.551395],[98.647632,3.551396],[98.647308,3.551413],[98.647039,3.55141],[98.64674,3.551417],[98.646468,3.55142],[98.646384,3.551426],[98.646178,3.551432],[98.645596,3.551459],[98.645511,3.551456],[98.645001,3.55146],[98.644772,3.551465],[98.644705,3.551472],[98.644247,3.551492],[98.644243,3.551492],[98.643905,3.5515],[98.643792,3.551502],[98.643649,3.551509],[98.643311,3.551515],[98.643248,3.551515],[98.643085,3.551518],[98.642635,3.551532],[98.642246,3.551538],[98.642287,3.552175],[98.642324,3.552733],[98.64235,3.552975],[98.642374,3.553113],[98.6424,3.553252],[98.642416,3.55349],[98.642423,3.553679],[98.642279,3.553686],[98.642087,3.553691],[98.64209,3.553999]]},{\"id\":\"CASC-NOV-22\",\"spotId\":\"SEG-NOV-06\",\"tier\":\"yellow\",\"name\":\"Pengalihan Setia Budi ke Simpang Pemda\",\"coordinates\":[[98.64209,3.553999],[98.642087,3.553691],[98.641934,3.553687],[98.641856,3.553686],[98.641795,3.553681],[98.64179,3.553626],[98.641754,3.55317],[98.64174,3.55295],[98.641736,3.55281],[98.641734,3.552679],[98.641734,3.552646],[98.641731,3.552591],[98.641719,3.552581],[98.641707,3.552579],[98.641569,3.552583],[98.64139,3.552592],[98.641365,3.551551],[98.640961,3.551558],[98.640899,3.551558],[98.640355,3.55157],[98.640066,3.551578],[98.639965,3.550345],[98.639947,3.550157],[98.639945,3.550083],[98.639973,3.54919],[98.640163,3.549189],[98.640111,3.54831],[98.640102,3.548072],[98.640081,3.547612],[98.640055,3.547109],[98.638772,3.547097],[98.638366,3.547108],[98.638142,3.547105],[98.637965,3.547104],[98.637879,3.547107],[98.637694,3.547142],[98.637705,3.547706],[98.637714,3.548155],[98.636003,3.548187]]},{\"id\":\"CASC-NOV-23\",\"spotId\":\"SEG-NOV-07\",\"tier\":\"orange\",\"name\":\"Antrean Katamso Utara (ke arah Istana Maimun)\",\"coordinates\":[[98.683564,3.571314],[98.683656,3.57131],[98.683751,3.571316],[98.683829,3.571328],[98.68388,3.571345],[98.683861,3.571492],[98.683851,3.571719],[98.683852,3.571747],[98.683822,3.572258],[98.683818,3.572341],[98.683562,3.572334],[98.683279,3.572326],[98.682772,3.572303],[98.682726,3.572302],[98.68223,3.572278],[98.681859,3.572255],[98.681735,3.572238],[98.681699,3.572236],[98.681667,3.572243],[98.681601,3.572264],[98.68156,3.572244],[98.681515,3.572239],[98.681467,3.572254],[98.681429,3.572286],[98.681406,3.57233],[98.681403,3.57238],[98.681419,3.572427],[98.681448,3.572459],[98.681418,3.572581],[98.681399,3.572666],[98.681375,3.572792],[98.681281,3.572922],[98.681214,3.572979],[98.681117,3.57303],[98.681,3.573073],[98.6809,3.573111],[98.681197,3.573433],[98.681223,3.573553],[98.681232,3.573662],[98.68121,3.573746],[98.681161,3.573839],[98.681119,3.573891],[98.681045,3.573969],[98.680775,3.574176],[98.680552,3.574404],[98.680185,3.574832],[98.680137,3.574902],[98.680135,3.574905],[98.679914,3.575233],[98.679849,3.575364],[98.679782,3.575498],[98.679627,3.575891],[98.679477,3.576352],[98.679603,3.576404],[98.679975,3.576565],[98.680015,3.576582],[98.680113,3.576646],[98.680549,3.57688],[98.680791,3.577036],[98.681046,3.57698],[98.681212,3.576947],[98.681404,3.57692],[98.681832,3.576874],[98.681852,3.577557],[98.682003,3.577549]]},{\"id\":\"CASC-NOV-24\",\"spotId\":\"SEG-NOV-07\",\"tier\":\"yellow\",\"name\":\"Pengalihan Juanda ke arah Polonia\",\"coordinates\":[[98.683564,3.571314],[98.683656,3.57131],[98.683751,3.571316],[98.683829,3.571328],[98.68388,3.571345],[98.683861,3.571492],[98.683851,3.571719],[98.683852,3.571747],[98.683822,3.572258],[98.683818,3.572341],[98.683562,3.572334],[98.683279,3.572326],[98.682772,3.572303],[98.682726,3.572302],[98.68223,3.572278],[98.681859,3.572255],[98.681735,3.572238],[98.681699,3.572236],[98.681667,3.572243],[98.681601,3.572264],[98.68156,3.572244],[98.681515,3.572239],[98.681443,3.572192],[98.681389,3.572177],[98.681096,3.572154],[98.679995,3.57216],[98.678575,3.572154],[98.677926,3.572154],[98.677846,3.572149],[98.677303,3.572151],[98.676869,3.572153],[98.674395,3.572157],[98.673999,3.572176],[98.673779,3.572205],[98.673404,3.572266],[98.672905,3.57238],[98.672679,3.572443],[98.672348,3.572463],[98.672302,3.572415],[98.672243,3.572383],[98.672178,3.572371],[98.672112,3.57238],[98.672051,3.572408],[98.671981,3.572354],[98.671975,3.572304],[98.671965,3.572237],[98.671957,3.57186],[98.671925,3.571631],[98.671907,3.571561],[98.671955,3.571387],[98.67198,3.571308],[98.67202,3.57124],[98.672072,3.571181],[98.672121,3.571191],[98.672176,3.571194],[98.672459,3.571189],[98.672935,3.57118],[98.673096,3.571172],[98.674357,3.571162],[98.674419,3.57117],[98.674443,3.570951],[98.674455,3.570926],[98.674478,3.570915],[98.675,3.570917]]}],\"oct2025\":[{\"id\":\"CASC-OCT-1\",\"spotId\":\"SEG-OCT-01\",\"tier\":\"orange\",\"name\":\"Antrean Dr. Mansyur (Depan Pintu 1 USU)\",\"coordinates\":[[98.654051,3.560678],[98.654198,3.560675],[98.654676,3.56067],[98.655409,3.560661],[98.655919,3.560654],[98.65592,3.560632],[98.655932,3.560168],[98.655955,3.559463],[98.655969,3.559331],[98.655989,3.559135],[98.65612,3.559221],[98.656112,3.55953],[98.65608,3.560163],[98.657015,3.560179],[98.657655,3.560189],[98.657648,3.561063],[98.657635,3.561882],[98.657619,3.562702]]},{\"id\":\"CASC-OCT-2\",\"spotId\":\"SEG-OCT-01\",\"tier\":\"yellow\",\"name\":\"Pengalihan Setia Budi (ke arah Pemda)\",\"coordinates\":[[98.65132,3.558496],[98.651308,3.559055],[98.651177,3.559055],[98.650866,3.55905],[98.65019,3.559049],[98.650021,3.559058],[98.649817,3.559061],[98.649457,3.559053],[98.649309,3.559054],[98.648992,3.559058],[98.648831,3.559059],[98.648613,3.559057],[98.648441,3.559057],[98.648158,3.559054],[98.647999,3.559051]]},{\"id\":\"CASC-OCT-3\",\"spotId\":\"SEG-OCT-02\",\"tier\":\"orange\",\"name\":\"Antrean Jamin Ginting Pajus\",\"coordinates\":[[98.657992,3.553],[98.657993,3.553331],[98.658559,3.55334],[98.659821,3.553359],[98.660456,3.553349],[98.660594,3.553732],[98.660749,3.554119],[98.66092,3.554454],[98.66112,3.554798],[98.661231,3.554999],[98.661554,3.555578],[98.661727,3.555935],[98.66177,3.556043],[98.661806,3.556194],[98.661804,3.556348],[98.661743,3.557043],[98.661665,3.557619],[98.661612,3.557992],[98.661495,3.558676],[98.661467,3.559028],[98.661468,3.559168],[98.661495,3.559266],[98.661564,3.559518],[98.661713,3.559938],[98.661792,3.560092],[98.662538,3.561337],[98.662619,3.561523],[98.662641,3.561645],[98.662642,3.561727],[98.662573,3.562118],[98.662542,3.562294],[98.662382,3.5632],[98.662322,3.563508],[98.662258,3.563914],[98.662221,3.564157],[98.662184,3.564334],[98.662175,3.564376],[98.662151,3.564545],[98.662033,3.565297],[98.661972,3.56556],[98.661951,3.565648],[98.66181,3.565999],[98.661726,3.566151],[98.661618,3.566338],[98.661529,3.566481],[98.661527,3.566484],[98.661398,3.566672],[98.661066,3.567093],[98.660989,3.567191],[98.66089,3.567235],[98.660819,3.567263],[98.660732,3.567296],[98.66063,3.56733],[98.660161,3.567332],[98.660164,3.567242],[98.660189,3.566553],[98.660197,3.566342],[98.660198,3.566298],[98.660206,3.566055],[98.660208,3.566002],[98.660223,3.565642],[98.660234,3.565278],[98.660236,3.565231],[98.66025,3.564787],[98.660254,3.564681],[98.660263,3.564489],[98.660276,3.564134],[98.660285,3.563865],[98.660294,3.563627],[98.660304,3.563385],[98.660318,3.563017],[98.660324,3.562856],[98.660335,3.562576],[98.660339,3.56245],[98.660358,3.561995],[98.660362,3.561929],[98.660371,3.561432],[98.6604,3.560896],[98.660401,3.560818],[98.660407,3.560663],[98.660411,3.560583],[98.660417,3.560434],[98.660427,3.560215],[98.660427,3.560171],[98.660443,3.559806],[98.660453,3.559626],[98.660469,3.559064],[98.660501,3.558175],[98.660517,3.557806],[98.66056,3.556854],[98.66058,3.55634],[98.660451,3.55633],[98.658006,3.556349],[98.657201,3.556345],[98.656113,3.556356],[98.655003,3.556365]]},{\"id\":\"CASC-OCT-4\",\"spotId\":\"SEG-OCT-02\",\"tier\":\"yellow\",\"name\":\"Pengalihan Pintu 4 USU Jamin Ginting\",\"coordinates\":[[98.655003,3.556365],[98.656113,3.556356],[98.657201,3.556345],[98.658006,3.556349],[98.660451,3.55633],[98.660385,3.557801],[98.660373,3.558175],[98.660364,3.558317],[98.660358,3.559072],[98.660332,3.559812],[98.660318,3.560211],[98.660314,3.5603],[98.660301,3.560579],[98.660294,3.560773],[98.660296,3.560814],[98.660291,3.560893],[98.660254,3.561417],[98.660259,3.561492],[98.660247,3.561924],[98.660242,3.56204],[98.660241,3.562443],[98.660238,3.562565],[98.660222,3.563014],[98.660208,3.56339],[98.66019,3.563867],[98.660161,3.564681],[98.660142,3.565229],[98.660141,3.565259],[98.660126,3.56567],[98.660113,3.566054],[98.660099,3.566558],[98.66008,3.567333],[98.659855,3.567334],[98.659529,3.567336],[98.659001,3.567338],[98.658809,3.567339],[98.658478,3.56734],[98.657693,3.567341],[98.657674,3.567343],[98.657547,3.567345],[98.657549,3.567436],[98.657574,3.567435],[98.658497,3.567418],[98.65881,3.56741],[98.659005,3.567412],[98.660073,3.567423],[98.660538,3.567425],[98.660748,3.567425],[98.660805,3.567425],[98.660913,3.567432],[98.660981,3.567339],[98.661477,3.566727],[98.661601,3.566549],[98.6617,3.566398],[98.66189,3.566047],[98.661929,3.565948],[98.662019,3.565712],[98.662055,3.565577],[98.662085,3.565441],[98.662105,3.56535],[98.662241,3.564545],[98.662395,3.563711],[98.662431,3.563484],[98.662482,3.563217],[98.662543,3.562835],[98.6626,3.562543],[98.662731,3.56175],[98.662738,3.561631],[98.662719,3.561512],[98.662634,3.561341],[98.662323,3.560791],[98.662004,3.560288],[98.661808,3.559932],[98.661702,3.559616],[98.661627,3.559424],[98.661581,3.559257],[98.661566,3.55913],[98.661564,3.558956],[98.66159,3.558706],[98.661717,3.557984],[98.661762,3.557625],[98.661798,3.557414],[98.661831,3.557087],[98.661876,3.556592],[98.661888,3.556471],[98.661896,3.556279],[98.661884,3.55619],[98.661861,3.556019],[98.662211,3.555986],[98.662217,3.555979],[98.662219,3.555967],[98.662206,3.555867],[98.662212,3.555854],[98.662228,3.555844],[98.662958,3.555818]]},{\"id\":\"CASC-OCT-5\",\"spotId\":\"SEG-OCT-07\",\"tier\":\"orange\",\"name\":\"Antrean Katamso Sei Mati\",\"coordinates\":[[98.6815,3.575984],[98.680268,3.575956],[98.680112,3.576369],[98.680052,3.576477],[98.679975,3.576565],[98.679603,3.576404],[98.679477,3.576352],[98.679046,3.57754],[98.678768,3.578105],[98.678525,3.578442],[98.678409,3.578614],[98.678385,3.578649],[98.67834,3.57871],[98.678783,3.579094],[98.678868,3.579169],[98.678899,3.579198],[98.679001,3.579284],[98.679297,3.579535],[98.67938,3.579606],[98.679643,3.579841],[98.67983,3.580005],[98.680105,3.58023],[98.680222,3.580328],[98.680433,3.580456],[98.680135,3.580735],[98.679928,3.580919]]},{\"id\":\"CASC-OCT-6\",\"spotId\":\"SEG-OCT-07\",\"tier\":\"yellow\",\"name\":\"Pengalihan Sisingamangaraja Teladan\",\"coordinates\":[[98.684491,3.572358],[98.684147,3.572349],[98.683818,3.572341],[98.683562,3.572334],[98.683279,3.572326],[98.682772,3.572303],[98.682726,3.572302],[98.68223,3.572278],[98.681859,3.572255],[98.681735,3.572238],[98.681699,3.572236],[98.681667,3.572243],[98.681601,3.572264],[98.68156,3.572244],[98.681515,3.572239],[98.681467,3.572254],[98.681429,3.572286],[98.681406,3.57233],[98.681403,3.57238],[98.681419,3.572427],[98.681448,3.572459],[98.681485,3.57248],[98.68152,3.572484],[98.681572,3.572478],[98.681636,3.572422],[98.681728,3.572378],[98.681785,3.572355],[98.681837,3.572346],[98.682221,3.572347],[98.682725,3.572372],[98.68329,3.572397],[98.683793,3.572426],[98.684132,3.572432],[98.684287,3.572435],[98.684811,3.572448],[98.68526,3.572466],[98.685316,3.57247],[98.685469,3.572471],[98.685589,3.572476],[98.685691,3.572481],[98.685772,3.572485],[98.685924,3.572493],[98.686906,3.572529],[98.686991,3.572532],[98.687001,3.572532],[98.687266,3.572537],[98.688167,3.572539],[98.688894,3.572519],[98.689148,3.572513],[98.689268,3.572507],[98.68937,3.572503],[98.689411,3.572412],[98.689668,3.571903],[98.690067,3.571072],[98.689976,3.571025],[98.689165,3.570644],[98.689152,3.57067],[98.688994,3.570997]]}]}"));}),
"[project]/app/dashboard/history/simulateCascadingTraffic.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Tipe data segmen jalan banjir terisolasi
__turbopack_context__.s([
    "simulateCascadingTraffic",
    ()=>simulateCascadingTraffic
]);
function simulateCascadingTraffic(floodSegments, cascadingRoutes, waterFactor) {
    // Hanya aktifkan spillover jika air sudah mulai menggenangi aspal (waterFactor > 0.20)
    if (waterFactor < 0.20 || floodSegments.length === 0) {
        return {
            type: 'FeatureCollection',
            features: []
        };
    }
    const activeSpotIds = new Set(floodSegments.map((s)=>s.id));
    // Filter rute kemacetan yang spot induknya sedang aktif kebanjiran
    const relevantRoutes = cascadingRoutes.filter((r)=>activeSpotIds.has(r.spotId));
    const features = relevantRoutes.filter((r)=>{
        // Pada fase genangan sedang (0.20 - 0.45), baru antrean dekat (orange) yang muncul
        if (waterFactor < 0.45) {
            return r.tier === 'orange';
        }
        // Pada fase puncak (waterFactor >= 0.45), antrean dekat (orange) dan pengalihan luar (yellow) muncul serentak
        return true;
    }).map((r)=>{
        return {
            type: 'Feature',
            id: r.id,
            geometry: {
                type: 'LineString',
                coordinates: r.coordinates
            },
            properties: {
                id: r.id,
                spotId: r.spotId,
                tier: r.tier,
                name: r.name,
                color: r.tier === 'orange' ? '#f97316' : '#eab308',
                width: r.tier === 'orange' ? 5 : 4,
                opacity: r.tier === 'orange' ? 0.92 : 0.82
            }
        };
    });
    return {
        type: 'FeatureCollection',
        features
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/dashboard/history/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HistoryPlaybackPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Map__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/map.js [app-client] (ecmascript) <export Map as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/marker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/popup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$navigation$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/navigation-control.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$source$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/source.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/layer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TimelineSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TimelineSlider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StatsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/StatsPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CCTVModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CCTVModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$history$2f$snapped$2d$segments$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/app/dashboard/history/snapped-segments.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$history$2f$cascading$2d$traffic$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/app/dashboard/history/cascading-traffic.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$history$2f$simulateCascadingTraffic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/dashboard/history/simulateCascadingTraffic.ts [app-client] (ecmascript)");
;
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
// Dynamic Import SSR = false untuk Komponen Navigasi Rute Spasial (mencegah error window is not defined & crash SSR)
const FloodSafeRouteNavigation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/components/FloodSafeRouteNavigation.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/components/FloodSafeRouteNavigation.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[340px] sm:w-[380px] rounded-3xl border border-slate-700/80 bg-slate-900/90 p-4 text-xs text-slate-300 shadow-2xl backdrop-blur-xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-4 w-4 rounded-full border-2 border-blue-500 border-t-transparent animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/history/page.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-bold",
                        children: "Memuat Navigasi Rute Aman..."
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/history/page.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/history/page.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/dashboard/history/page.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
});
_c = FloodSafeRouteNavigation;
const SEGMENTS_NOV = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$history$2f$snapped$2d$segments$2e$json__$28$json$29$__["default"].nov2025;
const SEGMENTS_OCT = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$history$2f$snapped$2d$segments$2e$json__$28$json$29$__["default"].oct2025;
const CASCADING_NOV = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$history$2f$cascading$2d$traffic$2e$json__$28$json$29$__["default"].nov2025;
const CASCADING_OCT = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$history$2f$cascading$2d$traffic$2e$json__$28$json$29$__["default"].oct2025;
function HistoryPlaybackPage() {
    _s();
    // Default tanggal: 27 November 2025 (Kejadian Banjir Faktual Terparah)
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('2025-11-27');
    const [timeMinutes, setTimeMinutes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(720); // 12:00 siang (fase puncak)
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [playbackSpeed, setPlaybackSpeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [selectedZone, setSelectedZone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeCCTV, setActiveCCTV] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isMobilePanelOpen, setIsMobilePanelOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mapCursor, setMapCursor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('default');
    // State Fitur Navigasi Rute Bebas Banjir (Spatial Constraints)
    const [showNavPanel, setShowNavPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [safeRouteResult, setSafeRouteResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pickingLocationMode, setPickingLocationMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [externalStart, setExternalStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [externalDest, setExternalDest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Mencegah error SSR (Server-Side Rendering) pada Mapbox GL & pustaka spasial browser
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HistoryPlaybackPage.useEffect": ()=>{
            setMounted(true);
        }
    }["HistoryPlaybackPage.useEffect"], []);
    const token = ("TURBOPACK compile-time value", "pk.eyJ1Ijoia2x1Ym9saW1waWFkZWluZm9ybWF0aWthc2ltIiwiYSI6ImNtdzQ3Mmh2aTAwM2EzMXB6NG5naDJnbDEifQ.cxMkjrU8vo3KFRcZaMYsDQ");
    // Baca query parameter 'date' jika ada (sinkronisasi dari Analytics)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HistoryPlaybackPage.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const params = new URLSearchParams(window.location.search);
                const dateParam = params.get('date');
                if (dateParam) {
                    setSelectedDate(dateParam);
                }
            }
        }
    }["HistoryPlaybackPage.useEffect"], []);
    const isToday = selectedDate === 'Hari Ini' || selectedDate === 'today' || selectedDate.toLowerCase().includes('hari ini');
    const isNov27 = !isToday && (selectedDate.includes('11-27') || selectedDate.includes('November') || selectedDate.includes('Nov'));
    const isOct11 = !isToday && (selectedDate.includes('10-11') || selectedDate.includes('Oktober') || selectedDate.includes('Okt'));
    const hasDisasterData = isNov27 || isOct11;
    const isSafeState = isToday || !hasDisasterData;
    // Reset selectedZone jika dalam kondisi aman (no disaster)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HistoryPlaybackPage.useEffect": ()=>{
            if (isSafeState && selectedZone) {
                setSelectedZone(null);
            }
        }
    }["HistoryPlaybackPage.useEffect"], [
        isSafeState,
        selectedZone
    ]);
    // Pilih daftar segmen jalan banjir berdasarkan tanggal kejadian (kosong jika status aman)
    const activeSegments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HistoryPlaybackPage.useMemo[activeSegments]": ()=>{
            if (isSafeState) return [];
            if (isNov27) return SEGMENTS_NOV;
            if (isOct11) return SEGMENTS_OCT;
            return [];
        }
    }["HistoryPlaybackPage.useMemo[activeSegments]"], [
        isSafeState,
        isNov27,
        isOct11
    ]);
    // Pilih dataset rute kemacetan terkait (kosong jika status aman)
    const activeCascading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HistoryPlaybackPage.useMemo[activeCascading]": ()=>{
            if (isSafeState) return [];
            if (isNov27) return CASCADING_NOV;
            if (isOct11) return CASCADING_OCT;
            return [];
        }
    }["HistoryPlaybackPage.useMemo[activeCascading]"], [
        isSafeState,
        isNov27,
        isOct11
    ]);
    // Kalkulasi faktor tinggi air berdasarkan timeMinutes & profil kejadian
    function getWaterFactor(minutes, isSevere) {
        if (isSevere) {
            // 27 November 2025: Badai 3 hari, air sudah tinggi sejak pagi hingga malam
            if (minutes < 360) return 0.60;
            if (minutes < 540) return 0.70 + (minutes - 360) * 0.001;
            if (minutes < 780) return 0.88 + (minutes - 540) * 0.0005; // Puncak 12:00 - 13:00
            if (minutes < 1020) return 1.0 - (minutes - 780) * 0.0003;
            return Math.max(0.65, 0.92 - (minutes - 1020) * 0.0007);
        }
        // 11 Oktober 2025: Hujan sore meluapkan sungai
        if (minutes < 360) return 0.08;
        if (minutes < 540) return 0.15 + (minutes - 360) * 0.0012;
        if (minutes < 780) return 0.45 + (minutes - 540) * 0.002;
        if (minutes < 960) return 0.95 - (minutes - 780) * 0.001;
        if (minutes < 1200) return 0.70 - (minutes - 960) * 0.002;
        return Math.max(0.1, 0.20 - (minutes - 1200) * 0.0004);
    }
    const factor = getWaterFactor(timeMinutes, isNov27);
    // Injeksi manual Mapbox Traffic v1 ke style streets-v12
    function handleMapLoad(event) {
        var _map_getStyle;
        const map = event.target;
        if (!map) return;
        if (!map.getSource('mapbox-traffic')) {
            map.addSource('mapbox-traffic', {
                type: 'vector',
                url: 'mapbox://mapbox.mapbox-traffic-v1'
            });
        }
        const layers = ((_map_getStyle = map.getStyle()) === null || _map_getStyle === void 0 ? void 0 : _map_getStyle.layers) || [];
        let firstLabelLayerId;
        for (const layer of layers){
            if (layer.type === 'symbol') {
                firstLabelLayerId = layer.id;
                break;
            }
        }
        if (!map.getLayer('mapbox-traffic-layer')) {
            map.addLayer({
                id: 'mapbox-traffic-layer',
                type: 'line',
                source: 'mapbox-traffic',
                'source-layer': 'traffic',
                layout: {
                    'line-join': 'round',
                    'line-cap': 'round'
                },
                paint: {
                    'line-width': [
                        'interpolate',
                        [
                            'linear'
                        ],
                        [
                            'zoom'
                        ],
                        10,
                        1.5,
                        14,
                        3.5,
                        18,
                        8
                    ],
                    'line-color': [
                        'match',
                        [
                            'get',
                            'congestion'
                        ],
                        'low',
                        '#22c55e',
                        'moderate',
                        '#f59e0b',
                        'heavy',
                        '#ef4444',
                        'severe',
                        '#7f1d1d',
                        'hsla(0,0%,0%,0)'
                    ],
                    'line-opacity': 0.85
                }
            }, firstLabelLayerId);
        }
    }
    // 1. GeoJSON Ruas Jalan Banjir Aktual (Pusat Banjir - Merah Tua #991b1b, width: 8)
    const roadSegmentsGeoJson = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HistoryPlaybackPage.useMemo[roadSegmentsGeoJson]": ()=>{
            return {
                type: 'FeatureCollection',
                features: activeSegments.map({
                    "HistoryPlaybackPage.useMemo[roadSegmentsGeoJson]": (seg)=>{
                        const currentCm = Math.round(seg.peakCm * factor);
                        const isRed = currentCm >= 40 || seg.peakCm >= 40;
                        const segmentLineColor = isRed ? seg.severityGrade === 'extreme' ? '#7f1d1d' // Ekstrem Merah Kehitaman (Kampung Lalang)
                         : '#991b1b' // Merah Tua Pusat Banjir
                         : '#d97706'; // Kuning/Oranye Waspada
                        const segmentGlowColor = isRed ? 'rgba(153, 27, 27, 0.60)' : 'rgba(217, 119, 6, 0.50)';
                        return {
                            type: 'Feature',
                            id: seg.id,
                            geometry: {
                                type: 'LineString',
                                coordinates: seg.coordinates
                            },
                            properties: {
                                id: seg.id,
                                name: seg.name,
                                currentCm,
                                peakCm: seg.peakCm,
                                lineColor: segmentLineColor,
                                glowColor: segmentGlowColor,
                                severityGrade: seg.severityGrade
                            }
                        };
                    }
                }["HistoryPlaybackPage.useMemo[roadSegmentsGeoJson]"])
            };
        }
    }["HistoryPlaybackPage.useMemo[roadSegmentsGeoJson]"], [
        activeSegments,
        factor
    ]);
    // 2. GeoJSON Efek Domino Kemacetan (Simulate Cascading Traffic: Oranye & Kuning)
    const cascadingTrafficGeoJson = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HistoryPlaybackPage.useMemo[cascadingTrafficGeoJson]": ()=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$history$2f$simulateCascadingTraffic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["simulateCascadingTraffic"])(activeSegments, activeCascading, factor);
        }
    }["HistoryPlaybackPage.useMemo[cascadingTrafficGeoJson]"], [
        activeSegments,
        activeCascading,
        factor
    ]);
    // Handler interaktif: Klik ruas jalan banjir untuk membuka Smart Inspector Panel (DSS)
    // Atau memilih titik koordinat asal/tujuan pada peta jika mode navigasi aktif
    function handleMapClick(event) {
        var _feature_properties;
        if (pickingLocationMode && event.lngLat) {
            const coord = {
                name: "Titik Peta (".concat(event.lngLat.lat.toFixed(4), ", ").concat(event.lngLat.lng.toFixed(4), ")"),
                lat: Number(event.lngLat.lat.toFixed(5)),
                lng: Number(event.lngLat.lng.toFixed(5))
            };
            if (pickingLocationMode === 'start') {
                setExternalStart(coord);
            } else {
                setExternalDest(coord);
            }
            setPickingLocationMode(null);
            return;
        }
        const feature = event.features && event.features[0];
        if (feature && ((_feature_properties = feature.properties) === null || _feature_properties === void 0 ? void 0 : _feature_properties.id)) {
            const found = activeSegments.find((s)=>s.id === feature.properties.id);
            if (found) {
                setSelectedZone(found);
                return;
            }
        }
        // Jika mengklik ruang kosong di peta, reset inspector ke null (kembali ke Ringkasan Kota)
        setSelectedZone(null);
    }
    function handleMouseEnter() {
        setMapCursor('pointer');
    }
    function handleMouseLeave() {
        setMapCursor('default');
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative h-screen w-screen overflow-hidden bg-slate-100 text-slate-900 select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                children: !mounted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-full w-full items-center justify-center bg-slate-950 text-slate-400",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-6 w-6 rounded-full border-2 border-blue-500 border-t-transparent animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/history/page.tsx",
                                lineNumber: 288,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-semibold tracking-wide",
                                children: "Menyiapkan Engine Peta Mapbox..."
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/history/page.tsx",
                                lineNumber: 289,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/history/page.tsx",
                        lineNumber: 287,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/history/page.tsx",
                    lineNumber: 286,
                    columnNumber: 11
                }, this) : ("TURBOPACK compile-time truthy", 1) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Map__as__default$3e$__["default"], {
                    initialViewState: {
                        latitude: 3.5680,
                        longitude: 98.6380,
                        zoom: 12.8,
                        pitch: 30,
                        bearing: 0
                    },
                    mapStyle: "mapbox://styles/mapbox/streets-v12",
                    mapboxAccessToken: token,
                    style: {
                        width: '100%',
                        height: '100%'
                    },
                    cursor: pickingLocationMode ? 'crosshair' : mapCursor,
                    interactiveLayerIds: [
                        'flooded-segments-line',
                        'flooded-segments-glow'
                    ],
                    onClick: handleMapClick,
                    onMouseEnter: handleMouseEnter,
                    onMouseLeave: handleMouseLeave,
                    onLoad: handleMapLoad,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$navigation$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationControl"], {
                            position: "top-left",
                            style: {
                                marginTop: '5.5rem',
                                marginLeft: '1.5rem'
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/history/page.tsx",
                            lineNumber: 311,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$source$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Source"], {
                            id: "cascading-traffic-source",
                            type: "geojson",
                            data: isSafeState ? {
                                type: 'FeatureCollection',
                                features: []
                            } : cascadingTrafficGeoJson,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"], {
                                    id: "cascading-layer-yellow",
                                    type: "line",
                                    filter: [
                                        '==',
                                        [
                                            'get',
                                            'tier'
                                        ],
                                        'yellow'
                                    ],
                                    layout: {
                                        'line-join': 'round',
                                        'line-cap': 'round'
                                    },
                                    paint: {
                                        'line-width': [
                                            'interpolate',
                                            [
                                                'linear'
                                            ],
                                            [
                                                'zoom'
                                            ],
                                            10,
                                            2.5,
                                            13,
                                            4,
                                            16,
                                            7
                                        ],
                                        'line-color': '#eab308',
                                        'line-opacity': 0.85
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/history/page.tsx",
                                    lineNumber: 320,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"], {
                                    id: "cascading-layer-orange",
                                    type: "line",
                                    filter: [
                                        '==',
                                        [
                                            'get',
                                            'tier'
                                        ],
                                        'orange'
                                    ],
                                    layout: {
                                        'line-join': 'round',
                                        'line-cap': 'round'
                                    },
                                    paint: {
                                        'line-width': [
                                            'interpolate',
                                            [
                                                'linear'
                                            ],
                                            [
                                                'zoom'
                                            ],
                                            10,
                                            3,
                                            13,
                                            5,
                                            16,
                                            9
                                        ],
                                        'line-color': '#f97316',
                                        'line-opacity': 0.92
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/history/page.tsx",
                                    lineNumber: 346,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/history/page.tsx",
                            lineNumber: 314,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$source$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Source"], {
                            id: "flooded-segments-source",
                            type: "geojson",
                            data: isSafeState ? {
                                type: 'FeatureCollection',
                                features: []
                            } : roadSegmentsGeoJson,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"], {
                                    id: "flooded-segments-glow",
                                    type: "line",
                                    layout: {
                                        'line-join': 'round',
                                        'line-cap': 'round'
                                    },
                                    paint: {
                                        'line-width': [
                                            'interpolate',
                                            [
                                                'linear'
                                            ],
                                            [
                                                'zoom'
                                            ],
                                            10,
                                            5,
                                            13,
                                            14,
                                            16,
                                            20
                                        ],
                                        'line-color': [
                                            'get',
                                            'glowColor'
                                        ],
                                        'line-blur': 2.5,
                                        'line-opacity': 0.8
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/history/page.tsx",
                                    lineNumber: 379,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"], {
                                    id: "flooded-segments-line",
                                    type: "line",
                                    layout: {
                                        'line-join': 'round',
                                        'line-cap': 'round'
                                    },
                                    paint: {
                                        'line-width': [
                                            'interpolate',
                                            [
                                                'linear'
                                            ],
                                            [
                                                'zoom'
                                            ],
                                            10,
                                            4,
                                            13,
                                            8,
                                            16,
                                            15
                                        ],
                                        'line-color': [
                                            'get',
                                            'lineColor'
                                        ],
                                        'line-opacity': 0.98
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/history/page.tsx",
                                    lineNumber: 405,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/history/page.tsx",
                            lineNumber: 373,
                            columnNumber: 13
                        }, this),
                        safeRouteResult && safeRouteResult.success && safeRouteResult.geometry && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$source$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Source"], {
                            id: "flood-safe-route-source",
                            type: "geojson",
                            data: safeRouteResult.geometry,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"], {
                                    id: "flood-safe-route-casing",
                                    type: "line",
                                    layout: {
                                        'line-join': 'round',
                                        'line-cap': 'round'
                                    },
                                    paint: {
                                        'line-width': [
                                            'interpolate',
                                            [
                                                'linear'
                                            ],
                                            [
                                                'zoom'
                                            ],
                                            10,
                                            5,
                                            13,
                                            10,
                                            16,
                                            16
                                        ],
                                        'line-color': '#0f172a',
                                        'line-opacity': 0.85
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/history/page.tsx",
                                    lineNumber: 434,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"], {
                                    id: "flood-safe-route-line",
                                    type: "line",
                                    layout: {
                                        'line-join': 'round',
                                        'line-cap': 'round'
                                    },
                                    paint: {
                                        'line-width': [
                                            'interpolate',
                                            [
                                                'linear'
                                            ],
                                            [
                                                'zoom'
                                            ],
                                            10,
                                            3.5,
                                            13,
                                            6,
                                            16,
                                            11
                                        ],
                                        'line-color': safeRouteResult.classification === 'YELLOW_WARNING' ? '#0284c7' // Biru Terang Waspada Kuning
                                         : '#06b6d4',
                                        'line-opacity': 0.98
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/history/page.tsx",
                                    lineNumber: 459,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/history/page.tsx",
                            lineNumber: 432,
                            columnNumber: 15
                        }, this),
                        safeRouteResult && safeRouteResult.success && safeRouteResult.geometry.coordinates.length >= 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                                    longitude: safeRouteResult.geometry.coordinates[0][0],
                                    latitude: safeRouteResult.geometry.coordinates[0][1],
                                    anchor: "bottom",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center pointer-events-none drop-shadow-2xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-lg bg-emerald-600 px-2 py-0.5 text-[10px] font-black text-white shadow-lg border border-white tracking-wide",
                                                children: "🟢 Titik Asal"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/history/page.tsx",
                                                lineNumber: 498,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl drop-shadow",
                                                children: "📍"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/history/page.tsx",
                                                lineNumber: 501,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/history/page.tsx",
                                        lineNumber: 497,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/history/page.tsx",
                                    lineNumber: 492,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                                    longitude: safeRouteResult.geometry.coordinates[safeRouteResult.geometry.coordinates.length - 1][0],
                                    latitude: safeRouteResult.geometry.coordinates[safeRouteResult.geometry.coordinates.length - 1][1],
                                    anchor: "bottom",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center pointer-events-none drop-shadow-2xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-lg bg-red-600 px-2 py-0.5 text-[10px] font-black text-white shadow-lg border border-white tracking-wide",
                                                children: "🏁 Destinasi"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/history/page.tsx",
                                                lineNumber: 512,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl drop-shadow",
                                                children: "📍"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/history/page.tsx",
                                                lineNumber: 515,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/history/page.tsx",
                                        lineNumber: 511,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/history/page.tsx",
                                    lineNumber: 506,
                                    columnNumber: 17
                                }, this),
                                safeRouteResult.usedBypassWaypoint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                                    longitude: safeRouteResult.usedBypassWaypoint.lng,
                                    latitude: safeRouteResult.usedBypassWaypoint.lat,
                                    anchor: "center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5 rounded-full bg-blue-900/90 border border-blue-400 px-2.5 py-1 text-[9px] font-bold text-blue-200 shadow-2xl backdrop-blur-md",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-2 w-2 rounded-full bg-blue-400 animate-ping"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/history/page.tsx",
                                                lineNumber: 527,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Bypass: ",
                                                    (safeRouteResult.usedBypassWaypoint.name || 'Jalur Bypass').split('(')[0]
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/history/page.tsx",
                                                lineNumber: 528,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/history/page.tsx",
                                        lineNumber: 526,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/history/page.tsx",
                                    lineNumber: 521,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true),
                        !isSafeState && activeSegments.map((seg)=>{
                            const currentCm = Math.round(seg.peakCm * factor);
                            const isExtreme = seg.severityGrade === 'extreme';
                            const isVeryCritical = seg.severityGrade === 'very-critical';
                            const isCritical = seg.severityGrade === 'critical';
                            // Desain Pin Marker
                            const badgeBg = isExtreme ? 'bg-slate-950 text-white border-red-500 shadow-black/80' : isVeryCritical ? 'bg-red-950 text-white border-red-400 shadow-red-950/80 ring-2 ring-red-600/70' : isCritical ? 'bg-red-700 text-white border-white shadow-red-900/60 ring-2 ring-red-500/60' : 'bg-amber-500 text-slate-950 border-white shadow-amber-900/50 ring-2 ring-amber-500/60';
                            const ringPingBg = isExtreme ? 'bg-red-600/70' : isVeryCritical ? 'bg-red-700/60' : isCritical ? 'bg-red-600/50' : 'bg-amber-500/40';
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                                latitude: seg.center.lat,
                                longitude: seg.center.lng,
                                anchor: "center",
                                onClick: (e)=>{
                                    e.originalEvent.stopPropagation();
                                    setSelectedZone(seg);
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group cursor-pointer flex flex-col items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute -inset-2 rounded-full ".concat(ringPingBg, " animate-ping pointer-events-none")
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/history/page.tsx",
                                            lineNumber: 573,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "\n                          relative z-10 flex h-9 w-9 items-center justify-center rounded-full border-[2.5px] text-[11px] font-black shadow-2xl transition-transform hover:scale-125\n                          ".concat((selectedZone === null || selectedZone === void 0 ? void 0 : selectedZone.id) === seg.id ? 'ring-4 ring-blue-500 scale-125' : '', "\n                          ").concat(badgeBg, "\n                        "),
                                            children: [
                                                currentCm,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[7px] ml-0.5 font-normal",
                                                    children: "cm"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/history/page.tsx",
                                                    lineNumber: 584,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/history/page.tsx",
                                            lineNumber: 576,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1 flex flex-col items-center pointer-events-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rounded-md bg-slate-900/95 text-white px-2 py-0.5 text-[10px] font-bold border border-slate-700 shadow-xl whitespace-nowrap",
                                                    children: seg.name.split('(')[0].trim()
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/history/page.tsx",
                                                    lineNumber: 589,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] font-black px-1.5 rounded-sm mt-0.5 ".concat(isExtreme ? 'bg-black text-red-400' : isVeryCritical ? 'bg-red-900 text-red-200' : isCritical ? 'bg-red-700 text-white' : 'bg-amber-600 text-white'),
                                                    children: seg.badgeLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/history/page.tsx",
                                                    lineNumber: 592,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/history/page.tsx",
                                            lineNumber: 588,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/history/page.tsx",
                                    lineNumber: 571,
                                    columnNumber: 21
                                }, this)
                            }, seg.id, false, {
                                fileName: "[project]/app/dashboard/history/page.tsx",
                                lineNumber: 561,
                                columnNumber: 19
                            }, this);
                        }),
                        !isSafeState && selectedZone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popup"], {
                            latitude: selectedZone.center.lat,
                            longitude: selectedZone.center.lng,
                            anchor: "bottom",
                            onClose: ()=>setSelectedZone(null),
                            closeOnClick: false,
                            className: "text-slate-900",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-1.5 max-w-xs text-xs text-slate-900",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between border-b pb-1 font-bold",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-blue-900 font-extrabold",
                                            children: selectedZone.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/history/page.tsx",
                                            lineNumber: 621,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/history/page.tsx",
                                        lineNumber: 620,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 space-y-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between bg-slate-100 p-1.5 rounded-lg border border-slate-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-600",
                                                        children: "Status Kejadian:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/history/page.tsx",
                                                        lineNumber: 625,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-extrabold text-red-600",
                                                        children: selectedZone.badgeLabel
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/history/page.tsx",
                                                        lineNumber: 626,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/history/page.tsx",
                                                lineNumber: 624,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-700",
                                                children: [
                                                    "Tinggi Air Simulasi: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "text-red-700 font-black text-sm",
                                                        children: [
                                                            Math.round(selectedZone.peakCm * factor),
                                                            " cm"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/history/page.tsx",
                                                        lineNumber: 629,
                                                        columnNumber: 44
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/history/page.tsx",
                                                lineNumber: 628,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-500 text-[11px]",
                                                children: [
                                                    "Rekor Puncak Faktual: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: [
                                                            selectedZone.peakCm,
                                                            " cm"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/history/page.tsx",
                                                        lineNumber: 632,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/history/page.tsx",
                                                lineNumber: 631,
                                                columnNumber: 21
                                            }, this),
                                            selectedZone.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] text-slate-700 italic bg-amber-50 p-2 rounded-lg border border-amber-200 mt-1",
                                                children: [
                                                    '"',
                                                    selectedZone.notes,
                                                    '"'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/history/page.tsx",
                                                lineNumber: 635,
                                                columnNumber: 23
                                            }, this),
                                            selectedZone.sourceUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: selectedZone.sourceUrl,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "inline-block mt-1 text-[10px] text-blue-600 font-bold hover:underline",
                                                children: "↗ Lihat Laporan Berita Terverifikasi"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/history/page.tsx",
                                                lineNumber: 640,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/history/page.tsx",
                                        lineNumber: 623,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/history/page.tsx",
                                lineNumber: 619,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/history/page.tsx",
                            lineNumber: 611,
                            columnNumber: 15
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CCTVModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CCTV_LOCATIONS"].map((cctv)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                                latitude: cctv.coordinates.lat,
                                longitude: cctv.coordinates.lng,
                                anchor: "center",
                                onClick: (e)=>{
                                    e.originalEvent.stopPropagation();
                                    setActiveCCTV(cctv.name);
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group cursor-pointer flex flex-col items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute -inset-1.5 rounded-full bg-blue-500/40 animate-ping pointer-events-none"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/history/page.tsx",
                                            lineNumber: 668,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 border-2 border-blue-400 text-blue-300 shadow-xl transition-all duration-200 hover:scale-125 hover:bg-blue-600 hover:text-white hover:border-white ring-2 ring-blue-500/40",
                                            title: "Lihat Live CCTV: ".concat(cctv.name),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4 fill-current",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M4 6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-2.5l4 2.5a1 1 0 0 0 1.5-.86v-8.28a1 1 0 0 0-1.5-.86L17 8.5V8a2 2 0 0 0-2-2H4zm8 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/history/page.tsx",
                                                    lineNumber: 679,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/history/page.tsx",
                                                lineNumber: 675,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/history/page.tsx",
                                            lineNumber: 671,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -bottom-7 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-30 whitespace-nowrap",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-md bg-slate-900/95 text-white px-2 py-0.5 text-[10px] font-bold border border-blue-500/40 shadow-xl flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/history/page.tsx",
                                                        lineNumber: 686,
                                                        columnNumber: 23
                                                    }, this),
                                                    "📹 ",
                                                    cctv.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/history/page.tsx",
                                                lineNumber: 685,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/history/page.tsx",
                                            lineNumber: 684,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/history/page.tsx",
                                    lineNumber: 666,
                                    columnNumber: 17
                                }, this)
                            }, cctv.id, false, {
                                fileName: "[project]/app/dashboard/history/page.tsx",
                                lineNumber: 656,
                                columnNumber: 15
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/history/page.tsx",
                    lineNumber: 293,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ "TURBOPACK unreachable"
            }, void 0, false, {
                fileName: "[project]/app/dashboard/history/page.tsx",
                lineNumber: 284,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 z-20 flex items-center justify-between gap-3 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-auto flex items-center gap-2 sm:gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex items-center gap-1.5 rounded-xl border border-slate-700/80 bg-slate-900/90 px-3 py-2 text-xs font-bold text-slate-200 shadow-xl backdrop-blur-md transition hover:bg-slate-800 hover:text-white active:scale-95",
                                title: "Kembali ke Portal Publik",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "←"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/history/page.tsx",
                                        lineNumber: 713,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:inline",
                                        children: "Portal Publik"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/history/page.tsx",
                                        lineNumber: 714,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/history/page.tsx",
                                lineNumber: 708,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/dashboard/analytics",
                                className: "flex items-center gap-1.5 rounded-xl border border-blue-500/40 bg-blue-600/30 px-3 py-2 text-xs font-bold text-blue-300 shadow-xl backdrop-blur-md transition hover:bg-blue-600/50 hover:text-white active:scale-95",
                                title: "Buka Pusat Analitik Bencana",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "📊"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/history/page.tsx",
                                        lineNumber: 722,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:inline",
                                        children: "Pusat Analitik"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/history/page.tsx",
                                        lineNumber: 723,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/history/page.tsx",
                                lineNumber: 717,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setShowNavPanel(!showNavPanel),
                                className: "flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-bold shadow-xl backdrop-blur-md transition active:scale-95 cursor-pointer ".concat(showNavPanel ? 'border-blue-400 bg-blue-600 text-white ring-2 ring-blue-500/40 shadow-blue-600/30' : 'border-slate-700/80 bg-slate-900/90 text-slate-200 hover:bg-slate-800 hover:text-white'),
                                title: "Buka / Tutup Navigasi Rute Aman Bebas Banjir",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "🧭"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/history/page.tsx",
                                        lineNumber: 737,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Rute Aman"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/history/page.tsx",
                                        lineNumber: 738,
                                        columnNumber: 13
                                    }, this),
                                    safeRouteResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "h-2 w-2 rounded-full bg-emerald-400 animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/history/page.tsx",
                                        lineNumber: 739,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/history/page.tsx",
                                lineNumber: 727,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5 rounded-xl border border-slate-700/80 bg-slate-900/90 px-3 py-1.5 text-xs shadow-xl backdrop-blur-md text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex h-6 w-6 items-center justify-center rounded-lg bg-blue-600 text-xs font-black text-white shadow-xs",
                                        children: "FL"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/history/page.tsx",
                                        lineNumber: 743,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-extrabold tracking-wide text-white",
                                                        children: "FLORENCE GOV"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/history/page.tsx",
                                                        lineNumber: 748,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "rounded-full bg-blue-500/20 px-2 py-0.5 text-[9px] font-black text-blue-300 border border-blue-500/30",
                                                        children: "COMMAND CENTER"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/history/page.tsx",
                                                        lineNumber: 749,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/history/page.tsx",
                                                lineNumber: 747,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] text-slate-400 hidden md:block",
                                                children: "Mesin Waktu Banjir · Simulasi Spillover Kemacetan Domino"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/history/page.tsx",
                                                lineNumber: 753,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/history/page.tsx",
                                        lineNumber: 746,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/history/page.tsx",
                                lineNumber: 742,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/history/page.tsx",
                        lineNumber: 707,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-auto flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setIsMobilePanelOpen(!isMobilePanelOpen),
                                className: "sm:hidden flex items-center gap-1.5 rounded-xl border border-slate-700/80 bg-slate-900/90 px-3 py-2 text-xs font-bold text-white shadow-xl backdrop-blur-md active:scale-95 cursor-pointer",
                                title: "Buka / Tutup Panel Ringkasan & CCTV",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "📊"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/history/page.tsx",
                                        lineNumber: 769,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: isMobilePanelOpen ? 'Peta' : 'Info'
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/history/page.tsx",
                                        lineNumber: 770,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/history/page.tsx",
                                lineNumber: 763,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/90 px-3.5 py-2 text-xs font-bold backdrop-blur-md shadow-xl text-white",
                                children: isSafeState ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-emerald-400 flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-2 w-2 rounded-full bg-emerald-500"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/history/page.tsx",
                                            lineNumber: 777,
                                            columnNumber: 17
                                        }, this),
                                        "🟢 ",
                                        selectedDate === 'Hari Ini' ? 'Hari Ini' : selectedDate,
                                        ": Kondisi Normal"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/history/page.tsx",
                                    lineNumber: 776,
                                    columnNumber: 15
                                }, this) : isNov27 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-red-400 flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-2 w-2 rounded-full bg-red-600 animate-ping"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/history/page.tsx",
                                            lineNumber: 782,
                                            columnNumber: 17
                                        }, this),
                                        "🔴 27 Nov 2025: Banjir & Kemacetan"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/history/page.tsx",
                                    lineNumber: 781,
                                    columnNumber: 15
                                }, this) : isOct11 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-amber-400 flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-2 w-2 rounded-full bg-amber-500 animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/history/page.tsx",
                                            lineNumber: 787,
                                            columnNumber: 17
                                        }, this),
                                        "🟡 11 Okt 2025: Luapan Babura"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/history/page.tsx",
                                    lineNumber: 786,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-blue-300",
                                    children: [
                                        "📅 Arsip: ",
                                        selectedDate
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/history/page.tsx",
                                    lineNumber: 791,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/history/page.tsx",
                                lineNumber: 774,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden lg:flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/90 px-3 py-2 text-xs font-semibold backdrop-blur-md text-slate-200 shadow-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm",
                                        children: "🚦"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/history/page.tsx",
                                        lineNumber: 797,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Live Traffic"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/history/page.tsx",
                                        lineNumber: 798,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/history/page.tsx",
                                        lineNumber: 799,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/history/page.tsx",
                                lineNumber: 796,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden sm:flex rounded-xl border border-slate-700/80 bg-slate-900/90 px-3.5 py-2 text-xs font-mono font-bold text-slate-200 backdrop-blur-md shadow-xl",
                                children: [
                                    "STATUS:",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-1 ".concat(isSafeState ? 'text-emerald-400 font-extrabold' : isNov27 ? 'text-red-400 font-extrabold' : 'text-amber-400 font-extrabold'),
                                        children: isSafeState ? 'KONDISI NORMAL' : isNov27 ? 'DARURAT BENCANA' : 'SIAGA WASPADA'
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/history/page.tsx",
                                        lineNumber: 804,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/history/page.tsx",
                                lineNumber: 802,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/history/page.tsx",
                        lineNumber: 761,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/history/page.tsx",
                lineNumber: 705,
                columnNumber: 7
            }, this),
            showNavPanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-3 top-16 sm:left-4 sm:top-20 z-30 max-h-[calc(100vh-10rem)] overflow-y-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloodSafeRouteNavigation, {
                    floodedSegments: activeSegments,
                    cascadingRoutes: activeCascading,
                    waterFactor: factor,
                    mapboxToken: token || '',
                    onRouteCalculated: (result)=>setSafeRouteResult(result),
                    onPickingLocationChange: (mode)=>setPickingLocationMode(mode),
                    pickingLocationMode: pickingLocationMode,
                    externalStart: externalStart,
                    externalDest: externalDest,
                    isSafeState: isSafeState
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/history/page.tsx",
                    lineNumber: 822,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/history/page.tsx",
                lineNumber: 821,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-auto hidden xl:flex flex-col absolute top-20 z-20 w-72 max-h-[calc(100vh-14.5rem)] rounded-2xl border border-slate-800/90 bg-slate-900/90 p-4 text-xs backdrop-blur-md shadow-2xl text-white overflow-hidden transition-all duration-300 ".concat(showNavPanel ? 'left-[26rem]' : 'left-6'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-bold text-white uppercase tracking-wider text-[11px] border-b border-slate-800/80 pb-2 shrink-0 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: isSafeState ? 'STATUS MONITORING JALAN' : isNov27 ? 'Ruas Tergenang (27 Nov)' : 'Ruas Tergenang (11 Okt)'
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/history/page.tsx",
                                lineNumber: 844,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-2 w-2 rounded-full bg-blue-500 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/history/page.tsx",
                                lineNumber: 845,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/history/page.tsx",
                        lineNumber: 843,
                        columnNumber: 9
                    }, this),
                    isSafeState ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3.5 bg-emerald-950/40 border border-emerald-500/30 rounded-xl mt-3 flex flex-col items-center text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-emerald-400 font-bold text-sm mb-1",
                                children: "✅ Status Aman"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/history/page.tsx",
                                lineNumber: 850,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-300 text-[11px] leading-relaxed",
                                children: "Tidak ada titik genangan air atau kemacetan yang terpantau pada tanggal ini."
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/history/page.tsx",
                                lineNumber: 851,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/history/page.tsx",
                        lineNumber: 849,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-h-0 flex flex-col overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 space-y-1.5 flex-1 min-h-0 overflow-y-auto pr-1 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-slate-700/60 [&::-webkit-scrollbar-thumb]:rounded-full",
                                children: activeSegments.slice(0, 5).map((seg, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setSelectedZone(seg),
                                        className: "w-full text-left p-2 rounded-xl transition flex items-center justify-between gap-2 cursor-pointer ".concat((selectedZone === null || selectedZone === void 0 ? void 0 : selectedZone.id) === seg.id ? 'bg-blue-600/30 border border-blue-400 text-white ring-1 ring-blue-500/50 shadow-sm' : 'bg-slate-950/60 hover:bg-slate-800/80 border border-slate-800/80 text-slate-200'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block font-bold text-white text-[11px] truncate",
                                                        children: [
                                                            idx + 1,
                                                            ". ",
                                                            seg.name.split('(')[0].trim()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/history/page.tsx",
                                                        lineNumber: 869,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block text-[10px] text-slate-400 truncate",
                                                        children: seg.name.includes('(') ? seg.name.split('(')[1].replace(')', '') : ''
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/history/page.tsx",
                                                        lineNumber: 872,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/history/page.tsx",
                                                lineNumber: 868,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-black px-1.5 py-0.5 rounded shrink-0 ".concat(seg.severityGrade === 'extreme' ? 'bg-black text-red-300 border border-red-800' : seg.severityGrade === 'very-critical' ? 'bg-red-900 text-white' : seg.severityGrade === 'critical' ? 'bg-red-600 text-white' : 'bg-amber-500 text-white'),
                                                children: [
                                                    seg.peakCm,
                                                    "cm"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/history/page.tsx",
                                                lineNumber: 876,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, seg.id, true, {
                                        fileName: "[project]/app/dashboard/history/page.tsx",
                                        lineNumber: 858,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/history/page.tsx",
                                lineNumber: 856,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 pt-2.5 border-t border-slate-800/80 text-[10px] space-y-1.5 text-slate-300 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-bold uppercase tracking-wider text-[9px] text-slate-400",
                                        children: "Hierarki Dampak Sistemik:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/history/page.tsx",
                                        lineNumber: 893,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-2 w-4 rounded-full bg-[#991b1b] shadow-xs"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/history/page.tsx",
                                                lineNumber: 897,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-slate-200",
                                                children: "Merah Tua: Pusat Banjir (8px)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/history/page.tsx",
                                                lineNumber: 898,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/history/page.tsx",
                                        lineNumber: 896,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-1.5 w-4 rounded-full bg-[#f97316]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/history/page.tsx",
                                                lineNumber: 901,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-300",
                                                children: "Oranye: Antrean 100-400m (5px)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/history/page.tsx",
                                                lineNumber: 902,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/history/page.tsx",
                                        lineNumber: 900,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-1 w-4 rounded-full bg-[#eab308]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/history/page.tsx",
                                                lineNumber: 905,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-300",
                                                children: "Kuning: Pengalihan 400-800m (4px)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/history/page.tsx",
                                                lineNumber: 906,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/history/page.tsx",
                                        lineNumber: 904,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/history/page.tsx",
                                lineNumber: 892,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/history/page.tsx",
                        lineNumber: 854,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/history/page.tsx",
                lineNumber: 838,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: isMobilePanelOpen ? 'block' : 'hidden sm:block',
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StatsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    timeMinutes: timeMinutes,
                    selectedDate: selectedDate,
                    selectedZone: selectedZone,
                    onCloseZone: ()=>setSelectedZone(null),
                    onSelectZone: (zone)=>setSelectedZone(zone),
                    isSafeState: isSafeState,
                    onSelectCCTV: (cctvName)=>setActiveCCTV(cctvName)
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/history/page.tsx",
                    lineNumber: 915,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/history/page.tsx",
                lineNumber: 914,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TimelineSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                selectedDate: selectedDate,
                onDateChange: (date)=>{
                    setSelectedDate(date);
                    setSelectedZone(null);
                },
                timeMinutes: timeMinutes,
                onTimeChange: setTimeMinutes,
                isPlaying: isPlaying,
                onTogglePlay: ()=>setIsPlaying(!isPlaying),
                playbackSpeed: playbackSpeed,
                onSpeedChange: setPlaybackSpeed
            }, void 0, false, {
                fileName: "[project]/app/dashboard/history/page.tsx",
                lineNumber: 927,
                columnNumber: 7
            }, this),
            activeCCTV && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CCTVModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                cctvName: activeCCTV,
                selectedDate: selectedDate,
                timeMinutes: timeMinutes,
                isSafeState: isSafeState,
                onClose: ()=>setActiveCCTV(null)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/history/page.tsx",
                lineNumber: 943,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/history/page.tsx",
        lineNumber: 282,
        columnNumber: 5
    }, this);
}
_s(HistoryPlaybackPage, "L/XILCG43mitfHxoCHLURWnhlcU=");
_c1 = HistoryPlaybackPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "FloodSafeRouteNavigation");
__turbopack_context__.k.register(_c1, "HistoryPlaybackPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_ff7bdf8c._.js.map