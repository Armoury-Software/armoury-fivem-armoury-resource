import { bootstrap, Database } from '@armoury/fivem-framework-server';

import { Server } from './controllers/server.controller';

bootstrap(Server, {
  providers: [Database.forRoot()],
});
