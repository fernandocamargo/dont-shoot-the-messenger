import styled from 'styled-components';

import Question from 'components/widgets/question';

export default (component) => styled(component)`
  background-color: #fdfdff;
  border-radius: 0 1rem 1rem 0;
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
      label {
        display: none;
      }
    }

    &[aria-roledescription='results'] {
      background-color: #fff;
      max-height: 50vh;
      overflow-y: scroll;

      div {
        &[aria-roledescription='field'] {
          & > {
            div {
              &:nth-child(even) {
                background-color: #fff;
              }

              &:nth-child(odd) {
                background-color: #f9f9fe;
              }
            }
          }
        }
      }

      input {
        position: absolute;
        left: -100vw;
        top: -100vh;
        z-index: -1;

        &:checked + label,
        &:focus + label {
          ${Question} {
            background-color: #bbb3f3;
          }
        }
      }

      ${Question} {
        dl {
          &[aria-roledescription='score'] {
            display: none;
          }
        }
      }
    }
  }

  legend {
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
`;
