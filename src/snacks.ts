import { animation } from "./animation";

export const snacks = ["chips", "cookies", "popcorn"];

export function printSnacks(): void {
  animation("Snacks");
  console.log(snacks);
}
