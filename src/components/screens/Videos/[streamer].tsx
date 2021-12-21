import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Box from '~/components/atoms/Box'
import Button from '~/components/atoms/Button'
import Typography from '~/components/atoms/Typography'
import StreamDescription from '~/components/molecules/StreamDescription'
import VideoButtonGroup from '~/components/templates/VideoButtonGroup'
import * as S from './styles'
import {
  mockedStreamerInformation,
  mockedVodInformation,
  videos,
} from './_mockedData'

const Videos: NextPage = () => {
  const router = useRouter()

  console.log(router)

  return (
    <S.Container>
      <Box direction="column" gap="16px">
        streamer description box
      </Box>

      <Box direction="column" gap="20px" alignItems="center">
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
        Sub only VODs | Deleted VODs
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
