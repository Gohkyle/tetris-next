import {Square} from './Square'
import  {StyledStage} from './styles/StyledStage'

export const Stage = () => {

    const rows: number = 20
    const columns: number = 10
    const grid: 1 | 0 [][]= new Array(rows).fill(new Array(columns).fill(0))

    return (
        <StyledStage>
            {grid.map((line: number [], row: number)=>{
                return line.map((square: number, column: number)=>{
                    return (<Square key={`${row} ${column}`} color="0"/>)
                })
            })}
        </StyledStage>
    )
} 

