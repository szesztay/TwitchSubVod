import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from '~/layout/theme'
import Typography from '.'
import { typographyVariants } from './constants'
import 'jest-styled-components'

describe('Typography component', () => {
  it('should render correctly', () => {
    render(
      <ThemeProvider theme={darkTheme}>
        {Object.keys(typographyVariants).map((variant) => (
          <Typography
            key={variant}
            variant={variant as keyof typeof typographyVariants}
          >
            {variant}
          </Typography>
        ))}
      </ThemeProvider>,
    )

    Object.keys(typographyVariants).forEach((variant) => {
      const Typography = screen.getByText(variant)
      expect(Typography).toHaveStyleRule('color', '#FFFFFF')
      expect(Typography).toHaveStyleRule(
        'font-size',
        typographyVariants[variant as keyof typeof typographyVariants].fontSize,
      )
      expect(Typography).toHaveStyleRule(
        'font-weight',
        typographyVariants[variant as keyof typeof typographyVariants]
          .fontWeight,
      )
      expect(Typography).toHaveStyleRule(
        'line-height',
        typographyVariants[variant as keyof typeof typographyVariants]
          .lineHeight,
      )

      expect(Typography).toBeInTheDocument()
    })
  })

  it('should render correctly with color', () => {
    render(
      <ThemeProvider theme={darkTheme}>
        {Object.keys(typographyVariants).map((variant) => (
          <Typography
            key={variant}
            variant={variant as keyof typeof typographyVariants}
            color="#ff6699"
          >
            {variant}
          </Typography>
        ))}
      </ThemeProvider>,
    )

    Object.keys(typographyVariants).forEach((variant) => {
      const Typography = screen.getByText(variant)
      expect(Typography).toHaveStyleRule('color', '#ff6699')
      expect(Typography).toBeInTheDocument()
    })
  })
})
