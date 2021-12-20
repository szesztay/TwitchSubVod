import { act, render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from '~/layout/theme'
import Button from '.'
import userEvent from '@testing-library/user-event'
import { FiActivity } from 'react-icons/fi'
import 'jest-styled-components'

describe('Button component', () => {
  it('should render correctly', () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <Button text="test" />
      </ThemeProvider>,
    )

    const button = screen.getByRole('button', { name: 'test' })

    expect(button).toBeInTheDocument()
    expect(button).toHaveStyleRule('width', 'fit-content')
    expect(button).toHaveStyleRule('height', 'fit-content')
    expect(button).toHaveStyleRule('border-radius', '0.375rem')
    expect(button).toHaveStyleRule('font-size', '1.125rem')
    expect(button).toHaveStyleRule('background-color', darkTheme.colors.pink700)
  })

  it('should render correctly with secondary variant', () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <Button text="test" variant="secondary" />
      </ThemeProvider>,
    )

    const button = screen.getByRole('button', { name: 'test' })

    expect(button).toBeInTheDocument()
    expect(button).toHaveStyleRule('background-color', darkTheme.colors.blue600)
  })

  it('should render correctly with icon on the left', () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <Button
          text="test"
          icon={<FiActivity aria-label="Activity" />}
          iconPosition="left"
          aria-label="test"
        />
      </ThemeProvider>,
    )

    const button = screen.getByRole('button', { name: 'test' })
    const icon = screen.getByLabelText('Activity')

    expect(button).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
    expect(button).toHaveStyleRule('gap', '0.5rem')
  })

  it('should trigger onClick', () => {
    const onClick = jest.fn()
    render(
      <ThemeProvider theme={darkTheme}>
        <Button text="test" onClick={onClick} />
      </ThemeProvider>,
    )

    const button = screen.getByRole('button', { name: 'test' })

    act(() => {
      userEvent.click(button)
    })

    expect(onClick).toHaveBeenCalledTimes(1)
    expect(button).toBeInTheDocument()
  })
})
