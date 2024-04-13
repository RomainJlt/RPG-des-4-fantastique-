import { _fight } from "./fight.ts";
import { Monster } from "./class.ts";
import { monster, dragon } from "./persoMonster.ts";
import { Menu } from "./menu.ts";
import { Character } from "./class.ts";
import { adventurers } from "./chooseGroup.ts";


export class Dungeon {
    private randomMonsters: Monster[];
    private boss: Monster[];

    constructor(randomMonsters: Monster[], boss: Monster[]) {
        this.randomMonsters = randomMonsters;
        this.boss = boss;
    }

    async explore(): Promise<void>{
        console.log("Vous entrez dans le donjon...");
        await this.exploreRoomWithCombat(3);
        
        await this.exploreRoomWithCombat(3);
        
        
    }

    private async exploreRoomWithCombat(numberOfMonsters: number): Promise<void> {
        console.log("Vous entrez dans une salle...");
        console.warn("Des monstres apparaissent: Début du combat...");
        const chosenMonsters = this.chooseRandomMonsters(numberOfMonsters);
        for(const monster of chosenMonsters){
            console.log(`Un ${monster.name} apparaît !`);
        }
        await _fight();
    }

    public chooseRandomMonsters(numberOfMonsters: number): Monster[] {
        const chosenMonsters: Monster[] = [];
        for(let i = 0; i < numberOfMonsters; i++){
            const randomIndex = Math.floor(Math.random() * this.randomMonsters.length);
            chosenMonsters.push(this.randomMonsters[randomIndex]);
        }
        return chosenMonsters;
    }

    /*private openChest(): void {
        const chestMenu = new Menu("Vous trouvez un coffre! Que voulez-vous faire?", ["Ouvrir le coffre", "Laisser le coffre"]);
        const choicePromise = chestMenu.askUser();
        choicePromise.then((choice) => {
            if(choice === 1){
                const trapProbability = Math.random();
                if(trapProbability < 0.3){
                    console.log("Le coffre était piégé. Vous êtes blessé!");
                    //Dégats du trap sur le personnage
                } else {
                    console.log("Vous trouvez les récompenses dans le coffre!"); //récompense random
                    //Donner la récompense
                }
            } else {
                console.log("Vous décidez de ne pas ouvrir le coffre!"); 
            }
        });
    }
    */
    
}


export function fightBoss(): void {
    console.log("Vous entrez dans la salle du Boss...");
    console.warn(`Un ${dragon} apparaît!`);
    _fight();
}

export const dungeon = new Dungeon(monster, dragon);
//dungeon.explore();
