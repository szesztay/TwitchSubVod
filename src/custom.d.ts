import 'styled-components'
import { darkTheme } from './layout/theme'

declare module 'styled-components' {
  type DarkTheme = typeof darkTheme

  interface DefaultTheme extends DarkTheme {}
}
