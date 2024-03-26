import { Character, Monster } from './class.ts';

interface Room {
    type: 'Combat' | 'Chest';
    opponents?: Monster[];
}

export const dungeonRooms: Room[] = [
    { type: "Combat", opponents: [new Monster("Mage"), new Monster("Zombie"), new Monster("Viking")] },
    { type: "Chest" },
    { type: "Combat", opponents: [new Monster("Snike"), new Monster("Wolf"), new Monster("Viking")] },
    { type: "Chest" },
    { type: "Combat", opponents: [new Monster("Dragon")] }
];


function exploreDungeon(heroes: Character[]): void {
    for (let i = 0; i < dungeonRooms.length; i++) {
      const room = dungeonRooms[i];
      console.log(`Entering Room ${i + 1}: ${room.type}`);
  
      if (room.type === 'Combat') {
        if (room.opponents && room.opponents.length > 0) {
          const enemies = room.opponents;
          fight(enemies, heroes);
        }
      } else if (room.type === 'Chest') {
        console.log('You found a chest!');
      }
      console.log('--- Room cleared ---');
    }
    console.log('Congratulations!');
  }
  function fight(enemies: Monster[], heroes: Character[]) {
    console.log('--- Battle begins ---');
    let round = 1;
    while (enemies.length > 0 && heroes.length > 0) {
      console.log(`Round ${round}`);
      round++;
    }
    if (enemies.length === 0) {
      console.log('All enemies defeated!');
    } else {
      console.log('All heroes defeated! Game Over!');
    }
  }
  