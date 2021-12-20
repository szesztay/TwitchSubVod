import styled, { css } from 'styled-components'

export const VideoButtonContainer = styled.a<{ isMinimal?: boolean }>`
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

  ${({ isMinimal }) =>
    isMinimal &&
    css`
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: flex-start;

      span {
        font-size: 0.8rem;
        line-height: 1em;
      }
    `}
`
