
const {checkCollision, createStage} = require("../gameHelper")

describe("checkCollision", ()=>{
    // for player tetromino, checks we are within the playable area
        // test for horizontal
        // test for vertical
        // test for other tetromino
    test("takes player, stage, movement and returns false no movement", () => {
        const player = {
            currTetro:[
                ["O", "O"],
                ["O", "O"],
            ], 
            position:{x:0, y:0}, 
            hasCollided:false
            }
        const stage = createStage()
        const movement = {x: 0, y: 0};
        
        expect(checkCollision(player,stage, movement)).toBe(false)
    })
    test("for non-blank tetromino, returns true if tetromino movement leaves stage x-direction", () => {
        const player = {
            currTetro:[
                ["O", "O"],
                ["O", "O"],
            ], 
            position:{x:8, y:0}, 
            hasCollided:false
            }
        const stage = createStage()
        const movement = {x: 0, y: 0};
    })
})