import { StreamerInformation } from '~/@types/StreamerInformation'
import { VodInformation } from '~/@types/VodInformation'
import VideoButton from '~/components/organisms/VideoButton'
import * as S from './styles'

interface IVideos {
  streamerInformation: StreamerInformation
  vodInformation: VodInformation
}

interface VideoButtonGroupProps {
  videos: IVideos[]
}

const VideoButtonGroup = ({ videos }: VideoButtonGroupProps) => {
  return (
    <S.VideoButtonGroupContainer>
      {videos.map((video) => (
        <VideoButton
          key={video.vodInformation.id}
          streamerInformation={video.streamerInformation}
          vodInformation={video.vodInformation}
        />
      ))}
    </S.VideoButtonGroupContainer>
  )
}

export default VideoButtonGroup
