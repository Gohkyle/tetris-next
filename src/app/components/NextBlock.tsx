import { Square } from "./Square"

import { Shape } from "../types"

import { StyledNextBlock } from "./styles/StyledNextBlock"

interface Tetrominos{
    nextBlock: Shape[][]
}

export const NextBlock = ({nextBlock}:Tetrominos) => {
    return(
        <StyledNextBlock size={nextBlock.length}>

            {nextBlock.map((nextBlockLine: Shape[], lines:number)=>{
                return nextBlockLine.map((nextBlockLineSquare, blocks:number)=>{
                    return <Square key= {`n${lines}${blocks}` } color={nextBlockLineSquare}/>
                })
            })}

        </StyledNextBlock>
    )
}