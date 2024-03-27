import { Character } from "./class";
import { Character, Monster } from "./persoMonster.ts";

// Définissez availableClasses comme un tableau des classes disponibles
const availableClasses = [Guerrier, Mage, Paladin, Barbare, Prêtre, Voleur];

// to choose a group of three adventurers.
function chooseGroup(): Character[] {
    // Display available classes
    console.log("Choose a group of three adventurers from the following classes:");
    console.log("1. Guerrier");
    console.log("2. Mage");
    console.log("3. Paladin");
    console.log("4. Barbare");
    console.log("5. Prêtre");
    console.log("6. Voleur");

    // store the group of adventurers
    const group: Character[] = [];

    // Loop to choose three adventurers
    for (let i = 0; i < 3; i++) {
        // Prompt user to choose the class of the adventurer
        const choice = parseInt(prompt(`Choose adventurer ${i + 1} class: `));

        // Validate the user's input
        if (isNaN(choice) || choice < 1 || choice > 6) {
            console.log("Invalid choice. Please enter a number between 1 and 6.");
            i--;
            continue;
        }

        // Get the selected class based on the user's choice
        const selectedClass = availableClasses[choice - 1];

        // Prompt user to enter the name of the adventurer
        const name = prompt(`Name of adventurer ${i + 1}: `);

        // Create a new instance of the selected class with the given name and add it to the group
        group.push(new selectedClass(name));
    }

    // Return the group of adventurers
    return group;
}

// Call the chooseGroup function to create a group of adventurers
const adventurers: Character[] = chooseGroup();
