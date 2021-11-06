import styled from 'styled-components';

export const TwitterFeedContainer = styled.div`
  display: flex;
  flex: 1;
  min-width: 250px;

  @media (max-width: 600px) {
    min-width: 100%;
    width: 100%;
    min-height: 450px;
  }
`;
