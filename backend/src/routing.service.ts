import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  AlternativeRouteRequest,
  GoogleRouteResponse,
  RouteResult,
  RoutingEdge,
  RoutingPoint,
} from './routing.types';

const SAFETY_WARNING = 'Rekomendasi berbasis data tersedia, bukan jaminan rute aman.';

@Injectable()
export class RoutingService {
  private readonly logger = new Logger(RoutingService.name);
  private readonly routesEndpoint = 'https://routes.googleapis.com/directions/v2:computeRoutes';

  constructor(private readonly config: ConfigService) {}

  /**
   * Calculates a flood-aware route with A*, then validates it against Google Routes API.
   * RED edges are never traversed. YELLOW edges remain available but receive a penalty.
   */
  async calculateAlternativeRoute(request: AlternativeRouteRequest): Promise<RouteResult> {
    const florenceRoute = this.aStar(request);
    if (!florenceRoute) {
      throw new Error('Tidak ditemukan rute FLORENCE yang menghindari Zona Merah.');
    }

    const googleRoute = await this.validateWithGoogle(request, florenceRoute.geometry);
    if (googleRoute?.geometry && googleRoute.distanceMeters != null && googleRoute.durationSeconds != null && !this.intersectsBlockedGeometry(googleRoute.geometry, request.graph.edges)) {
      return {
        geometry: googleRoute.geometry,
        distanceMeters: googleRoute.distanceMeters,
        durationSeconds: googleRoute.durationSeconds,
        source: 'GOOGLE_ROUTES',
        nodeIds: florenceRoute.nodeIds,
        edgeIds: florenceRoute.edgeIds,
        warning: SAFETY_WARNING,
        googleValidated: true,
      };
    }

    return {
      ...florenceRoute,
      source: 'FLORENCE',
      warning: SAFETY_WARNING,
      googleValidated: false,
    };
  }

  private aStar(request: AlternativeRouteRequest): RouteResult | null {
    const { graph, origin, destination, travelMode = 'DRIVE' } = request;
    const nodes = new Map(graph.nodes.map((node) => [node.id, node]));
    const edges = graph.edges.filter((edge) => {
      // A red node or red edge is not traversable.
      const fromZone = nodes.get(edge.from)?.zone;
      const toZone = nodes.get(edge.to)?.zone;
      return edge.zone !== 'RED' && fromZone !== 'RED' && toZone !== 'RED';
    });
    const adjacency = new Map<string, RoutingEdge[]>();
    for (const edge of edges) {
      adjacency.set(edge.from, [...(adjacency.get(edge.from) ?? []), edge]);
      if (edge.bidirectional !== false) {
        adjacency.set(edge.to, [
          ...(adjacency.get(edge.to) ?? []),
          { ...edge, from: edge.to, to: edge.from, geometry: [...edge.geometry].reverse() },
        ]);
      }
    }

    const open = new Set<string>([origin.id]);
    const cameFrom = new Map<string, { nodeId: string; edge: RoutingEdge }>();
    const gScore = new Map<string, number>([[origin.id, 0]]);
    const fScore = new Map<string, number>([[origin.id, this.heuristic(origin, destination)]]);

    while (open.size > 0) {
      const current = [...open].sort((a, b) => (fScore.get(a) ?? Infinity) - (fScore.get(b) ?? Infinity))[0];
      if (current === destination.id) return this.buildRoute(cameFrom, current, nodes);
      open.delete(current);

      for (const edge of adjacency.get(current) ?? []) {
        const penalty = edge.zone === 'YELLOW' && travelMode === 'TWO_WHEELER' ? 1_000_000 : 0;
        const tentative = (gScore.get(current) ?? Infinity) + edge.durationSeconds + penalty;
        if (tentative < (gScore.get(edge.to) ?? Infinity)) {
          cameFrom.set(edge.to, { nodeId: current, edge });
          gScore.set(edge.to, tentative);
          const target = nodes.get(edge.to);
          if (!target) continue;
          fScore.set(edge.to, tentative + this.heuristic(target, destination));
          open.add(edge.to);
        }
      }
    }
    return null;
  }

  private buildRoute(
    cameFrom: Map<string, { nodeId: string; edge: RoutingEdge }>,
    destinationId: string,
    nodes: Map<string, RoutingPoint>,
  ): RouteResult {
    const edgePath: RoutingEdge[] = [];
    const nodeIds = [destinationId];
    let current = destinationId;
    while (cameFrom.has(current)) {
      const previous = cameFrom.get(current)!;
      edgePath.unshift(previous.edge);
      current = previous.nodeId;
      nodeIds.unshift(current);
    }

    const geometry = edgePath.flatMap((edge, index) => index === 0 ? edge.geometry : edge.geometry.slice(1));
    return {
      source: 'FLORENCE',
      nodeIds,
      edgeIds: edgePath.map((edge) => edge.id),
      geometry,
      distanceMeters: edgePath.reduce((sum, edge) => sum + edge.distanceMeters, 0),
      durationSeconds: edgePath.reduce((sum, edge) => sum + edge.durationSeconds, 0),
      warning: SAFETY_WARNING,
      googleValidated: false,
    };
  }

