import * as S from './styles'

interface AvatarProps {
  src: string
  title: string
  width?: string
}

const Avatar = ({ src, title, width }: AvatarProps) => {
  return (
    <S.AvatarImage src={src} alt={title} title={title} avatarWidth={width} />
  )
}

export default Avatar
