import type { NextPage } from 'next'
import styled from 'styled-components'
import { StreamerInformation } from '~/@types/StreamerInformation'
import { VodInformation } from '~/@types/VodInformation'
import VideoThumbnail from '~/components/atoms/VideoThumbnail'
import VideoButton from '~/components/molecules/VideoButton'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.grey900};
  width: 100%;
  height: 100vh;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    background: ${({ theme }) => theme.colors.pink900};
  }
`

const mockedStreamerInformation: StreamerInformation = {
  displayName: 'xQcOw',
  name: 'xqcow',
  logo: 'https://static-cdn.jtvnw.net/jtv_user_pictures/xqcow-profile_image-9298dca608632101-150x150.jpeg',
}

const mockedVodInformation: VodInformation = {
  title:
    'BIG LONG CLASSIC STREAM (MASTERCHEF FINALE OMG) AND FIVE NIGHTS AT FREDDYS SECURITY BREACH AT MIDNIGHT!!!!&*^&*^$&*^*&^@*&$^#@*&($^@#&*^r*&@',
  thumbnail:
    'https://static-cdn.jtvnw.net/cf_vods/d1m7jfoe9zdc1j/efab2dea4b65d725df0e_xqcow_44818023629_1639713975//thumb/thumb0-640x360.jpg',
  duration: 434332,
  viewCount: 30434123,
  date: '2020-12-19T00:00:00+00:00',
}

const Home: NextPage = () => {
  return (
    <Container>
      <VideoButton
        streamerInformation={mockedStreamerInformation}
        vodInformation={mockedVodInformation}
      />
      <VideoButton
        streamerInformation={mockedStreamerInformation}
        vodInformation={mockedVodInformation}
      />
      <VideoButton
        streamerInformation={mockedStreamerInformation}
        vodInformation={mockedVodInformation}
      />
    </Container>
  )
}

export default Home
