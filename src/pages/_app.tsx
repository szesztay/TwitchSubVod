import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'
import BasicLayout, { darkTheme, lightTheme } from '../layout/Basic'

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('dark')
  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <BasicLayout>
        <button onClick={toggleTheme}>Switch Theme</button>
        <Component {...pageProps} />
      </BasicLayout>
    </ThemeProvider>
  )
}

export default MyApp
