import styled from 'styled-components';
import { appearFromBottom } from '@/utils/animations/appearFromBottom';
import { appearFromTop } from '@/utils/animations/appearFromTop';
import { Container as HomeContainer } from './Home';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 2rem;
`;

export const AnimationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  animation: ${appearFromBottom} 0.5s;

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .input-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: var(--light-background);
    height: 2rem;
    max-width: 20rem;
    padding: 0.5rem;
    margin-bottom: 0.5rem;

    input {
      flex: 1;
      background: var(--light-background);
      color: var(--text);
      text-align: center;
      appearance: textfield;
    }
  }

  button[type='submit'] {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--purple);
    height: 2rem;
    width: 20rem;
    border: 2px solid var(--purple);
    color: var(--button-text);

    & svg {
      margin-right: 0.5rem;
    }
  }

  h1 {
    margin-bottom: 0;
  }

  .video-container {
    max-width: 60rem;
    margin: 2rem 0;

    animation: ${appearFromTop} 0.5s ease-out;
  }

  div:nth-child(3) {
    display: flex;
    justify-content: center;
  }
`;

export const DeletedVodsStreamer = styled(HomeContainer)``;

export const DeletedVodsGroupContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, auto));
  grid-template-rows: auto;
  gap: 16px;

  margin: 24px auto;
  width: 100%;
  max-width: 990px;
`;

export const DeletedVodsGroup = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 130px;
  background: none;
  border: 2px solid var(--purple);
  border-radius: 8px;
  color: white;
  padding: 0;
  overflow: hidden;
  padding-top: 16px;

  span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
  }
`;

export const CategoriesPlayed = styled.div`
  display: flex;
  width: 100%;
  /* border-top-left-radius: 8px; */
  /* border-top-right-radius: 8px; */

  overflow: auto;

  // remove scroll bar
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  img {
    opacity: 0.7;
    object-fit: contain;

    :hover {
      opacity: 1;
    }
  }
`;

export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--purple);
  height: 2rem;
  width: 20rem;
  border: 2px solid var(--purple);
  color: var(--button-text);
  font-family: 'Roboto', sans-serif;
  transition: all 0.1s ease;
  /* position: relative; */

  margin-top: 1rem;

  :hover {
    background: var(--dark-purple);
    border: 2px solid var(--dark-purple);
  }

  svg {
    margin-left: 0.5rem;
    animation: spin 1.75s linear infinite;

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;
