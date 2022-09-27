import { Movie } from '../Movie'
import { Card } from '../UI/Card'

import { List, Section } from './styles'

export const MovieList = ({ movies }) => {
  return (
    <Section>
      <Card>
        <List>
          {movies.map((movie) => (
            <Movie key={movie.id} {...movie} />
          ))}
        </List>
      </Card>
    </Section>
  )
}
