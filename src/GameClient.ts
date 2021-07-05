import { Character } from "./Character";
import { Player } from "./Player";
import { GameServer } from "./GameServer";


const server = new GameServer();

const dennis: Player = server.createNewPlayer("Dennis");
const boris: Character = server.createNewCharacter("Boris", dennis);
console.log(dennis, boris);

server.handleMessage("say Hello you!", dennis);