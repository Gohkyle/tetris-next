import { Shape } from "./types";

interface TetrominosItem {
  type: Shape;
  structure: (1 | 0)[][];
}
export const tetrominos: TetrominosItem[] = [
  {
    type: "0",
    structure: [[0]]
  },
  {
    type: "L",
    structure: [
      [1, 0, 0],
      [1, 0, 0],
      [1, 1, 0],
    ],
  },
  {
    type: "J",
    structure: [
      [0, 1, 0],
      [0, 1, 0],
      [1, 1, 0],
    ],
  },
  {
    type: "O",
    structure: [
      [1, 1],
      [1, 1],
    ],
  },
  {
    type: "S",
    structure: [
      [0, 0, 0],
      [0, 1, 1],
      [1, 1, 0],
    ],
  },
  {
    type: "Z",
    structure: [
      [0, 0, 0],
      [1, 1, 0],
      [0, 1, 1],
    ],
  },
  {
    type: "T",
    structure: [
      [0, 0, 0],
      [1, 1, 1],
      [0, 1, 0],
    ],
  },
  {
    type: "I",
    structure: [
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
    ],
  },
];
