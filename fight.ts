import { adventurers, monsters } from "./chooseGroup.ts";

export function _fight() {
    let i = 0;
    let j = 0;
    let protagonist = adventurers[i];
    let antagonist = monsters[j];
    let inventory = ["Potion", "Potion", "Morceau d'étoile", "Demi étoile", "Ether"];
    let nbKO: number = 0;
    let nbKOenemy: number = 0;
    let fmenu: string | null = "";
    let fobject: string | null = "";
    let whichattack: string | null = "";
    let touchingattack: number = 0;
    let turn: string = "";

    // Display HP of each adventurer and monster after sorting
    console.log("Adventurers and their HP:");
    adventurers.forEach(adventurer => console.log(`\x1b[31m${adventurer.name}: ${adventurer.HPCurrent}\x1b[0m`));
    console.log("Monsters and their HP:");
    monsters.forEach(monster => console.log(`\x1b[31m${monster.name}: ${monster.HPCurrent}\x1b[0m`));

    while (protagonist.HPCurrent > 0 || antagonist.HPCurrent > 0) {
        console.log(`\x1b[31mHP de ${protagonist.name}: ${protagonist.HPCurrent}\x1b[0m`);
        console.log(`\x1b[31mHP de ${antagonist.name}: ${antagonist.HPCurrent}\x1b[0m`);
        if (antagonist.speed > protagonist.speed) {
            turn = "antagonistturn";
        }
        else if (protagonist.speed > antagonist.speed) {
            turn = "protagonistturn";
        }
        if (antagonist.HPCurrent <= 0) {
            nbKOenemy++;
            if (nbKOenemy < monsters.length) {
                j++;
                antagonist = monsters[j];
            }
            console.log(`${antagonist.name} est mort!`);
            return;
        }
        if (protagonist.HPCurrent <= 0) {
            nbKO = nbKO + 1;
        }
        if (turn === "protagonistturn") {
            fmenu = prompt(`Que voulez vous faire en tant que ${adventurers[i].name}?\n Attaquer\n Se Défendre\n Utiliser un objet\n Voir l'inventaire`);
            if (fmenu === "Attaquer") {
                whichattack = prompt("Quelle attaque voulez-vous utiliser?\n Attaque Physique\n Attaque Magique\n Attaque Spéciale");
                if (whichattack === "Attaque Physique") {
                    console.log("Vous attaquez physiquement!");
                    touchingattack = Math.floor((Math.random() * 100) + 1);
                    if (touchingattack < protagonist.attackPotency) {
                        console.log("L'attaque touche!");
                        // Loop over all monsters and apply damage to each
                        monsters.forEach(monster => {
                            let damage = protagonist.physicalAttack - monster.physicalDefense;
                            monster.HPCurrent -= Math.max(damage, 0);
                            if (monster.HPCurrent < 0) {
                                monster.HPCurrent = 0; // Ensure HP doesn't go negative
                            }
                            console.log(`\x1b[31m${monster.name} a désormais ${monster.HPCurrent}\x1b[0m`);
                        });
                    }
                    else {
                        console.log("Votre attaque échoue!");
                    }
                    i = i + 1;
                    if (i > 2) {
                        turn = "antagonistturn";
                        i = 0;
                    }
                }
                // ... handle other attacks
            }
            if (fmenu === "Utiliser un objet") {
                fobject = prompt(`Que voulez vous utiliser comme objet?\n ${inventory.join('\n')}`);
                if (fobject === "Potion" && inventory.includes("Potion")) {
                    protagonist.HPCurrent = protagonist.HPCurrent + 0.5 * protagonist.HPMax;
                    if (protagonist.HPCurrent > protagonist.HPMax) {
                        protagonist.HPCurrent = protagonist.HPMax;
                    }
                    let index = inventory.indexOf("Potion");
                    inventory.splice(index, 1);
                } else if (fobject === "Morceau d'étoile" && inventory.includes("Morceau d'étoile")) {
                    protagonist.HPCurrent = protagonist.HPCurrent + 0.5 * protagonist.HPMax;
                    if (protagonist.HPCurrent > protagonist.HPMax) {
                        protagonist.HPCurrent = protagonist.HPMax;
                    }
                    let index = inventory.indexOf("Morceau d'étoile");
                    inventory.splice(index, 1);
                } else if (fobject === "Demi étoile" && inventory.includes("Demi étoile")) {
                    protagonist.HPCurrent = protagonist.HPMax;
                    let index = inventory.indexOf("Demi étoile");
                    inventory.splice(index, 1);
                }
            
            }
            
        }

        i = (i + 1) % 3;
        j = (j + 1) % monsters.length;
    }

    if (nbKOenemy === monsters.length) {
        console.log("L'ennemi est vaincu, vous avez gagné!");
    } else if (nbKO === 2) {
        console.log("Vous êtes vaincu. La partie est terminée");
    }
    return;
}