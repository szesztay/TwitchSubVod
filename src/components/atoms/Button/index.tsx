import * as S from './styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  text: string
  variant?: 'primary' | 'secondary'
}

const Button = ({
  children,
  icon,
  iconPosition,
  text,
  variant,
  ...props
}: ButtonProps) => {
  return (
    <S.ButtonContainer variant={variant || 'primary'} {...props}>
      {iconPosition === 'left' && icon}
      <S.ButtonText>{text}</S.ButtonText>
      {iconPosition === 'right' && icon}
    </S.ButtonContainer>
  )
}

export default Button
