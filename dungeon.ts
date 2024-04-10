import { Character  } from "./class.ts";
import { Monster } from "./persoMonster.ts";

export class Donjon {
  private salles: string[];
  private aventuriers: string[];

  constructor() {
      this.salles = ["combat", "coffre", "combat", "coffre", "boss"];
      this.aventuriers = [];
  }

  ajouterAventurier(aventurier: string): void {
      this.aventuriers.push(aventurier);
  }

  parcourirDonjon(): void {
      for (let i = 0; i < this.salles.length; i++) {
          console.log(`\nSalle ${i + 1}`);
          const salle = this.salles[i];
          if (salle === "combat") {
              this.combat();
          } else if (salle === "coffre") {
              this.coffre();
          } else if (salle === "boss") {
              this.boss();
          }
      }
  }

  private combat(): void {
      const monstres = ["🦹‍♀️", "🧟", "🧜‍♂️"];
      console.log("Combat avec:");
      for (let i = 0; i < 3; i++) {
          console.log(monstres[Math.floor(Math.random() * monstres.length)]);
      }
  }

  private coffre(): void {
      const objets = ["épée", "potion de soin", "piège"];
      console.log("Vous ouvrez le coffre et trouvez:");
      for (let i = 0; i < 2; i++) {
          console.log(objets[Math.floor(Math.random() * objets.length)]);
      }
  }

  private boss(): void {
      console.log("Vous entrez dans la salle du Boss 🧛");
      // Combat contre le boss - ici vous pouvez implémenter le combat contre le boss
  }
}

// Exemple d'utilisation
const donjon = new Donjon();
donjon.ajouterAventurier("Héros");
donjon.parcourirDonjon();
