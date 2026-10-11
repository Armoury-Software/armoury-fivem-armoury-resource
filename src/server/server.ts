import { bootstrap, ServerSessionService, ServerVirtualWorldsService } from '@armoury/fivem-framework-server';
import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';

import { Server } from './controllers/server.controller';

async function main() {
  const settings = Object.fromEntries(
    Cfx.Server.GetConvar('mysql_connection_string', '')
      .split(';')
      .filter(Boolean)
      .map((entry) => {
        const index = entry.indexOf('=');

        return [entry.slice(0, index), entry.slice(index + 1)];
      })
  );

  const pool = mysql.createPool({
    host: settings.host || 'localhost',
    port: !isNaN(Number(settings.port)) ? Number(settings.port) : 3306,
    user: settings.user || 'root',
    password: settings.password,
    database: settings.database || 'test',
  });

  try {
    console.log('Creating Drizzle instance...');

    const db = drizzle({ client: pool });

    console.log('Drizzle instance created!');

    await db.execute('SELECT 1');

    console.log('Database test query succeeded!');
  } catch (error) {
    console.error('Query failed:', error);

    if (error instanceof Error) {
      console.error('Underlying cause:', (error as any).cause);
    }
  } finally {
    await pool.end();
  }

  bootstrap(Server, {
    providers: [ServerVirtualWorldsService, ServerSessionService.withDefaults()],
  });
}

void main();
