// import { Character } from "./class.ts";
// import { Menu } from "./menu.ts";
// import { chooseGroup, enemyGroup } from "./chooseGroup.ts";
// import { adventurers, monsters} from "./chooseGroup.ts";

// export async function _fight() {
//     let i = 0;
//     let j = 0;
//     let protagonist = adventurers[i];
//     let antagonist = monsters[j];
//     let inventory = ["Potion", "Potion", "Morceau d'étoile", "Demi étoile", "Ether"];
//     let nbKO : number = 0; 
//     let nbKOenemy : number = 0;
//     let turn: string = "";
//     let fmenu: number | null = null;
//     let fobject: number | null = null;
//     let whichattack: number | null = null;
//     let touchingattack: number = 0;

//     const fightMenu = new Menu(`Que voulez vous faire en tant que ${adventurers[i].name}?`, ["Attaquer", "Se Défendre", "Utiliser un objet", "Voir l'inventaire"]);
//     const attackMenu = new Menu("Quelle attaque voulez-vous utiliser?", ["Attaque Physique", "Attaque Magique", "Attaque Spéciale"]);
//     const objectMenu = new Menu("Que voulez-vous utiliser comme objet?", ["Potion", "Morceau d'étoile", "Demi étoile", "Ether"]);


//     while (protagonist.HPCurrent > 0 || antagonist.HPCurrent > 0) {        
//         if (antagonist.speed > protagonist.speed) {
//             turn = "antagonistturn";
//         }
//         else if (protagonist.speed > antagonist.speed) {
//             turn = "protagonistturn";
//         }
//         if (antagonist.HPCurrent <= 0) {
//             nbKOenemy++;
//             if (nbKOenemy < monsters.length) { 
//                 j++; 
//                 antagonist = monsters[j]; 
//             }
//             console.log(`${antagonist.name} est mort!`);
//             return; 
//         }
//         if (protagonist.HPCurrent <= 0) {
//             nbKO = nbKO + 1;
//         }
//         if (turn === "protagonistturn") {
//             fmenu = await fightMenu.askUser();
//             if (fmenu === 1) {
//                 whichattack = await attackMenu.askUser();
//                 if (whichattack === 1) {
//                 console.log("Vous attaquez physiquement!");
//                 touchingattack = Math.floor((Math.random() * 100) + 1);
//                 if (touchingattack < protagonist.attackPotency) {
//                     console.log("L'attaque touche!");
//                     let damage = protagonist.physicalAttack - antagonist.physicalDefense;
//                     antagonist.HPCurrent -= Math.max(damage, 0);
//                 }
//                 else {
//                     console.log("Votre attaque échoue!");
//                 }
//                 console.log(`L'ennemi a désormais ${antagonist.HPCurrent}`);
//                 i = i + 1;
//                 if (i > 2) {
//                     turn = "antagonistturn";
//                     i = 0;
//                 }
                
//             } else if (whichattack === 2) {
//                     console.log("Vous attaquez magiquement!");
//                     touchingattack = Math.floor((Math.random() * 100) + 1);
//                     if (touchingattack < protagonist.attackPotency) {
//                         console.log("L'attaque touche!");
//                         let damage = protagonist.magicalAttack - antagonist.magicalDefense;
//                         antagonist.HPCurrent -= Math.max(damage, 0);
//                         protagonist.mana = protagonist.mana - 10;
//                     }
//                     else {
//                         console.log("Votre attaque échoue!");
//                     }
//                     console.log(`L'ennemi a désormais ${antagonist.HPCurrent}`);
//                     i = i + 1;
//                     if (i > 2) {
//                         turn = "antagonistturn";
//                         i = 0;
//                     }
                    
//                 }
//                 } else if (whichattack === 3) {
//                     console.log("Vous utilisez une attaque spéciale!")
//                     touchingattack = Math.floor((Math.random() * 100) + 1);
//                     if (touchingattack < protagonist.attackPotency) {
//                         console.log("L'attaque touche!");
//                         antagonist.HPCurrent = antagonist.HPCurrent - protagonist.physicalAttack + antagonist.physicalDefense;
//                         if (antagonist.physicalDefense > protagonist.physicalAttack) {
//                             antagonist.HPCurrent = antagonist.HPCurrent - 0;
//                         }                        
//                     }
//                     else {
//                         console.log("Votre attaque échoue!");
//                     }
//                     console.log(`L'ennemi a désormais ${antagonist.HPCurrent}`);
//                     i = i + 1;
//                     if (i > 2) {
//                         turn = "antagonistturn";
//                         i = 0;
//                     }

