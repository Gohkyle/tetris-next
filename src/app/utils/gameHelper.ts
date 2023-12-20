import { Player, Position, Shape } from "../types"

export const rows: number = 20
export const columns: number = 10

export const createStage = () => {
    return new Array(rows).fill(new Array(columns).fill(0))
}

export const checkCollision = (player:Player, stage: Shape[][], movement:Position) => {
    for (let i = 0; i < player.currTetro.length; i++){
        if (player.currTetro[0][i] !== 0){
            if (stage[player.position.y+movement.y]=== undefined){
                return true
            }
            if (stage[player.position.y][player.position.x + movement.x + i ] === undefined ){
                return true
            }
        }
    }
    return false
}