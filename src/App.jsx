import './App.css'
import { FetchMovies } from './components/FetchMovies'
import { Layout } from './components/Layout'
import { MovieList } from './components/MovieList'

export const App = () => {
  const dummyMovies = [
    {
      id: 1,
      title: 'Some Dummy Movie',
      openingText: 'This is the opening text of the movie',
      releaseDate: '2021-05-18',
    },
    {
      id: 2,
      title: 'Some Dummy Movie 2',
      openingText: 'This is the opening text of the movie',
      releaseDate: '2021-05-19',
    },
  ]

  return (
    <Layout>
      <FetchMovies />
      <MovieList movies={dummyMovies} />
    </Layout>
  )
}
