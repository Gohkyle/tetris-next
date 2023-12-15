import { Stage } from './Stage'
import { NextBlock } from './NextBlock'
import { MessageModal } from './MessageModal'
import { StyledTetris } from './styles/StyledTetris'
import { createStage } from '../gameHelper'
import { Display } from './Display'


export const Tetris = () => {
    return (
        <StyledTetris>
            <Stage stage={createStage()}/>
            <aside>
                <NextBlock nextBlock={[["0", "0" ,"0"],["0", "O", "0"], ["O", "O", "O"]]} />
                <Display text="score"/>
                <Display text="level"/>
            </aside>
            <MessageModal title="title" text="text"/>
        </StyledTetris>
    )
}