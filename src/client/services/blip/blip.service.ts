import { EVENT_DIRECTIONS, EventListener, I18n } from '@armoury/fivem-framework-client';
import { Injectable } from 'injection-js';

@Injectable()
export class BlipService {
  private _blipsToServerBlipIds = new Map<number, number>();
  private _serverBlipIdsToBlips = new Map<number, CachedServerBlip>();

  @EventListener({ eventName: 'armoury:safe:blip:create', direction: EVENT_DIRECTIONS.SERVER_TO_CLIENT })
  protected _onBlipNeedCreate(
    invokingResource: string,
    serverBlipId: number,
    x: number,
    y: number,
    z: number,
    spriteId?: number,
    key?: string,
    keyParams?: Record<string, any>
  ): void {
    if (serverBlipId == null) {
      console.error('Received a request to create a blip, but the server blip id was null.');
      return;
    }

    const blipId = Cfx.Client.AddBlipForCoord(x, y, z);
    if (spriteId != null) {
      Cfx.Client.SetBlipSprite(blipId, spriteId);
    }

    if (key) {
      Cfx.Client.BeginTextCommandSetBlipName('STRING');
      Cfx.Client.AddTextComponentString(I18n.translate(key, keyParams));
      Cfx.Client.EndTextCommandSetBlipName(blipId);
    }

    this._blipsToServerBlipIds.set(blipId, serverBlipId);
    this._serverBlipIdsToBlips.set(serverBlipId, { blipId, invokingResource });

    Cfx.emit('armoury:unsafe:blip:created', serverBlipId, blipId);
  }

  @EventListener()
  protected onResourceStop(resourceName: string): void {
    const serverBlipIds = Array.from(this._serverBlipIdsToBlips.keys());
    let found: boolean = false;
    for (let index = 0; index < serverBlipIds.length; index++) {
      const serverBlipId = serverBlipIds[index];
      const blip = this._serverBlipIdsToBlips.get(serverBlipId);

      if (blip && blip.invokingResource === resourceName) {
        found = true;
        Cfx.Client.RemoveBlip(blip.blipId);
        this._serverBlipIdsToBlips.delete(serverBlipId);
        this._blipsToServerBlipIds.delete(blip.blipId);
      }
    }

    if (found) {
      console.log(`Successfully removed blips from resource '${resourceName}'.`);
    } else {
      console.log(
        `Resource '${resourceName}' unloaded, but no blips were registered for that`,
        'resource. Doing nothing..'
      );
    }
  }
}

type CachedServerBlip = {
  blipId: number;
  invokingResource: string;
};
