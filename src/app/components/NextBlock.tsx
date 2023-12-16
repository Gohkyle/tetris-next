import { Square } from "./Square"

import { Shape } from "../types"

import { StyledNextBlock } from "./styles/StyledNextBlock"

interface IProps {
    nextBlock: Shape[][]
}

export const NextBlock = ({nextBlock}:IProps) => {
    return(
        <StyledNextBlock size={nextBlock.length}>

            {nextBlock.map((nextBlockLine: Shape[], line:number)=>{
                return nextBlockLine.map((nextBlockLineSquare, block:number)=>{
                    return <Square key={`n${line}${block}`} color={nextBlockLineSquare}/>
                })
            })}

        </StyledNextBlock>
    )
}