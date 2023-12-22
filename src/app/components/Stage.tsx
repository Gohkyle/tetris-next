import { Square } from './Square'
import { StyledStage } from './styles/StyledStage'
import { Shape, SquareObject } from '../types'

interface IProps{
    stage: SquareObject[][]
}

export const Stage = ({stage}:IProps) => {
    return (
        <StyledStage height={stage.length} width={stage[0].length}>
            {stage.map((line: SquareObject[], row: number)=>{
                return line.map(({type,dropped}:SquareObject, column: number)=>{
                    return (<Square key={`${row} ${column}`} color={type}/>)
                })
            })}
        </StyledStage>
    )
} 

