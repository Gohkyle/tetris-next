"use client";

import { StyledTetris } from "./styles/StyledTetris";

import { Stage } from "./Stage";
import { NextBlock } from "./NextBlock";
import { MessageModal } from "./MessageModal";
import { Display } from "./Display";

import { useStage } from "../hooks/useStage";
import { usePlayer } from "../hooks/usePlayer";

import { useEffect, useState } from "react";

import { Shape } from "../types";
import { createStage } from "../gameHelper";

interface IProps {
  keyCode: number;
}

export const Tetris = () => {
  const [player, updatePlayerPos, resetPlayer] = usePlayer();
  const [stage, setStage] = useStage(player);
  const [nextBlock, setNextBlock] = useState<Shape[][]>([[0]]);

  // const [isGameOver, setIsGameOver] = useState(false);

  const handleButtonPress = ({ keyCode }: IProps) => {
    // if(keyCode===27){

    // }
    if (keyCode === 37) {
      updatePlayerPos({ x: -1, y: 0, hasCollided: false });
    }
    // if (keyCode===38){
    //   rotatePlayer()
    // }
    if (keyCode === 39) {
      updatePlayerPos({ x: 1, y: 0, hasCollided: false });
    }
    if (keyCode === 40) {
      updatePlayerPos({ x: 0, y: 1, hasCollided: false });
    }
    // if (keyCode === 32) {
    //   dropPlayer();
    // }
  };

  const startGame = () => {
    setStage(createStage());
    resetPlayer();
  };

  useEffect(()=>{
    console.log(player.currTetro)
  }, [player])

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
