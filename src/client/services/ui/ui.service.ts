import { Export } from '@armoury/fivem-framework-client';
import { Injectable } from 'injection-js';

@Injectable()
export class UIService {
  @Export()
  public sendUIMessage(message: unknown): void {
    Cfx.Client.SendNuiMessage(JSON.stringify(message));
  }
}
