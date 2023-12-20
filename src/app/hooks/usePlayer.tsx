import { useCallback, useState } from "react";
import { columns } from "../gameHelper";
import { randomTetromino } from "../tetrominos";
import { Player } from "../types";

interface IProps{
    x: number,
    y:number,
    hasCollided: boolean
}

export const usePlayer = () => {
    const [player, setPlayer] = useState<Player>({
        currTetro:[[0]],
        position: {x:0, y:0},
        hasCollided: false
    })
    
    const updatePlayerPos = ({x, y, hasCollided}: IProps) => {
        setPlayer((prevPlayer)=>{
            return {
                ...prevPlayer,
                position: {x: prevPlayer.position.x + x, y: prevPlayer.position.y + y},
                hasCollided
            }
        })
    }

    const resetPlayer = useCallback(()=>{
        const nextBlock = randomTetromino();
        setPlayer({
            currTetro: nextBlock,
            position:{x: columns/2 - Math.floor(nextBlock.length/2), y: 0},
            hasCollided: false
        })
    }, [])
    
    return [player, updatePlayerPos, resetPlayer] as const
}
