// import { _fight } from "./fight.ts";
// import { humain, Character, Monster } from "./persoMonster.ts"; 
// import { dungeon } from "./history.ts";

// export function chooseGroup(): Character[] {
//     console.log("Choisissez un groupe d'aventurier avec les classes suivantes:");
//     for (const character of humain) {
//         console.log(character.name);
//     }

//     const group: Character[] = [];

//     for (let i = 0; i < 3; i++) {
//         const choice = prompt(`Choisissez l'aventurier numéro ${i + 1}: `);
//         const selectedCharacter = humain.find(character => character.name === choice);
        
//         if (!selectedCharacter) {
//             console.log("Personnage non trouvé. Veuillez choisir parmi les personnages jouables.");
//             i--;
//             continue;
//         }

//         group.push(selectedCharacter);
//     }

    
//     group.sort((a, b) => b.speed - a.speed); 

//     console.log("Voici le groupe trié en fonction de la vitesse:");
//     for (const character of group) {
//         console.log(character.name);
//     }

//     return group;
    
// }


// export function enemyGroup(): Monster[] {
//     const chosenMonsters = dungeon.chooseRandomMonsters(3);
//     chosenMonsters.sort((c, d) => d.speed - c.speed);

//     return chosenMonsters;
//     console.log(chosenMonsters);
// }
// export const adventurers: Character[] = chooseGroup();

// export const monsters: Monster[] = enemyGroup();





import { _fight } from "./fight.ts";
import { humain, Character, Monster } from "./persoMonster.ts"; 
import { dungeon } from "./history.ts";

export function chooseGroup(): Character[] {
    console.log("Choisissez un groupe d'aventurier avec les classes suivantes:");
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

    group.sort((a, b) => b.speed - a.speed); 

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

export function enemyGroup(): Monster[] {
    const chosenMonsters: Monster[] = [];
    const possibleMonsters = [...dungeon.chooseRandomMonsters(3)]; // Create a copy of the monsters array

    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * possibleMonsters.length);
        const chosenMonster = possibleMonsters[randomIndex];
        chosenMonsters.push(chosenMonster);
        possibleMonsters.splice(randomIndex, 1); // Remove the chosen monster from the list of possible monsters
    }

    chosenMonsters.sort((c, d) => d.speed - c.speed);

    console.log("Voici le groupe d'ennemis trié en fonction de la vitesse:");
    for (let i = 0; i < chosenMonsters.length; i++) {
        console.log(`${i + 1}. ${chosenMonsters[i].name}`);
    }

    return chosenMonsters;
}

export const adventurers: Character[] = chooseGroup();
export const monsters: Monster[] = enemyGroup();