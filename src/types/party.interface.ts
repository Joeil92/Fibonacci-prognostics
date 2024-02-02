import { Probability } from "./probability.type"

export interface Party {
    id: number
    probability: Probability | undefined
    color: "red" | "black"
    initialBankroll: number
    finalBankroll: number | null
    amountStepByStep: number[],
    fibonacciStepMax: number
}