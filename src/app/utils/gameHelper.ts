import { Player, Position, Shape } from "../types"

export const rows: number = 20
export const columns: number = 10

export const createStage = () => {
    return new Array(rows).fill(new Array(columns).fill(0))
}

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

export const checkCollision = (player:Player, stage: Shape[][], movement:Position) => {
    for (let i = 0; i < player.currTetro[0].length; i++){
        for(let j = 0; j < player.currTetro.length; j++){

            if (player.currTetro[j][i] !== 0){
                if (stage[player.position.y+movement.y + j] === undefined){
                    return true
                }
                if (stage[player.position.y][player.position.x + movement.x + i ] === undefined ){
                    return true
                }
            }
        }
    }
    return false
}