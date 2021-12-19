import * as S from './styles'
import { TypographyProps } from './types'

interface TypographyPropsComponent extends TypographyProps {
  children: React.ReactNode
}

const Typography = ({
  variant,
  children,
  ...props
}: TypographyPropsComponent & React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <S.TypographyContainer variant={variant} {...props}>
      {children}
    </S.TypographyContainer>
  )
}

export default Typography
