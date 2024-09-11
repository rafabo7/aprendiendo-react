const API_KEY = '521cecd7'

export const searcMovies = async ({search}) => {
    if (!search) return

    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const json = await response.json()

        const movies = json.Search

        return movies?.map( movie => (
            {
              title: movie.Title,
              year: movie.year,
              id: movie.imdbID,
              poster: movie.Poster
            }
          ))


    } catch (e) {
        throw new Error("Error searching movies")
    }

}