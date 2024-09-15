
import { useState } from 'react'
import { searcMovies } from '../services/searchMovies'


export function useMovies ( { search } ) {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [err, setError] = useState(null)



    const getMovies = async () => {

      try {
        setLoading(true)
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