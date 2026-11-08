import { ConfigService } from '@nestjs/config';
import { AlternativeRouteRequest, RouteResult } from './routing.types';
export declare class RoutingService {
    private readonly config;
    private readonly logger;
    private readonly routesEndpoint;
    constructor(config: ConfigService);
    calculateAlternativeRoute(request: AlternativeRouteRequest): Promise<RouteResult>;
    private aStar;
    private buildRoute;
    private validateWithGoogle;
    private intersectsBlockedGeometry;
    private selectWaypoints;
    private toGoogleLocation;
    private decodePolyline;
    private parseDuration;
    private heuristic;
    private distanceMeters;
}
