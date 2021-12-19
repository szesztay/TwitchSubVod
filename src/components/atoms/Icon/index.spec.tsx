import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from '~/layout/theme'
import Icon from '.'
import { FaTwitch } from 'react-icons/fa'

describe('Header component', () => {
  it('should render correctly', () => {
    const fn = jest.fn()

    render(
      <ThemeProvider theme={darkTheme}>
        <Icon onClick={fn} title="Twitch" icon={<FaTwitch />} />
      </ThemeProvider>,
    )

    const icon = screen.getByRole('button', { name: 'Twitch' })
    expect(icon).toBeInTheDocument()
  })
})
