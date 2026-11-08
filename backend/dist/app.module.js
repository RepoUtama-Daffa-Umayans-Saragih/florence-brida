"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const schedule_1 = require("@nestjs/schedule");
const bmkg_sync_service_1 = require("./bmkg-sync.service");
const redis_service_1 = require("./redis.service");
const routing_controller_1 = require("./routing.controller");
const routing_service_1 = require("./routing.service");
const zones_service_1 = require("./zones.service");
const zones_controller_1 = require("./zones.controller");
const safe_points_controller_1 = require("./safe-points.controller");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot({ isGlobal: true }), schedule_1.ScheduleModule.forRoot()],
        controllers: [routing_controller_1.RoutingController, zones_controller_1.ZonesController, safe_points_controller_1.SafePointsController],
        providers: [bmkg_sync_service_1.BmkgSyncService, redis_service_1.RedisService, routing_service_1.RoutingService, zones_service_1.ZonesService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map