import { Item, Title } from './styles'

export const Movie = ({ id, name, episode, airDate }) => {
  return (
    <Item>
      <Title>{name}</Title>
      <h4>{episode}</h4>
      <p>{airDate}</p>
    </Item>
  )
}
