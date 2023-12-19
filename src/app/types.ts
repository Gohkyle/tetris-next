export type Shape = 0 | "I" | "L" | "J" | "O" | "T" | "S" | "Z";

export interface Player{
    currTetro: Shape[][],
    position: Position
    hasCollided: boolean
}

export interface Position{
    x: number,
    y: number
}