import { useState } from 'react'
import './App.css'
import { Movies } from './Components/Movies'
import responseMovies from './mocks/results-api.json'
import noResponseMovies from './mocks/no-results-api.json'


function App() {

  const movies = responseMovies.Search

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
