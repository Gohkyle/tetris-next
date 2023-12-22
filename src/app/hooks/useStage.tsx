import { useState, useEffect } from "react";

import { createStage, updateStage} from "../utils/gameHelper";

import { Shape, Player } from "../types";

export const useStage = (player: Player) => {
  const [stage, setStage] = useState(createStage());

  useEffect(() => {
    setStage((prevStage:Shape[][]) : Shape [][]=> updateStage(prevStage, player));
  }, [player]);

  return [stage, setStage] as const;
};
