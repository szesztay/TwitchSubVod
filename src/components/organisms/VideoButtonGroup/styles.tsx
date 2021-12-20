import styled from 'styled-components'

export const VideoButtonGroupContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-bottom: 16px;
  width: 100%;

  animation: all 1s ease-in-out;

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
`
