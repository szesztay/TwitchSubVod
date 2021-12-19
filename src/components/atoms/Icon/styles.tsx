import styled, { css } from 'styled-components'

export const IconButton = styled.button<{ isButton?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  border: none;
  cursor: pointer;
  padding: 5px;

  transition: all 0.1s ease-in-out;

  ${({ isButton }) =>
    isButton &&
    css`
      border-radius: 50%;

      :hover {
        background: rgb(255, 255, 255, 0.1);
      }

      :focus,
      :focus-within {
        background: rgb(255, 255, 255, 0.1);
        outline: -webkit-focus-ring-color auto 5px;
      }
    `}
`
