import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from '~/layout/theme'
import ButtonPill from '.'
import { RiFeedbackFill } from 'react-icons/ri'

describe('ButtonPill component', () => {
  it('should render correctly', () => {
    const fn = jest.fn()

    render(
      <ThemeProvider theme={darkTheme}>
        <ButtonPill text="Feedback" onClick={fn} />
      </ThemeProvider>,
    )

    const icon = screen.getByRole('button', { name: 'Feedback' })
    expect(icon).toBeInTheDocument()
  })

  it('should render correctly with icon on left', () => {
    const fn = jest.fn()

    render(
      <ThemeProvider theme={darkTheme}>
        <ButtonPill
          icon={<RiFeedbackFill />}
          iconPosition="left"
          text="Feedback"
          title="Send feedback"
          onClick={fn}
        />
      </ThemeProvider>,
    )

    const icon = screen.getByRole('button', { name: 'Send feedback' })
    expect(icon).toBeInTheDocument()
  })

  it('should render correctly with icon on right', () => {
    const fn = jest.fn()

    render(
      <ThemeProvider theme={darkTheme}>
        <ButtonPill
          icon={<RiFeedbackFill />}
          iconPosition="right"
          text="Feedback"
          title="Send feedback"
          onClick={fn}
        />
      </ThemeProvider>,
    )

    const icon = screen.getByRole('button', { name: 'Send feedback' })
    expect(icon).toBeInTheDocument()
  })
})
