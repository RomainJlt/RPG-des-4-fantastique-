function fight() {
    console.log("Un ennemi apparaît!!");
    let turn: string = "";
    let fmenu: string = "";
    let fobjet: string = "";
    let whichattack: string = "";
    let touchingattack: number = 0;
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
                touchingattack = Math.floor((Math.random() * 100) + 1);
                if (touchingattack < protagonist.attackPotency) {
                    console.log("Vous attaquez l'ennemi!");
                    antagonist.HPCurrent = antagonist.HPCurrent - protagonist.physicalAttack + antagonist.physicalDefense;
                    if (antagonist.physicalDefense >= protagonist.physicalAttack) {
                        antagonist.HPCurrent = antagonist.HPCurrent - 0;
                    }
                    turn = "antagonistturn";
                }
            }
            if (whichattack === "Attaque Magique") {
                touchingattack = Math.floor((Math.random() * 100) + 1);
                if (touchingattack < protagonist.attackPotency) {
                    console.log("Vous attaquez l'ennemi!");
                    antagonist.HPCurrent = antagonist.HPCurrent - protagonist.magicalAttack + antagonist.magicalDefense;
                    if (antagonist.magicalDefense >= protagonist.magicalAttack) {
                        antagonist.HPCurrent = antagonist.HPCurrent - 0;
                    }
                    turn = "antagonistturn";
                }
            }
            if (whichattack === "Attaque Spéciale") {
                touchingattack = Math.floor((Math.random() * 100) + 1);
                if (touchingattack < protagonist.attackPotency) {
                    console.log("Vous attaquez l'ennemi!");
                    antagonist.HPCurrent = antagonist.HPCurrent - protagonist.physicalAttack + antagonist.physicalDefense;
                    if (antagonist.physicalDefense > protagonist.physicalAttack) {
                        antagonist.HPCurrent = antagonist.HPCurrent - 0;
                    }
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
            if (fobjet === Ether) {
                protagonist.mana = protagonist.mana + 0.3*(protagonist.mana);
            }
        }
        if (fmenu === Quitter) {
            break;
        }
    }
    if (turn === "antagonistturn") {
        console.log("L'ennemi vous attaque!!");
        protagonist.HPCurrent = (protagonist.HPCurrent - antagonist.magicalAttack + protagonist.magicalDefense) || (protagonist.HPCurrent - antagonist.physicalAttack + protagonist.physicalDefense);
        if (protagonist.magicalDefense > antagonist.magicalAttack) {
            protagonist.HPCurrent = protagonist.HPCurrent - 0;
        }
        if (protagonist.physicalDefense > antagonist.physicalAttack) {
            protagonist.HPCurrent = protagonist.HPCurrent - 0;
        }
        turn = "protagonistturn";
    }
    
}
