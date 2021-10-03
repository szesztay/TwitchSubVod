import styled from 'styled-components';
import { appearFromRight } from '@/utils/animations/appearFromRight';

export const Container = styled.div`
  position: relative;
  display: flex;

  .info-box {
    display: flex;
    place-content: center;
    visibility: hidden;
    min-width: 16rem;
    width: fit-content;
    max-width: 80vw;
    padding: 0 1rem;
    background-color: var(--dark-purple);
    color: #fff;
    text-align: center;
    border-radius: 0.5rem;

    position: absolute;
    z-index: 3;
    top: -1.8rem;
    right: 100%;

    a {
      margin-left: 0.15rem;
      color: var(--text);
      font-weight: 600;
      word-break: break-word;
    }
  }

  &:hover {
    .info-box {
      visibility: visible;

      animation: ${appearFromRight} 0.2s;
    }
  }
`;
