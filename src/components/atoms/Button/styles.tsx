import styled from 'styled-components'

export const ButtonContainer = styled.button<{
  variant: 'primary' | 'secondary'
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: fit-content;
  height: fit-content;
  padding: 0.875rem 2.215rem;
  border-radius: 0.375rem;
  font-size: 1.125rem;
  background-color: ${({ variant, theme }) =>
    variant === 'primary' ? theme.colors.pink700 : theme.colors.blue600};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  cursor: pointer;

  transition: all 0.1s ease-in-out;

  :hover {
    filter: brightness(1.2);
  }

  :active {
    filter: brightness(0.9);
  }
`

export const ButtonText = styled.span``
