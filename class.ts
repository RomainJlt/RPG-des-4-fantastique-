export class Character {

    name: string;
    physicalAttack: number;
    physicalDefense: number;
    speed: number;
    HPMax: number;
    HPCurrent: number;
    attackPotency: number;
    canBeHurt: boolean;
    canBeCured: boolean;
    canBeResurrected: boolean;

    /**
     * 
     * @param name The name of the aventurier
     * @param physicalAttack  The physical attack of the aventurier
     * @param physicalDefense  The physical defense of the aventurier
     * @param speed  The speed attack of the aventurier
     * @param HPMax  The max HP of the aventurier
     * @param HPCurrent  The current HP of the aventurier
     * @param attackPotency  The potential for a successful attack
     * @param canBeHurt 
     * @param canBeCured 
     * @param canBeResurrected 
     */
    constructor(name: string, physicalAttack: number, physicalDefense: number, speed: number, HPMax: number, HPCurrent: number, attackPotency: number, canBeHurt: boolean, canBeCured: boolean, canBeResurrected: boolean) {

        this.name = name;
        this.physicalAttack = physicalAttack;
        this.physicalDefense = physicalDefense;
        this.speed = speed;
        this.HPMax = HPMax;
        this.HPMax = HPMax;
        this.HPCurrent = HPCurrent;
        this.canBeHurt = canBeHurt;
        this.canBeCured = canBeCured;
        this.canBeResurrected = canBeResurrected;
    }
}

export class Monster {
    name: string;
    physicalAttack: number;
    physicalDefense: number;
    speed: number;
    HPMax: number;
    HPCurrent: number;
    attackPotency: number;


/**
 * 
 * @param name The name of the monster
 * @param physicalAttack The physical attack of the monster
 * @param physicalDefense The physical defense of the monster
 * @param speed The speed attack of the monster
 * @param HPMax The max HP of the monster
 * @param HPCurrent The current HP of the monster
 * @param attackPotency The potential for a successful attack
 */
    constructor(name: string, physicalAttack: number, physicalDefense: number, speed: number, HPMax: number, HPCurrent: number, attackPotency: number) {
        this.name = name;
        this.physicalAttack = physicalAttack;
        this.physicalDefense = physicalDefense;
        this.speed = speed;
        this.HPMax = HPMax;
        this.HPMax = HPMax;
        this.HPCurrent = HPCurrent;
    }
}

class Fight{
    protagonist: Character;
    antagonist: Character;
}

class GameManager{

}

class Menu{
    move: string;
    openAChest: boolean;
    leave: boolean;
}