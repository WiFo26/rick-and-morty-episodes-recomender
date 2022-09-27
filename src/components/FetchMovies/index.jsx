import { Button } from '../UI/Button'
import { Card } from '../UI/Card'

import { Section } from './styles'

export const FetchMovies = ({ fetchHandler }) => {
  return (
    <Section>
      <Card>
        <Button onClick={fetchHandler}>Fetch Movies</Button>
      </Card>
    </Section>
  )
}
