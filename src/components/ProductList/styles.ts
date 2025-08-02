import { colors } from '../../styles'
import styled from 'styled-components'

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  row-gap: 8rem;
  column-gap: 4.8rem;
`
export const Article = styled.article`
  max-width: 47.2rem;
  width: 100%;
  max-height: 39.8rem;
  height: 100%;
  color: ${colors.darkPink};
  position: relative;

  figure {
    max-width: 47.2rem;
    width: 100%;

    img {
      background-size: cover;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 8px 8px;
    border: 1px solid ${colors.darkPink};
  }

  .contentHeader {
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    font-size: 1.8rem;

    .rating {
      display: flex;
      justify-content: space-between;

      p {
        margin-right: 8px;
      }

      img {
        max-width: 2.1rem;
        width: 100%;
        height: 2.1rem;
      }
    }
  }

  .contentBody {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.2rem;
    margin: 1.6rem auto;
  }

  .button {
    width: 8.2rem;
    height: 2.4rem;
    background-color: ${colors.darkPink};
    cursor: pointer;
    color: ${colors.backgroundColor};
    font-size: 1.4rem;
    font-weight: 700;
    align-content: center;
    text-align: center;
  }
`
