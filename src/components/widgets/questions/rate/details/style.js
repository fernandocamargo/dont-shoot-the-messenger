import property from 'lodash/property';
import styled from 'styled-components';

import { rotate } from 'style/animations';
import Question from 'components/widgets/question';

export default (component) => styled(component)`
  display: grid;
  grid-auto-rows: minmax(min-content, max-content)
    minmax(min-content, max-content) 1fr;
  grid-template-areas:
    'actions'
    'title'
    'details'
    'score';

  & > {
    h1 {
      box-shadow: 0 8px 8px -4px #eeecfc;
      color: #110d2d;
      font-size: 1.25rem;
      font-weight: 700;
      grid-area: title;
      max-height: 20vh;
      overflow: auto;
      padding: 1rem;
    }

    div {
      grid-area: details;
      position: relative;

      & > {
        blockquote {
          bottom: 0;
          left: 0;
          overflow-y: scroll;
          position: absolute;
          right: 0;
          top: 0;

          & > {
            ${Question} {
              padding: 1rem;

              dl {
                &[aria-roledescription='requirement'],
                &[aria-roledescription='text'] {
                  display: none;
                }

                &[aria-roledescription='hint'] {
                  margin: 0;
                }
              }
            }
          }
        }
      }
    }

    nav {
      align-items: center;
      border-bottom: solid 1px #eeecfc;
      display: flex;
      grid-area: actions;
      height: 4rem;
      justify-content: flex-end;
      padding-right: 1rem;

      h3 {
        display: none;
      }

      ul {
        display: flex;
      }

      li {
        &:not(:first-of-type) {
          margin-left: 0.5rem;
        }

        &[aria-busy='true'] {
          a {
            pointer-events: none;

            &:after {
              animation: ${rotate} 2s infinite linear;
              content: 'rotate_right';
            }
          }
        }
      }

      a {
        align-items: center;
        background-color: #ddd9f9;
        border-radius: 0.5rem;
        color: #6654e5;
        display: inline-flex;
        font-size: 0;
        overflow: hidden;
        padding: 0.5rem;
        text-decoration: none;

        &:after {
          display: inline-flex;
          font-family: ${property('theme.typography.icons')};
          font-size: 1.25rem;
          text-indent: 0;
        }
      }
    }
  }
`;
