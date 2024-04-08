import { Character } from "./class.ts";

class _Character{
    name: string;
    physicalAttack: number;
    physicalDefense: number;
    magicalAttack: number;//
    magicalDefense: number;//
    mana: number;  //
    speed: number;
    speedPoint: number;//
    HPMax: number;
    HPCurrent: number;
    attackPotency: number;
    canBeHurt: boolean;
    canBeCured: boolean;
    canBeResurrected: boolean;


    constructor(name : string, physicalAttack : number, physicalDefense : number, magicalAttack : number, magicalDefense : number, mana : number, speed : number, speedPoint : number, HPMax : number, HPCurrent : number, attackPotency : number, canBeHurt : boolean, canBeCured : boolean, canBeResurrected: boolean){
        this.name = name;
        this.physicalAttack = physicalAttack;
        this.physicalDefense = physicalDefense;
        this.magicalAttack = magicalAttack;
        this.magicalDefense = magicalDefense;
        this.mana = mana;
        this.speed = speed;
        this.speedPoint = speedPoint;
        this.HPMax = HPMax;
        this.HPCurrent = HPCurrent;
        this.attackPotency = attackPotency;
        this.canBeHurt = canBeHurt;
        this.canBeCured = canBeCured;
        this.canBeResurrected = canBeResurrected;
    }




}

/*class 
}*/
const protagonist = new _Character("Théophile Le Luisant", 70, 40, 50, 100, 100, 80, 0, 200, 200, 100, false, false, false);;
const antagonist   = new _Character("Axel Le Scammer De Mémés Baveuses",  65, 35, 100, 100, 100, 80, 0, 150, 150, 65, false, false, false);;

    


    
function _fight() {
    console.log("Un ennemi apparaît!!");
    let turn = "";
    let fmenu: string | null = "";
    let fobjet: string | null = "";
    let whichattack: string | null= "";
    let touchingattack: number = 0;
    while (protagonist.HPCurrent > 0 && antagonist.HPCurrent > 0) {
        if (antagonist.speed > protagonist.speed) {
            antagonist.speedPoint = antagonist.speedPoint + 1;
        } else {
            protagonist.speedPoint = protagonist.speedPoint + 1;
        }
        if (antagonist.speedPoint > protagonist.speedPoint) {
            turn = "antagonistturn";
        } else {
            turn = "protagonistturn";
        }
        if (turn === "protagonistturn") {
            fmenu = prompt("Que voulez vous faire?/n Attaquer/n Se Défendre/n Utiliser un objet/n Quitter");
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
                        console.log(`L'ennemi a désormais ${antagonist.HPCurrent}`);
                        turn = "antagonistturn";
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
                        console.log(`L'ennemi a désormais ${antagonist.HPCurrent}`);
                        turn = "antagonistturn";
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
                    protagonist.HPCurrent += 0.5 * protagonist.HPMax;
                    if (protagonist.HPCurrent > protagonist.HPMax) {
                        protagonist.HPCurrent = protagonist.HPMax;
                    }
                    console.log(`Vous avez utilisé une potion et vos points de vie sont maintenant ${protagonist.HPCurrent}`);
                }

                if (fobjet === "Morceau d'étoile") {
                    if (inventory.morceauEtoile > 0) {
                        if (protagonist.HPCurrent === 0) {
                            protagonist.HPCurrent = protagonist.HPCurrent + 0.2 * protagonist.HPMax;     
                        } else {
                            protagonist.HPCurrent = protagonist.HPCurrent + 0.5 * protagonist.HPMax;
                        }
                        inventory.morceauEtoile--;
                        console.log(`${protagonist.name} a utilisé un morceau d'étoile et a récupéré des points de vie.`);
                    } else {
                        console.log("Plus de morceaux d'étoile disponibles !");
                    }
                }

                if (fobjet === "Demi étoile") {
                    if (inventory.demiEtoile > 0) {
                        protagonist.HPCurrent = protagonist.HPMax;
                        inventory.demiEtoile--;
                        console.log(`${protagonist.name} a utilisé une demi-étoile et a été ressuscité avec 100% de ses points de vie.`);
                    } else {
                        console.log("Plus de demi-étoiles disponibles !");
                    }
                }

                if (fobjet === "Ether") {
                    if (inventory.ether > 0) {
                        protagonist.mana = protagonist.mana + 0.3 * protagonist.mana;
                        inventory.ether--;
                        console.log(`${protagonist.name} a utilisé un éther et a récupéré 30% de ses points de mana.`);
                    } else {
                        console.log("Plus d'éthers disponibles !");
                    }
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