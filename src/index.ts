import { Probability } from "./types/probability.type";
import fibonacci from "./utils/fibonacci";
import randomChoice from "./utils/random_choice";


// color played
const color: "red" | "black" = "red";
// round player
const round = 30;
// undefined or between 0.1 and 1
const probability: Probability | undefined = undefined;

let step = 0;
let bankroll: number = 950;
let bet = 1;

for (let i = 0; i < round; i++) {
    console.log("\n");
    const colorRouletteWheel = randomChoice();
    const currentBet = step ? fibonacci(step) : 1
    
    if(bankroll - currentBet <= 0) break; else bankroll = bankroll - currentBet;

    console.log(`Je parie ${currentBet}€ pour ce round`);
    
    if(colorRouletteWheel === color) {
        bankroll = bankroll + (currentBet * 2);
        console.log("🍀 GAGNE");
    } else {
        step++;
        console.log("🍂 PERDU");
    }
}

console.log(`\n💰 Bankroll finale à l'étape ${step} de la suite de fibonnaci : ${bankroll}`);


 