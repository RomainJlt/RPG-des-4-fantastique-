import { _fight } from "./fight.ts";
import { chooseGroup } from "./chooseGroup.ts"; 
import { Character } from "./class.ts";
import { Donjon } from "./dungeon.ts";
import { humain, monster } from "./persoMonster.ts";

class Donjon {
    private characters: Character[];

    constructor() {
        this.characters = [];
    }

    public addCharacter(character: Character) {
        this.characters.push(character);
    }

    // Rest of the code...

}