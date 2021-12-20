import Link from 'next/link'
import { StreamerInformation } from '~/@types/StreamerInformation'
import { VodInformation } from '~/@types/VodInformation'
import VideoThumbnail from '~/components/atoms/VideoThumbnail'
import StreamDescription from '~/components/molecules/StreamDescription'
import * as S from './styles'

interface VideoButtonProps {
  streamerInformation: StreamerInformation
  vodInformation: VodInformation
}

const VideoButton = ({
  streamerInformation,
  vodInformation,
}: VideoButtonProps) => {
  return (
    <Link
      href="/videos/[streamerName]?vod=[vod]"
      as={`/videos/${streamerInformation.name}?vod=${vodInformation.id}`}
      passHref
    >
      <S.VideoButtonContainer>
        <VideoThumbnail
          src={vodInformation.thumbnail}
          title={vodInformation.title}
        />

        <StreamDescription
          streamerInformation={streamerInformation}
          vodInformation={vodInformation}
        />
      </S.VideoButtonContainer>
    </Link>
  )
}

export default VideoButton
