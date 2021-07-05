function handleMessage(message)
{
  const words = cleanse(message).split(" ");

  //console.log(words);
}

function cleanse(message)
{
  message = message.replace(/[^a-zA-Z0-9 ]/, "");
  message = message.toLowerCase();
  return message;
}

function createnewPlayer(characterName)
{
  let newPlayer = {
    id: players.length,
    character: createNewCharacter(characterName)
  }
  players.push(newPlayer);
  return newPlayer
}

function moveCharacter(character, x, y)
{
  character.position.x += x;
  character.position.y += y;
}

function createNewCharacter(characterName)
{
  const character = {
    name: characterName,
    stats: {
      maxHealth: 100,
      health: 100,
      mana: 0,
      stamina: 50
    },
    position: {
      x: 0,
      y: 0
    },
    skills: {},
    knownlegde: {}
  }

  return character;
}

function getHealthDescription(character)
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


let players = [];
handleMessage("Hello world!");

createnewPlayer("Dennis");
const dennis = players[0];
const dennisC = dennis.character;
console.log(dennisC);

moveCharacter(dennisC, 50, 25);

console.log(dennisC);

while (dennisC.stats.health >= 0)
{
  console.log(getHealthDescription(dennisC));
  dennisC.stats.health -= 5;
}