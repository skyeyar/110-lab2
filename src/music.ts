import { animation } from "./animation";

export const music = ["Pop", "Rock", "Jazz"];

export function printMusic(): void {
  animation("Music");
  console.log(music);
}
