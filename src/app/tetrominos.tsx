import { Shape } from "./types";

export const randomTetromino = () => {
  return tetrominos[Math.floor(Math.random() * tetrominos.length)];
};

export const tetrominos: Shape[][][] = [
  [
    ["L", 0, 0],
    ["L", 0, 0],
    ["L", "L", 0],
  ],
  [
    [0, "J", 0],
    [0, "J", 0],
    ["J", "J", 0],
  ],
  [
    ["O", "O"],
    ["O", "O"],
  ],
  [
    [0, 0, 0],
    [0, "S", "S"],
    ["S", "S", 0],
  ],
  [
    [0, 0, 0],
    ["S", "S", 0],
    [0, "S", "S"],
  ],
  [
    [0, 0, 0],
    [0, "T", 0],
    ["T", "T", "T"],
  ],
  [
    [0, "I", 0, 0],
    [0, "I", 0, 0],
    [0, "I", 0, 0],
    [0, "I", 0, 0],
  ],
];
