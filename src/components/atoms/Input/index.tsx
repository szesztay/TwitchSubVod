import * as S from './styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

const Input = (props: InputProps) => {
  const { icon, iconPosition, ...rest } = props

  return (
    <S.InputWrapper id={`input-${rest.id}`} data-testid={`input-${rest.id}`}>
      <S.InputLabel htmlFor={props.id} data-testid={`label-${props.id}`}>
        {icon && iconPosition === 'left' && (
          <S.InputIcon
            iconPosition={iconPosition}
            data-testid={`icon-${rest.id}`}
          >
            {icon}
          </S.InputIcon>
        )}
        <S.InputText {...rest} tabIndex={0} />
        {icon && iconPosition === 'right' && (
          <S.InputIcon
            iconPosition={iconPosition}
            data-testid={`icon-${rest.id}`}
          >
            {icon}
          </S.InputIcon>
        )}
      </S.InputLabel>
    </S.InputWrapper>
  )
}

export default Input
