import property from 'lodash/property';
import styled from 'styled-components';

export default (component) => styled(component)`
  & > {
    div[aria-roledescription='markup'] {
      & > {
        * {
          &:not(:first-child) {
            margin-top: 1rem;
          }
        }
      }

      a {
        color: inherit;
      }

      em {
        font-style: italic;
      }

      strong {
        font-weight: bold;
      }

      ol,
      ul {
        list-style-position: inside;
        margin-left: 1rem;
      }

      ol {
        list-style-type: decimal;
      }

      ul {
        list-style-type: disc;
      }

      blockquote,
      pre {
        border-radius: 1rem;
        box-shadow: 0 8px 8px -4px #eeecfc;
        font-size: 0.9em;
        padding: 1rem;
      }

      blockquote {
        background-color: #eeecfc;
        border: solid 1px #7667e8;
        border-left: solid 10px #7667e8;
        color: #221a5a;

        &:before,
        &:after {
          content: '"';
          display: inline-block;
        }
      }

      pre {
        background-color: #fefae8;
        border: solid 1px #fce890;
        color: #191503;
        font-family: ${property('theme.typography.code')};
        font-weight: 100;
        overflow: auto;
      }
    }

    nav {
      button {
      }
    }
  }
`;
