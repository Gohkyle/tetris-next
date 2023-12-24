import { Movement, Player, Position, Shape, SquareObject } from "../types";

export const rows: number = 20;
export const columns: number = 10;

export const createStage = () => {
  return new Array(rows).fill(new Array(columns).fill({type:0, dropped: false}));
};

export const updateStage = (prevStage: SquareObject[][], player: Player) => {
  const newStage = prevStage.map((row) => {
    return row.map((square: SquareObject) : SquareObject=> {
      return square.dropped ? square: {type:0, dropped: false}
    });
  });

  player.currTetro.forEach((row: Shape[], y: number) => {
    return row.forEach((square: Shape, x: number) => {
      if (square !== 0) {
        return newStage[y + player.position.y][x + player.position.x] =
           {type:square, dropped: (player.hasCollided) ? true : false}
      }
    });
  });

  return newStage;
};

export const updatePlayerObj = (player: Player, {x, y, hasCollided}:Movement)=> {
  return {...player,
  position:{x: player.position.x + x, y:player.position.y + y}, 
  hasCollided
  }
}

export const checkCollision = (
  player: Player,
  stage: SquareObject[][],
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
            player.position.x + movement.x + j].dropped === true 
        ) {
          return true;
        }
      }
    }
  }
  return false;
};

export const rotate = (matrix:Shape[][]) :Shape [][]=> {
  const transposed =  matrix.map((row:Shape[], index:number)=>{
    return matrix.map((row:Shape[])=> row[index])
  })

  return transposed.map((row:Shape[])=>row.reverse())
}