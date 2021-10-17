import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0px;
    padding: 0px; 
  }

  body {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 16px;
    overflow:hidden;
  }

  h1{
    color: white;
    font-size: 48px;
    font-weight: 800;
  }
  `;
