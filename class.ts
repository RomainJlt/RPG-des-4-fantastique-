class Character{
    name: string;
    physicalAttack: number;
    physicalDefense: number;
    speed: number;
    HPMax: number;
    HPCurrent: number;
    canBeHurt: boolean;
    canBeCured: boolean;
    canBeResurrected: boolean;
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