//             } else if (fmenu === 2) {
//                 console.log("Vous vous défendez!")
//                 i = i + 1;
//                 if (i > 2) {
//                     turn = "antagonistturn";
//                     i = 0;
//                 }
//             } else if (fmenu === 3) {
//                 fobject = await objectMenu.askUser();
//                 if (fobject === 1){
//                     protagonist.HPCurrent = (protagonist.HPCurrent)+ 0.5*(protagonist.HPMax);
//                     if (protagonist.HPCurrent > protagonist.HPMax) {
//                         protagonist.HPCurrent = protagonist.HPMax;
//                     }
//                     let index = inventory.indexOf("Potion");
//                     inventory.splice(index, 1);
//                 } else if (fobject === 2){
//                     if (protagonist.HPCurrent === 0) {
//                         protagonist.HPCurrent = protagonist.HPCurrent + 0.2*(protagonist.HPMax);     
//                     }
//                     else {
//                         protagonist.HPCurrent = protagonist.HPCurrent + 0.5*(protagonist.HPMax);
//                     }
//                     let index = inventory.indexOf("Morceau d'étoile");
//                     inventory.splice(index, 1);
//                 } else if (fobject === 3){
//                     if (protagonist.HPCurrent === 0) {
//                         protagonist.HPCurrent = protagonist.HPMax;
//                     } 
//                     else {
//                         protagonist.HPCurrent = protagonist.HPMax;
//                     }
//                     let index = inventory.indexOf("Demi étoile");
//                     inventory.splice(index, 1);
//                 } else if (fobject === 4){
//                     protagonist.mana = protagonist.mana + 0.3*(protagonist.mana);
//                     let index = inventory.indexOf("Ether");
//                     inventory.splice(index, 1);
//                 }
//                 i = i + 1;
//                 if (i > 2) {
//                     turn = "antagonistturn";
//                     i = 0;
//                 }
//             }
//             else if (fmenu === 4){
//                 console.log(inventory);
//             }
//         }
//         if (turn === "antagonistturn") {
//             console.log("C'est au tour de l'ennemi!!");
//             while (j <= monsters.length - 1) {
//                 console.log(`${monsters[j].name} attaque!!`);
//             if (fmenu === 2){
//                 protagonist.physicalDefense = protagonist.physicalDefense * 1.75;
//                 protagonist.magicalDefense = protagonist.magicalDefense * 1.75;
//             }
//             let damage = antagonist.physicalAttack - protagonist.physicalDefense;
//             protagonist.HPCurrent -= Math.max(damage, 0);
//             console.log(`Vous avez désormais ${protagonist.HPCurrent} point de vie!`);
//             j++;
//             }
//             i = (i + 1) % 3; 
//             j = (j + 1) % monsters.length; 

//         }
//         if (nbKOenemy === monsters.length) {
//             console.log("L'ennemi est vaincu, vous avez gagné!");
//         } else if (nbKO === 2) {
//             console.log("Vous êtes vaincu. La partie est terminée");
//         }
//         return;
//     }
// }    



import { adventurers, monsters } from "./chooseGroup.ts";
import { monster } from "./persoMonster.ts";

export function _fight() {
    let i = 0;
    let j = 0;
    let protagonist = adventurers[i];
    let antagonist = monsters[j];
    let inventory = ["Potion", "Potion", "Morceau d'étoile", "Demi étoile", "Ether"];
    let nbKO: number = 0;
    let nbKOenemy: number = 0;
    let fmenu: string | null = "";
    let fobjet: string | null = "";
    let whichattack: string | null = "";
    let touchingattack: number = 0;
    let turn: string = "";
    antagonist.HPCurrent = antagonist.HPMax;

    // Display HP of each adventurer and monster after sorting
    console.log("Aventuriers et leurs HP:");
    adventurers.forEach(adventurer => console.log(`\x1b[31m${adventurer.name}: ${adventurer.HPCurrent}\x1b[0m`));
    console.log("Monstres et leurs HP:");
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
                        let damage = protagonist.physicalAttack - antagonist.physicalDefense;
                        antagonist.HPCurrent -= Math.max(damage, 0);
                        if (antagonist.HPCurrent < 0) {
                            antagonist.HPCurrent = 0; // Ensure HP doesn't go negative
                        }
                    }
                    else {
                        console.log("Votre attaque échoue!");
                    }
                    console.log(`\x1b[31mL'ennemi a désormais ${antagonist.HPCurrent}\x1b[0m`);
                    i = i + 1;
                    if (i > 2) {
                        turn = "antagonistturn";
                        i = 0;
                    }
                                }
                                else if (fmenu === 4){
                                    console.log(inventory);
                                }
                            }
                            if (turn === "antagonistturn") {
                                console.log("C'est au tour de l'ennemi!!");
                                while (j <= monsters.length - 1) {
                                    console.log(`${monsters[j].name} attaque!!`);
                                if (fmenu === 2){
                                    protagonist.physicalDefense = protagonist.physicalDefense * 1.75;
                                    protagonist.magicalDefense = protagonist.magicalDefense * 1.75;
                                }
                                let damage = antagonist.physicalAttack - protagonist.physicalDefense;
                                protagonist.HPCurrent -= Math.max(damage, 0);
                                console.log(`Vous avez désormais ${protagonist.HPCurrent} point de vie!`);
                                j++;
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
                    }    
                }