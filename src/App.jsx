import { useState } from 'react'

import './App.css'
import { FetchMovies } from './components/FetchMovies'
import { Layout } from './components/Layout'
import { MovieList } from './components/MovieList'

export const App = () => {
  const [movies, setMovies] = useState([])
  const fetchMoviesHandler = async () => {
    const { results } = await fetch('https://rickandmortyapi.com/api/episode').then((response) =>
      response.json(),
    )
    const newMovies = results.map((movie) => {
      return {
        id: movie.id,
        name: movie.name,
        episode: movie.episode,
        airDate: movie.air_date,
      }
    })

    setMovies(newMovies)
  }

  return (
    <Layout>
      <FetchMovies fetchHandler={fetchMoviesHandler} />
      <MovieList movies={movies} />
    </Layout>
  )
}
