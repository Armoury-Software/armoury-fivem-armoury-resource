import { bootstrap } from '@armoury/fivem-framework-server';

import { Server } from './controllers/server.controller';
import { SessionService } from './services/session/session.service';
import { ZoneService } from './services/zone/zone.service';
import { PickupService } from './services/pickup/pickup.service';

bootstrap(Server, {
  eager: [SessionService, ZoneService, PickupService],
  providers: [],
});
