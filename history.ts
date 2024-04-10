import { _fight } from "./fight.ts"
import { Monster } from "./class.ts"
import { Character, humain } from "./persoMonster.ts"
import { Menu } from "./menu.ts"

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
        this.openChest();
        await this.exploreRoomWithCombat(3);
        this.openChest();
        this.fightBoss();
    }

    private async exploreRoomWithCombat(numberOfMonsters: number): Promise<void> {
        console.log("Vous entrez dans une salle...");
        console.warn("Des monstres apparaissent: Début du combat...");
        const chosenMonsters = this.chooseRandomMonster(numberOfMonsters);
        for(const monster of chosenMonsters){
            console.log(`Un ${monster.name} apparaît !`);
        }
        await _fight();
    }
    private chooseRandomMonster(numberOfMonsters: number): Monster[] {
        const chosenMonsters: Monster[] = [];
        for(let i = 0; i < numberOfMonsters; i++){
            chosenMonsters.push(this.randomMonsters());
        }
        return chosenMonsters;
    }
    private openChest(): void {
        private async openChest(): Promise<void> {
            const chestMenu = new Menu("Vous trouvez un coffre! Que voulez-vous faire?", ["Ouvrir le coffre", "Laisser le coffre"]);
            const choice = await chestMenu.askUser();
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
        }
    }
    console.log("Vous entrez dans la salle du Boss...");
    if (this.boss) {
        console.warn(`Un ${this.boss.name} apparaît!`);
    }
    _fight();
}

// // const randomMonsters = Monster[] = [

// // ];

// import  { monster} from "./persoMonster";


// const randomMonsters: Monster[] = []; // Declare the randomMonsters variable
// const dungeon = new Dungeon(randomMonsters, dragon);
// dungeon.explore();