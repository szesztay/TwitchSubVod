import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from '~/layout/theme'
import Header from '.'

describe('Header component', () => {
  it('should render correctly', () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <Header />
      </ThemeProvider>,
    )

    const hamburgerMenu = screen.getByRole('button', { name: 'Open menu' })
    const logo = screen.getByRole('img', { name: 'pogu.live' })
    expect(hamburgerMenu).toBeInTheDocument()
    expect(logo).toBeInTheDocument()
  })
})
