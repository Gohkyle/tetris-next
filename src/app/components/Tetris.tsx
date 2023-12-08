import { Grid } from './Grid'
import { NextBlock } from './NextBlock'
import { ScoreBoard } from './ScoreBoard'

export const Tetris = () => {
    return (
        <div className = "tetris-container" >
            <Grid/>
            <NextBlock/>
            <ScoreBoard/>
        </div>
    )
}