const {checkCollision} = require("../gameHelper")
import { createStage } from "../gameHelper"

describe("checkCollision", ()=>{
    // for player tetromino, checks we are within the playable area
        // test for horizontal
        // test for vertical
        // test for other tetromino
    test("takes player, stage, movement and returns false no movement", () => {
        const player = {}
        const stage = createStage()
        const movement = {x: 0, y: 0};
        
        expect(checkCollision(player,stage, movement)).toBe(false)

    })
})