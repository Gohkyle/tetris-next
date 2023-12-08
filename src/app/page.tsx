import styles from './page.module.css'
import { Grid } from './components/Grid'
import { NextBlock } from './components/NextBlock'
import { ScoreBoard } from './components/ScoreBoard'

export default function Home() {
  return (
    <main>
      <Grid/>
      <NextBlock/>
      <ScoreBoard/>
    </main>
  )
}
