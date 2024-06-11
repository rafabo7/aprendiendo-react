import { useState } from 'react'

import './App.css'
import { Square } from './Components/Square'
import { TURNS, WINNER_COMB } from './constants'
import { WinnerModal } from './Components/WinnerModal'
import { Board } from './Components/Board'







function App () {
  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)

  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMB) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ){
        return boardToCheck[a]
      }
    }
    return null
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
  }

  const updateBoard = (index) => {

    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    const newWinner = checkWinner(newBoard)
    
    if (newWinner) {
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className="board">
      
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}> Reset Game </button>
      <section className="game">
        <Board board={board} updateBoard={updateBoard} />
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X} >
          {TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O} 
        >{TURNS.O}</Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />

    </main>
  )
}

export default App