import property from 'lodash/property';
import styled from 'styled-components';

import Question from 'components/widgets/question';
import Tag from 'components/widgets/tag';

export default (component) => styled(component)`
  background-color: #fdfdff;
  border-radius: 0 1rem 1rem 0;
  display: grid;
  grid-auto-columns: 50% 50%;
  grid-auto-rows: minmax(min-content, max-content) 1fr;
  grid-template-areas:
    'keywords keywords'
    'filters results';
  height: 100%;
  left: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 50vw;
  z-index: 1;

  fieldset {
    &[aria-roledescription='keywords'] {
      grid-area: keywords;
      position: relative;

      label {
        display: none;
      }

      input {
        &[type='text'] {
          background-color: #eeecfc;
          border: 0;
          box-shadow: 0 8px 8px -4px rgba(0, 0, 0, 0.25);
          color: #3b2e9e;
          font-size: 1.5rem;
          font-weight: 900;
          outline: 0;
          padding: 1rem 4rem 1rem 1rem;
          position: relative;
          width: calc(100% - 5rem);
          z-index: 1;
        }
      }

      button[type='submit'] {
        display: none;
      }

      button[type='reset'] {
        background-color: none;
        border: solid 1px transparent;
        border-radius: 0.5rem;
        color: #ccc6f6;
        cursor: pointer;
        font-size: 0;
        outline: 0;
        padding: 0.5rem;
        position: absolute;
        right: 1rem;
        top: 50%;
        transform: translateY(-50%);
        transition: background-color 0.1s linear, color 0.1s linear;
        z-index: 1;

        &:hover,
        &:focus {
          border-color: #ccc6f6;
        }

        &:after {
          content: 'backspace';
          display: block;
          font-family: ${property('theme.typography.icons')};
          font-size: 1.25rem;
        }
      }
    }

    &[aria-roledescription='filters'],
    &[aria-roledescription='results'] {
      border-left: solid 1px #eeecfc;
      overflow-y: scroll;
      padding: 1rem;
    }

    &[aria-roledescription='filters'] {
      grid-area: filters;

      & > {
        dl {
          border: solid 1px #ccc6f6;
          border-radius: 0.5rem;
          padding: 0.75rem;

          &:not(:first-of-type) {
            margin-top: 1rem;
          }

          dt {
            color: #2a2171;
            font-size: 0.75rem;
          }

          li {
            display: inline-flex;
            margin-top: 0.5rem;

            &:not(:last-of-type) {
              margin-right: 0.5rem;
            }
          }

          ${Tag} {
            background-color: #ccc6f6;
            color: #2a2171;

            &[aria-current='true'] {
              background-color: #2a2171;
              color: #ccc6f6;
            }

            dfn {
              padding: 0.25rem 0.5rem;

              &:before {
                display: none;
              }
            }
          }
        }
      }
    }

    &[aria-roledescription='results'] {
      background-color: #fbfbfe;
      grid-area: results;
      position: relative;

      & > {
        div {
          height: 100%;
          left: 0;
          position: absolute;
          top: 0;
          width: 100%;

          & > {
            p {
              color: #ccc6f6;
              font-size: 1.25rem;
              left: 50%;
              position: absolute;
              top: 50%;
              text-align: center;
              transform: translate(-50%, -50%);

              &:before {
                content: 'manage_search';
                font-family: ${property('theme.typography.icons')};
                font-size: 5rem;
                display: block;
              }
            }
          }

          ${Question} {
            &:not(:first-of-type) {
              border-top: solid 1px #ccc6f6;
            }
          }
        }
      }
    }
  }

  legend {
    display: none;
  }
`;
