import { _fight } from "./fight.ts";
import { chooseGroup } from "./chooseGroup.ts"; 
import {}


import { Character } from "./class.ts";
import { Donjon } from "./dungeon.ts";
import { humain, monster } from "./persoMonster.ts";

const donjon = new Donjon();
const player = new Character("Player", 100, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100);
const enemy = new Character("Enemy", 50, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100);

donjon.addCharacter(player);
donjon.addCharacter(enemy);

donjon.startGame();

while (!donjon.isGameOver()) {
    donjon.playTurn();
}