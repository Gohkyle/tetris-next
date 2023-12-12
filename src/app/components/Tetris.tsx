import { Grid } from './Grid'
import { NextBlock } from './NextBlock'
import { ScoreBoard } from './ScoreBoard'
import { MessageModal } from './MessageModal'

export const Tetris = () => {
    return (
        <div className = "tetris-container" >
            <Grid/>
            <NextBlock/>
            <ScoreBoard/>
            <MessageModal title="title" text="text"/>
        </div>
    )
}