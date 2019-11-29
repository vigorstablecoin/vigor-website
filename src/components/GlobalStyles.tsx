import React from "react";
import { createGlobalStyle } from 'styled-components';
import { media } from '../utils/breakpoints';
import theme from '../utils/theme';

const GlobalStyles = createGlobalStyle`
body {
  padding: 0;
  margin: 0;
  font-size: 16px;
  font-weight: normal;
  color: ${theme.colors.bg};
  background-color: ${theme.colors.white};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  ${media.lessThan('xs-max')} {
    font-size: 15px;
  }
}

button, input[type="submit"], input[type="reset"] {
  background: none;
  border: none;
  color: inherit;
  padding: 0;
  font: inherit;
  cursor: pointer;
}

p {
  margin: 0;
}

body, * {
  /* TODO: Add Montserrat */
  font-family: Montserrat, sans-serif;
  box-sizing: border-box;
}
`;

export default GlobalStyles;
