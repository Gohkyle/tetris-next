import { useCallback, useState } from "react";
import { columns, rotate, updatePlayerPos } from "../utils/gameHelper";
import { randomTetromino } from "../tetrominos";
import { Movement, Player } from "../types";

export const usePlayer = () => {
    const [player, setPlayer] = useState<Player>({
        currTetro:[[0]],
        position: {x:0, y:0},
        hasCollided: false
    })
    
    const updatePlayer = (movement: Movement) => {
        setPlayer((prevPlayer)=> updatePlayerPos(prevPlayer, movement))
    }

    const rotatePlayer = () => {
        setPlayer((prevPlayer) => {
            return {...prevPlayer, currTetro: rotate(prevPlayer.currTetro)}})
    }

    const resetPlayer = useCallback(()=>{
        const nextBlock = randomTetromino();
        setPlayer({
            currTetro: nextBlock,
            position:{x: columns/2 - Math.floor(nextBlock.length/2), y: 0},
            hasCollided: false
        })
    }, [])
    
    return [player, updatePlayer, resetPlayer, rotatePlayer] as const
}
