import * as S from './styles'
import { TypographyProps } from './types'

interface TypographyPropsComponent extends TypographyProps {
  children: React.ReactNode
}

const Typography = ({
  variant,
  color,
  maxWidth,
  lineLimit,
  children,
  ...props
}: TypographyPropsComponent & React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <S.TypographyContainer
      variant={variant}
      color={color || '#ffffff'}
      maxWidth={maxWidth}
      lineLimit={lineLimit}
      {...props}
    >
      {children}
    </S.TypographyContainer>
  )
}

export default Typography
