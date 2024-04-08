import { _fight } from "./fight.ts";
import { Character, humain } from "./persoMonster.ts";

function chooseGroup(): Character[] {
    const group: Character[] = [];

    console.log("Voici les classes disponibles:");
    for (const character of humain) {
        console.log(character.name);
    }

    for (let i = 0; i < 3; i++) {
        const choice = prompt(`Choisissez un personnage ${i + 1}: `);
        const selectedCharacter = humain.find(character => character.name === choice);
        
        if (!selectedCharacter) {
            console.log("Personnage non trouvé. Veuillez choisir parmi les personnages disponibles.");
            i--;
            continue;
        }

        group.push(selectedCharacter);
    }

    return group;
}

const adventurers: Character[] = chooseGroup();
_fight();