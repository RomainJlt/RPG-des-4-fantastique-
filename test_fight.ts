import { Character } from "./class.ts";
import { Menu } from "./menu.ts";

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
    inventory: string[];


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
        this.inventory = ["Potion", "Potion", "Ether", "Morceau d'étoile"];
    }




}

/*class 
}*/
const protagonist = new _Character("Théophile Le Luisant", 70, 40, 50, 100, 100, 80, 0, 200, 200, 100, false, false, false);;
const antagonist   = new _Character("Axel Le Scammer De Mémés Baveuses",  65, 35, 100, 100, 100, 80, 0, 150, 150, 65, false, false, false);;

const fightMenu = new Menu("Que voulez-vous faire?", ["Attaquer", "Se Défendre", "Utiliser un objet", "Quitter"]);
const attackMenu = new Menu("Quelle attaque voulez-vous utiliser?", ["Attaque Physique", "Attaque Magique", "Attaque Spéciale"]);
const objectMenu = new Menu("Que voulez-vous utiliser comme objet?", ["Potion", "Morceau d'étoile", "Demi étoile", "Ether"]);

async function _fight() {
    let turn: string = "";
    let fmenu: number | null = null;
    let fobjet: number | null = null;
    let whichattack: number | null = null;
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
            fmenu = await fightMenu.askUser();
            if (fmenu === 1) {
                whichattack = await attackMenu.askUser();
                if (whichattack === 1) {
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
                } else if (whichattack === 2) {
                    // Logique pour attaque magique...
                } else if (whichattack === 3) {
                    // Logique pour attaque spéciale...
                }
            } else if (fmenu === 2) {
                // Logique pour la défense...
            } else if (fmenu === 3) {
                fobjet = await objectMenu.askUser();
                // Logique pour l'utilisation d'objet...
            } else if (fmenu === 4) {
                // Logique pour quitter...
            }
        }

        // Suite du code de la boucle de combat...
    }

    // Logique pour la fin du combat...


_fight();

export { _fight };
export { _Character };
