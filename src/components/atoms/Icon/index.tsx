import * as S from './styles'

interface IconProps {
  icon: JSX.Element
  onClick: () => void
  title: string
}

const Icon = ({ icon, onClick, title }: IconProps) => {
  return (
    <S.IconButton onClick={onClick} aria-label={title} title={title}>
      {icon}
    </S.IconButton>
  )
}

export default Icon
