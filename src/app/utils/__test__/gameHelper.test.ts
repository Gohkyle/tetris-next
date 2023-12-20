
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

        expect(checkCollision(player, stage, movement)).toBe(false)
    })
    test("player position, returns true if player position movement leaves stage x-direction", () => {
        const player = {
            currTetro:[
                ["O", "O"],
                ["O", "O"],
            ], 
            position:{x:9, y:0}, 
            hasCollided:false
            }
        const stage = createStage()
        const movement = {x: 1, y: 0};
        
        expect(checkCollision(player, stage, movement)).toBe(true)
    })
    test("returns true when non blank tetromino movement leaves stage", () => {
        const player = {
            currTetro:[
                ["O", "O"],
                ["O", "O"],
            ], 
            position:{x:8, y:0}, 
            hasCollided:false
            }
        const stage = createStage()
        const movement = {x: 1, y: 0};

        expect(checkCollision(player, stage, movement)).toBe(true)
    })
    test("returns false, when tetromino with blank squares move out the stage", () => {
        const player = {
            currTetro:[
                [0, "J", 0],
                [0, "J", 0],
                ["J", "J", 0],
            ], 
            position:{x:7, y:0}, 
            hasCollided:false
            }
        const stage = createStage()
        const movement = {x: 1, y: 0};
        expect(checkCollision(player, stage, movement)).toBe(false)
    })
})