import { _fight } from "./fight.ts";
import { humain, Character, Monster } from "./persoMonster.ts"; 
import { dungeon } from "./history.ts";

export function chooseGroup(): Character[] {
    console.log("Choisissez un groupe d'aventurier avec les classes suivantes:");
    for (const character of humain) {
        console.log(character.name);
    }

    const group: Character[] = [];

    for (let i = 0; i < 3; i++) {
        const choice = prompt(`Choisissez l'aventurier numéro ${i + 1}: `);
        const selectedCharacter = humain.find(character => character.name === choice);
        
        if (!selectedCharacter) {
            console.log("Personnage non trouvé. Veuillez choisir parmi les personnages jouables.");
            i--;
            continue;
        }

        group.push(selectedCharacter);
    }

    
    group.sort((a, b) => b.speed - a.speed); 

    console.log("Voici le groupe trié en fonction de la vitesse:");
    for (const character of group) {
        console.log(character.name);
    }

    return group;
    
}

export function enemyGroup(): Monster[] {
    const chosenMonsters = dungeon.chooseRandomMonsters(3);
    return chosenMonsters;
    console.log(chosenMonsters);
}
export const adventurers: Character[] = chooseGroup();

export const monsters = enemyGroup();

_fight();
