import styled from 'styled-components'
import bannerImage from '../../assets/images/banner-profile.png'
import backgroundArt from '../../assets/images/background-art.svg'
import { colors } from '../../styles'

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 16.2rem;
  width: 100%;
  background-image: url(${backgroundArt});
  background-size: contain;

  p {
    font-size: 1.8rem;
    font-weight: 900;
    color: ${colors.darkPink};
  }
`

export const CountCart = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  span {
    margin-right: 0.8rem;
  }
`

export const Hero = styled.figure`
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${bannerImage});
  width: 100%;
  max-width: 136.6rem;
  height: 28rem;
  padding: 2.5rem 17rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const TitleSection = styled.h1`
  font-size: 3.2rem;
  font-weight: 100;
  line-height: 100%;
  color: ${colors.backgroundColor};
`

export const TitleProfile = styled.h1`
  font-size: 3.2rem;
  font-weight: 900;
  line-height: 100%;
  color: ${colors.backgroundColor};
`
