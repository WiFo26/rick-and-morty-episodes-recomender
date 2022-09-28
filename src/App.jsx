import { useCallback, useEffect, useState } from 'react'

import './App.css'
import { FetchMovies } from './components/FetchMovies'
import { Layout } from './components/Layout'
import { MovieForm } from './components/MovieForm'
import { MovieList } from './components/MovieList'

export const App = () => {
  const [movies, setMovies] = useState([])
  const [isLoading, setLoading] = useState(false)
  const fetchMoviesHandler = useCallback(async () => {
    setLoading(true)
    const data = await fetch(
      'https://rick-and-morty-generator-default-rtdb.firebaseio.com/episodes.json',
    ).then((response) => response.json())

    const loadedMovies = []

    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        loadedMovies.push({
          id: key,
          ...data[key],
        })
      }
    }

    const newMovies = loadedMovies.map((movie) => {
      return {
        id: movie.id,
        name: movie.name,
        episode: movie.episode,
        airDate: movie.airDate,
      }
    })

    setMovies(newMovies)
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchMoviesHandler()
  }, [fetchMoviesHandler])

  const addMovieHandler = async (movie) => {
    await fetch('https://rick-and-morty-generator-default-rtdb.firebaseio.com/episodes.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  return (
    <Layout>
      <MovieForm addMovie={addMovieHandler} />
      <FetchMovies fetchHandler={fetchMoviesHandler} />
      <MovieList loading={isLoading} movies={movies} />
    </Layout>
  )
}
