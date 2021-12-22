import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Box from '~/components/atoms/Box'
import Button from '~/components/atoms/Button'
import NamedToggle from '~/components/atoms/NamedToggle'
import Typography from '~/components/atoms/Typography'
import StreamerDescription from '~/components/molecules/StreamerDescription'
import VideoButtonGroup from '~/components/templates/VideoButtonGroup'
import * as S from './styles'
import { mockedStreamerInformation, videos } from './_mockedData'

const Videos: NextPage = () => {
  const router = useRouter()

  console.log(router)

  return (
    <S.Container>
      <Box flexDirection="column" gap="16px" alignItems="center">
        <StreamerDescription
          avatarUrl={mockedStreamerInformation.logo}
          name={mockedStreamerInformation.displayName}
          followers={mockedStreamerInformation.followers}
          description={mockedStreamerInformation.description}
        />
        <Button text="Follow" buttonWidth="100%" />
        <div
          style={{
            display: 'flex',
            width: '100%',
            maxWidth: '160px',
            height: '600px',
            background: '#000',
            borderRadius: '8px',
            marginBottom: '8px',
          }}
        />
      </Box>

      <Box flexDirection="column" gap="20px" alignItems="center">
        <div
          style={{
            display: 'flex',
            width: '100%',
            maxWidth: '728px',
            height: '90px',
            background: '#000',
            borderRadius: '8px',
            marginBottom: '8px',
          }}
        />
        <Typography variant="h3">
          All {mockedStreamerInformation.displayName} VODs
        </Typography>
        <NamedToggle
          defaultSelected="subOnly"
          buttons={[
            {
              label: 'Sub only VODs',
              value: 'subOnly',
              url: '/videos/[streamer]',
              as: `/videos/${mockedStreamerInformation.name}`,
            },
            {
              label: 'Deleted VODs',
              value: 'deletedVods',
              url: '/deletedvods/[streamer]',
              as: `/deletedvods/${mockedStreamerInformation.name}`,
            },
          ]}
        />
        <VideoButtonGroup videos={videos} />
        <div
          style={{
            display: 'flex',
            width: '100%',
            maxWidth: '728px',
            height: '90px',
            background: '#000',
            borderRadius: '8px',
            marginBottom: '8px',
          }}
        />
        <VideoButtonGroup videos={videos} />
      </Box>
    </S.Container>
  )
}

export default Videos
