import { createGlobalStyle } from 'styled-components'

export const colors = {
  darkPink: '#E66767',
  lightPink: '#FFEBD9',
  backgroundColor: '#FFF8F2',
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', 'sans-serif';
  }

  body {
    background-color: ${colors.backgroundColor};
    font-size: 1.4rem;
  }

  html {
    font-size: 62.5%;
  }

.centralizer {
    max-width: 102.4rem;
    width: 100%;
    margin: 8rem auto 12rem;

    /* @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    } */
  }
`

export default GlobalCss
