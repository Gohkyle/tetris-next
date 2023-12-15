import { Square } from "./Square"

export const NextBlock = () => {
    const nextBlock: number [][] = Array(4).fill([0, 0, 0, 0])

    return(
        <div className = "next-block-grid-container">
            {nextBlock.map((blockLine: number[])=>{
                return blockLine.map((blockLineSquare)=>{
                    return <Square color={0}/>
                })
            })}

        </div>
    )
}