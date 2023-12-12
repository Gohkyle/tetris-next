"use client"

import { Tetris } from './components/Tetris'

interface iProps {
  key: string
}

export default function Home() {
  const handleButtonPress = ({key}: iProps) => {
    console.log(key)
}
  return (
    <main tabIndex={0} onKeyUp={handleButtonPress}>
      <Tetris/>
    </main>
  )
}
