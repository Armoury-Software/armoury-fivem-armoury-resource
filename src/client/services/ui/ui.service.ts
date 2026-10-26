import { Export, UIListener } from '@armoury/fivem-framework-client';
import { Injectable } from 'injection-js';

@Injectable()
export class UIService {
  @Export()
  public sendUIMessage(message: unknown): void {
    Cfx.Client.SendNuiMessage(JSON.stringify(message));
  }

  @UIListener({ eventName: 'setFocusState' })
  protected onUIFocusShouldChange({ toggle }: { toggle: boolean }): void {
    switch (toggle) {
      case true:
        Cfx.Client.SetNuiFocus(true, true);
        Cfx.Client.SetNuiFocusKeepInput(false);
        Cfx.Client.EnterCursorMode();
        Cfx.emit('armoury:unsafe:ui:focus:received');
        break;

      case false:
        Cfx.Client.SetNuiFocus(false, false);
        Cfx.Client.LeaveCursorMode();
        Cfx.emit('armoury:unsafe:ui:focus:gone');
        break;
    }

  }
}
