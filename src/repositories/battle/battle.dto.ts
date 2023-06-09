import { IPokeBattleHistoryEndpoint } from "@providers/types/battle";

interface IBattleDTO {
  id?: string;
  userName: string;
  playerId: string;
  pokemon1: IPokeBattleHistoryEndpoint;
  pokemon2: IPokeBattleHistoryEndpoint;
  log: {
    turn: number;
    attacker: string;
    defender: string;
    attack: string;
    attackType: string;
    damage: number;
  }[];
  winner: boolean;
  winnerName: string;
  loserName: string;
  isDraw: boolean;
  battledIn?: Date;
}

export { IBattleDTO };
