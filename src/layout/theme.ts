import { colors } from './colors'
import { breakpoints } from './breakpoints'

const defaultTheme = {
  colors,
  breakpoints,
}

export const lightTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    text: '#000000',
  },
}

export const darkTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    text: '#FFFFFF',
  },
}

export { colors, breakpoints }
