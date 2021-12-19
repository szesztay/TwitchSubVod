import styled from 'styled-components'
import { typographyVariants } from './constants'
import { TypographyProps } from './types'

export const TypographyContainer = styled.div<TypographyProps>`
  font-family: inherit;
  font-size: ${({ variant }) => typographyVariants[variant].fontSize};
  font-weight: ${({ variant }) => typographyVariants[variant].fontWeight};
  line-height: ${({ variant }) => typographyVariants[variant].lineHeight};
  color: ${({ color }) => color || 'inherit'};
`
