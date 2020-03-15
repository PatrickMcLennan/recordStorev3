import { createGlobalStyle, GlobalStyleComponent } from "styled-components";
import { variables } from "./variables.style";
import { mixins } from "./mixins.style";

export const GlobalStyle: GlobalStyleComponent<{}, {}> = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  #root {
    position: relative;
    min-height: 100vh;
    max-width: 100%;
    overflow-x: hidden;
  }

  main {
    display: block;
    padding: 0 10%;

    @media screen and (max-width: 1000px) {
      padding: 0 5%;
    }

    @media screen and (max-width: 600px) {
      padding: 0 15px;
    }
  }

  ul,
  li {
    list-style-type: none;
  }
`;

export const theme = { ...mixins, ...variables };
