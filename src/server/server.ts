import { bootstrap } from '@armoury/fivem-framework-server';

import { Server } from './controllers/server.controller';
import { SessionService } from './services/session/session.service';

bootstrap(Server, {
  eager: [SessionService],
  providers: [],
});
