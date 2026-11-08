# Zone SSE integration

GET /api/v1/zones/snapshot returns the current map state.
GET /api/v1/zones/stream emits named `zone.update` SSE events with full snapshots.
Every connection receives an initial snapshot. Further snapshots follow committed
sensor writes and a 15-second resync timer. EventSource reconnects automatically.

Trusted MQTT/HTTPS ingestion must inject ZonesService and call:

```ts
await zones.ingestReading(nodeId, waterCm, measuredAt);
```

This stores the reading and derives GREEN (0–10 cm), YELLOW (>10–30 cm),
or RED (>30 cm). Each linked road uses the highest zone of its linked nodes.
No public sensor-write endpoint is exposed. Existing writers that bypass this
method are only picked up on periodic resync and do not recalculate road zones.

Configure NEXT_PUBLIC_API_URL in frontend/.env.local (default http://localhost:3001).
The server must allow the frontend origin through CORS. Proxies must disable SSE
buffering. A long-lived Nest server is required; serverless instances need timeout
and reconnect configuration.

Current implementation uses a process-local event bus and full snapshots, suitable
for the 50-node pilot. Multiple instances see DB changes on the 15-second timer;
Redis fan-out is required for immediate cross-instance broadcasts. Map snapshots
require PostGIS and migrated tables. No live MQTT consumer is included.

Node readings without a zone are excluded from colored markers, never assumed safe.
Sensor-age stale classification and authentication for ingestion remain separate work.
