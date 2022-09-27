import { Movie } from '../Movie'
import { Card } from '../UI/Card'

import { List, Section } from './styles'

export const MovieList = ({ movies, loading }) => {
  return (
    <Section>
      <Card>
        {!loading && (
          <List>
            {movies.map((movie) => (
              <Movie key={movie.id} {...movie} />
            ))}
          </List>
        )}
        {loading && <h3>Loading...</h3>}
      </Card>
    </Section>
  )
}
