import { Character } from "./class.ts";
import { Monster } from "./class.ts"


// Name, physicalAttack, physicalDefense ,speed, HPMax, HPCurrent, attackPotency, canBeHurt, canBeCured, canBeResurrected 
const guerrier =    new Character("Théophile Le Luisant",               40, 70, 0, 0, 0, 50, 100, 100, 80, false, false, false, false);
const mage =        new Character("Merlin Gros Baton",                  10, 10, 50, 30, 100, 50, 100, 100, 80, false, false, false, false);
const paladin =     new Character("Dartagnan Durex",                    30, 75, 20, 50, 100, 60, 100, 100, 80, false, false, false, false);
const barbare =     new Character("Marcel Le Pénètrepeau",              30, 10, 10, 10, 0, 30, 100, 100, 80, false, false, false, false);
const prêtre =      new Character("Jean De Pédolandie",                 20, 10, 30, 30, 100, 100, 100, 100, 80, false, false, false, false);
const voleur =      new Character("Marcus Le Voleur D'Innocence",       50, 50, 0, 10, 0, 80, 100, 100, 80, false, false, false, false);


const bucheron =    new Character("Paul La Grosse Poutre",              100, 100,100, 100, 100, 100, 100, 100, 80, false, false, false, false);
const scammer =     new Character("Axel Le Scammer De Mémés Baveuses",  100, 100, 100, 100, 100, 100, 100, 100, 80, false, false, false, false);
const geek =        new Character("Romain Ultimement Nul",              100, 100, 100, 100, 100, 100, 100, 100, 80, false, false, false, false);
const druide =      new Character("Najm L'Anaconda",                    100, 100, 100, 100, 100, 100, 100, 100, 80, false, false, false, false);
const dieu =        new Character("Julien La Divinité",                 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 100, false, false, false, false);

export const humain : Character[] = [guerrier,mage,paladin,barbare,prêtre,voleur,bucheron,scammer,geek,druide,dieu];






const zombie = new Monster("Zombie",    10, 10, 10, 10, 50, 50, 5);
const vampire = new Monster("Vampire",  10, 10, 10, 10, 50, 50, 5);
const loupGarou = new Monster("Loup-Garou", 10, 10, 10, 10, 50, 50, 5);
export const dragon: Monster[] = [
    new Monster("Dragon", 10, 10, 10, 10, 50, 50, 5),
    new Monster("Dragon", 10, 10, 10, 10, 50, 50, 5),
];
export const monster : Monster[] = [zombie, vampire, loupGarou];

export {Character};
export {Monster};