import { colors } from '../../styles'
import styled from 'styled-components'

export const FooterWrap = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 30rem;
  background-color: ${colors.lightPink};

  .socialLinks {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3.2rem;

    li {
      list-style: none;
      margin-right: 0.8rem;
      cursor: pointer;
    }
  }

  p {
    max-width: 48rem;
    width: 100%;
    text-align: center;
    font-size: 1rem;
    color: ${colors.darkPink};
    font-weight: 400;
    line-height: 100%;
  }
`
