export class Character {

    classAdventur: string;
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
    isKO: boolean;

    /**
     * 
     * @param classAdventur La classe de l'aventurier
     * @param name Le nom de l'aventurier
     * @param physicalAttack L'attaque physique de l'aventurier
     * @param physicalDefense La défense physique de l'aventurier
     * @param magicalAttack L'attaque magique de l'aventurier
     * @param magicalDefense La défense magique de l'aventurier
     * @param mana Le mana de l'aventurier
     * @param speed La vitesse de l'aventurier
     * @param HPMax Les points de vie max de l'aventurier
     * @param HPCurrent Les points de vie actuels de l'aventurier
     * @param attackPotency Le pourcentage de chance de toucher le monstre
     * @param canBeHurt L'aventurier peut être blessé
     * @param canBeCured L'aventurier peut être soigné
     * @param canBeResurrected L'aventurier peut être ressuscité
     * @param isKO L'aventurier est KO
     */
    constructor(classAdventur: string, name: string, physicalAttack: number, physicalDefense: number, magicalAttack: number, magicalDefense: number, mana: number, speed: number, HPMax: number, HPCurrent: number, attackPotency: number, canBeHurt: boolean, canBeCured: boolean, canBeResurrected: boolean, isKO: boolean) {

        this.classAdventur = classAdventur;
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
        this.isKO = isKO;
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
 * @param name Le nom du monstre
 * @param physicalAttack L'attaque physique du monstre
 * @param physicalDefense La défense physique du monstre
 * @param speed La vitesse d'attaque du monstre
 * @param HPMax Les points de vie max du monstre
 * @param HPCurrent Les points de vie actuels du monstre
 * @param attackPotency Le pourcentage de chance de toucher l'aventurier'
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
