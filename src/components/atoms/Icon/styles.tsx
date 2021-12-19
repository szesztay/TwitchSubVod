import styled from 'styled-components'

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  border: none;
  cursor: pointer;

  :focus,
  :focus-within {
    outline: -webkit-focus-ring-color auto 5px;
  }
`
