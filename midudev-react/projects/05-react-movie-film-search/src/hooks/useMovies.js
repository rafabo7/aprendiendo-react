
import { useState } from 'react'
import { searcMovies } from '../services/searchMovies'


export function useMovies ( { search } ) {

  const [movies, setMovies] = useState([])



    const getMovies = async () => {
      const newMovies = await searcMovies({search})
      setMovies(newMovies)
    }
  
    return ({movies, getMovies})
  }