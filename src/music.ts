const snacks: string[] = [
  "Chips",
  "Popcorn",
  "Chocolate",
  "Cookies",
  "Ice Cream"
];

// Export a function that prints the snacks
export function printSnacks(): void {
  console.log("My favorite snacks:");

  snacks.forEach((snack) => {
    console.log(snack);
  });
}

