import { Character}  from './class.ts'; 
import { Monster} from `./persoMonster.ts`;


// structure of a room in the dungeon
interface Room {
  type: 'Combat' | 'Chest'; 
  opponents?: Monster[]; 
}

// representation rooms with monsters or chest. 
const dungeonRooms: Room[] = [
  { type: 'Combat', opponents: [new Monster('vampire'), new Monster('Zombie'), new Monster('loupGarou')] }, 
  { type: 'Chest' }, 
  { type: 'Combat', opponents: [new Monster('vampire'), new Monster('loupGarou'), new Monster('zombie')] },
  { type: 'Chest' },
  { type: 'Combat', opponents: [new Monster('Dragon')] }];


function exploreDungeon(heroes: Character[]): void {
  for (let i = 0; i < dungeonRooms.length; i++) {
    const room = dungeonRooms[i];
    console.log(`Entering Room ${i + 1}: ${room.type}`); // Displaying room number and type
    
//     if (room.type === 'Combat') { // If the room is a Combat room
//       if (room.opponents && room.opponents.length > 0) { // If there are opponents in the room
//         const enemies = room.opponents; // Assigning opponents to a variable
//         fight(enemies, heroes); // Initiating a fight with the enemies
//       }
//     } else if (room.type === 'Chest') { // If the room is a Chest room
//       console.log('You found a chest! Room cleared. Congratulations!');
//     }
//   }
// }







class Character {
  constructor(public name: string, public health: number) {}
}

class Monster extends Character {
  constructor(name: string, health: number) {
    super(name, health);
  }
}

class Room {
  constructor(public type: string, public content: any[]) {}
}

class Dungeon {
  rooms: Room[];

  constructor() {
    this.rooms = [
      new Room('Combat', [new Monster('Monster1', 100), new Monster('Monster2', 100), new Monster('Monster3', 100)]),
      new Room('Chest', ['Item1', 'Item2']),
      new Room('Combat', [new Monster('Monster4', 100), new Monster('Monster5', 100), new Monster('Monster6', 100)]),
      new Room('Chest', ['Item3', 'Item4']),
      new Room('Combat', [new Monster('Boss', 500)]),
    ];
  }

  explore(heroes: Character[]): void {
    for (const room of this.rooms) {
      if (room.type === 'Combat') {
        console.log('A combat room. You have to fight: ', room.content.map((monster: Monster) => monster.name).join(', '));
        // Implement combat logic here
      } else if (room.type === 'Chest') {
        console.log('A chest room. You found: ', room.content.join(', '));
        // Implement item collection logic here
      }

      const allHeroesDefeated = heroes.every(hero => hero.health <= 0);
      if (allHeroesDefeated) {
        console.log('All heroes are defeated. Game over.');
        break;
      }
    }
  }
}

const heroes = [new Character('Hero1', 100), new Character('Hero2', 100), new Character('Hero3', 100)];
const dungeon = new Dungeon();
dungeon.explore(heroes);