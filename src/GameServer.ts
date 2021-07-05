import { Character } from "./Character";
import { CharacterStats } from "./CharacterStats";
import { Player } from "./Player";

class GameServer
{
  private players: Player[];

  constructor()
  {
    this.players = [];
  }

  public handleMessage(message: string, player: Player): void
  {
    const words = this.cleanseMessage(message).split(new RegExp(" "));
    function handleCommand(commandName: string, args: string[])
    {
      console.log(commandName, ...args);
    }

    handleCommand(words.shift(), words);
  }

  private cleanseMessage(message): string
  {
    message = message.replace(/[^a-zA-Z0-9!?" ]/, "");
    return message;
  }

  public createNewPlayer(playerName: string): Player
  {
    const player = new Player();
    player.name = playerName;
    this.players.push(player);
    return player;
  }

  public createNewCharacter(characterName: string, player: Player): Character
  {
    const character = new Character();
    character.name = characterName;

    const stats = new CharacterStats();
    stats.maxHealth = 100;
    stats.health = 100;
    stats.mana = 0;
    stats.stamina = 50;
    character.stats = stats;

    return character;
  }

  private getHealthDescription(character)
  {
    const stats = character.stats;
    const factor = stats.health / stats.maxHealth;
    if (factor > 1)
    {
      return "You feel immortal";
    } else if (factor == 1)
    {
      return "You feel in perfect shape.";
    } else if (factor > 0.95)
    {
      return "You feel in feel terrific.";
    } else if (factor >= 0.75)
    {
      return "You feel great.";
    } else if (factor >= 0.5)
    {
      return "You feel alright.";
    } else if (factor >= 0.35)
    {
      return "You feel mortal.";
    } else if (factor >= 0.20)
    {
      return "You feel very mortal.";
    } else if (factor >= 0.10)
    {
      return "You can't feel your body.";
    } else if (factor >= 0.05)
    {
      return "You feel like you should be dead..";
    } else if (factor > 0)
    {
      return "You are actually dying...";
    } else
    {
      return "You are literally dead.";
    }
  }
}

export { GameServer }