import { Controller, Get } from '@nestjs/common';
import { ZonesService } from './zones.service';

@Controller('api/v1/safe-points')
export class SafePointsController {
  constructor(private readonly zones: ZonesService) {}
  @Get()
  list() { return this.zones.safePoints(); }
}
