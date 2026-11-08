"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZonesController = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const zones_service_1 = require("./zones.service");
let ZonesController = class ZonesController {
    constructor(zones) {
        this.zones = zones;
    }
    snapshot() { return this.zones.snapshot(); }
    seedDummy() { return this.zones.seedDummyGraph(); }
    history(date) {
        return this.zones.getHistory(date);
    }
    stream() {
        return (0, rxjs_1.concat)((0, rxjs_1.of)(0), (0, rxjs_1.merge)(this.zones.changes, (0, rxjs_1.interval)(15_000))).pipe((0, operators_1.concatMap)(() => (0, rxjs_1.defer)(() => (0, rxjs_1.from)(this.zones.snapshot())).pipe((0, operators_1.map)((data) => ({ type: 'zone.update', data })), (0, operators_1.catchError)(() => (0, rxjs_1.of)({ type: 'zone.error', data: { message: 'Snapshot temporarily unavailable' } })))));
    }
};
exports.ZonesController = ZonesController;
__decorate([
    (0, common_1.Get)('snapshot'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ZonesController.prototype, "snapshot", null);
__decorate([
    (0, common_1.Get)('seed-dummy'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ZonesController.prototype, "seedDummy", null);
__decorate([
    (0, common_1.Get)('history'),
    __param(0, (0, common_1.Query)('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ZonesController.prototype, "history", null);
__decorate([
    (0, common_1.Sse)('stream'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", rxjs_1.Observable)
], ZonesController.prototype, "stream", null);
exports.ZonesController = ZonesController = __decorate([
    (0, common_1.Controller)('api/v1/zones'),
    __metadata("design:paramtypes", [zones_service_1.ZonesService])
], ZonesController);
//# sourceMappingURL=zones.controller.js.map