import { useState, useCallback } from "react";

export const useNextBlock = ()=>{
    const [nextBlock, setNextBlock] = useState([[[0]]])

    const resetNextBlock = useCallback(() => {

    }, [])

    return [nextBlock, setNextBlock]

}