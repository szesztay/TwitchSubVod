import { createGlobalStyle } from 'styled-components'
import { colors, breakpoints } from './theme'

const defaultTheme = {
  colors,
  breakpoints,
}

export const lightTheme = {
  ...defaultTheme,
}

export const darkTheme = {
  ...defaultTheme,
}

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
    background-color: ${({ theme }) => theme.colors.grey900};
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`

const BasicLayout = ({ children }: { children: any }) => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}

export default BasicLayout
