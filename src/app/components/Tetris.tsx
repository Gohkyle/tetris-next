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
    const moveLeft: Movement={x:-1, y:0, hasCollided: false}
    const moveRight: Movement={x:1, y:0, hasCollided: false}
    const moveDown: Movement={x:0, y:1, hasCollided: false}
    // if(keyCode===27){

    // }
    if (keyCode === 37) {
      if (!checkCollision(player,stage, moveLeft)){
        movePlayer(moveLeft) 
      } 
        
      // } 
    }
    // if (keyCode===38){
    //   rotatePlayer()
    // }
    if (keyCode === 39) {
      if(!checkCollision(player,stage,moveRight)){
        movePlayer(moveRight);
      }

    }
    if (keyCode === 40) {
      if (!checkCollision(player, stage, moveDown)){
        movePlayer(moveDown);
      }
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
