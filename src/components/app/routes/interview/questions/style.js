import property from 'lodash/property';
import styled from 'styled-components';

import Question from 'components/widgets/question';
import Tag from 'components/widgets/tag';

export default (component) => styled(component)`
  border-right: solid 1px #eeecfc;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;

  &[aria-busy='true'] {
    &:before {
      background-color: rgba(42, 33, 113, 0.75);
      content: '';
      display: block;
      height: 100vh;
      left: 0;
      position: fixed;
      top: 0;
      width: 100vw;
    }

    & > {
      h2 {
        border-radius: 1rem 1rem 0 0;
      }

      form {
        display: block;
      }

      blockquote {
        border-radius: 0 0 1rem 1rem;
      }
    }
  }

  & > {
    h2 {
      align-items: center;
      background-color: #fff;
      border-bottom: solid 1px #eeecfc;
      border-radius: 1rem 0 0 0;
      box-shadow: 0 8px 8px -4px #eeecfc;
      color: #221a5a;
      display: flex;
      font-size: 1.25rem;
      font-weight: 900;
      height: 4rem;
      padding: 0 1rem;
      position: relative;
      z-index: 2;
    }

    form {
      border-radius: 1rem;
      display: none;
      left: calc(100% + 1rem);
      overflow: hidden;
      top: 0;
      width: 35vw;
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
          color: #5542e3;
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
        background: none;
        border: 0;
        cursor: pointer;
        font-size: 0;
        padding: 0;
        position: absolute;
        top: 0.5rem;
        transform: scaleX(-1);
        right: 0.5rem;
        z-index: 2;

        &:before {
          color: #7667e8;
          content: 'search';
          font-family: ${property('theme.typography.icons')};
          font-size: 3rem;
        }
      }
    }

    blockquote {
      border-radius: 0 0 0 1rem;
      flex: 1;
      overflow: hidden;
      position: relative;

      ol {
        height: 100%;
        left: 0;
        overflow-y: scroll;
        position: absolute;
        width: 100%;

        & > {
          li {
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

    nav {
      &[aria-roledescription='filters'] {
        background-color: #eeecfc;
        border-bottom: solid 1px #ddd9f9;
        box-shadow: 0 8px 8px -4px #eeecfc;
        padding: 0.5rem 1rem;
        position: relative;
        z-index: 1;

        h3 {
          color: #3b2e9e;
          font-size: 0.85rem;
          font-weight: 700;
        }

        li {
          display: inline-block;

          margin-top: 0.5rem;

          &:not(:last-of-type) {
            margin-right: 0.5rem;
          }
        }

        ${Tag} {
          background-color: #e1bd1e;
          color: #4b3f0a;

          dfn:before {
            background-color: #4b3f0a;
            color: #e1bd1e;
          }
        }
      }

      &[aria-roledescription='actions'] {
        position: absolute;
        right: 1rem;
        top: 1rem;
        z-index: 2;

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

          a {
            align-items: center;
            background-color: #4c3bcc;
            border-radius: 0.5rem;
            color: #eeecfc;
            display: inline-flex;
            font-size: 0;
            font-weight: 500;
            overflow: hidden;
            padding: 0.5rem;
            text-decoration: none;
            text-transform: uppercase;

            &:before {
              display: inline-flex;
              font-family: ${property('theme.typography.icons')};
              font-size: 1.25rem;
              text-transform: none;
            }
          }

          &[aria-roledescription='add'] {
            a:before {
              content: 'add';
            }
          }

          &[aria-roledescription='filter'] {
            position: relative;

            a:before {
              content: 'filter_alt';
            }

            &:after {
              background-color: #eeecfc;
              border-radius: 50%;
              content: '';
              display: block;
              height: 2rem;
              left: 50%;
              position: absolute;
              top: calc(100% + 0.25rem);
              transform: translateX(-50%);
              width: 2rem;
            }
          }

          &[aria-roledescription='sort'] {
            a:before {
              content: 'sort';
            }
          }
        }
      }
    }
  }
`;
