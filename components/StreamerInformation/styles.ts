import styled from 'styled-components';

export const StreamerInformation = styled.div`
  * {
    margin: 0;
  }

  display: flex;
  margin-top: 3rem;
  max-width: 320px;
  color: var(--text);
  cursor: pointer;
  transition: all 0.2s ease;

  :hover {
    color: var(--purple);

    img {
      border: 2px solid var(--purple);
    }
  }

  div {
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-right: 1rem;
      border: 2px solid var(--text);
    }

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    p {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
`;
