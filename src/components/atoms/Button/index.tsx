import * as S from './styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  text: string
  variant?: 'primary' | 'secondary'
  buttonWidth?: string
}

const Button = ({
  children,
  icon,
  iconPosition,
  text,
  variant,
  buttonWidth,
  ...props
}: ButtonProps) => {
  return (
    <S.ButtonContainer
      variant={variant || 'primary'}
      buttonWidth={buttonWidth}
      {...props}
    >
      {iconPosition === 'left' && icon}
      <S.ButtonText>{text}</S.ButtonText>
      {iconPosition === 'right' && icon}
    </S.ButtonContainer>
  )
}

export default Button
