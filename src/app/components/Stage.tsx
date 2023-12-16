import { Square } from './Square'
import { StyledStage } from './styles/StyledStage'
import { Shape } from '../types'

interface IProps{
    stage: Shape[][]
}

export const Stage = ({stage}:IProps) => {
    return (
        <StyledStage height={stage.length} width={stage[0].length}>
            {stage.map((line: Shape [], row: number)=>{
                return line.map((square: Shape, column: number)=>{
                    return (<Square key={`${row} ${column}`} color={square}/>)
                })
            })}
        </StyledStage>
    )
} 

