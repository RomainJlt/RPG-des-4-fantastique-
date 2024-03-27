import { Character}  from "./class.ts"; 
import { monster} from "./persoMonster.ts";


// structure of a room in the dungeon
interface Room {
  type: 'Combat' | 'Chest'; // Type of room: Combat or Chest
  opponents?: Monster[]; // Array of monsters present in the room (optional)
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
    
    if (room.type === 'Combat') { // If the room is a Combat room
      if (room.opponents && room.opponents.length > 0) { // If there are opponents in the room
        const enemies = room.opponents; // Assigning opponents to a variable
        fight(enemies, heroes); // Initiating a fight with the enemies
      }
    } else if (room.type === 'Chest') { // If the room is a Chest room
      console.log('You found a chest! Room cleared. Congratulations!');
    }
  }
}