import { _fight } from "./fight.ts";
import { humain, Character, Monster } from "./persoMonster.ts"; 
import { dungeon } from "./history.ts";

export function chooseGroup(): Character[] {
    console.log("Choisissez un groupe d'aventurier avec les classes suivantes:");   // Choix des aventuriers
    for (let i = 0; i < humain.length; i++) {
        console.log(`${i + 1}. ${humain[i].name}`);
    }

    const group: Character[] = [];

    for (let i = 0; i < 3; i++) {
        const choice = Number(prompt(`Choisissez le numéro de l'aventurier ${i + 1}: `));
        const selectedCharacter = humain[choice - 1];
        
        if (!selectedCharacter) {
            console.log("Personnage non trouvé. Veuillez choisir parmi les personnages jouables.");
            i--;
            continue;
        }

        group.push(selectedCharacter);
    }

    group.sort((a, b) => b.speed - a.speed);                //Tri du groupe par vitesse

    console.log("Voici le groupe trié en fonction de la vitesse:");
    for (let i = 0; i < group.length; i++) {
        console.log(`${i + 1}. ${group[i].name}`);
    }

    return group;
}

function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

export function enemyGroup(): Monster[] {           //Monstres randoms
    const chosenMonsters: Monster[] = [];
    const possibleMonsters = [...dungeon.chooseRandomMonsters(3)]; 

    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * possibleMonsters.length);
        const chosenMonster = possibleMonsters[randomIndex];
        chosenMonsters.push(chosenMonster);
        possibleMonsters.splice(randomIndex, 1); 
    }

    
    chosenMonsters.sort((c, d) => c.name.localeCompare(d.name));

    console.log("Voici le groupe d'ennemis trié en fonction du nom:");
    for (let i = 0; i < chosenMonsters.length; i++) {
        console.log(`${i + 1}. ${chosenMonsters[i].name}`);
    }

    return chosenMonsters;
}

export const adventurers: Character[] = chooseGroup();     //export des personnages
export const monsters: Monster[] = enemyGroup();        //export des monstres