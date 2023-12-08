'use client'

import { Display } from "./Display"

export const ScoreBoard = () => {
    return (
        <div className="scoreboard-container">
            <Display text="score"/>
            <Display text="level"/>
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