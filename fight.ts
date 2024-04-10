import { Character } from "./persoMonster.ts";
import { chooseGroup, enemyGroup } from "./chooseGroup.ts";


class _Character{
    name: string;
    physicalAttack: number;
    physicalDefense: number;
    magicalAttack: number;
    magicalDefense: number;
    mana: number;  
    speed: number;
    
    HPMax: number;
    HPCurrent: number;
    attackPotency: number;
    canBeHurt: boolean;
    canBeCured: boolean;
    canBeResurrected: boolean;


    constructor(name : string, physicalAttack : number, physicalDefense : number, magicalAttack : number, magicalDefense : number, mana : number, speed : number, HPMax : number, HPCurrent : number, attackPotency : number, canBeHurt : boolean, canBeCured : boolean, canBeResurrected: boolean){
        this.name = name;
        this.physicalAttack = physicalAttack;
        this.physicalDefense = physicalDefense;
        this.magicalAttack = magicalAttack;
        this.magicalDefense = magicalDefense;
        this.mana = mana;
        this.speed = speed;
        this.HPMax = HPMax;
        this.HPCurrent = HPCurrent;
        this.attackPotency = attackPotency;
        this.canBeHurt = canBeHurt;
        this.canBeCured = canBeCured;
        this.canBeResurrected = canBeResurrected;
    }




}


const adventurers = chooseGroup();
const protagonist = adventurers[0];
const monsters = enemyGroup();
const antagonist = monsters[0];
    



