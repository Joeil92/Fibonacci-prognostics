import { Probability } from "../types/probability.type";

export default function randomChoice(probability?: Probability): "red" | "black" {
    const proba = probability || 0.5; // 0.5 = 50% of getting true; | 0.3 = 30% of getting true;...

    return Math.random() < proba ? "red" : "black";
}