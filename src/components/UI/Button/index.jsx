import { ButtonStyled } from './styles'

export const Button = ({ children, onClick }) => {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
}
