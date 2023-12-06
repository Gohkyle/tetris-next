import styles from './page.module.css'
import { Grid } from './components/Grid'
import { NextBlock } from './components/NextBlock'

export default function Home() {
  return (
    <main>
      <Grid/>
      <NextBlock/>
    </main>
  )
}
