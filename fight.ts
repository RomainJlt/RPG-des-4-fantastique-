import { Character } from "./class.ts";

const protagonist = new Character("Théophile Le Luisant", 70, 100, 50, 100, 100, 80, 0, 200, 200, 100, false, false, false);
const antagonist = new Character("Axel Le Scammer De Mémés Baveuses", 65, 100, 100, 100, 100, 80, 0, 150, 150, 65, false, false, false);

function _fight(): void {
    console.log("Un ennemi apparaît!!");
    let turn = "";
    let fmenu: string | null = "";
    let fobjet: string | null = "";
    let whichattack: string | null = "";
    let touchingattack: number = 0;

    while (protagonist.currentHP > 0 && antagonist.currentHP > 0) {
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
            fmenu = prompt("Que voulez vous faire?\n Attaquer\n Se Défendre\n Utiliser un objet\n Quitter");
            if (fmenu === "Attaquer") {
                whichattack = prompt("Quelle attaque voulez-vous utiliser?\n Attaque Physique\n Attaque Magique\n Attaque Spéciale");
                // Traitez les différentes attaques comme précédemment
            }
            if (fmenu === "Se Défendre") {
                console.log("Vous vous défendez!");
                // Augmentez la défense du protagoniste
                protagonist.physicalDefense *= 1.75;
                protagonist.magicalDefense *= 1.75;
                // Passez au tour suivant
                turn = "antagonistturn";
            }
            // Ajoutez ici le code pour Utiliser un objet
            if (fmenu === "Quitter") {
                return;
            }
        }
        if (turn === "antagonistturn") {
            console.log("C'est au tour de l'ennemi!!");
            console.log("L'ennemi attaque!!");
            // Effectuez l'attaque de l'ennemi
            let damage = antagonist.physicalAttack - protagonist.physicalDefense;
            protagonist.currentHP -= Math.max(damage, 0);
            console.log(`Vous avez désormais ${protagonist.currentHP} points de vie!`);
            // Passez au tour du protagoniste
            turn = "protagonistturn";
        }
    }
    if (antagonist.currentHP <= 0) {
        console.log("L'ennemi est vaincu, vous avez gagné!");
    }
    if (protagonist.currentHP <= 0) {
        console.log("Vous êtes vaincu. La partie est terminée");
    }
}

_fight();

export { _fight };
