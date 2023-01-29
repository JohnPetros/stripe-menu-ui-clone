import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    min-height: 100vh;
    background-color: #202020;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: "Roboto", sans-serif;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;
