import { RoutingService } from './routing.service';
import { AlternativeRouteRequest } from './routing.types';
export declare class RoutingController {
    private readonly routing;
    constructor(routing: RoutingService);
    calculate(request: AlternativeRouteRequest): Promise<import("./routing.types").RouteResult>;
}
