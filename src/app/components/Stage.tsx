import {Square} from './Square'
import  {StyledStage} from './styles/StyledStage'

interface Stage{
    stage: (1|0)[][]
}

export const Stage = ({stage}:Stage) => {
    return (
        <StyledStage>
            {stage.map((line: number [], row: number)=>{
                return line.map((square: number, column: number)=>{
                    return (<Square key={`${row} ${column}`} color="0"/>)
                })
            })}
        </StyledStage>
    )
} 

