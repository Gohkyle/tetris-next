import { Movement, Player, Shape } from "@/app/types";
import { columns, rows, updatePlayerPos, updateStage } from "../gameHelper";
import { randomTetromino } from "../../tetrominos";

const { checkCollision, createStage } = require("../gameHelper");

describe("createStage()", () => {
  test("returns an array of arrays", () => {
    expect(createStage()).toBeInstanceOf(Array);
    expect(createStage()[0]).toBeInstanceOf(Array);
  });
  test("returns an array of length equivalent to rows variable", () => {
    expect(createStage()).toHaveLength(rows);
  });
  test("returns an array of arrays of length equivalent to the columns variable", () => {
    expect(createStage()[0]).toHaveLength(columns);
  });
  test("returns an array, of arrays of only 0 values", () => {
    expect(createStage().flat()).toContain(0);

    createStage().forEach((row: []) => {
      row.forEach((value) => {
        expect(value).toBe(0);
      });
    });
  });
});
describe("updateStage()", () => {
  test("takes a prevStage array and a player object, and returns an array", () => {
    const prevStage: Shape[][] = createStage();
    const player: Player = {
      currTetro: randomTetromino(),
      position: { x: 0, y: 0 },
      hasCollided: false,
    };
    expect(updateStage(prevStage, player)).toBeInstanceOf(Array);
  });
  test("updates stage with the player position occupied for nonblank tetromino", () => {
    const prevStage: Shape[][] = createStage();
    const player: Player = {
      currTetro: [
        ["O", "O"],
        ["O", "O"],
      ],
      position: { x: 0, y: 0 },
      hasCollided: false,
    };

    expect(
      updateStage(prevStage, player)[player.position.y][player.position.x]
    ).toBe("O");
  });
  test("updates stage with the entire tetromino", () => {
    const prevStage: Shape[][] = createStage();
    const player: Player = {
      currTetro: [
        ["O", "O"],
        ["O", "O"],
      ],
      position: { x: 0, y: 0 },
      hasCollided: false,
    };

    const updatedStage = updateStage(prevStage, player);
    expect(updatedStage[0][0]).toBe("O");
    expect(updatedStage[0][1]).toBe("O");
    expect(updatedStage[1][0]).toBe("O");
    expect(updatedStage[1][1]).toBe("O");
  });
  test("returns a new array", () => {
    const prevStage: Shape[][] = createStage();
    const player: Player = {
      currTetro: randomTetromino(),
      position: { x: 0, y: 0 },
      hasCollided: false,
    };
    expect(updateStage(prevStage, player)).not.toEqual(prevStage);
  });
  test("does not mutate original array", () => {
    const prevStage: Shape[][] = createStage();
    const player: Player = {
      currTetro: randomTetromino(),
      position: { x: 0, y: 0 },
      hasCollided: false,
    };
    const copyPrevStage: Shape[][] = createStage();

    updateStage(prevStage, player);
    expect(prevStage).toEqual(copyPrevStage);
  });
});
describe.only("updatePlayerPos", () => {
  test("returns player object with player position x value updated", () => {
    const player: Player = {
      currTetro: [[0]],
      position: { x: 0, y: 0 },
      hasCollided: false,
    };
    const movement: Movement = { x: 1, y: 0, hasCollided: false };
    const updatedPlayer: Player = {
      currTetro: [[0]],
      position: { x: 1, y: 0 },
      hasCollided: false,
    };
    expect(updatePlayerPos(player, movement)).toEqual(updatedPlayer);
  });
  test("returns player object with player position y value updated", () => {
    const player: Player = {
      currTetro: [[0]],
      position: { x: 0, y: 0 },
      hasCollided: false,
    };
    const movement: Movement = { x: 0, y: 1, hasCollided: false };
    const updatedPlayer: Player = {
      currTetro: [[0]],
      position: { x: 0, y: 1 },
      hasCollided: false,
    };
    expect(updatePlayerPos(player, movement)).toEqual(updatedPlayer);
  });
  test("returns player object with hasCollided value from the movement object", () => {
    const player: Player = {
      currTetro: [[0]],
      position: { x: 0, y: 0 },
      hasCollided: false,
    };
    const movement: Movement = { x: 0, y: 1, hasCollided: true };
    const updatedPlayer: Player = {
      currTetro: [[0]],
      position: { x: 0, y: 1 },
      hasCollided: true,
    };
    expect(updatePlayerPos(player,movement)).toEqual(updatedPlayer)
  })
  test("returns a new object", () => {
    const player: Player = {
      currTetro: [[0]],
      position: { x: 0, y: 0 },
      hasCollided: false,
    };
    const movement: Movement = { x: 0, y: 1, hasCollided: false };
   
    expect(updatePlayerPos(player,movement)).not.toEqual(player)
  });
  test("does not mutate original object", () => {
    const player: Player = {
      currTetro: [[0]],
      position: { x: 0, y: 0 },
      hasCollided: false,
    };
  const copyPlayer: Player = {
      currTetro: [[0]],
      position: { x: 0, y: 0 },
      hasCollided: false,
    };
    const updatedPlayer: Player = {
      currTetro: [[0]],
      position: { x: 1, y: 0 },
      hasCollided: false,
    };
    const movement: Movement = { x: 0, y: 1, hasCollided: false };

  updatePlayerPos(player,movement)
  expect(player).toEqual(copyPlayer)
  });
});
describe("checkCollision()", () => {
  test("returns false, for no movement", () => {
    const player = {
      currTetro: [
        ["O", "O"],
        ["O", "O"],
      ],
      position: { x: 0, y: 0 },
      hasCollided: false,
    };
    const stage = createStage();
    const movement = { x: 0, y: 0 };

    expect(checkCollision(player, stage, movement)).toBe(false);
  });
  describe("x-direction", () => {
    test("returns true, when player position leaves stage", () => {
      const player = {
        currTetro: [
          ["O", "O"],
          ["O", "O"],
        ],
        position: { x: 9, y: 0 },
        hasCollided: false,
      };
      const stage = createStage();
      const movement = { x: 1, y: 0 };

      expect(checkCollision(player, stage, movement)).toBe(true);
    });
    test("returns true, when player tetromino with no 0 values leaves stage", () => {
      const player = {
        currTetro: [
          ["O", "O"],
          ["O", "O"],
        ],
        position: { x: 8, y: 0 },
        hasCollided: false,
      };
      const stage = createStage();
      const movement = { x: 1, y: 0 };

      expect(checkCollision(player, stage, movement)).toBe(true);
    });
    test("returns false, when player tetromino with 0 values leaves stage", () => {
      const player: Player = {
        currTetro: [
          [0, "J", 0],
          [0, "J", 0],
          ["J", "J", 0],
        ],
        position: { x: 7, y: 0 },
        hasCollided: false,
      };
      const stage = createStage();
      const movement = { x: 1, y: 0 };
      expect(checkCollision(player, stage, movement)).toBe(false);
    });
    test("returns true, when player position is about to move onto an occupied square", () => {
      const player = {
        currTetro: [
          [0, "J", 0],
          [0, "J", 0],
          ["J", "J", 0],
        ],
        position: { x: 5, y: 0 },
        hasCollided: false,
      };
      const stage = createStage();
      const movement = { x: 1, y: 0 };

      const previousPlayerMovement: Player = {
        currTetro: [
          ["O", "O"],
          ["O", "O"],
        ],
        position: { x: 7, y: 0 },
        hasCollided: false,
      };
      const updatedStage = updateStage(stage, previousPlayerMovement);

      expect(checkCollision(player, updatedStage, movement)).toBe(true);
    });
  });
  describe("y-movement", () => {
    test("returns true, when player y-movement leaves stage", () => {
      const player = {
        currTetro: [
          ["O", "O"],
          ["O", "O"],
        ],
        position: { x: 0, y: 19 },
        hasCollided: false,
      };
      const stage = createStage();
      const movement = { x: 0, y: 1 };

      console.log(stage[player.position.y + movement.y]);
      expect(checkCollision(player, stage, movement)).toBe(true);
    });
    test("returns true, when tetromino y-movement leaves stage", () => {
      const player = {
        currTetro: [
          ["O", "O"],
          ["O", "O"],
        ],
        position: { x: 0, y: 18 },
        hasCollided: false,
      };
      const stage = createStage();
      const movement = { x: 0, y: 1 };
      expect(checkCollision(player, stage, movement)).toBe(true);
    });
    test("returns false, when tetromino with 0 value leaves stage", () => {
      const player = {
        currTetro: [
          ["Z", "Z", 0],
          [0, "Z", "Z"],
          [0, 0, 0],
        ],
        position: { x: 0, y: 17 },
        hasCollided: false,
      };
      const stage = createStage();
      const movement = { x: 0, y: 1 };

      expect(checkCollision(player, stage, movement)).toBe(false);
    });
    test("returns true, when player position is about to move onto an occupied square", () => {
      const player = {
        currTetro: [
          [0, "J", 0],
          [0, "J", 0],
          ["J", "J", 0],
        ],
        position: { x: 0, y: 4 },
        hasCollided: false,
      };
      const stage = createStage();
      const movement = { x: 0, y: 1 };

      const previousPlayerMovement: Player = {
        currTetro: [
          ["O", "O"],
          ["O", "O"],
        ],
        position: { x: 0, y: 7 },
        hasCollided: false,
      };
      const updatedStage = updateStage(stage, previousPlayerMovement);

      expect(checkCollision(player, updatedStage, movement)).toBe(true);
    });
  });
});
