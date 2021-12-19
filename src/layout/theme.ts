import { colors } from './colors'
import { breakpoints } from './breakpoints'

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

export { colors, breakpoints }
