import { useCallback, useState } from "react";
import { columns, updatePlayerPos } from "../utils/gameHelper";
import { randomTetromino } from "../tetrominos";
import { Movement, Player } from "../types";

export const usePlayer = () => {
    const [player, setPlayer] = useState<Player>({
        currTetro:[[0]],
        position: {x:0, y:0},
        hasCollided: false
    })
    
    const movePlayer = (movement: Movement) => {
        setPlayer((prevPlayer)=> updatePlayerPos(prevPlayer, movement))
    }

    const resetPlayer = useCallback(()=>{
        const nextBlock = randomTetromino();
        setPlayer({
            currTetro: nextBlock,
            position:{x: columns/2 - Math.floor(nextBlock.length/2), y: 0},
            hasCollided: false
        })
    }, [])
    
    return [player, movePlayer, resetPlayer] as const
}
