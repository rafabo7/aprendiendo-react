import { useCallback, useState } from 'react'
import './App.css'
import { Movies } from './Components/Movies'
import { useMovies } from './hooks/useMovies'
import { debounce } from './services/debounce'




function App() {  

  
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const [sort, setSort] = useState(false)
  const {movies, getMovies, err, loading} = useMovies( {search, sort} )

  const debouncedGetMovies = useCallback(debounce( search => {
    getMovies({ search })
  }, 300), [])


  const handleSearch = (e) => {
    const newSearch = e.target.value

    if (newSearch.startsWith(" ")) return

    setSearch(newSearch)
    debouncedGetMovies(newSearch)

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
    getMovies({search})

  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className='App'>
    <header>
      <h1>Buscador de películas</h1>
      <form onSubmit={handleSubmit} action="#" className="form">
        <input onChange={handleSearch} value={search} placeholder='Star Wars, Avengers, Frank...' />
        <button type="submit">Buscar</button>
        <label htmlFor="sort">
          <input type="checkbox" name="sort" id="sort" onChange={handleSort} defaultValue={sort} />
        </label>
      </form>
    </header>
    <main>
      { loading && <p>Loading...</p> }
      { error && <p style={{color: "red"}} >{error}</p>}

      <Movies movies={movies} />

    </main>
    </div>
  )
}

export default App
