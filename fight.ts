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
                if (whichattack === "Attaque Magique") {
                    console.log("Vous attaquez magiquement!");
                    touchingattack = Math.floor((Math.random() * 100) + 1);
                    if (touchingattack < protagonist.attackPotency) {
                        console.log("L'attaque touche!");
                        let damage = protagonist.magicalAttack - antagonist.magicalDefense;
                        antagonist.HPCurrent -= Math.max(damage, 0);
                        if (antagonist.HPCurrent < 0) {
                            antagonist.HPCurrent = 0; // Ensure HP doesn't go negative
                        }
                        protagonist.mana = protagonist.mana - 10;
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
                if (whichattack === "Attaque Spéciale") {
                    let guerrier: string | null= "guerrier";
                    let mage: string | null= "mage";
                    let paladin: string | null= "paladin";
                    let barbare: string | null= "barbare";
                    let prêtre: string | null= "prêtre";
                    let voleur: string | null= "voleur";
                    let dieu: string | null= "dieu";

                    if (adventurers[i].classAdventur === guerrier) {
                    console.log("Vous n'avez pas d'attaque spéciale!")
                

                    } else if (adventurers[i].classAdventur === mage) {
                        console.log("Vous n'avez pas d'attaque spéciale!")


                    } else if (adventurers[i].classAdventur === paladin) {
                        console.log("Vous utilisez une attaque spéciale sainte!")
                        touchingattack = Math.floor((Math.random() * 100) + 1);
                        if (touchingattack < protagonist.attackPotency) {
                            console.log("L'attaque touche!");
                            antagonist.HPCurrent = antagonist.HPCurrent - ((protagonist.physicalAttack - antagonist.physicalDefense)*0.4);                      
                        }
                        else {
                            console.log("Votre attaque échoue!");
                        }
                        console.log(`L'ennemi a désormais ${antagonist.HPCurrent}`);
                        turn = "antagonistturn";




                    } else if (adventurers[i].classAdventur === barbare) {
                        console.log("Vous utilisez une attaque spéciale Berserk!")
                        touchingattack = Math.floor((Math.random() * 100) + 1);
                        if (touchingattack < protagonist.attackPotency) {
                            console.log("L'attaque touche!");
                            antagonist.HPCurrent = antagonist.HPCurrent - ((protagonist.physicalAttack - antagonist.physicalDefense)*1.3);
                            protagonist.HPCurrent= protagonist.HPCurrent - 20;                   
                        }
                        else {
                            console.log("Votre attaque échoue!");
                        }
                        console.log(`L'ennemi a désormais ${antagonist.HPCurrent}`);
                        console.log(`Vous avez désormais ${protagonist.HPCurrent}`);
                        turn = "antagonistturn";
                        i = 0;
                    } else if (adventurers[i].classAdventur === prêtre) {
                        let soin: string | null= "";
                        console.log("Vous utilisez une action de soin!")
                        soin = prompt("Restaurer 25% de point de vie à un aventurier( ${adventurers[i].name} , ${adventurers[i+1].name} ou $    {adventurers[i+2].name}")
                        if (soin === adventurers[i].name){
                            console.log("Vous restaurer 25% de point de vie à ${adventurers[i].name})!")
                            protagonist.HPCurrent= protagonist.HPCurrent - (100/4);
                        } else if (soin === adventurers[i+1].name) {
                            console.log("Vous restaurer 25% de point de vie à ${adventurers[i+1].name})!")
                            protagonist.HPCurrent= protagonist.HPCurrent - (100/4);
                        } else if (soin === adventurers[i+2].name){
                            console.log("Vous restaurer 25% de point de vie à ${adventurers[i+2].name})!")
                            protagonist.HPCurrent= protagonist.HPCurrent - (100/4); 
                        }
                    
                    

                    } else if (adventurers[i].classAdventur === voleur) {
                        console.log("Vous volez un objet dans un coin de la pièce.");
                        let thief: number = 0;
                        thief = Math.floor((Math.random() * 100) + 1);
                        //40% de chances de ne rien voler, 30% d'obtenir une potion, 15% d'obtenir un fragment d'étoile, 10% d'obtenir un éther et  5% d'obtenir une demi-étoile
                        if (thief <= 40) {
                            console.log("Vous ne volez rien!");
                        }else if (thief <= 70) {
                            console.log("Vous avez volé une potion!");
                            inventory.push("position");
                        }else if (thief <= 85) {
                            console.log("Vous avez volé un fragment d'étoile!");
                            inventory.push("fragment")
                        }else if (thief <= 95) {
                            console.log("Vous avez volé un éther!");
                            inventory.push("ether")
                        }else if (thief <= 100) {
                            console.log("Vous avez volé une demi-étoile!");
                            inventory.push("demi-etoile")
                        }
                    }else if (adventurers[i].classAdventur === dieu) {
                        console.log("Vous utilisez le rayon de la mort!")
                        touchingattack = Math.floor((Math.random() * 100) + 1);
                        if (touchingattack < protagonist.attackPotency) {
                            console.log("L'attaque touche!");
                            antagonist.HPCurrent = antagonist.HPCurrent - ((protagonist.physicalAttack - antagonist.physicalDefense)*5);                
                        }
                        else {
                            console.log("Votre attaque échoue!");
                        }
                        console.log(`L'ennemi a désormais ${antagonist.HPCurrent}`);
                        turn = "antagonistturn";
                        i = 0;

                    }

                }
            }
            if (fmenu === "Se Défendre") {
                console.log("Vous vous défendez!")
                i = i + 1;
                if (i > 2) {
                    turn = "antagonistturn";
                    i = 0;
                }
            }
            if (fmenu === "Utiliser un objet") {
                fobjet = prompt(`Que voulez vous utiliser comme objet?\n ${inventory.join('\n')}`);
                if (fobjet === "Potion" && inventory.includes("Potion")) {
                    protagonist.HPCurrent = (protagonist.HPCurrent) + 0.5 * (protagonist.HPMax);
                    if (protagonist.HPCurrent > protagonist.HPMax) {
                        protagonist.HPCurrent = protagonist.HPMax;
                    }
                    let index = inventory.indexOf("Potion");
                    inventory.splice(index, 1);
                }
                
            }
            if (fmenu === "Voir l'inventaire") {
                console.log(inventory);
            }
        }
        if (turn === "antagonistturn") {
            console.log("C'est au tour de l'ennemi!!");
            while (j <= monsters.length - 1) {
                console.log(`${monsters[j].name} attaque!!`);
                if (fmenu === "Se Défendre") {
                    protagonist.physicalDefense = protagonist.physicalDefense * 1.75;
                    protagonist.magicalDefense = protagonist.magicalDefense * 1.75;
                }
                let damage = antagonist.physicalAttack - protagonist.physicalDefense;
                protagonist.HPCurrent -= Math.max(damage, 0);
                if (protagonist.HPCurrent < 0) {
                    protagonist.HPCurrent = 0; // Ensure HP doesn't go negative
                }
                console.log(`\x1b[31mVous avez désormais ${protagonist.HPCurrent} point de vie!\x1b[0m`);
                j++;
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