import styled from 'styled-components'
import { BoxProps } from './types'

export const BoxContainer = styled.div<BoxProps>`
  display: flex;
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-direction: ${({ flexDirection }) => flexDirection};
  gap: ${({ gap }) => gap};
  max-width: 100%;
`
