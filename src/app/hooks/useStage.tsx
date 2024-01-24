import { useState, useEffect } from "react";

import { checkCollision, columns, createStage, updateStage } from "../utils/gameHelper";

import { Player, SquareObject } from "../types";

export const useStage = (player: Player, resetPlayer: () => void, setIsGameOver: (boolean:boolean)=>void) => {
  const [stage, setStage] = useState(createStage());

  useEffect(() => {
    setStage((prevStage: SquareObject[][]): SquareObject[][] =>
      updateStage(prevStage, player)
    );

    if (player.hasCollided) {
      const clonedResetPlayer = JSON.parse(JSON.stringify(player))
      clonedResetPlayer.position = { x: columns / 2 , y: 0 }

      if (!checkCollision(clonedResetPlayer, stage, {x:0, y:0})){
        resetPlayer();
      }
      else setIsGameOver(true)
    }
  }, [player, resetPlayer]);

  return [stage, setStage] as const;
};
