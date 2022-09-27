import { Header } from '../UI/Header'

import { MainStyled } from './styles'

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <MainStyled>{children}</MainStyled>
    </>
  )
}
