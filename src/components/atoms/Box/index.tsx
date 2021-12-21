import * as S from './styles'
import { BoxProps } from './types'

interface BoxPropsComponent extends BoxProps {
  children: React.ReactNode
  as?: any
}

const Box = ({
  alignItems,
  justifyContent,
  flexDirection,
  gap,
  children,
  ...props
}: BoxPropsComponent & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <S.BoxContainer
      alignItems={alignItems}
      justifyContent={justifyContent}
      flexDirection={flexDirection}
      gap={gap}
      {...props}
    >
      {children}
    </S.BoxContainer>
  )
}

export default Box
