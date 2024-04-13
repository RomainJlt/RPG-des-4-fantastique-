import { _fight } from "./fight.ts";
import { Monster } from "./class.ts";
import { monster, dragon } from "./persoMonster.ts";
import { } from "./menu.ts";


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
    
}

function openTheChest(): void {
    const trapProb = Math.random();
    if(trapProb < 0.3){
        protagonist.HPCurrent = protagonist.HPCurrent - 10;

    }
}
export function fightBoss(): void {
    console.log("Vous entrez dans la salle du Boss...");
    console.warn(`Un ${dragon} apparaît!`);
    _fight();
}

export const dungeon = new Dungeon(monster, dragon);
//dungeon.explore();