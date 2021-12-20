import * as S from './styles'

interface IconProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon: JSX.Element
  onClick?: () => void
  title: string
  isButton?: boolean
  as?: any
}

const Icon = ({ icon, onClick, title, isButton, ...props }: IconProps) => {
  return (
    <S.IconButton
      onClick={onClick}
      aria-label={title}
      title={title}
      isButton={isButton}
      {...props}
    >
      {icon}
    </S.IconButton>
  )
}

export default Icon
