import { Square } from "./Square";

export function Board ({board, updateBoard}) {
    

    return (
        board.map((item, index) => {
            return (
              <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
              >
                {item}
              </Square>
            )}
        )
    ) 
        

}
