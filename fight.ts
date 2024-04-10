import { Character } from "./class.ts";
import Inventaire from "./inventaire.ts";

const inventaire = new Inventaire();

function combat(protagoniste: Character, antagoniste: Character): void {
    console.log("Un ennemi apparaît!!");

    // Détermine l'ordre de jeu en fonction de la vitesse des personnages
    let participants: Character[] = [protagoniste, antagoniste];
    participants.sort((a, b) => b.vitesse - a.vitesse);

    while (true) {
        for (const personnage of participants) {
            if (personnage.HPCurrent <= 0) {
                console.log(`${personnage.nom} est K.O., il ne peut pas jouer.`);
                continue; // Saute le tour si le personnage est K.O.
            }

            console.log(`C'est au tour de ${personnage.nom}!!`);

            // Affichage du menu
            console.log("Que voulez-vous faire?");
            console.log("1. Attaquer");
            console.log("2. Capacité spéciale");
            console.log("3. Utiliser un objet");
            console.log("4. Quitter");

            // Demande à l'utilisateur de choisir une action
            const choix = parseInt(prompt("Choisissez une action:") ?? "");

            switch (choix) {
                case 1: // Attaquer
                    console.log(`${personnage.nom} attaque physiquement!`);
                    const degatsPhysiques = Math.max(Number(personnage.attaquePhysique()) - Number(antagoniste.defensePhysique), 0);
                    antagoniste.subirDegats(degatsPhysiques);
                    break;
                case 2: // Capacité spéciale
                    // À implémenter en fonction des capacités spéciales de chaque personnage
                    break;
                case 3: // Utiliser un objet
                    console.log("Objets disponibles:");
                    console.log("1. Potion");
                    console.log("2. Morceau d'étoile");
                    console.log("3. Demi-étoile");
                    console.log("4. Ether");
                    const objet = parseInt(prompt("Choisissez un objet à utiliser:") ?? "");
                    switch (objet) {
                        case 1: // Potion
                            inventaire.utiliserPotion(personnage);
                            break;
                        case 2: // Morceau d'étoile
                            inventaire.utiliserMorceauEtoile(personnage);
                            break;
                        case 3: // Demi-étoile
                            // À implémenter
                            break;
                        case 4: // Ether
                            inventaire.utiliserEther(personnage);
                            break;
                        default:
                            console.log("Choix invalide");
                    }
                    break;
                case 4: // Quitter
                    console.log(`${personnage.nom} a quitté le combat.`);
                    return;
                default:
                    console.log("Choix invalide");
            }

            // Vérifie si l'antagoniste est K.O.
            if (antagoniste.HPCurrent <= 0) {
                console.log(`${antagoniste.nom} est vaincu, vous avez gagné!`);
                return;
            }
        }
    }
}

export { combat };
