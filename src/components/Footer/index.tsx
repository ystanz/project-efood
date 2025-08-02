import { FooterWrap } from './styles'

import logo from '../../assets/images/logo.svg'
import instagramIcon from '../../assets/images/instagram-icon.svg'
import facebookIcon from '../../assets/images/facebook-icon.svg'
import twitterIcon from '../../assets/images/twitter-icon.svg'

const Footer = () => {
  return (
    <FooterWrap>
      <div>
        <figure>
          <img src={logo} alt="Logo do restaurante" />
        </figure>
        <ul className="socialLinks">
          <li>
            <a href="#">
              <img src={instagramIcon} alt="Ícone do Instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={facebookIcon} alt="Ícone do Facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={twitterIcon} alt="Ícone do Twitter" />
            </a>
          </li>
        </ul>
      </div>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </p>
    </FooterWrap>
  )
}

export default Footer
