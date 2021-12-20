import { darkTheme } from '~/layout/theme'
import * as S from './styles'
import { TypographyProps } from './types'

interface TypographyPropsComponent extends TypographyProps {
  children: React.ReactNode
  as?: any
}

const Typography = ({
  variant,
  color,
  maxWidth,
  lineLimit,
  children,
  as,
  ...props
}: TypographyPropsComponent & React.HTMLAttributes<HTMLHeadingElement>) => {
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
}

export default Typography
