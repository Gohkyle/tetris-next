import { useCallback, useState, useEffect} from "react";


export const useStatus = (isGameOver:boolean, rowsCleared:number) => {
    const [level, setLevel] = useState<number>(0)
    const [score, setScore] = useState<number>(0)
    const [totalRows, setTotalRows] = useState<number>(0)
    const [combo, setCombo] = useState<number>(0)

    const lineScore =[100, 300, 500, 800]

    const calcScore = useCallback(()=>{
        if(rowsCleared > 0){
            setScore((prevScore)=>{
                return prevScore += (level+1) * lineScore[rowsCleared -1]
            })
            setTotalRows((prevRows)=>{
                return prevRows += rowsCleared
            })
        }
    },[rowsCleared])

    useEffect(()=>{
        calcScore()
    },[rowsCleared, calcScore, score])
    return [level, setLevel, score,setScore, totalRows, setTotalRows, calcScore] as const;
}