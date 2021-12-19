import * as S from './styles'

interface VideoThumbnailProps {
  src: string
  title: string
  width?: string
}

const VideoThumbnail = ({ src, title, width }: VideoThumbnailProps) => {
  return <S.VideoThumbnailImage src={src} alt={title} thumbnailWidth={width} />
}

export default VideoThumbnail
