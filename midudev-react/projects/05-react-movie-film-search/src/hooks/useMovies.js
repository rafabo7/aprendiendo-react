
import { useState, useRef, useMemo, useCallback } from 'react'
import { searcMovies } from '../services/searchMovies'


export function useMovies ( { search, sort } ) {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [err, setError] = useState(null)
  const previousSearch = useRef(search)



    const getMovies = useCallback( async ({ search }) => {
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
      }, [])


  const sortedMovies = useMemo( () => {
    return sort
        ? [...movies].sort((a,b) => a.title.localeCompare(b.title))
        : movies

  }, [sort, movies])

  return ({movies: sortedMovies, getMovies, err, loading})
  }