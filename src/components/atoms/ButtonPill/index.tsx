import * as S from './styles'

interface IconProps {
  onClick: () => void
  text: string
  title?: string
  icon?: JSX.Element
  iconPosition?: 'left' | 'right'
}

const ButtonPill = ({
  icon,
  onClick,
  title,
  text,
  iconPosition,
}: IconProps) => {
  return (
    <S.ButtonPillContainer
      onClick={onClick}
      aria-label={title || text}
      title={title}
      iconPosition={iconPosition}
    >
      {iconPosition === 'left' && icon}
      {text}
      {iconPosition === 'right' && icon}
    </S.ButtonPillContainer>
  )
}

export default ButtonPill
