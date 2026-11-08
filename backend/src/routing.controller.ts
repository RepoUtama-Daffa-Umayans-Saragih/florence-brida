import { Body, Controller, Post } from '@nestjs/common';
import { RoutingService } from './routing.service';
import { AlternativeRouteRequest } from './routing.types';

@Controller('api/v1/routing')
export class RoutingController {
  constructor(private readonly routing: RoutingService) {}

  @Post('alternative')
  calculate(@Body() request: AlternativeRouteRequest) {
    return this.routing.calculateAlternativeRoute(request);
  }
}
