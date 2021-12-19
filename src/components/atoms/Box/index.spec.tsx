import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from '~/layout/theme'
import Box from '.'
import 'jest-styled-components'

describe('Box component', () => {
  it('should render correctly', () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <Box>Hello World</Box>
      </ThemeProvider>,
    )

    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })

  it('should render correctly custom props', () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <Box
          alignItems="center"
          justifyContent="center"
          direction="column"
          gap="10px"
        >
          Hello World
        </Box>
      </ThemeProvider>,
    )

    expect(screen.getByText('Hello World')).toBeInTheDocument()
    expect(screen.getByText('Hello World')).toHaveStyleRule(
      'align-items',
      'center',
    )
    expect(screen.getByText('Hello World')).toHaveStyleRule(
      'justify-content',
      'center',
    )
    expect(screen.getByText('Hello World')).toHaveStyleRule(
      'flex-direction',
      'column',
    )
    expect(screen.getByText('Hello World')).toHaveStyleRule('gap', '10px')
  })
})
