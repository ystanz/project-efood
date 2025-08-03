import styled from 'styled-components'
import { colors } from '../../styles'

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3.2rem;
  margin: 5.6rem auto 12rem;
`
export const Article = styled.article`
  max-width: 32rem;
  width: 100%;
  padding: 0.8rem;
  color: ${colors.lightPink};
  background-color: ${colors.darkPink};

  figure {
    width: 100%;

    img {
      background-size: cover;
    }
  }

  .contentBody {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.2rem;
    margin: 1.6rem auto;
  }

  .button {
    width: 100%;
    height: 2.4rem;
    background-color: ${colors.lightPink};
    color: ${colors.darkPink};
    cursor: pointer;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 100%;
    align-content: center;
    text-align: center;
    display: block;
  }
`
