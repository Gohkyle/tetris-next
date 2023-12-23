import { useState, useEffect } from "react";

import { createStage, updateStage} from "../utils/gameHelper";

import { Player, SquareObject } from "../types";

export const useStage = (player: Player, resetPlayer: ()=>void) => {
  const [stage, setStage] = useState(createStage());

  useEffect(() => {
    setStage((prevStage:SquareObject[][]) : SquareObject [][]=> updateStage(prevStage, player));

    if (player.hasCollided){
      resetPlayer()
    } 
      
  }, [player,resetPlayer]);

  return [stage, setStage] as const;
};
