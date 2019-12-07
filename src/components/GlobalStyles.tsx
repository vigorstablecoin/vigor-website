import React from "react";
import { createGlobalStyle } from 'styled-components';
import { media } from '../utils/breakpoints';
import theme from '../utils/theme';

const GlobalStyles = createGlobalStyle`
body {
  padding: 0;
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: ${theme.colors.white};
  background: ${`repeating-linear-gradient(to right,
    ${theme.colors.bg} 0%, ${theme.colors.bg} 17%, ${theme.colors.bgLighter} 17%, ${theme.colors.bgLighter} calc(17% + 1px),
    ${theme.colors.bg} calc(17% + 1px), ${theme.colors.bg} 34%, ${theme.colors.bgLighter} 34%, ${theme.colors.bgLighter} calc(34% + 1px),
    ${theme.colors.bg} calc(34% + 1px), ${theme.colors.bg} 50%, ${theme.colors.bgLighter} 50%, ${theme.colors.bgLighter} calc(50% + 1px)
    )`};
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

a {
  cursor: pointer;
  color: inherit;
  text-decoration: none;
}

p {
  margin: 0;
}

body, * {
  font-family: 'Montserrat', sans-serif;
  box-sizing: border-box;
}
`;

export default GlobalStyles;
