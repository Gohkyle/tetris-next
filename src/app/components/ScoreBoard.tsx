'use client'
export const ScoreBoard = () => {
    return (
        <div className="scoreboard-container">
            <div className= "score-container">
                SCORE:
            </div>
            <div className = "level-container">
                LEVEL:
            </div>
            <div className= "menu">
                <button className = "scoreboard-button" onClick={()=>{}}>
                    PLAY
                </button>
                <button className = "scoreboard-button" onClick ={()=>{}}>
                    RESTART
                </button>
            </div>
        </div>
    )
}