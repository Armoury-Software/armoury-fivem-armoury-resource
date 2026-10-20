import { bootstrap } from '@armoury/fivem-framework-client';

import { Client } from './controllers/client.controller';

import { PickupService } from './services/pickup/pickup.service';
import { ZoneService } from './services/zone/zone.service';
import { UIService } from './services/ui/ui.service';

bootstrap(Client, {
  eager: [PickupService, ZoneService, UIService],
});
