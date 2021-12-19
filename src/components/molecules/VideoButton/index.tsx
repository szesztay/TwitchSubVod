import { StreamerInformation } from '~/@types/StreamerInformation'
import { VodInformation } from '~/@types/VodInformation'
import Avatar from '~/components/atoms/Avatar'
import Box from '~/components/atoms/Box'
import Typography from '~/components/atoms/Typography'
import VideoThumbnail from '~/components/atoms/VideoThumbnail'
import * as S from './styles'

// todo: convert mockedVodInformation.date to string date
// todo: convert mockedVodInformation.viewCount to string like 111.3k views

interface VideoButtonProps {
  streamerInformation: StreamerInformation
  vodInformation: VodInformation
}

const VideoButton = ({
  streamerInformation,
  vodInformation,
}: VideoButtonProps) => {
  return (
    <S.VideoButtonContainer>
      <VideoThumbnail
        src={vodInformation.thumbnail}
        title={vodInformation.title}
      />

      <Box alignItems="flex-start" justifyContent="space-between" gap="9px">
        <Box>
          <Avatar
            title={streamerInformation.displayName}
            src={streamerInformation.logo}
            width="32px"
          />
        </Box>

        <Box direction="column" gap={'2px'}>
          <Typography variant="h6" lineLimit={3} title={vodInformation.title}>
            {vodInformation.title}
          </Typography>
          <Typography variant="body2">
            {streamerInformation.displayName}
          </Typography>
          <Box>
            <Typography variant="body2">
              {vodInformation.viewCount} views
            </Typography>
            <Typography variant="body2">{vodInformation.date}</Typography>
          </Box>
        </Box>
      </Box>
    </S.VideoButtonContainer>
  )
}

export default VideoButton
