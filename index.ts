//Typed array
const colors: string[] = ["red", "green", "yellow", "blue"];
const numbers: number[] = [1, 2, 3];
const bool: boolean[] = [true, false];

const grid: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

const mixed: (string | number)[] = [1, 2, "a"];

// Tuple
type Game = [string, number, boolean];
let game1: Game = ["cod", 2, true];
//Game - a tuple
