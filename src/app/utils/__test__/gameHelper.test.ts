
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
    test("returns true, when player x-movement leaves stage", () => {
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
    test("returns true when non blank tetromino x-movement leaves stage", () => {
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
    test("returns false, when tetromino with blank squares x-movement out the stage", () => {
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
    test("returns true, when player y-movement leaves stage", () => {
        const player = {
            currTetro:[[0]], 
            position:{x:0, y:19}, 
            hasCollided:false
        }
        const stage = createStage()
        const movement = {x: 0, y: 1};
        expect(checkCollision(player, stage, movement)).toBe(true)
        
    })
    test("returns true, when player y-movement leaves stage", () => {
        const player = {
            currTetro:[
                ["O", "O"],
                ["O", "O"],
            ], 
            position:{x:0, y:18}, 
            hasCollided:false
        }
        const stage = createStage()
        const movement = {x: 0, y: 1};
        expect(checkCollision(player, stage, movement)).toBe(true)
        
    })
    test("returns false, when tetromino with blank squares y-movement out the stage", () => {
        const player = {
            currTetro:[
                ["Z", "Z", 0],
                [0, "Z", "Z"],
                [0, 0, 0],
            ], 
            position:{x:0, y:17}, 
            hasCollided:false
        }
        const stage = createStage()
        const movement = {x: 0, y: 1};
        expect(checkCollision(player, stage, movement)).toBe("not complete")
    })
})