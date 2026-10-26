import { Command, Config } from '@armoury/fivem-framework-client';
import { Injectable } from 'injection-js';

@Injectable()
export class LanguageService {
  public constructor(@Config('languages') private readonly _languages: string[]) {}

  @Command()
  protected language(language: string): void {
    if (typeof language !== 'string' || !this._languages.includes(language)) {
      return;
    }

    Cfx.emit('armoury:unsafe:language:change:request', language);
    setTimeout(() => Cfx.emit('armoury:unsafe:language:change:done'), 1000);
  }
}
