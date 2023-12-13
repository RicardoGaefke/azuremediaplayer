import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

GlobalStyle.displayName = 'GlobalStyle';

export default GlobalStyle;
