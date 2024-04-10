import { Character } from './class.ts';

export class Inventory {
    items: string[];

    constructor() {
        this.items = ['potion', 'ether', 'star piece', 'Morceau de étoile'];
    }

    useItem(item: string, character: Character): void {
        let itemFound = false;

        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] === item) {
                itemFound = true;
                this.items.splice(i, 1);

                switch (item) {
                    case 'Demi-étoile':
                        if (character.canBeResurrected,`pas K.O.`) {
                            character.ressusciter(100);
                            console.log(`${character.name} used a Demi-étoile and was resurrected with full health.`);
                        } else {
                            character.restaurerVie(100); 
                            console.log(`${character.name} used a Demi-étoile and restored their health to full.`);
                        }
                        break;
                    case 'potion':
                        character.restaurerVie(50);
                        console.log(`${character.name} restored 50% of their health.`);
                        break;
                    case 'ether':
                        character.restaurerVie(30);
                        console.log(`${character.name} restored 30% of their health.`);
                        break;
                    case 'Morceau de étoile':
                        if (character.canBeResurrected) {
                            character.ressusciter(20);
                            console.log(`${character.name} restored 20% of their health.`);
                        } else {
                            character.restaurerVie(50); 
                            console.log(`${character.name} restored 50% of their health.`);
                        }
                        break;
                    default:
                        console.log("The item is not supported.");
                }
                break; 
            }
        }
        if (!itemFound) {
            console.log("This item is not available in the inventory!");
        }
    }

    displayInventory(): void {
        console.log("Inventory:");
        for (let i = 0; i < this.items.length; i++) {
            console.log(`${i + 1}. ${this.items[i]}`);
        }
    }
}
