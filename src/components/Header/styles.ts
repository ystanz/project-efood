import styled from 'styled-components'
import backgroundHeader from '../../assets/images/background-art.svg'
import { colors } from '../../styles'

export const HeaderWrapper = styled.header`
  background-image: url(${backgroundHeader});
  background-size: contain;
  width: 100%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  img {
    width: 12.5rem;
    height: 5.75rem;
    margin-top: 4rem;
  }
`

export const HeaderTitle = styled.h1`
  font-size: 3.6rem;
  font-weight: 900;
  text-align: center;
  color: ${colors.darkPink};
  width: 54rem;
  margin-bottom: 4rem;
`
