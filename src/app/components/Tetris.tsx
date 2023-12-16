"use client";

import { Stage } from "./Stage";
import { NextBlock } from "./NextBlock";
import { MessageModal } from "./MessageModal";
import { StyledTetris } from "./styles/StyledTetris";
import { createStage } from "../gameHelper";
import { Display } from "./Display";

import { randomTetromino } from "../tetrominos";
import { useState } from "react";

interface IProps {
  keyCode: number;
}

export const Tetris = () => {
  const handleButtonPress = ({ keyCode }: IProps) => {
    console.log(keyCode)
    // if(keyCode===27){

    // }
    // if (keyCode===37){
    //     movePlayer(-1);
    // }
    // if (keyCode===38){
    //     rotatePlayer()
    // }
    // if (keyCode===39){
    //     movePlayer(1)
    // }
    // if (keyCode===40){
    //     drop()
    // }
    // if (keyCode===32){
    //     dropPlayer()
    // }
  };

  const [nextBlock, setNextBlock] = useState([[0]]);
  const [player, setPlayer] = useState({
    currTetro: [[0]],
    position: { x: 0, y: 0 },
    hasCollided: false,
  });
  const [stage, setStage] = useState(createStage());

  const [isGameOver, setIsGameOver] = useState(false);

  const startGame = () => {
  };
  return (
    <StyledTetris tabIndex={0} onKeyUp={handleButtonPress}>
      <Stage stage={stage} />
      <aside>
        <NextBlock nextBlock={nextBlock} />
        <Display text="score" />
        <Display text="level" />
      </aside>
      <MessageModal title="title" text="text"/>
    </StyledTetris>
  );
};
