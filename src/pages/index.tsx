import type { NextPage } from 'next'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.background};
  width: 100%;
  height: 100vh;
`

const Home: NextPage = () => {
  return <Container>hello</Container>
}

export default Home
