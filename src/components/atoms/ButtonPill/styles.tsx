import styled from 'styled-components'

export const ButtonPillContainer = styled.button<{
  iconPosition?: 'left' | 'right'
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.pink700};
  border: none;
  border-radius: 16px;
  cursor: pointer;
  padding: 5px 16px;

  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 500;

  transition: all 0.1s ease-in-out;

  svg {
    margin-right: ${({ iconPosition }) =>
      iconPosition === 'right' ? '0' : '8px'};
    margin-left: ${({ iconPosition }) =>
      iconPosition === 'left' ? '0' : '8px'};
  }

  :hover {
    background: ${({ theme }) => theme.colors.pink800};
  }

  :focus,
  :focus-within {
    background: ${({ theme }) => theme.colors.pink800};
  }

  :active {
    background: ${({ theme }) => theme.colors.pink900};
  }
`
