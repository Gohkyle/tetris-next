"use client";

import { StyledTetris } from "./styles/StyledTetris";

import { Stage } from "./Stage";
import { NextBlock } from "./NextBlock";
import { MessageModal } from "./MessageModal";
import { Display } from "./Display";

import { useStage } from "../hooks/useStage";
import { usePlayer } from "../hooks/usePlayer";

import { useState } from "react";

import { Movement, Shape } from "../types";
import { checkCollision, createStage } from "../utils/gameHelper";
import { useInterval } from "../hooks/useInterval";

interface IProps {
  keyCode: number;
}

export const Tetris = () => {
  const [player, updatePlayer, resetPlayer, rotatePlayer] = usePlayer();
  const [stage, setStage] = useStage(player, resetPlayer);
  const [nextBlock, setNextBlock] = useState<Shape[][]>([[0]]);
  const [dropTimer, setDropTimer] = useState<number>(0);

  // const [isGameOver, setIsGameOver] = useState(false);

  const movePlayer = (x: number) => {
    const movement: Movement = { x, y:0, hasCollided: false };
    if (!checkCollision(player, stage, movement)) {
      updatePlayer(movement);
    }
  };
   
  const drop = () =>{
    const movement: Movement = { x:0, y:1, hasCollided: false }
    if (!checkCollision(player, stage, movement)) {
      updatePlayer(movement);
    } else updatePlayer({ x: 0, y: 0, hasCollided: true });
  }

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
      drop()
    }

    // if (keyCode === 32) {
    //   dropPlayer();
    // }
  };

  const startGame = () => {
    setStage(createStage());
    setDropTimer(1000);
    resetPlayer();
  };

  useInterval(() => {
    drop();
  }, dropTimer);

  return (
    <StyledTetris role="button" tabIndex={0} onKeyUp={handleButtonPress}>
      <Stage stage={stage} />
      <aside>
        <NextBlock nextBlock={nextBlock} />
        <Display text="score" />
        <Display text="level" />
      </aside>
      <MessageModal title="title" text="text" startGame={startGame} />
    </StyledTetris>
  );
};
