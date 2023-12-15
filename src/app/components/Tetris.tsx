import { Stage } from './Stage'
import { NextBlock } from './NextBlock'
import { ScoreBoard } from './ScoreBoard'
import { MessageModal } from './MessageModal'
import { StyledTetris } from './styles/StyledTetris'

export const Tetris = () => {
    return (
        <StyledTetris>
            <Stage/>
            <aside>
                <NextBlock/>
                <ScoreBoard/>
            </aside>
            <MessageModal title="title" text="text"/>
        </StyledTetris>
    )
}