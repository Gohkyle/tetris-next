import { Stage } from './Stage'
import { NextBlock } from './NextBlock'
import { ScoreBoard } from './ScoreBoard'
import { MessageModal } from './MessageModal'
import { StyledTetris } from './styles/StyledTetris'
import { createStage } from '../gameHelper'

export const Tetris = () => {
    return (
        <StyledTetris>
            <Stage stage={createStage()}/>
            <aside>
            <NextBlock nextBlock={[["O","O"],["O", "O"]]} />
            <ScoreBoard/>
            </aside>
            <MessageModal title="title" text="text"/>
        </StyledTetris>
    )
}