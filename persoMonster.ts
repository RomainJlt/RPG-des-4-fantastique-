import { Character } from "./class.ts";
import { Monster } from "./class.ts"


// Name, physicalAttack, physicalDefense ,speed, HPMax, HPCurrent, attackPotency, canBeHurt, canBeCured, canBeResurrected 
const guerrier =    new Character("guerrier", "Théophile Le Luisant",               40, 70, 0, 0, 0, 50, 100, 100, 80, false, false, false);
const mage =        new Character("mage", "Merlin Gros Baton",                  10, 10, 50, 30, 100, 50, 100, 100, 80, false, false, false);
const paladin =     new Character("paladin", "Dartagnan Durex",                    30, 75, 20, 50, 100, 60, 100, 100, 80, false, false, false);
const barbare =     new Character("barbare", "Marcel Le Pénètrepeau",              30, 10, 10, 10, 0, 30, 100, 100, 80, false, false, false);
const prêtre =      new Character("prêtre", "Jean De Pédolandie",                 20, 10, 30, 30, 100, 100, 100, 100, 80, false, false, false);
const voleur =      new Character("voleur", "Marcus Le Voleur D'Innocence",       50, 50, 0, 10, 0, 80, 100, 100, 80, false, false, false);



export const humain : Character[] = [guerrier, mage, paladin, barbare, prêtre, voleur];






const zombie = new Monster("Pierre",    10, 10, 10, 10, 50, 50, 5);
const vampire = new Monster("Florian",  10, 10, 10, 10, 50, 50, 5);
const loupGarou = new Monster("Charly", 10, 10, 10, 10, 50, 50, 5);
export const dragon: Monster[] = [
    new Monster("Dragon", 10, 10, 10, 10, 50, 50, 5),
    new Monster("Dragon", 10, 10, 10, 10, 50, 50, 5),
];
export const monster : Monster[] = [zombie, vampire, loupGarou];

export {Character};
export {Monster};
