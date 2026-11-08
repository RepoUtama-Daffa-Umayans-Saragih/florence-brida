import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { BmkgSyncService } from './bmkg-sync.service';
import { RedisService } from './redis.service';
import { RoutingController } from './routing.controller';
import { RoutingService } from './routing.service';
import { ZonesService } from './zones.service';
import { ZonesController } from './zones.controller';
import { SafePointsController } from './safe-points.controller';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ScheduleModule.forRoot()],
  controllers: [RoutingController, ZonesController, SafePointsController],
  providers: [BmkgSyncService, RedisService, RoutingService, ZonesService],
})
export class AppModule {}
