import { useState, useEffect } from "react";

import { createStage, updateStage} from "../utils/gameHelper";

import { Player, SquareObject } from "../types";

export const useStage = (player: Player) => {
  const [stage, setStage] = useState(createStage());

  useEffect(() => {
    setStage((prevStage:SquareObject[][]) : SquareObject [][]=> updateStage(prevStage, player));
  }, [player]);

  return [stage, setStage] as const;
};
