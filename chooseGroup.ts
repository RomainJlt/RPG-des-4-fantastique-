import { Guerrier, Mage, Paladin, Barbare, Prêtre, Voleur, Bucheron, Scammer, Geek, Druide, Dieu } from "./persoMonster.ts";
import { Character } from "./class.ts";

// Function to choose a group of characters
export function chooseGroup(): Character[] {

    // Display available classes
    console.log("Which group of characters do you want to choose?");
    console.log("1. Warrior");
    console.log("2. Mage");
    console.log("3. Paladin");
    console.log("4. Barbarian");
    console.log("5. Priest");
    console.log("6. Rogue");
    console.log("7. Lumberjack");
    console.log("8. Scammer");
    console.log("9. Geek");
    console.log("10. God");
    // const avent = prompt("Which group of characters do you want to choose?");
    // console.log(avent);

    // Array to store the chosen group of characters
    const group: Character[] = [];
    // Array containing available classes
    const availableClasses = [Guerrier, Mage, Paladin, Barbare, Prêtre, Voleur, Bucheron, Scammer, Geek, Druide, Dieu];

    // Loop to choose 3 characters
    for (let i = 0; i < 3; i++) {
        // Ask user to choose a class
        let choice = prompt(`Choose adventurer ${i + 1} class: `);
        console.log(choice);
        if (choice === null) {
            choice = "1"; // Replace "1" with the default choice you want to use
        }
        // Convert the choice to a number
        const choiceNumber = Number(choice);
        // Check the validity of the choice
        if (isNaN(choiceNumber) || choiceNumber < 1 || choiceNumber > availableClasses.length) {
            console.log(`Invalid choice. Please enter a number between 1 and ${availableClasses.length}.`);
            i--; // Ask for choice input again
            continue; // Move to the next iteration of the loop
        }

        // Instantiate the selected class and add it to the group
        const selectedClass = availableClasses[choiceNumber - 1]; // Adjust the index
        const name = "Character " + (i + 1); // You can prompt for character names here
        group.push(new selectedClass(name));
    }

    return group;
}

const group: Character[] = chooseGroup(); // Call the function to choose the group
console.log(group); // Log the group array
