'use client'
import { Game } from './Game'
import { SudokuProvider } from '@/context/SudokuContext'

export default function Home (): React.ReactElement {
  return (
    <SudokuProvider>
      <Game />
   </SudokuProvider>
  )
}
