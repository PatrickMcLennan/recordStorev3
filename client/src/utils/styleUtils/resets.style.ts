import { createGlobalStyle, GlobalStyleComponent } from "styled-components";
import { variables } from "./variables.style";
import { mixins } from "./mixins.style";
import background from "Image/background.jpg";

import LATO from "Font/Lato-Black.ttf";
import LATO_LIGHT from "Font/Lato-Light.ttf";

export const GlobalStyle: GlobalStyleComponent<{}, {}> = createGlobalStyle`
  @font-face {
    font-family: 'Lato';
    src: url(${LATO})
  }
  @font-face {
    font-family: 'Lato-Light';
    src: url(${LATO_LIGHT})
  }

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
    background: linear-gradient(rgba(0,0,0,.675), rgba(0,0,0,.825)), url(${background});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    font-family: 'Lato-Light', sans-serif;
    overflow-x: hidden;
  }

  a,
  a:active,
  a:visited {
    text-decoration: none;
  }

  button {
    background-color: rgba(0,0,0,0);
    border: none;
  }

  main {
    ${mixins.mainPadding};
    display: block;
  }

  ul,
  li {
    list-style-type: none;
  }
`;

export const theme = { ...mixins, ...variables };
