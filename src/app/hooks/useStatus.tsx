import { useCallback, useState, useEffect} from "react";


export const useStatus = (isGameOver:boolean, rowsCleared:number) => {
    const [level, setLevel] = useState<number>(0)
    const [score, setScore] = useState<number>(0)
    const [totalRows, setRows] = useState<number>(0)
    const [combo, setCombo] = useState<number>(0)

    const lineScore =[100, 300, 500, 800]

    const calcScore = useCallback(()=>{
        if(!isGameOver){
            setScore((prevScore)=>{
                return prevScore += (level+1) * (lineScore[rowsCleared -1])
            })
        }

    },[])

    useEffect(()=>{
        calcScore()
    },[rowsCleared, calcScore, score])
    return [level, score, totalRows, combo, calcScore] as const;
}