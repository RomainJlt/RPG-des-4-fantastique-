import { Character } from "./persoMonster.ts";
import { chooseGroup, enemyGroup } from "./chooseGroup.ts";
import { adventurers, monsters} from "./chooseGroup.ts";


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






function _fight() {
    let i = 0;
    let j = 0;
    let protagonist = adventurers[i];
    let antagonist = monsters[j];
   
    console.log("Un ennemi apparaît!!");
    
    let fmenu: string | null= "";
    let fobjet: string | null = "";
    let whichattack: string | null= "";
    let touchingattack: number = 0;
    let turn: string = "";
    while (protagonist.HPCurrent > 0 && antagonist.HPCurrent > 0) {        
        
        
        
        if (antagonist.speed > protagonist.speed) {
            turn = "antagonistturn";
        }
        else if (protagonist.speed > antagonist.speed) {
            turn = "protagonistturn";
        }
        if (turn === "protagonistturn") {
            fmenu = prompt(`Que voulez vous faire en tant que ${adventurers[i].name}?/n Attaquer/n Se Défendre/n Utiliser un objet`);
            if (fmenu === "Attaquer") {
                whichattack = prompt("Quelle attaque voulez-vous utiliser?/n Attaque Physique/n Attaque Magique/n Attaque Spéciale");
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
                    }
                    else {
                        console.log("Votre attaque échoue!");
                    }
                    console.log(`L'ennemi a désormais ${antagonist.HPCurrent}`);
                    i = i + 1;
                    if (i > 2) {
                        turn = "antagonistturn";
                        i = 0;
                    }
                    
                }
                if (whichattack === "Attaque Spéciale") {
                    console.log("Vous utilisez une attaque spéciale!")
                    touchingattack = Math.floor((Math.random() * 100) + 1);
                    if (touchingattack < protagonist.attackPotency) {
                        console.log("L'attaque touche!");
                        antagonist.HPCurrent = antagonist.HPCurrent - protagonist.physicalAttack + antagonist.physicalDefense;
                        if (antagonist.physicalDefense > protagonist.physicalAttack) {
                            antagonist.HPCurrent = antagonist.HPCurrent - 0;
                        }                        
                    }
                    else {
                        console.log("Votre attaque échoue!");
                    }
                    console.log(`L'ennemi a désormais ${antagonist.HPCurrent}`);
                    i = i + 1;
                    if (i > 2) {
                        turn = "antagonistturn";
                        i = 0;
                    }
                    
                }
            }
            if (fmenu === "Se Defendre") {
                console.log("Vous vous défendez!")
                i = i + 1;
                if (i > 2) {
                    turn = "antagonistturn";
                    i = 0;
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
                i = i + 1;
                if (i > 2) {
                    turn = "antagonistturn";
                    i = 0;
                }
            }
        }
        if (turn === "antagonistturn") {
            console.log("C'est au tour de l'ennemi!!");
            console.log("L'ennemi attaque!!");
            if (fmenu === "Se Défendre") {
                protagonist.physicalDefense = protagonist.physicalDefense*1.75;
                protagonist.magicalDefense = protagonist.magicalDefense*1.75;
            }
            let damage = antagonist.physicalAttack - protagonist.physicalDefense;
            protagonist.HPCurrent -= Math.max(damage, 0); 
            console.log(`Vous avez désormais ${protagonist.HPCurrent} point de vie!`)
            j = j + 1;
            if (j > 2) {
                turn = "protagonistturn";
                j = 0;
            }
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

