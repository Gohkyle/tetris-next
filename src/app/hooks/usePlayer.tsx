import { useCallback, useState } from "react";
import {
  checkCollision,
  columns,
  rotate,
  updatePlayerPos,
} from "../utils/gameHelper";
import { randomTetromino } from "../tetrominos";
import { Movement, Player, Shape, SquareObject } from "../types";

export const usePlayer = (nextBlock: Shape[][], setNextBlock: (a:Shape[][]) => void) => {
  const [player, setPlayer] = useState<Player>({
    currTetro: [[0]],
    position: { x: 0, y: 0 },
    hasCollided: false,
  });

  const updatePlayer = (movement: Movement) => {
    setPlayer((prevPlayer) => updatePlayerPos(prevPlayer, movement));
  };

  const rotatePlayer = (stage: SquareObject[][]) => {
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    clonedPlayer.currTetro = rotate(clonedPlayer.currTetro);

    if (!checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
        setPlayer((prevPlayer) => {
            return { ...prevPlayer, currTetro: rotate(prevPlayer.currTetro) };
        });
    }else if (!checkCollision(clonedPlayer, stage, { x: 1, y: 0 })) {
      setPlayer((prevPlayer) => {
        return { ...prevPlayer, currTetro: rotate(prevPlayer.currTetro), position : {x:player.position.x +1, y: player.position.y} };
      });
    } else if (!checkCollision(clonedPlayer, stage, { x: -1, y: 0 })) {
      setPlayer((prevPlayer) => {
        return { ...prevPlayer, currTetro: rotate(prevPlayer.currTetro), position : {x:player.position.x -1, y: player.position.y}  };
      });
    }else if (!checkCollision(clonedPlayer, stage, { x: 2, y: 0 })) {
      setPlayer((prevPlayer) => {
        return { ...prevPlayer, currTetro: rotate(prevPlayer.currTetro), position : {x:player.position.x +2, y: player.position.y} };
      });
    } else if (!checkCollision(clonedPlayer, stage, { x: -2, y: 0 })) {
      setPlayer((prevPlayer) => {
        return { ...prevPlayer, currTetro: rotate(prevPlayer.currTetro), position : {x:player.position.x -2, y: player.position.y}  };
      });
    }
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      currTetro: nextBlock,
      position: { x: columns / 2 - Math.floor(nextBlock.length / 2), y: 0 },
      hasCollided: false,
    });
    setNextBlock(randomTetromino());
    
  }, [nextBlock]);

  return [player, updatePlayer, resetPlayer, rotatePlayer] as const;
};
