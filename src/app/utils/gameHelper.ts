import { Movement, Player, Position, Shape, SquareObject } from "../types";

export const rows: number = 20;
export const columns: number = 10;

export const createStage = () => {
  return new Array(rows).fill(new Array(columns).fill({type:0, dropped: false}));
};
type stageArr = [SquareObject[][], number]
export const updateStage = (prevStage: SquareObject[][], player: Player) : stageArr => {

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

  if (player.hasCollided){
    return clearRows(newStage)
  }
  return [newStage, 0];
};

export const updatePlayerPos = (player: Player, {x, y, hasCollided}:Movement)=> {
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

export const clearRows = (stage: SquareObject[][]):stageArr => {
  return [stage.reduce(
    (acc: SquareObject[][], row: SquareObject[]): SquareObject[][] => {
      if (row.findIndex((cell) => cell.type === 0) === -1) {
        acc.unshift(new Array(row.length).fill({ type: 0, dropped: false }));
        return acc;
      }
      acc.push(row);
      return acc;
    },
    []
  ),0]
};