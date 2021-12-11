import property from 'lodash/property';
import styled from 'styled-components';

import { Question } from 'components/widgets';

export default (component) => styled(component)`
  background-color: #fdfdff;
  border-left: solid 1px #eeecfc;
  border-radius: 0 1rem 1rem 0;
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
                &[aria-roledescription='score'],
                &[aria-roledescription='text'] {
                  display: none;
                }

                &[aria-roledescription='hint'] {
                  margin: 0;
                }
              }

              nav {
                display: none;
              }
            }
          }
        }
      }
    }

    form {
      border-radius: 0 0 1rem 0;
      border-top: solid 1px #eeecfc;
      grid-area: score;
      overflow: hidden;
      width: calc(100% + 1px);

      legend,
      button {
        display: none;
      }

      fieldset {
        & > {
          div {
            &[aria-roledescription='field'] {
              display: flex;

              &,
              div,
              abbr {
                align-items: center;
                display: flex;
                justify-content: center;
              }

              div {
                padding: 1.875rem 0 0.5rem 0;
                flex: 1;

                &:first-of-type {
                  abbr {
                    font-size: 0;
                    width: 2.75rem;

                    &:before {
                      content: attr(title);
                      text-transform: uppercase;
                    }
                  }
                }

                &:not(:first-of-type) {
                  abbr {
                    width: 1.5rem;
                  }

                  &:nth-child(even) {
                    position: relative;

                    abbr:before {
                      color: rgba(0, 0, 0, 0.25);
                      content: attr(title);
                      left: 0;
                      position: absolute;
                      text-align: center;
                      top: 0.5rem;
                      width: 200%;
                    }
                  }
                }

                &:nth-child(1) {
                  background-color: #eee;
                }

                &:nth-child(2) {
                  background-color: #f0a9a0;
                }

                &:nth-child(3) {
                  background: linear-gradient(to right, #f0a9a0, #f9ba7f);
                }

                &:nth-child(4) {
                  background-color: #f9ba7f;
                }

                &:nth-child(5) {
                  background: linear-gradient(to right, #f9ba7f, #ffd569);
                }

                &:nth-child(6) {
                  background-color: #ffd569;
                }

                &:nth-child(7) {
                  background: linear-gradient(to right, #ffd569, #a3d3b3);
                }

                &:nth-child(8) {
                  background-color: #a3d3b3;
                }

                &:nth-child(9) {
                  background: linear-gradient(to right, #a3d3b3, #a3d0d3);
                }

                &:nth-child(10),
                &:nth-child(11) {
                  background-color: #a3d0d3;
                }
              }

              input {
                position: absolute;
                z-index: -1;

                &:checked + label,
                &:focus + label {
                  abbr {
                    background-color: #000;
                    color: #fff;
                  }
                }
              }

              label {
                cursor: pointer;

                abbr {
                  background: #fff;
                  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
                  border-radius: 6.25rem;
                  height: 1.5rem;
                  text-decoration: none;
                  transition: background-color 0.25s ease, color 0.25s ease;

                  &,
                  &:before {
                    font-size: 0.875rem;
                    font-weight: 500;
                  }
                }
              }
            }
          }
        }
      }

      label {
        cursor: pointer;
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

        &[aria-roledescription='favorite'] {
          a:after {
            content: 'star';
          }
        }

        &[aria-roledescription='remove'] {
          a:after {
            content: 'clear';
          }
        }

        &[aria-roledescription='report'] {
          a:after {
            content: 'flag';
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
