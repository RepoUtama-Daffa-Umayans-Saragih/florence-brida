export type RoutingZone = 'GREEN' | 'YELLOW' | 'RED';
export type TravelMode = 'DRIVE' | 'TWO_WHEELER' | 'WALK';
export interface RoutingPoint {
    id: string;
    latitude: number;
    longitude: number;
    zone?: RoutingZone;
}
export interface RoutingEdge {
    id: string;
    from: string;
    to: string;
    distanceMeters: number;
    durationSeconds: number;
    zone: RoutingZone;
    geometry: RoutingPoint[];
    bidirectional?: boolean;
}
export interface RoutingGraph {
    nodes: RoutingPoint[];
    edges: RoutingEdge[];
}
export interface AlternativeRouteRequest {
    origin: RoutingPoint;
    destination: RoutingPoint;
    graph: RoutingGraph;
    travelMode?: TravelMode;
}
export interface RouteResult {
    source: 'FLORENCE' | 'GOOGLE_ROUTES';
    nodeIds: string[];
    edgeIds: string[];
    geometry: RoutingPoint[];
    distanceMeters: number;
    durationSeconds: number;
    warning: string;
    googleValidated: boolean;
}
export interface GoogleRouteResponse {
    routes?: Array<{
        duration?: string;
        staticDuration?: string;
        distanceMeters?: number;
        polyline?: {
            encodedPolyline?: string;
        };
    }>;
}
