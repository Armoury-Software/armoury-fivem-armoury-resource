import { bootstrap } from '@armoury/fivem-framework-client';

import { Client } from './controllers/client.controller';

import { PickupService } from './services/pickup/pickup.service';
import { ZoneService } from './services/zone/zone.service';

bootstrap(Client, {
  eager: [PickupService, ZoneService],
});
