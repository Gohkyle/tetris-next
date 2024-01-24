import { useState } from "react";

const [level, setLevel] = useState<number>(0)
const [score, setScore] = useState<number>(0)
const [rowsCleared, setRowsCleared] = useState<number>(0)

const useStatus = () => {
    return [level, score, rowsCleared]
}