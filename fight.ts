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
let protagonist: _Character;
let antagonist: _Character;

    



function _fight() {
    console.log("Un ennemi apparaît!!");
    let turn = "";
    let fmenu: string | null = "";
    let fobjet: string | null = "";
    let whichattack: string | null = "";
    let touchingattack = 0;

    if (enemies[0].speed > heroes[0].speed) {
        enemies.forEach(enemy => enemy.speedPoint += 1);
    } else {
        heroes.forEach(hero => hero.speedPoint += 1);
    }

    while (true) {
        if (enemies[0].speedPoint > heroes[0].speedPoint) {
            turn = "enemy";
        } else {
            turn = "hero";
        }

        if (turn === "hero") {
            fmenu = prompt("Que voulez-vous faire?\n1. Attaquer\n2. Se Défendre\n3. Utiliser un objet\n4. Quitter");
            if (fmenu === "1") {
                whichattack = prompt("Quelle attaque voulez-vous utiliser?\n1. Attaque Physique\n2. Attaque Magique\n3. Attaque Spéciale");
                if (whichattack === "1") {
                    // Physical attack
                    let enemy = enemies[0]; // Choose enemy
                    heroes[0].physicalAttack(enemy);
                } else if (whichattack === "2") {
                    // Magical attack
                    let enemy = enemies[0]; // Choose enemy
                    heroes[0].magicalAttack(enemy);
                } else if (whichattack === "3") {
                    // Special attack
                    let enemy = enemies[0]; // Choose enemy
                    heroes[0].specialAttack(enemy);
                }
            } else if (fmenu === "2") {
                // Defend
                heroes[0].defend();
            } else if (fmenu === "3") {
                // Use an item
                fobjet = prompt("Que voulez-vous utiliser comme objet?\n1. Potion\n2. Morceau d'étoile\n3. Demi étoile\n4. Ether");
                heroes[0].useItem(fobjet);
            } else if (fmenu === "4") {
                // Quit the fight
                break;
            } else {
                console.log("Choix invalide. Veuillez entrer un numéro valide.");
            }
        } else {
            // Enemy's turn
            let hero = heroes[0]; // Choose hero
            enemies[0].attack(hero);
        }

        if (heroes.every(hero => hero.isDead()) || enemies.every(enemy => enemy.isDead())) {
            break;
        }
        turn = "protagonistturn";
    }
    
}


_fight();
