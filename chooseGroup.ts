import { Character } from "./class.ts";
import { Guerrier, Mage, Paladin, Barbare, Prêtre, Voleur } from './persoMonster.ts';
import { } from "fight.ts";
import { Monster } from './Monster';
import { Dungeon } from './Dungeon.ts';

// Map of available classes
const availableClasses = new Map<number, any>([
    [1, Guerrier],
    [2, Mage],
    [3, Paladin],
    [4, Barbare],
    [5, Prêtre],
    [6, Voleur]
]);

// Function to choose a group of three adventurers
function chooseGroup(): Character[] {
    console.log("Choisissez un groupe de trois aventuriers parmi les classes suivantes :");
    availableClasses.forEach((value, key) => {
        console.log(`${key}. ${value.name}`);
    });

    const group: Character[] = [];
    while (group.length < 3) {
        const choice = parseInt(prompt(`Choisissez la classe de l'aventurier ${group.length + 1} : `));
        if (!availableClasses.has(choice)) {
            console.log("Choix invalide. Veuillez entrer un nombre correspondant à une classe.");
            continue;
        }

        const selectedClass = availableClasses.get(choice);
        const name = prompt(`Nom de l'aventurier ${group.length + 1} : `);

        try {
            group.push(new selectedClass(name));
        } catch (error) {
            console.error("Erreur lors de la création de l'aventurier. Veuillez réessayer.");
        }
    }

    return group;
}

const adventurers: Character[] = chooseGroup();