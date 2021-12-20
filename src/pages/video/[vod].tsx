import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Box from '~/components/atoms/Box'
import VideoButtonGroup from '~/components/templates/VideoButtonGroup'
import * as S from './styles'
import { videos } from './_mockedData'

const Home: NextPage = () => {
  const router = useRouter()

  console.log(router)

  return (
    <S.Container>
      <Box direction="column">
        <VideoButtonGroup videos={videos} minVideoWidth="200px" />
      </Box>
      <Box direction="column">
        <VideoButtonGroup
          videos={videos}
          minVideoWidth="300px"
          isMinimal={true}
        />
      </Box>
    </S.Container>
  )
}

export default Home
