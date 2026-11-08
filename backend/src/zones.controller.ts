import { Controller, Get, MessageEvent, Query, Sse } from '@nestjs/common';
import { Observable, concat, defer, from, interval, merge, of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { ZonesService } from './zones.service';

@Controller('api/v1/zones')
export class ZonesController {
  constructor(private readonly zones: ZonesService) {}

  @Get('snapshot')
  snapshot() { return this.zones.snapshot(); }

  @Get('seed-dummy')
  seedDummy() { return this.zones.seedDummyGraph(); }

  @Get('history')
  history(@Query('date') date?: string) {
    return this.zones.getHistory(date);
  }

  @Sse('stream')
  stream(): Observable<MessageEvent> {
    // Initial and reconnect snapshots avoid gaps. Periodic resync also picks up
    // writes from other instances; use Redis fan-out for immediate multi-instance delivery.
    return concat(of(0), merge(this.zones.changes, interval(15_000))).pipe(
      concatMap(() => defer(() => from(this.zones.snapshot())).pipe(
        map((data): MessageEvent => ({ type: 'zone.update', data })),
        catchError(() => of<MessageEvent>({ type: 'zone.error', data: { message: 'Snapshot temporarily unavailable' } })),
      )),
    );
  }
}
