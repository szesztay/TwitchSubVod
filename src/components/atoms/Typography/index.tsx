import { forwardRef } from 'react'
import { darkTheme } from '~/layout/theme'
import * as S from './styles'
import { TypographyProps } from './types'

interface TypographyPropsComponent extends TypographyProps {
  children: React.ReactNode | string
  as?: any
}

const Typography = forwardRef<
  HTMLHeadingElement,
  TypographyPropsComponent & React.HTMLAttributes<HTMLHeadingElement>
>(({ variant, color, maxWidth, lineLimit, children, as, ...props }, ref) => {
  return (
    <S.TypographyContainer
      variant={variant}
      color={color || darkTheme.colors.text}
      maxWidth={maxWidth}
      lineLimit={lineLimit}
      as={as || 'span'}
      {...props}
    >
      {children}
    </S.TypographyContainer>
  )
})

export default Typography
