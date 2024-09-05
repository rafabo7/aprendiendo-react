import { useState } from 'react'
import './App.css'
import { Movies } from './Components/Movies'
import { useMovies } from './hooks/useMovies'




function App() {  

  const {movies} = useMovies()

  return (
    <div className='App'>
    <header>
      <h1>Buscador de películas</h1>
      <form action="#" className="form">
        <input placeholder='Star Wars, Avengers, Frank...' />
        <button type="submit">Buscar</button>
      </form>
    </header>
    <main>

      <Movies movies={movies} />

    </main>
    </div>
  )
}

export default App
