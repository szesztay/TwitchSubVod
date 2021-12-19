import styled, { css } from 'styled-components'
import { typographyVariants } from './constants'
import { TypographyProps } from './types'

export const TypographyContainer = styled.div<TypographyProps>`
  font-family: inherit;
  font-size: ${({ variant }) => typographyVariants[variant].fontSize};
  font-weight: ${({ variant }) => typographyVariants[variant].fontWeight};
  line-height: ${({ variant }) => typographyVariants[variant].lineHeight};
  color: ${({ color }) => color || 'inherit'};
  max-width: ${({ maxWidth }) => maxWidth || '100%'};
  cursor: ${({ cursor }) => cursor || 'inherit'};

  ${({ lineLimit, variant }) =>
    lineLimit &&
    variant &&
    css`
      overflow: hidden;
      word-break: break-word;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;

      max-height: calc(
        ${typographyVariants[variant].lineHeight} * ${lineLimit}
      );
    `}
`
