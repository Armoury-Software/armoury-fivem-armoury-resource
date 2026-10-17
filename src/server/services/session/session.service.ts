import { EventListener, Export, Session, SessionUpdateType } from '@armoury/fivem-framework-server';
import { Injectable } from 'injection-js';

@Injectable()
export class SessionService {
  private _sessions: Map<number, Session> = new Map();
  private _principalsToPlayerIds: Map<number, number> = new Map();

  @Export()
  public getNumPlayersConnected(): number {
    return this._sessions.size;
  }

  @Export()
  public getAllPlayerIds(): number[] {
    return Array.from(this._sessions.keys());
  }

  @Export()
  public getAllPlayerPrincipals(): number[] {
    return Array.from(this._principalsToPlayerIds.keys());
  }

  @Export()
  public isPlayerConnected(playerId: number): boolean {
    return this._sessions.has(playerId);
  }

  @Export()
  public getSessionByPlayerId(playerId: number): Session {
    if (!this._sessions.has(playerId)) {
      throw new Error(`Attempted to get session for player ${playerId}, but no session exists for this player.`);
    }

    return this._sessions.get(playerId)!;
  }

  @Export()
  public getSessionByPrincipal(principal: number): Session {
    if (!this._principalsToPlayerIds.has(principal)) {
      throw new Error(`Attempted to get session for principal ${principal}, but no session exists for this principal.`);
    }

    return this.getSessionByPlayerId(this._principalsToPlayerIds.get(principal)!);
  }

  @Export()
  public setPlayerPrincipal(playerId: number, principal: number): void {
    if (this._principalsToPlayerIds.has(principal)) {
      console.warn(
        `Attempted to set player ${playerId}'s principal to ${principal}, ` +
          'but a player with that principal was already connected. Dropping the connection..'
      );

      Cfx.Server.DropPlayer(
        playerId.toString(),
        'An unknown technical error has occured. Please try reconnecting. (Error code: SES-001)'
      );
      return;
    }

    if (!this._sessions.has(playerId)) {
      throw new Error(
        `Attempted to set principal ${principal} for player ${playerId}, ` + 'but no session exists for this player.'
      );
    }

    this._sessions.get(playerId)!.principal = principal;
    this._principalsToPlayerIds.set(principal, playerId);

    console.log(
      `Player [${Cfx.Server.GetPlayerName(playerId.toString())} (${playerId})]'s session has ` +
        `received a principal (principal: ${principal}).`
    );

    Cfx.emit('armoury:session-updated', this._sessions.get(playerId)!, SessionUpdateType.PrincipalUpdate);
    Cfx.emitNet('armoury:session-updated', playerId, SessionUpdateType.PrincipalUpdate);
  }

  @EventListener()
  protected onPlayerConnect(): void {
    const playerId = Cfx.source;

    if (this._sessions.has(playerId)) {
      console.warn('A player tried to connect but already has a session. This should not happen.');
      Cfx.Server.DropPlayer(playerId.toString(), 'You already have a session. Please reconnect. (Error code: SES-002)');
      return;
    }

    const platformId = Cfx.Server.GetPlayerIdentifierByType(playerId.toString(), 'fivem');
    const lastKnownName = Cfx.Server.GetPlayerName(playerId.toString());

    if (!platformId) {
      console.warn("A player tried to connect but they don't have a valid platform ID. This should not happen.");

      Cfx.Server.DropPlayer(
        playerId.toString(),
        'You need a FiveM platform ID in order to connect. Please log-in with Cfx.re.'
      );

      return;
    }

    const session = new Session(playerId, platformId, lastKnownName);
    this._sessions.set(playerId, session);

    console.log(`Player ${playerId} connected. Session created with platform ID: ${platformId}.`);

    Cfx.emit('armoury:session-created', session);
    Cfx.emitNet('armoury:session-created', playerId);
  }

  @EventListener()
  protected onPlayerDisconnect(): void {
    const playerId = Cfx.source;
    const session = this._sessions.get(playerId);

    if (session) {
      this._sessions.delete(playerId);
    } else {
      console.warn("A player tried to disconnect but they don't have a session. This should not happen.");
    }

    if (session && session.principal != null) {
      this._principalsToPlayerIds.delete(session.principal);
    }

    console.log(`Player ${playerId} disconnected. Session removed.`);

    Cfx.emit('armoury:session-destroyed', playerId, session?.principal ?? null);
  }
}