function _fight() {
    // return adventurers;
    console.log("Un ennemi apparaît!!");
    let turn: string = "";
    let fmenu: string | null= "";
    let fobjet: string | null = "";
    let whichattack: string | null= "";
    let touchingattack: number = 0;
    while (protagonist.HPCurrent > 0 && antagonist.HPCurrent > 0) {
        if (antagonist.speed > protagonist.speed) {
            turn = "antagonistturn";
        }
        else if (protagonist.speed > antagonist.speed) {
            turn = "antagonistturn";
        }
        if (turn === "protagonistturn") {
            fmenu = prompt("Que voulez vous faire?/n Attaquer/n Se Défendre/n  Utiliser un objet/n Quitter :");
            if (fmenu === "Attaquer") {
                whichattack = prompt("Quelle attaque voulez-vous utiliser?/n Attaque Physique/n Attaque Magique/n Attaque Spéciale :");
                if (whichattack === "Attaque Physique") {
                    console.log("Vous attaquez physiquement!");
                    touchingattack = Math.floor((Math.random() * 100) + 1);
                    if (touchingattack < protagonist.attackPotency) {
                        console.log("L'attaque touche!");
                        let damage = protagonist.physicalAttack - antagonist.physicalDefense;
                        antagonist.HPCurrent -= Math.max(damage, 0);
                    }
                    else {
                        console.log("Votre attaque échoue!");
                    }
                    console.log(`L'ennemi a désormais ${antagonist.HPCurrent}`);
                    turn = "antagonistturn";

                }
                if (whichattack === "Attaque Magique") {
                    console.log("Vous attaquez magiquement!");
                    touchingattack = Math.floor((Math.random() * 100) + 1);
                    if (touchingattack < protagonist.attackPotency) {
                        console.log("L'attaque touche!");
                        let damage = protagonist.magicalAttack - antagonist.magicalDefense;
                        antagonist.HPCurrent -= Math.max(damage, 0);
                        console.log("Votre attaque échoue!");
                        if (protagonist.mana > 25) {
                            let damage = protagonist.magicalAttack;
                            let useMana = 10;
                            antagonist.mana -= Math.max(useMana, 0);
                            antagonist.HPCurrent -= Math.max(damage, 0);
                            console.log(`Il vous reste ${protagonist.mana - useMana}`);
                            console.log(`L'ennemi a désormais ${antagonist.HPCurrent}`);
                            turn = "antagonistturn";
                        } else {
                            console.log("Vous n'avez pas assez de mana!");
                        }
                    }else{
                        console.log("Votre attaque échoue!");
                    }
                    console.log(`L'ennemi a désormais ${antagonist.HPCurrent}`);
                    turn = "antagonistturn";
                }


                if (whichattack === "Attaque Spéciale") {
                    console.log("Vous utilisez une attaque spéciale!")
                    touchingattack = Math.floor((Math.random() * 100) + 1);
                    if (touchingattack < protagonist.attackPotency) {
                        console.log("L'attaque touche!");
                        antagonist.HPCurrent = antagonist.HPCurrent - protagonist.physicalAttack + antagonist.physicalDefense;                      
                    }
                    else {
                        console.log("Votre attaque échoue!");
                    }
                    console.log(`L'ennemi a désormais ${antagonist.HPCurrent}`);
                    turn = "antagonistturn";
                }



                if (whichattack === "Attaque Spéciale") {
                    if (protagonist === Guerrier) {
                    console.log("Vous n'avez pas d'attaque spéciale!")
                    

                    } else if (protagonist === Mage) {
                        console.log("Vous n'avez pas d'attaque spéciale!")



                    } else if (protagonist === Paladin) {
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




                    } else if (protagonist === Barbare) {
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



                    } else if (protagonist === Prêtre) {
                        console.log("Vous utilisez une action de soin!")
                        soin = prompt("Restaurer 25% de point de vie à un aventurier( 1er aventurier , 2eme aventurier ou 3eme aventurier")
                        if (soin === "1er aventurier && 2eme aventurier && 3eme aventurier") {
                            console.log("Vous restaurer 25% de point de vie à un aventurier!")
                            protagonist.HPCurrent= protagonist.HPCurrent - (100/4);
                        }










                    } else if (protagonist === Voleur) {
                        attaqueSpecialeVoleur(antagonist); 
                    }


                }





























































            }
            if (fmenu === "Se Defendre") {
                console.log("Vous vous défendez!")
                if (turn === "antagonistturn") {
                    protagonist.physicalDefense = (protagonist.physicalDefense)*1.75;
                    protagonist.magicalDefense = (protagonist.magicalDefense)*1.75;
                }
            }
            if (fmenu === "Utiliser un objet") {
                fobjet = prompt("Que voulez vous utiliser comme objet?/n Potion/n Morceau d'étoile/n Demi étoile/n Ether/n");
                if (fobjet === "Potion") {
                    protagonist.HPCurrent = (protagonist.HPCurrent)+ 0.5*(protagonist.HPMax);
                    if (protagonist.HPCurrent > protagonist.HPMax) {
                        protagonist.HPCurrent = protagonist.HPMax;
                    }
                    
                }
                if (fobjet === "Morceau d'étoile") {
                    if (protagonist.HPCurrent === 0) {
                        protagonist.HPCurrent = protagonist.HPCurrent + 0.2*(protagonist.HPMax);     
                    }
                    else {
                        protagonist.HPCurrent = protagonist.HPCurrent + 0.5*(protagonist.HPMax);
                    }
                }
                if (fobjet === "Demi étoile") {
                    if (protagonist.HPCurrent === 0) {
                        protagonist.HPCurrent = protagonist.HPMax;
                    } 
                    else {
                        protagonist.HPCurrent = protagonist.HPMax;
                    }
                }
                if (fobjet === "Ether") {
                    protagonist.mana = protagonist.mana + 0.3*(protagonist.mana);
                }
            }
            if (fmenu === "Quitter") {
                return;
            }
        }
        if (turn === "antagonistturn") {
            console.log("C'est au tour de l'ennemi!!");
            console.log("L'ennemi attaque!!");
            let damage = antagonist.physicalAttack - protagonist.physicalDefense;
            protagonist.HPCurrent -= Math.max(damage, 0); 
            console.log(`Vous avez désormais ${protagonist.HPCurrent} point de vie!`)
            turn = "protagonistturn";
        }
    }
    if (antagonist.HPCurrent <= 0) {
        console.log("L'ennemi est vaincu, vous avez gagné!");
    } 
    if (protagonist.HPCurrent <= 0) {
        console.log("Vous êtes vaincu. La partie est terminée");
    }
}

_fight;


export { _fight };

