import { useState } from 'react'
import './App.css'
import responseMovies from './mocks/results-api.json'
import noResponseMovies from './mocks/no-results-api.json'


function App() {

  const movies = responseMovies.Search
  const hasMovies = movies?.length > 0

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

      {
        hasMovies
          ?   (
            <ul>
              {
              movies.map( movie => (
                <li key={movie.imdbID}>
                  <h3>{movie.Title}</h3>
                  <p>{movie.Year}</p>
                  <img src={movie.Poster} alt={movie.Title} />
                </li>
              ))
              }
            </ul>
          ) : (
            <p>Los resultados se mostrarán aquí</p>
          )
      }

    </main>
    </div>
  )
}

export default App
