const TURNS = {
  X: "X",
  O: "O"
}

const board = Array(9).fill(null)

const Spuare = ({children, updateBoard, index}) => {
  return (
    <div className="square">
        {children}
    </div>

  )
}

export function App() {

  return (

    <main className="board">
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Spuare 
            key={index}
            index={index}
            >{index}
            </Spuare>
          )
        })}
      </section>
      
    </main>
  )
  
}
