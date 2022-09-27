import './App.css'
import { FetchMovies } from './components/FetchMovies'
import { Layout } from './components/Layout'

export const App = () => {
  return (
    <Layout>
      <FetchMovies />
    </Layout>
  )
}
