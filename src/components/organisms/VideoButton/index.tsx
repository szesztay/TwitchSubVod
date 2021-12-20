import Link from 'next/link'
import { StreamerInformation } from '~/@types/StreamerInformation'
import { VodInformation } from '~/@types/VodInformation'
import VideoThumbnail from '~/components/atoms/VideoThumbnail'
import StreamDescription from '~/components/molecules/StreamDescription'
import * as S from './styles'

interface VideoButtonProps {
  streamerInformation: StreamerInformation
  vodInformation: VodInformation
  noAvatar?: boolean
  isMinimal?: boolean
}

const VideoButton = ({
  streamerInformation,
  vodInformation,
  noAvatar,
  isMinimal,
}: VideoButtonProps) => {
  return (
    <Link href="/video/[vod]" as={`/video/${vodInformation.id}`} passHref>
      <S.VideoButtonContainer isMinimal={isMinimal} tabIndex={0}>
        <VideoThumbnail
          src={vodInformation.thumbnail}
          title={vodInformation.title}
        />

        <StreamDescription
          streamerInformation={streamerInformation}
          vodInformation={vodInformation}
          noAvatar={noAvatar}
          lineLimit={isMinimal ? 2 : 3}
        />
      </S.VideoButtonContainer>
    </Link>
  )
}

export default VideoButton
