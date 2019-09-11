import {primary, secondary, secondaryDark} from './theme'
import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html, body, #__next {
    height: 100%;
  }

  body { 
    margin: 0;
    background: white;
    color: black;
    font-family: Roboto, Arial;
  }

  a {
    color: ${secondary};

    &:visited {
      color: ${secondaryDark};
    }
  }
`
