import { IPokeBattleHistoryEndpoint } from "@providers/types/battle";
import { randomUUID } from "crypto";
import { provide } from "inversify-binding-decorators";

@provide(Battle)
class Battle {
  private _id: string;
  private _playerId: string;
  public log: {
    turn: number;
    attacker: string;
    defender: string;
    attack: string;
    attackType: string;
    damage: number;
  }[];
  public userName: string;
  public winner: boolean;
  public pokemon1: {
    name: string;
    sprites: string[];
    types: string[];
  };
  public pokemon2: {
    name: string;
    sprites: string[];
    types: string[];
  };
  public winnerName: string;
  public loserName: string;
  public isDraw: boolean;
  public _battledIn: Date;

  constructor(
    log: {
      turn: number;
      attacker: string;
      defender: string;
      attack: string;
      attackType: string;
      damage: number;
    }[],
    userName: string,
    playerId: string,
    winner: boolean,
    pokemon1: {
      name: string;
      sprites: string[];
      types: string[];
    },
    pokemon2: {
      name: string;
      sprites: string[];
      types: string[];
    },
    id: string,
    winnerName: string,
    loserName: string,
    isDraw: boolean,
    battledIn: Date,
  ) {
    this._id = id ?? randomUUID();
    this.userName = userName;
    this._playerId = playerId;
    this.winner = winner;
    this.pokemon1 = pokemon1;
    this.pokemon2 = pokemon2;
    this.winnerName = winnerName;
    this.loserName = loserName;
    this.isDraw = isDraw;
    this._battledIn = battledIn;
    this.log = log;
  }

  get id(): string {
    return this._id;
  }

  get battledIn(): Date {
    return this.battledIn;
  }

  get playerId(): string {
    return this._playerId;
  }
}

export { Battle };
