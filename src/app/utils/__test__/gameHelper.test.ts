import { Movement, Player, Shape, SquareObject } from "@/app/types";
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
  test("returns an array, of arrays of only {type:0, dropped: false}", () => {
    expect(createStage().flat()).toContainEqual({type:0, dropped: false});

    createStage().forEach((row: []) => {
      row.forEach(({type, dropped}) => {
        expect(type).toBe(0);
        expect(dropped).toBe(false);
      });
    });
  });
});
describe("updateStage()", () => {
  test("takes a prevStage array and a player object, and returns an array", () => {
    const prevStage: SquareObject[][] = createStage();
    const player: Player = {
      currTetro: randomTetromino(),
      position: { x: 0, y: 0 },
      hasCollided: false,
    };
    expect(updateStage(prevStage, player)).toBeInstanceOf(Array);
  });
  test("updates stage with the player position occupied for nonblank tetromino", () => {
    const prevStage: SquareObject[][] = createStage();
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
    ).toEqual({type: "O", dropped: false});
  });
  test("updates stage with the entire tetromino", () => {
    const prevStage: SquareObject[][] = createStage();
    const player: Player = {
      currTetro: [
        ["O", "O"],
        ["O", "O"],
      ],
      position: { x: 0, y: 0 },
      hasCollided: false,
    };

    const updatedStage = updateStage(prevStage, player);
    expect(updatedStage[0][0]).toEqual({type:"O", dropped: false});
    expect(updatedStage[0][1]).toEqual({type:"O", dropped: false});
    expect(updatedStage[1][0]).toEqual({type:"O", dropped: false});
    expect(updatedStage[1][1]).toEqual({type:"O", dropped: false});
  });
  test("updates the square's dropped property, if a movement has Collided ", () => {
    const prevStage: SquareObject[][] = createStage();
    const player: Player = {
      currTetro: [
        ["O", "O"],
        ["O", "O"],
      ],
      position: { x: 0, y: 18 },
      hasCollided: true,
    };

    expect(updateStage(prevStage, player)[18][0]).toEqual({type: "O", dropped: true})
    expect(updateStage(prevStage, player)[18][1]).toEqual({type: "O", dropped: true})
    expect(updateStage(prevStage, player)[19][0]).toEqual({type: "O", dropped: true})
    expect(updateStage(prevStage, player)[19][1]).toEqual({type: "O", dropped: true})
  })
  test("returns a new array", () => {
    const prevStage: SquareObject[][] = createStage();
    const player: Player = {
      currTetro: randomTetromino(),
      position: { x: 0, y: 0 },
      hasCollided: false,
    };
    expect(updateStage(prevStage, player)).not.toEqual(prevStage);
  });
  test("does not mutate original array", () => {
    const prevStage: SquareObject[][] = createStage();
    const player: Player = {
      currTetro: randomTetromino(),
      position: { x: 0, y: 0 },
      hasCollided: false,
    };
    const copyPrevStage: SquareObject[][] = createStage();

    updateStage(prevStage, player);
    expect(prevStage).toEqual(copyPrevStage);
  });
});
describe("updatePlayerPos()", () => {
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
  test("returns false, for no collision movement", () =>{
    const player :Player = {
      currTetro: [
        ["O", "O"],
        ["O", "O"],
      ],
      position: { x: 4, y: 0 },
      hasCollided: false,
    };
    const stage = updateStage(createStage(), player)
    const movementR= { x: 1, y: 0 };
    const movementL= { x: -1, y: 0 };
    const movementD= { x: 0, y: 1 };

    expect(checkCollision(player, stage, movementR)).toBe(false);
    expect(checkCollision(player, stage, movementL)).toBe(false);
    expect(checkCollision(player, stage, movementD)).toBe(false);
  })
  describe("x-direction", () => {
    test("returns true, when player position leaves stage", () => {
      const player:Player = {
        currTetro: [
          ["O", "O"],
          ["O", "O"],
        ],
        position: { x: 9, y: 0 },
        hasCollided: false,
      };
      const stage = updateStage(createStage(), player);
      const movement = { x: 1, y: 0 };

      expect(checkCollision(player, stage, movement)).toBe(true);
    });
    test("returns true, when player tetromino with no 0 values leaves stage", () => {
      const player:Player = {
        currTetro: [
          ["O", "O"],
          ["O", "O"],
        ],
        position: { x: 8, y: 0 },
        hasCollided: false,
      };
      const stage = updateStage(createStage(), player);
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
      const stage = updateStage(createStage(), player);
      const movement = { x: 1, y: 0 };
      expect(checkCollision(player, stage, movement)).toBe(false);
    });
    test("returns true, when player position is about to move onto an occupied square", () => {
      const player: Player = {
        currTetro: [
          [0, "J", 0],
          [0, "J", 0],
          ["J", "J", 0],
        ],
        position: { x: 5, y: 0 },
        hasCollided: true,
      };
      const stage = updateStage(createStage(), player);
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
     // not possible
    });
    test("returns true, when tetromino y-movement leaves stage", () => {
      const player: Player = {
        currTetro: [
          ["O", "O"],
          ["O", "O"],
        ],
        position: { x: 0, y: 18 },
        hasCollided: false,
      };
      const stage = updateStage(createStage(), player);
      const movement = { x: 0, y: 1 };
      expect(checkCollision(player, stage, movement)).toBe(true);
    });
    test("returns false, when tetromino with 0 value leaves stage", () => {
      const player: Player = {
        currTetro: [
          ["Z", "Z", 0],
          [0, "Z", "Z"],
          [0, 0, 0],
        ],
        position: { x: 0, y: 17 },
        hasCollided: false,
      };
      const stage = updateStage(createStage(), player);
      const movement = { x: 0, y: 1 };

      expect(checkCollision(player, stage, movement)).toBe(false);
    });
    test("returns true, when player position is about to move onto an occupied square", () => {
      const player: Player = {
        currTetro: [
          [0, "J", 0],
          [0, "J", 0],
          ["J", "J", 0],
        ],
        position: { x: 0, y: 4 },
        hasCollided: false,
      };
      const stage = updateStage(createStage(), player);
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
