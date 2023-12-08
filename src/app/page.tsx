import styles from './page.module.css'
import { Tetris } from './components/Tetris'
import { Input } from './components/Input'

export default function Home() {
  return (
    <main>
      <Tetris/>
      <Input/>
    </main>
  )
}
