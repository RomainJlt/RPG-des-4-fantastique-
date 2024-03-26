export default class Character{
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


    constructor(name : string, physicalAttack : number, physicalDefense : number, speed : number, HPMax : number, HPCurrent : number, attackPotency : number, canBeHurt : boolean, canBeCured : boolean, canBeResurrected: boolean){
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