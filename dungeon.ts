import { Character, Monster } from './characters';

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
        
    }