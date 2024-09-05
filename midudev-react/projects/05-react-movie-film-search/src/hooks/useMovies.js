import responseMovies from '../mocks/results-api.json'
import noResponseMovies from '../mocks/no-results-api.json'


export function useMovies () {

    const movies = responseMovies.Search
  
  
    const mappedMovies = movies?.map( movie => (
      {
        title: movie.Title,
        year: movie.year,
        id: movie.imdbID,
        poster: movie.Poster
      }
    ))
  
    return ({movies: mappedMovies})
  }