  private async validateWithGoogle(
    request: AlternativeRouteRequest,
    florenceGeometry: RoutingPoint[],
  ): Promise<Partial<RouteResult> | null> {
    const apiKey = this.config.get<string>('GMAPS_SERVER_KEY');
    if (!apiKey) {
      this.logger.warn('GMAPS_SERVER_KEY belum dikonfigurasi; validasi Google dilewati.');
      return null;
    }

    const intermediates = this.selectWaypoints(florenceGeometry).map((point) => ({
      location: { latLng: { latitude: point.latitude, longitude: point.longitude } },
      via: true,
    }));
    const response = await fetch(this.routesEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'routes.duration,routes.staticDuration,routes.distanceMeters,routes.polyline.encodedPolyline',
      },
      body: JSON.stringify({
        origin: this.toGoogleLocation(request.origin),
        destination: this.toGoogleLocation(request.destination),
        intermediates,
        travelMode: request.travelMode ?? 'DRIVE',
        routingPreference: 'TRAFFIC_AWARE',
        polylineEncoding: 'ENCODED_POLYLINE',
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) {
      this.logger.warn(`Google Routes API gagal dengan HTTP ${response.status}`);
      return null;
    }

    const body = (await response.json()) as GoogleRouteResponse;
    const route = body.routes?.[0];
    if (!route?.polyline?.encodedPolyline) return null;
    const geometry = this.decodePolyline(route.polyline.encodedPolyline);
    return {
      geometry,
      distanceMeters: route.distanceMeters ?? 0,
      durationSeconds: this.parseDuration(route.duration),
    };
  }

  private intersectsBlockedGeometry(geometry: RoutingPoint[], edges: RoutingEdge[]): boolean {
    const blocked = edges.filter((edge) => edge.zone === 'RED');
    return geometry.some((point) => blocked.some((edge) =>
      edge.geometry.some((blockedPoint) => this.distanceMeters(point, blockedPoint) <= 15),
    ));
  }

  private selectWaypoints(geometry: RoutingPoint[]): RoutingPoint[] {
    if (geometry.length <= 2) return [];
    const maxWaypoints = 20;
    const step = Math.max(1, Math.ceil((geometry.length - 2) / maxWaypoints));
    return geometry.slice(1, -1).filter((_, index) => index % step === 0).slice(0, maxWaypoints);
  }

  private toGoogleLocation(point: RoutingPoint) {
    return { location: { latLng: { latitude: point.latitude, longitude: point.longitude } } };
  }

  private decodePolyline(encoded: string): RoutingPoint[] {
    const points: RoutingPoint[] = [];
    let index = 0;
    let latitude = 0;
    let longitude = 0;
    while (index < encoded.length) {
      let shift = 0;
      let result = 0;
      let byte: number;
      do { byte = encoded.charCodeAt(index++) - 63; result |= (byte & 0x1f) << shift; shift += 5; } while (byte >= 0x20);
      latitude += (result & 1) ? ~(result >> 1) : result >> 1;
      shift = 0; result = 0;
      do { byte = encoded.charCodeAt(index++) - 63; result |= (byte & 0x1f) << shift; shift += 5; } while (byte >= 0x20);
      longitude += (result & 1) ? ~(result >> 1) : result >> 1;
      points.push({ id: `google-${points.length}`, latitude: latitude / 1e5, longitude: longitude / 1e5 });
    }
    return points;
  }

  private parseDuration(value?: string): number {
    if (!value) return 0;
    const seconds = Number.parseFloat(value.replace('s', ''));
    return Number.isFinite(seconds) ? seconds : 0;
  }

  private heuristic(a: RoutingPoint, b: RoutingPoint): number {
    return this.distanceMeters(a, b) / 13.9;
  }

  private distanceMeters(a: RoutingPoint, b: RoutingPoint): number {
    const earthRadius = 6_371_000;
    const dLat = (b.latitude - a.latitude) * Math.PI / 180;
    const dLon = (b.longitude - a.longitude) * Math.PI / 180;
    const lat1 = a.latitude * Math.PI / 180;
    const lat2 = b.latitude * Math.PI / 180;
    const x = dLon * Math.cos((lat1 + lat2) / 2);
    return Math.sqrt((dLat * dLat) + (x * x)) * earthRadius;
  }
}
