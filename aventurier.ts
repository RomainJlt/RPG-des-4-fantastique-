import persoMonster from "./persoMonster.ts"

export default class Aventurier extends persoMonster {

    private eggIncubation : number = 20;

    constructor(name : string, size : number, food : string[], maxAge : number, eggIncubation : number, noise : string | null = null){
        super(name,size,food,maxAge,noise);
        this.eggIncubation = eggIncubation;
    }

    public layEgg() : Promise<Oviparous> | null {
        if(this.hungerLevel > 50){
            console.error(`${this.name} is too hungry to lay eggs.`);
            return null;
        }
        return new Promise((resolve) => {
            setTimeout(()=> {
                console.log(`The egg of ${this.name} has hatched.`);
                resolve(new Oviparous(this.name,this.size,this.food,this.maxAge,this.eggIncubation,this.noise));
            },this.eggIncubation*1000);
        });
    }

    public async makeChildren() : Promise<Animal[] | null>{
        const egg = this.layEgg();
        if(egg === null){
            return Promise.resolve(null);
        }
        const child = await egg;
        return Promise.resolve([child]);
    }
}