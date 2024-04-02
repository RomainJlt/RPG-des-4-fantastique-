import { Guerrier, Mage, Paladin, Barbare, Prêtre, Voleur, Bucheron, Scammer, Geek, Druide, Dieu } from "./persoMonster.ts";

function chooseGroup(): Character[] {
    console.log("Choose a group of three adventurers from the following classes:");
    console.log("1.  Guerrier");
    console.log("2.  Mage");
    console.log("3.  Paladin");
    console.log("4.  Barbare");
    console.log("5.  Prêtre");
    console.log("6.  Voleur");
    console.log("7.  Bucheron");
    console.log("8.  Scammer");
    console.log("9.  Geek");
    console.log("10. Druide");
    console.log("11. Dieu");
    console.log("12. Voleur");

    const group: Character[] = [];
    const availableClasses = [Guerrier, Mage, Paladin, Barbare, Prêtre, Voleur, Bucheron, Scammer, Geek, Druide, Dieu];

    for (let i = 0; i < 3; i++) {
        const choice = parseInt(prompt(`Choose adventurer ${i + 1} class: `));

        if (isNaN(choice) || choice < 1 || choice > 12) {
            console.log("Invalid choice. Please enter a number between 1 and 12.");
            i--;
            continue;
        }

        const selectedClass = availableClasses[choice - 1];
        const name = prompt(`Name of adventurer ${i + 1}: `);
        group.push(new selectedClass(name));
    }

    return group;
}

const adventurers: Character[] = chooseGroup();
console.log(adventurers);
