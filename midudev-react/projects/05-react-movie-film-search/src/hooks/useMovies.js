
import { useState, useRef } from 'react'
import { searcMovies } from '../services/searchMovies'


export function useMovies ( { search } ) {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [err, setError] = useState(null)
  const previousSearch = useRef(search)



    const getMovies = async () => {

      if (search === previousSearch.current) return

      try {
        setLoading(true)
        previousSearch.current = search
        const newMovies = await searcMovies({search})
        setMovies(newMovies)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }

    }
  
    return ({movies, getMovies, err, loading})
  }