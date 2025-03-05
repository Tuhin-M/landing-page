import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #F4F9FF;
    color: #4F5B6E;
  }

  h1, h2, h3, p {
    margin: 0;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;