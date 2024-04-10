export class Character {
    estKO() {
        throw new Error("Method not implemented.");
    }
    vitesse: any;
    subirDegats(arg0: number) {
        throw new Error("Method not implemented.");
    }
    defensePhysique(defensePhysique: any) {
        throw new Error("Method not implemented.");
    }
    attaquePhysique() {
        throw new Error("Method not implemented.");
    }
    nom: any;
    ressusciter: any;
  health: number;
  attackPower: any;
    restaurerVie(arg0: number) {
        throw new Error('Method not implemented.');
    }

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
    constructor(name: string, physicalAttack: number, physicalDefense: number, magicalAttack: number, magicalDefense: number, mana: number, speed: number, HPMax: number, HPCurrent: number, attackPotency: number, canBeHurt: boolean, canBeCured: boolean, canBeResurrected: boolean) {

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

export class Monster {
    name: string;
    physicalAttack: number;
    physicalDefense: number;
    magicalDefense: number;
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
    constructor(name: string, physicalAttack: number, physicalDefense: number, magicalDefense: number, speed: number, HPMax: number, HPCurrent: number, attackPotency: number) {
        this.name = name;
        this.physicalAttack = physicalAttack;
        this.physicalDefense = physicalDefense;
        this.magicalDefense = magicalDefense;
        this.speed = speed;
        this.HPMax = HPMax;
        
        this.HPCurrent = HPCurrent;
        this.attackPotency = attackPotency;
    }
}
/*
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
}*/