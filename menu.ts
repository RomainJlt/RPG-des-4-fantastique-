
class Menu {
    question: string;
    options: string[];

    constructor(question: string, options: string[]) {
        this.question = question;
        this.options = options;
    }

        // Méthode pour poser une question à l'utilisateur et obtenir sa réponse
    async askUser(): Promise<number> {
        // Affichage de la question
        console.log(`\x1b[1m${this.question} 🎮\x1b[0m`);
        // Affichage des options disponibles    
        this.displayOptions();

        // Récupération de l'entrée de l'utilisateur
        const userInput = await this.promptUser();

        // Vérification de la validité de l'entrée de l'utilisateur
        if (!this.isValidInput(userInput)) {
            console.log("\x1b[31mInvalid choice. Please try again.\n\x1b[0m");
            return await this.askUser(); // Appel récursif pour redemander à l'utilisateur de choisir
        }
        // Conversion de l'entrée utilisateur en nombre et retour de cette valeur
        return parseInt(userInput);
    }

        // Méthode pour afficher les options disponibles
    private displayOptions(): void {
        // Parcours de chaque option et affichage avec son index
        for (let i = 0; i < this.options.length; i++) {
            console.log(`\x1b[36m${i + 1}.\x1b[0m ${this.options[i]}`);
        }
    }

    //Méthode pour obtenir l'entrée de l'utilisateur depuis le terminal
    private async promptUser(): Promise<string> {
        const buf = new Uint8Array(1024);
        await Deno.stdout.write(new TextEncoder().encode('> '));
        const n = <number>await Deno.stdin.read(buf);
        return new TextDecoder().decode(buf.subarray(0, n)).trim();
    }

    // Méthode pour vérifier si l'entrée utilisateur est valide
    private isValidInput(input: string): boolean {
        // Conversion de l'entrée utilisateur en nombre
        const choiceIndex = parseInt(input);
        // Vérification si le nombre est un entier valide entre 1 et le nombre d'options disponibles
        return !isNaN(choiceIndex) && choiceIndex > 0 && choiceIndex <= this.options.length;
    }
}

//Utilisation de la classe Menu
(async () => {
    // Création d'une instance de Menu avec une question et des options
    const menu = new Menu("Choose an option:", ["Move", "Open A Chest", "Leave"]);
    // Appel de la méthode askUser pour obtenir le choix de l'utilisateur
    const userChoice = await menu.askUser();
    // Affichage de l'option choisie par l'utilisateur
    console.log(`\x1b[32mYou chose:\x1b[0m ${menu.options[userChoice - 1]}`);
})();

export { Menu };