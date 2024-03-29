import { css } from "styled-components";
import theme from "./theme";

export default css`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: "Roboto", Arial, sans-serif;
    font-size: 18px;

    @media ${theme.media.large} {
      font-size: 16px;
    }

    @media ${theme.media.small} {
      font-size: 12px;
    }
  }

  h1,
  h2,
  h3,
  h4 {
    margin: 0;
  }

  button {
    font-family: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
`;