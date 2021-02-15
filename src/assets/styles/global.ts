import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html,
  body {
    -webkit-font-smoothing: antialiased;
    font: 400 18px 'Raleway', sans-serif;
    letter-spacing: 0.03em;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    transition: 0.3s;
  }

  button {
    cursor: pointer;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
  }

  .container {
    display: flex;
    width: 100%;
    max-width: 1100px;
    align-items: center;
    justify-content: center;

    @media (min-width: 1024px) {
      margin: 0 auto;
    }
  }
`;
