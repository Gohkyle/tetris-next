export type Shape = 0 | "I" | "L" | "J" | "O" | "T" | "S" | "Z";

export interface SquareObject{
    type: Shape,
    dropped: boolean
}

export interface Player{
    currTetro: Shape[][],
    position: Position
    hasCollided: boolean
}

export interface Position{
    x: number,
    y: number
}

export interface Movement{
    x: number,
    y:number,
    hasCollided: boolean
}
