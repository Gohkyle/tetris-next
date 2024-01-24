"use client";

import { StyledTetris } from "./styles/StyledTetris";

import { Stage } from "./Stage";
import { NextBlock } from "./NextBlock";
import { MessageModal } from "./MessageModal";
import { Display } from "./Display";

import { useStage } from "../hooks/useStage";
import { usePlayer } from "../hooks/usePlayer";
import{ useStatus } from "../hooks/useStatus"

import { useState, useRef,useEffect} from "react";

import { Movement, Shape } from "../types";
import { checkCollision, createStage, rows } from "../utils/gameHelper";
import { useInterval } from "../hooks/useInterval";
import { randomTetromino } from "../tetrominos";

interface IProps {
  keyCode: number;
}

export const Tetris = () => {
  const [isGameOver, setIsGameOver] = useState<boolean>(true);
  const [nextBlock, setNextBlock] = useState<Shape[][]>(randomTetromino())
  const [player, updatePlayer, resetPlayer, rotatePlayer] = usePlayer(nextBlock, setNextBlock);
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer, nextBlock, setIsGameOver);
  const [dropTimer, setDropTimer] = useState<number>(0);
  const [level, setLevel, score,setScore, totalRows, setTotalRows, calcScore] = useStatus(isGameOver, rowsCleared)
  const tetrisBoard = useRef<HTMLDivElement>(null)

  const movePlayer = (x: number) => {
    if (!isGameOver){
      const movement: Movement = { x, y: 0, hasCollided: false };
      if (!checkCollision(player, stage, movement)) {
        updatePlayer(movement);
      }
    }
  };
  const softDrop = () => {
    if (!isGameOver){
   

      const movement: Movement = { x: 0, y: 1, hasCollided: false };
      if (!checkCollision(player, stage, movement)) {
        updatePlayer(movement);
      } else updatePlayer({ x: 0, y: 0, hasCollided: true });
    }
  };
  const hardDrop = () => {
    if(!isGameOver){
      for (let i = 0; i < rows; i++) {
        const movement: Movement = { x: 0, y: i, hasCollided: false };
        if (checkCollision(player, stage, movement)) {
          updatePlayer({ x: 0, y: i - 1, hasCollided: true });
          return i - 1;
        }
      }
    }
  };

  const handleButtonPress = ({ keyCode }: IProps) => {
    // if(keyCode===27){
    // }
    if (keyCode === 37) {
      movePlayer(-1);
    }
    if (keyCode === 38) {
      rotatePlayer(stage);
    }
    if (keyCode === 39) {
      movePlayer(1);
    }
    if (keyCode === 40) {
      softDrop();
    }

    if (keyCode === 32) {
      hardDrop();
    }
  };

  const startGame = () => {
    tetrisBoard.current?.focus()
    setIsGameOver(false);
    setStage(createStage());
    setScore(0);
    setLevel(0);
    setTotalRows(0)
    setDropTimer(1000);
    resetPlayer();
  };

  useInterval(() => {
    softDrop();
  }, dropTimer);

useEffect(()=>{
  setLevel(Math.floor(totalRows/2))
  setDropTimer(1000*(0.5**level));
      
}, [rowsCleared])


  return (
    <StyledTetris role="button" tabIndex={0} onKeyUp={handleButtonPress} ref={tetrisBoard}>
      <Stage stage={stage} />
      <aside>
        <NextBlock nextBlock={nextBlock} />
        <Display text={`score: ${score}`} />
        <Display text={`level: ${level}`} />
        <Display text={`rows: ${totalRows}`} />
      </aside>
      {isGameOver? <MessageModal title="GAME OVER" text="text" startGame={startGame}/> : null}
    </StyledTetris>
  );
};
