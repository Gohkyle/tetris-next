export const rows: number = 20
export const columns: number = 10

export const createStage = () => {
    return new Array(rows).fill(new Array(columns).fill(0))
}

export const checkCollision = () => {
    return false;
}