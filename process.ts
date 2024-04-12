import { _fight } from "./fight.ts";
import { fightBoss } from "./history.ts";
import { adventurers } from "./chooseGroup.ts";

export function processing(){
    let inventory = ["Potion", "Potion", "Morceau d'étoile", "Demi étoile", "Ether"];
    console.log("Vous entrez dans le donjon...");
    console.log("Vous êtes dans la salle 1");
    console.log("Il y a des monstres dans cette salle, une porte, et entre les deux un coffre.");
    let userChoicef1 = prompt("Voulez vous attaquer l'ennemi?`\n Oui\n Non");
    if (userChoicef1 === "Oui") {
        _fight();
    } else if (userChoicef1 === "Non") {
        console.log("Grossière erreur! L'ennemi attaque et porte le premier coup!");
        adventurers[0].HPCurrent = adventurers[0].HPCurrent - 10;
        _fight();
    }
    console.log("Vous avez vaincu les ennemis de la salle 1!")
    let userChoicec1 = prompt("Vous approchez du coffre?\n Oui\n Non");
    if (userChoicec1 === "Oui") {
        console.log("Vous vous approchez du coffre!");
        const trapProbability = Math.random();
        if (trapProbability < 0.3) {
            console.log("Le coffre était piégé. Vous êtes blessé!");
            adventurers[0].HPCurrent = adventurers[0].HPCurrent - 10;
        } else {
            console.log("Vous trouvez les récompenses dans le coffre! Une Potion!"); 
            inventory.push("Potion");
        }
    
    } else if (userChoicec1 === "Non") {
        console.log("Vous passez à la salle 2!");
    }
    console.log("Vous êtes dans la salle 2");
    console.log("Il y a des monstres dans cette salle, une porte.");
    let userChoicef2 = prompt("Voulez vous attaquer l'ennemi?`\n Oui\n Non");
    if (userChoicef2 === "Oui") {
        _fight();
    } else if (userChoicef2 === "Non") {
        console.log("Grossière erreur! L'ennemi attaque et porte le premier coup!");
        adventurers[0].HPCurrent = adventurers[0].HPCurrent - 10;
        _fight();
    }
    console.log("Vous avez vaincu les ennemis de la salle 2!");
    console.log("Vous passez à la salle 3");
    console.log("Vous êtes dans la salle 3");
    console.log("Il y a des monstres dans cette salle, une porte.");
    let userChoicef3 = prompt("Voulez vous attaquer l'ennemi?`\n Oui\n Non");
    if (userChoicef3 === "Oui") {
        _fight();
    } else if (userChoicef3 === "Non") {
        console.log("Grossière erreur! L'ennemi attaque et porte le premier coup!");
        adventurers[0].HPCurrent = adventurers[0].HPCurrent - 10;
        _fight();
    }
    console.log("Vous avez vaincu les ennemis de la salle 3!");
    console.log("Vous êtes dans la salle 4");
    console.log("Il y a des monstres dans cette salle, une porte, et entre les deux un coffre.");
    let userChoicef4 = prompt("Voulez vous attaquer l'ennemi?`\n Oui\n Non");
    if (userChoicef4 === "Oui") {
        _fight();
    } else if (userChoicef4 === "Non") {
        console.log("Grossière erreur! L'ennemi attaque et porte le premier coup!");
        adventurers[0].HPCurrent = adventurers[0].HPCurrent - 10;
        _fight();
    }
    console.log("Vous avez vaincu les ennemis de la salle 4!");
    let userChoicec4 = prompt("Vous approchez du coffre?\n Oui\n Non");
    if (userChoicec4 === "Oui") {
        console.log("Vous vous approchez du coffre!");
        const trapProbability = Math.random();
        if (trapProbability < 0.3) {
            console.log("Le coffre était piégé. Vous êtes blessé!");
            adventurers[0].HPCurrent = adventurers[0].HPCurrent - 10;
        } else {
            console.log("Vous trouvez les récompenses dans le coffre! Un éther."); 
            inventory.push("Ether");
        }
    
    } else if (userChoicec4 === "Non") {
        console.log("Vous passez à la salle 5!");
    }
    console.log("Vous êtes dans la salle 5");
    console.log("Il s'agit de la dernière salle du donjon et dedans il y a ... un dragon!");
    let userChoicef5 = prompt("Voulez vous attaquer l'ennemi?`\n Oui\n Non");
    if (userChoicef5 === "Oui") {
        fightBoss();
    } else if (userChoicef5 === "Non") {
        console.log("Grossière erreur! L'ennemi attaque et porte le premier coup!");
        adventurers[0].HPCurrent = adventurers[0].HPCurrent - 10;
        fightBoss();
    }
    console.log("Vous avez vaincu le dragon!");
    console.log("Vous avez fini le jeu!");
    
}