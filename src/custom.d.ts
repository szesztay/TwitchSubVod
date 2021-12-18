import 'styled-components'
import { darkTheme } from './layout/Basic'

declare module 'styled-components' {
  type DarkTheme = typeof darkTheme

  interface DefaultTheme extends DarkTheme {}
}
