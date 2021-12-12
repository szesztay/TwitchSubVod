import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --purple: #9147ff;
    --dark-purple: #7c2cf4;
    --button-text: #f1f1f1;
    --background: ${({ theme }: any) => theme.background};
    --light-background: ${({ theme }: any) => theme.lightBackground};
    --text: ${({ theme }: any) => theme.text};
    --gray800: #2F2F2F;
    --pink700: #D70070;
  }

  * {
    box-sizing: border-box;
  }

  body {
    padding: 0rem;
    margin: 0rem;
    font-family: 'Roboto', sans-serif;
    color: var(--text);
    font-weight: 400;
    background-color: var(--background);
  }

  a {
    text-decoration: none;
    color: var(--purple);
  }

  input, button {
    border: 0rem;
  }

  button {
    cursor: pointer;
  }

  button[type="submit"]{
    transition: all ease 0.2s;

    &:hover{
      background: var(--dark-purple);
      border: var(--dark-purple);
    }

    &:active{
      background: var(--dark-purple);
      border: var(--dark-purple);
    }
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--light-background);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--purple);
    border-radius: 8px;
  }

  ${
    process.env.NODE_ENV === 'development' &&
    css`
      ins {
        border: 1px solid red !important;
      }
    `
  }
`;

export default GlobalStyle;
