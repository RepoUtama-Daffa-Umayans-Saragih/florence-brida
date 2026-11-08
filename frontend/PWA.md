# FLORENCE PWA

Production only: npm run build, then npm start. Service worker is disabled in development.
Use HTTPS in deployment (localhost is allowed for local testing).

Manifest: /manifest.webmanifest. Worker: /sw.js. Emergency fallback: /offline.
Set NEXT_PUBLIC_API_URL to the backend URL before building; default is http://localhost:3001.

Workbox NetworkFirst caches GET /api/v1/zones/snapshot and /api/v1/safe-points
with a three-second network timeout and maximum seven-day retention.
EmergencyInfo fetches these endpoints every minute while mounted and keeps a
localStorage copy for the offline emergency list. Each item's snapshot timestamp
is displayed; stored data is not a safety guarantee. LocalStorage does not expire
so older emergency data remains available with its timestamp. SSE and Google Maps
tiles are NOT cached. No offline base map is provided.

First visit must be online; the worker must activate and both endpoints must
successfully return data before those datasets can be available offline.

Manual verification:
1. Build/start production and visit online, with backend and seeded data available.
2. Check Application > Manifest and Service Workers in browser DevTools.
3. Verify both API requests succeeded and emergency lists contain records.
4. Switch browser Network to Offline and reload /offline.
5. Confirm lists and original timestamps remain visible, and offline label appears.
6. Test navigation to an uncached page while offline: emergency fallback should load.
7. Restore network; lists refresh automatically.

Generated public/sw.js, workbox-*.js and fallback-*.js should be rebuilt for deployment.
Browser offline behavior and installability still require manual browser verification.
