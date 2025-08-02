import { HeaderTitle, HeaderWrapper } from './styles'
import logo from '../../assets/images/logo.svg'

const Header = () => {
  return (
    <HeaderWrapper>
      <img src={logo} alt="Logo do site" />
      <HeaderTitle>
        Viva experiências gastronômicas no conforto da sua casa
      </HeaderTitle>
    </HeaderWrapper>
  )
}

export default Header
