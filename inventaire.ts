import { Character } from './class.ts';

class Inventaire {
    nom: string;
    potions: number;
    ether: number;
    morceauEtoile: number;
    
    constructor() {
        this.potions = 2;
        this.ether = 1; 
        this.morceauEtoile = 1;
    }
    
    utiliserPotion(personnage: Character): void {
        if (this.potions > 0) {
            personnage.restaurerVie(50);
            this.potions--;
            console.log(`${personnage.nom} a utilisé une potion et a récupéré 50% de ses points de vie.`);
        } else {
            console.log("Plus de potions disponibles !");
        }
    }
    
    utiliserEther(personnage: Character): void {
        if (this.ether > 0) {
            personnage.restaurerMana(30);
            this.ether--;
            console.log(`${personnage.nom} a utilisé un éther et a récupéré 30% de ses points de mana.`);
        } else {
            console.log("Plus d'éthers disponibles !");
        }
    }
    
    utiliserMorceauEtoile(personnage: Character): void {
        if (this.morceauEtoile > 0) {
            personnage.ressusciter(20);
            this.morceauEtoile--;
            console.log(`${personnage.nom} a utilisé un morceau d'étoile et a été ressuscité avec 20% de ses points de vie.`);
        } else {
            console.log("Plus de morceaux d'étoile disponibles !");
        }
    }
}

export default Inventaire;