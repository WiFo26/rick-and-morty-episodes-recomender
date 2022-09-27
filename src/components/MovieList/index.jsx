import { Card } from '../UI/Card'

import { List, Section } from './styles'

export const MovieList = ({ movies }) => {
  return (
    <Section>
      <Card>
        <List>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </List>
      </Card>
    </Section>
  )
}
