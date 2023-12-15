import {Square} from './Square'

export const Stage = () => {

    const rows: number = 20
    const columns: number = 10
    const grid: 1 | 0 [][]= new Array(rows).fill(new Array(columns).fill(0))

    return (
        <div className="grid-container">
            {grid.map((line: number [], row: number)=>{
                return line.map((square: number, column: number)=>{
                    return (<Square key={`${row} ${column}`} color="0"/>)
                })
            })}
        </div>
    )
} 

