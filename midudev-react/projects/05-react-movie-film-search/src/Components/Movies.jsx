

export function MoviesList ( { movies } ) {

    return (
        <ul className="movies-grid">
              {
              movies.map( movie => (
                <li key={movie.id}>
                  <h3>{movie.title}</h3>
                  <p>{movie.year}</p>
                  <img src={movie.poster} alt={movie.title} />
                </li>
              ))
              }
            </ul>
    )
}

export function NoMovies () {

    return (
        <p>
            Movies not found
        </p>
    )
}

export function Movies ( { movies }) {

    const hasMovies = movies?.length > 0

    return(
        
            hasMovies
                ? <MoviesList movies={movies} />
                : <NoMovies />
        
    )
}