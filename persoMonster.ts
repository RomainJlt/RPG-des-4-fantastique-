import { Character, Monster } from "./class.ts";
import { Character, Monster } from "./class.ts";


// Name, physicalAttack, physicalDefense ,speed, HPMax, HPCurrent, attackPotency, canBeHurt, canBeCured, canBeResurrected 
const guerrier =    new Character("Théophile Le Luisant",               40, 70, 0, 0, 50, 100, 100, 80, false, false, false);
const mage =        new Character("Merlin Gros Baton",                  10, 10, 50, 30, 50, 100, 100, 80, false, false, false);
const paladin =     new Character("Dartagnan Durex",                    30, 75, 20, 50, 60, 100, 100, 80, false, false, false);
const barbare =     new Character("Marcel Le Pénètrepeau",              30, 10, 30, 100, 100, 80, false, false, false);
const prêtre =      new Character("Jean De Pédolandie",                 20, 10, 100, 100, 100, 80, false, false, false);
const voleur =      new Character("Marcus Le Voleur D'Innocence",       50, 50, 80, 100, 100, 80, false, false, false);


const bucheron =    new Character("Paul La Grosse Poutre",              100, 100, 100, 100, 100, 80, false, false, false);
const scammer =     new Character("Axel Le Scammer De Mémés Baveuses",  100, 100, 100, 100, 100, 80, false, false, false);
const geek =        new Character("Romain Ultimement Nul",              100, 100, 100, 100, 100, 80, false, false, false);
const druide =      new Character("Najm L'Anaconda",                    100, 100, 100, 100, 100, 80, false, false, false);
const dieu =        new Character("Julien La Divinité",                 1000, 1000, 1000, 1000, 1000, 100, false, false, false);

// export const humain : Character[] = [Guerrier, Mage, Paladin, Barbare, Prêtre, Voleur, Bucheron, Scammer, Geek, Druide, Dieu];




// Name, physicalAttack, physicalDefense ,speed, HPMax, HPCurrent, attackPotency, 
const zombie = new Monster("Pierre",    10, 10, 10, 50, 50, 5);
const vampire = new Monster("Florian",  10, 10, 10, 50, 50, 5);
const loupGarou = new Monster("Charly", 10, 10, 10, 50, 50, 5);
const dragon = new Monster("DG", 10, 10, 10, 50, 50, 5);

export const monster : Monster[] = [zombie, vampire, loupGarou,dragon];

export {Character};