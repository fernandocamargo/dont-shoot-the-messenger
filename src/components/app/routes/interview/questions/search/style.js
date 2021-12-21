import styled from 'styled-components';

import { Question, Tag } from 'components/widgets';

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
  top: 0;
  width: 50vw;
  z-index: 1;

  &,
  button {
    position: absolute;
  }

  fieldset {
    &[aria-roledescription='keywords'] {
      grid-area: keywords;

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

      button {
        display: none;
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
