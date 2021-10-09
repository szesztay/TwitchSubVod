import styled, { keyframes } from 'styled-components';

interface HCaptchaContainerProps {
  isVisible: boolean;
}

const rotateImage = keyframes`
from {
  transform: rotate(-7deg)
}
to {
  transform: rotate(7deg)
}
`;

export const Container = styled.div`
  margin-top: 2rem;
  position: relative;
  width: 60rem;
  height: 33.75rem;

  .react-player {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;

    iframe {
      height: 100vh;
    }
  }

  :hover {
    div {
      opacity: 1;
    }
  }

  @media (max-width: 960px) {
    width: 48rem;
    height: 27rem;
  }

  @media (max-width: 768px) {
    width: 30rem;
    height: 16.875rem;
  }

  @media (max-width: 480px) {
    width: 22.5rem;
    height: 12.65625rem;
  }
`;

export const HCaptchaContainer = styled.div<HCaptchaContainerProps>`
  z-index: ${({ isVisible }) => (isVisible ? '3' : '-1')};
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

interface ICustomOptions {
  isSafari?: boolean;
}

export const CustomOptions = styled.div<ICustomOptions>`
  position: absolute;
  height: fit-content;
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 8px;
  opacity: 0;
  z-index: 2;
  top: ${({ isSafari }) => (isSafari ? '42px' : '8px')};
  left: 8px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  transition: all 0.2s ease;

  select,
  button {
    border-radius: 3px;
    cursor: pointer;
    font-size: 1rem;
    line-height: 20px;
    padding: 0.25rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background: rgba(0, 0, 0, 0.75);
    color: #fff;

    :hover {
      background: rgba(0, 0, 0, 0.9);
    }
  }

  button {
    display: flex;
    justify-content: center;
    transition: all 0.1s ease;

    img {
      margin-left: 0.5rem;
      border: 0px solid rgba(0, 0, 0, 0);
      width: 20px;
    }

    :hover {
      background: var(--dark-purple);
    }
  }
`;
