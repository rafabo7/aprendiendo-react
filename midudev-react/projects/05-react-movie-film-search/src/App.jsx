import { useState } from 'react'
import { useRef } from 'react'
import './App.css'
import { Movies } from './Components/Movies'
import { useMovies } from './hooks/useMovies'




function App() {  

  
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const {movies, getMovies} = useMovies( {search} )

  const handleSearch = (e) => {
    const newSearch = e.target.value

    if (newSearch.startsWith(" ")) return

    setSearch(newSearch)

    if (newSearch === "") {
      setError("La búsqueda está vacía")
      return
    }
    
    if (newSearch.length < 3) {
      setError("La búsqueda debe tener al menos 3 caracteres")
      return
    }

    setError(null)

  }

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies(search)

  }

  return (
    <div className='App'>
    <header>
      <h1>Buscador de películas</h1>
      <form onSubmit={handleSubmit} action="#" className="form">
        <input onChange={handleSearch} value={search} placeholder='Star Wars, Avengers, Frank...' />
        <button type="submit">Buscar</button>
      </form>
    </header>
    <main>
      { error && <p style={{color: "red"}} >{error}</p>}

      <Movies movies={movies} />

    </main>
    </div>
  )
}

export default App
