"use client";

import { StyledTetris } from "./styles/StyledTetris";

import { Stage } from "./Stage";
import { NextBlock } from "./NextBlock";
import { MessageModal } from "./MessageModal";
import { Display } from "./Display";

import { useStage } from "../hooks/useStage";
import { usePlayer } from "../hooks/usePlayer";

import { useEffect, useState } from "react";

import { Movement, Shape } from "../types";
import { checkCollision, createStage } from "../utils/gameHelper";

interface IProps {
  keyCode: number;
}

export const Tetris = () => {
  const [player, movePlayer, resetPlayer] = usePlayer();
  const [stage, setStage] = useStage(player);
  const [nextBlock, setNextBlock] = useState<Shape[][]>([[0]]);

  // const [isGameOver, setIsGameOver] = useState(false);

  const handleButtonPress = ({ keyCode }: IProps) => {
    // if(keyCode===27){

    // }
    if (keyCode === 37) {
      const moveLeft: Movement = { x: -1, y: 0, hasCollided: false }
      const collisionStatus = checkCollision(player, stage, {x:moveLeft.x, y:0})
      console.log(collisionStatus)
        movePlayer(moveLeft);
      // } 
    }
    // if (keyCode===38){
    //   rotatePlayer()
    // }
    if (keyCode === 39) {
      const moveRight = { x: 1, y: 0, hasCollided: false }
      
      const collisionStatus = checkCollision(player, stage, {x:moveRight.x, y:0})
      console.log(collisionStatus)
        movePlayer(moveRight);

    }
    if (keyCode === 40) {
      const moveDown = { x: 0, y: 1, hasCollided: false }
      const collisionStatus = checkCollision(player, stage, {x:0, y:moveDown.y})
      console.log(collisionStatus)
        movePlayer(moveDown);
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
    console.log(player.position)
    console.log(stage)

  }, [player,stage])

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
