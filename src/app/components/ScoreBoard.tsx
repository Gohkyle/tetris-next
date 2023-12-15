import { Display } from "./Display"

export const ScoreBoard = () => {
    return (
        <div className="scoreboard-container">
            <Display text="score"/>
            <Display text="level"/>
        </div>
    )
}