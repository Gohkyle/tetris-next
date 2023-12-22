import { Movement, Player, Position, Shape } from "../types";

export const rows: number = 20;
export const columns: number = 10;

export const createStage = () => {
  return new Array(rows).fill(new Array(columns).fill(0));
};

export const updateStage = (prevStage: Shape[][], player: Player) => {
  const newStage = prevStage.map((row) => {
    return row.map((square: Shape): Shape => {
      return 0;
    });
  });

  player.currTetro.forEach((row: Shape[], y: number) => {
    return row.forEach((square: Shape, x: number) => {
      if (square !== 0) {
        return (newStage[y + player.position.y][x + player.position.x] =
          square);
      }
    });
  });

  return newStage;
};

export const updatePlayerPos = (player: Player, {x, y, hasCollided}:Movement)=> {
  return {...player,
  position:{x: player.position.x + x, y:player.position.y + y}, 
  hasCollided
  }
}

export const checkCollision = (
  player: Player,
  stage: Shape[][],
  movement: Position
) => {
  for (let i = 0; i < player.currTetro[0].length; i++) {
    for (let j = 0; j < player.currTetro.length; j++) {
      if (player.currTetro[i][j] !== 0) {
        if (stage[player.position.y + movement.y + i] === undefined) {
          return true;
        }
        if (
          stage[player.position.y][player.position.x + movement.x + j] ===
          undefined
        ) {
          return true;
        }
        if (
          stage[player.position.y + movement.y + i][
            player.position.x + movement.x + j
          ] !== 0
        ) {
          return true;
        }
      }
    }
  }
  return false;
};
