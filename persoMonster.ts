import { Character } from "./class.ts";
import { Monster } from "./class.ts"


// Name, physicalAttack, physicalDefense ,speed, HPMax, HPCurrent, attackPotency, canBeHurt, canBeCured, canBeResurrected 
const guerrier =    new Character("gerrier", "Garek le Guerroyeur",       40, 70, 0, 0, 0, 50, 100, 100, 80, false, false, false, false);
const mage =        new Character("mage", "Merlin l'Enchanteur",          10, 10, 50, 30, 100, 50, 100, 100, 80, false, false, false, false);
const paladin =     new Character("paladin", "Paladin Valérian",          30, 75, 20, 50, 100, 60, 100, 100, 80, false, false, false, false);
const barbare =     new Character("barbare", "Ghorak le Barbare",         0, 10, 10, 10, 0, 30, 100, 100, 80, false, false, false, false);
const prêtre =      new Character("prêtre", "Père Théodric",              20, 10, 30, 30, 100, 100, 100, 100, 80, false, false, false, false);
const voleur =      new Character("voleur", "Robin des Bois",             50, 50, 0, 10, 0, 80, 100, 100, 80, false, false, false, false);


const dieu =        new Character("dieu","Julien La Divinité",            1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 100, false, false, false, false);

export const humain : Character[] = [guerrier,mage,paladin,barbare,prêtre,voleur,dieu];






const zombie = new Monster("Zombie",        10, 10, 10, 10, 50, 50, 5);
const vampire = new Monster("Vampire",      10, 10, 10, 10, 50, 50, 5);
const loupGarou = new Monster("Loup-Garou", 10, 10, 10, 10, 50, 50, 5);
export const dragon: Monster[] = [
    new Monster("Dragon", 10, 10, 10, 10, 50, 50, 5),
    new Monster("Dragon", 10, 10, 10, 10, 50, 50, 5),
];
export const monster : Monster[] = [zombie, vampire, loupGarou];

export {Character};
export {Monster};
