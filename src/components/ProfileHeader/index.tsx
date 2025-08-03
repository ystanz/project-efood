import logo from '../../assets/images/logo.svg'
import { CountCart, Header, Hero, TitleProfile, TitleSection } from './styles'

const ProfileHeader = () => {
  return (
    <>
      <Header>
        <p>Restaurantes</p>
        <img src={logo} alt="" />
        <CountCart>
          <span>
            <p>0</p>
          </span>
          <p>produto(s) no carrinho</p>
        </CountCart>
      </Header>
      <Hero>
        <TitleSection>
          <p>Italiana</p>
        </TitleSection>
        <TitleProfile>
          <p>La Dolce Vita Trattoria</p>
        </TitleProfile>
      </Hero>
    </>
  )
}

export default ProfileHeader
