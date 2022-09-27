import { Item, Title } from './styles'

export const Movie = ({ id, title, openingText }) => {
  return (
    <Item>
      <Title>{title}</Title>
      <p>{openingText}</p>
    </Item>
  )
}
