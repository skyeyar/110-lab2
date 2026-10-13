import { animation } from "./animation";

const music: string[] = [
  "Pop",
  "Rock",
  "Jazz",
  "Classical",
  "Hip-Hop"
];

// Export a function that prints the snack list.
export function printMusic(): void {
  console.log("My favorite Music:");

  animation("Music");
  music.forEach((genre) => {
    console.log(genre);
  });
}

