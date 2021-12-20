import styled from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  max-width: 480px;
`

export const InputLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grey800};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.grey800};
  padding: 10px;

  svg {
    width: 24px;
    height: auto;
    fill: ${({ theme }) => theme.colors.grey400};
  }

  :focus,
  :focus-within {
    border: 1px solid ${({ theme }) => theme.colors.pink600};

    svg {
      fill: ${({ theme }) => theme.colors.pink700};
    }
  }
`

export const InputIcon = styled.div<{ iconPosition: 'left' | 'right' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${({ iconPosition }) =>
    iconPosition === 'right' ? '8px' : '0'};
  margin-right: ${({ iconPosition }) =>
    iconPosition === 'left' ? '8px' : '0'};
`

export const InputText = styled.input`
  display: flex;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  line-height: 1.5;
  padding: 0 8px;
`
