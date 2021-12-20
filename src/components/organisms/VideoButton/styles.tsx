import styled from 'styled-components'

export const VideoButtonContainer = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  cursor: pointer;

  text-decoration: none;
  color: inherit;

  &:hover {
    span {
      filter: brightness(0.9);
    }

    img {
      filter: brightness(1.2);
    }
  }
`
