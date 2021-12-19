import styled from 'styled-components'

export const VideoThumbnailImage = styled.img<{ thumbnailWidth?: string }>`
  display: flex;
  width: ${({ thumbnailWidth }) => thumbnailWidth || '100%'};
  height: auto;
  object-fit: cover;

  border-radius: 8px;
  overflow: hidden;
`
