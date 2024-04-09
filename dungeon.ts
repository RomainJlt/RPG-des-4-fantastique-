import { Character  } from "./class.ts";
import { Monster } from "./monster.ts";
;
class Dungeon {
  rooms: Room[];

  constructor(rooms: Room[]) {
    this.rooms = rooms;
  }

  explore(heroes: Character[]): void {
    for (const room of this.rooms) {
      if (room.type === 'Combat') {
        console.log('A combat room. You have to fight: ', room.opponents?.map((monster: Monster) => monster.name).join(', '));
        
        // Combat logic
        room.opponents?.forEach(monster => {
          heroes.forEach(hero => {
            monster.health -= hero.attackPower;
            console.log(`${hero.name} attacks ${monster.name}. ${monster.name}'s health is now ${monster.health}`);
          });
        });
      } else if (room.type === 'Chest') {
        console.log('A chest room.');
        
        // Item collection logic
        console.log('You found a chest. You open it and find a health potion.');
        heroes.forEach(hero => {
          hero.health += 50;
          console.log(`${hero.name}'s health is now ${hero.health}`);
        });
      }

      const allHeroesDefeated = heroes.every(hero => hero.health <= 0);
      if (allHeroesDefeated) {
        console.log('All heroes are defeated. Game over.');
        break;
      }
    }
  }
}

const dungeon = new Dungeon(dungeonRooms);
dungeon.explore([]);
export { Dungeon };