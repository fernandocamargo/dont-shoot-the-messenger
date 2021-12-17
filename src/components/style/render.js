import property from 'lodash/property';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    background-color: #bbb3f3;
    font-size: 16px;
    opacity: 1;
  }

  body {
    font-family: ${property('theme.typography.main')};
    padding: 1rem;
  }

  figure {
    margin: 0;
  }
`;
