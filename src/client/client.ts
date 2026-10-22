import { bootstrap, I18n } from '@armoury/fivem-framework-client';

import { Client } from './controllers/client.controller';

import { BlipService } from './services/blip/blip.service';
import { PickupService } from './services/pickup/pickup.service';
import { ZoneService } from './services/zone/zone.service';
import { UIService } from './services/ui/ui.service';

bootstrap(Client, {
  eager: [BlipService, PickupService, ZoneService, UIService],
  providers: [I18n.withOptions({ defaultLanguage: 'en-US' })],
});
