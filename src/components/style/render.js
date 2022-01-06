import property from 'lodash/property';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    background-color: #bbb3f3;
    font-size: 16px;
    opacity: 1;
  }

  body {
    font-family: ${property('theme.typography.main')} !important;
    padding: 1rem !important;

    & > {
      div {
        &[role="dialog"],
        &[role="tooltip"] {
          z-index: 10;
        }
      }    
    }
  }

  figure {
    margin: 0;
  }
`;
