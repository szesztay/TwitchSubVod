import * as S from './styles'

interface IconProps {
  icon: JSX.Element
  onClick: () => void
  title: string
  isButton?: boolean
}

const Icon = ({ icon, onClick, title, isButton }: IconProps) => {
  return (
    <S.IconButton
      onClick={onClick}
      aria-label={title}
      title={title}
      isButton={isButton}
    >
      {icon}
    </S.IconButton>
  )
}

export default Icon
