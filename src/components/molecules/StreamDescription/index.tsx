import { StreamerInformation } from '~/@types/StreamerInformation'
import { VodInformation } from '~/@types/VodInformation'
import Avatar from '~/components/atoms/Avatar'
import Box from '~/components/atoms/Box'
import Typography from '~/components/atoms/Typography'

// todo: convert mockedVodInformation.date to string date, either something like: 4 days ago, or dec. 15, 2021, not sure yet
// todo: convert mockedVodInformation.viewCount to string like 111.3k views

interface StreamDescriptionProps {
  streamerInformation: StreamerInformation
  vodInformation: VodInformation
  avatarWidth?: string
  noAvatar?: boolean
  lineLimit?: number
}

const StreamDescription = ({
  streamerInformation,
  vodInformation,
  avatarWidth,
  noAvatar,
  lineLimit,
}: StreamDescriptionProps) => {
  return (
    <Box alignItems="flex-start" justifyContent="space-between" gap="9px">
      {!noAvatar && (
        <Box>
          <Avatar
            title={streamerInformation.displayName}
            src={streamerInformation.logo}
            width={avatarWidth || '32px'}
          />
        </Box>
      )}

      <Box direction="column" gap={'2px'}>
        <Typography
          variant="h6"
          lineLimit={lineLimit || 3}
          title={vodInformation.title}
          className="stream-description-title"
        >
          {vodInformation.title}
        </Typography>
        <Typography variant="body2" className="stream-description-name">
          {streamerInformation.displayName}
        </Typography>
        <Box>
          <Typography variant="body2" className="stream-description-views">
            {vodInformation.viewCount} views
          </Typography>
          <Typography variant="body2" className="stream-description-date">
            {vodInformation.date}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default StreamDescription
