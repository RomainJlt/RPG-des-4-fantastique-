import { Character, Monster } from "./class.ts";


// Name, physicalAttack, physicalDefense, magicalAttack, magicalDefense, speed, HPMax, HPCurrent, attackPotency, canBeHurt, canBeCured, canBeResurrected 
export const Guerrier =    new Character("Théophile Le Luisant",               40, 70, 0, 0, 0, 50, 100, 100, 80, false, false, false);
export const Mage =        new Character("Merlin Gros Baton",                  10, 10, 50, 30, 100, 50, 100, 100, 80, false, false, false);
export const Paladin =     new Character("Dartagnan Durex",                    30, 75, 20, 50, 0, 60, 100, 100, 80, false, false, false);
export const Barbare =     new Character("Marcel Le Pénètrepeau",              30, 10, 0, 0, 0, 30, 100, 100, 80, false, false, false);
export const Prêtre =      new Character("Jean De Pédolandie",                 20, 10, 100, 100, 0, 100, 80, false, false, false);
export const Voleur =      new Character("Marcus Le Voleur D'Innocence",       50, 50, 80, 100, 100, 80, false, false, false);


export const Bucheron =    new Character("Paul La Grosse Poutre",              100, 100, 100, 100, 100, 80, false, false, false);
export const Scammer =     new Character("Axel Le Scammer De Mémés Baveuses",  100, 100, 100, 100, 100, 80, false, false, false);
export const Geek =        new Character("Romain Ultimement Nul",              100, 100, 100, 100, 100, 80, false, false, false);
export const Druide =      new Character("Najm L'Anaconda",                    100, 100, 100, 100, 100, 80, false, false, false);
export const Dieu =        new Character("Julien La Divinité",                 1000, 1000, 1000, 1000, 1000, 100, false, false, false);

export const humain : Character[] = [Guerrier, Mage, Paladin, Barbare, Prêtre, Voleur, Bucheron, Scammer, Geek, Druide, Dieu];




// Name, physicalAttack, physicalDefense ,speed, HPMax, HPCurrent, attackPotency, 
const Zombie =      new Monster("Pierre",   10, 10, 10, 50, 50, 5);
const Vampire =     new Monster("Florian",  10, 10, 10, 50, 50, 5);
const LoupGarou =   new Monster("Charly",   10, 10, 10, 50, 50, 5);
const Dragon =      new Monster("DG",       10, 10, 10, 50, 50, 5);

export const monster : Monster[] = [Zombie, Vampire, LoupGarou, Dragon];

export {Character};