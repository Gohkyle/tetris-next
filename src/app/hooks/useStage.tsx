import { useState, useEffect } from "react";

import { createStage } from "../gameHelper";

import { Shape, Player } from "../types";

export const useStage = (player: Player) => {
  const [stage, setStage] = useState(createStage());

  useEffect(() => {

    const updateStage = (prevStage: Shape[][]) => {
      const newStage = prevStage.map((row) => {
        return row.map((square: Shape): Shape => {
          return 0;
        });
      });

      player.currTetro.forEach((row: Shape[], y: number) => {
        return row.forEach((square: Shape, x: number) => {
          if (square !== 0) {
            return (newStage[y + player.position.y][x + player.position.x] =
              square);
          }
        });
      });

      return newStage;
    };

    setStage((prevStage) => updateStage(prevStage));
console.log( "useEffect rendering")
  }, [player]);

  return [stage, setStage] as const;
};
