import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    & + span {
      margin-top: 0.5rem;
    }

    svg {
      margin: 0 0.5rem 0 0.75rem;
    }

    sup {
      font-size: 0.7rem;
      margin-top: -0.25rem;
    }
  }
`;

export const Link = styled.a`
  color: var(--text);
  transition: color 0.1s ease;

  :hover {
    color: var(--purple);
  }
`;
