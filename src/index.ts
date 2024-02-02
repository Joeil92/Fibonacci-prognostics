import { parties } from "./data";
import { Party } from "./types/party.interface";
import fibonacci from "./utils/fibonacci";
import randomChoice from "./utils/random_choice";

function play(party: Party) {
    let step = 0;
    let bankroll: number = party.initialBankroll;

    while (true) {
        const colorRouletteWheel = randomChoice(party.probability);
        const currentBet = step ? fibonacci(step) : 1

        if (bankroll >= party.initialBankroll * 2 || bankroll - currentBet <= 0) break;

        bankroll = bankroll - currentBet;

        if (colorRouletteWheel === party.color) {
            bankroll = bankroll + (currentBet * 2);
        } else {
            step++;
            party.fibonacciStepMax = step;
        }

        party.amountStepByStep.push(bankroll);
    }
    
    party.finalBankroll = bankroll;
}

for (const party of parties) {
    play(party);
}

console.log(parties);





