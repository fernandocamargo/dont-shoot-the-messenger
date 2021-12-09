import property from 'lodash/property';
import styled from 'styled-components';

import { milad } from 'mocks/images';

export default (component) => styled(component)`
  display: flex;
  flex: 1;

  section {
    border-radius: 1rem;
    flex: 1;

    &[aria-roledescription='primary'] {
      border: solid 1px #eeecfc;
      box-shadow: 0 8px 8px -4px #eeecfc;
      display: flex;
      margin: 2rem 1rem 2rem 2rem;

      article {
        flex: 1;
        position: relative;
      }
    }

    &[aria-roledescription='secondary'] {
      display: grid;
      gap: 2em;
      grid-auto-columns: 1fr minmax(min-content, max-content);
      grid-auto-rows: 1fr minmax(min-content, max-content);
      grid-template-areas:
        'stats stats'
        'feedback candidate';
      margin: 2rem 2rem 2rem 1rem;

      article {
        background-color: #fff;
        border: solid 1px #eeecfc;
        border-radius: 1rem;
        box-shadow: 0 8px 8px -4px #eeecfc;
        overflow: hidden;

        &[aria-roledescription='stats'],
        &[aria-roledescription='candidate'] {
          padding: 1rem;
        }

        &[aria-roledescription='stats'] {
          grid-area: stats;

          h2 {
            font-size: 1.25rem;
            font-weight: 900;
          }
        }

        &[aria-roledescription='feedback'] {
          display: flex;
          flex-direction: column-reverse;
          grid-area: feedback;

          & > {
            form {
              border-top: solid 1px #a3d0d3;
              margin-bottom: -0.5rem;
              position: relative;

              legend,
              label,
              nav h3 {
                display: none;
              }

              textarea {
                background-color: #eeecfc;
                border: 0;
                border-radius: 0 0 1rem 1rem;
                color: #3b2e9e;
                font-weight: 700;
                height: 10vh;
                outline: 0;
                padding: 1rem 3rem 1rem 1rem;
                resize: none;
                width: calc(100% - 4rem);
              }

              button {
                background: none;
                border: 0;
                cursor: pointer;
                font-size: 0;
                padding: 0;
                position: absolute;
                top: 1rem;
                right: 1rem;

                &:before {
                  color: #7667e8;
                  content: 'send';
                  font-family: ${property('theme.typography.icons')};
                  font-size: 1.5rem;
                }
              }

              nav {
                bottom: 2rem;
                position: absolute;
                right: 1rem;

                li[aria-roledescription='attach'] {
                  cursor: pointer;
                  font-size: 0;

                  &:before {
                    color: #7667e8;
                    content: 'attach_file';
                    font-family: ${property('theme.typography.icons')};
                    font-size: 2rem;
                  }
                }
              }
            }

            blockquote {
              align-items: flex-end;
              box-shadow: 0 8px 8px -4px #eeecfc;
              display: flex;
              flex: 1;
              justify-content: flex-end;
              padding: 1rem;
              z-index: 1;

              h3 {
                display: none;
              }

              & > {
                div {
                  display: inline-block;
                  position: relative;

                  dl {
                    dt {
                      display: none;
                    }

                    &[aria-roledescription='message'] {
                      display: flex;

                      dd {
                        background-color: #5542e3;
                        border-radius: 0.5rem;
                        color: #eeecfc;
                        font-weight: 700;
                        padding: 0.75rem;
                      }
                    }

                    &[aria-roledescription='datetime'] {
                      dd {
                        margin-top: 0.5rem;
                        text-align: right;

                        a {
                          color: #94949a;
                          font-size: 0.75rem;
                          text-decoration: none;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }

        &[aria-roledescription='candidate'] {
          grid-area: candidate;

          h2 {
            align-items: center;
            color: #332788;
            display: flex;
            font-size: 1.25rem;
            font-weight: 900;

            &:before {
              background-image: url('data:image/jpeg;base64,${milad}');
              background-size: cover;
              border-radius: 0.5rem;
              content: '';
              display: inline-flex;
              height: 4rem;
              margin-right: 1rem;
              width: 4rem;
            }
          }

          dl {
            &[aria-roledescription='title'],
            &[aria-roledescription='location'],
            &[aria-roledescription='website'],
            &[aria-roledescription='email'] {
              align-items: center;
              color: #998dee;
              display: flex;
              flex-direction: row;
              margin-top: 1rem;

              dt {
                font-size: 0;

                &:before {
                  display: inline-flex;
                  font-family: ${property('theme.typography.icons')};
                  font-size: 1.25rem;
                }
              }

              dd {
                font-weight: 700;
                margin-left: 0.5rem;

                a {
                  color: #2a2171;
                }
              }
            }

            &[aria-roledescription='title'] {
              dt:before {
                content: 'sell';
              }
            }

            &[aria-roledescription='location'] {
              dt:before {
                content: 'place';
              }
            }

            &[aria-roledescription='website'] {
              dt:before {
                content: 'link';
              }
            }

            &[aria-roledescription='email'] {
              dt:before {
                content: 'email';
              }
            }
          }

          nav {
            margin-top: 1rem;

            h3 {
              display: none;
            }

            ul {
              display: flex;
              justify-content: center;
            }

            a {
              align-items: center;
              background-color: #4c3bcc;
              border-radius: 0.5rem;
              color: #eeecfc;
              display: inline-flex;
              font-size: 0.75rem;
              font-weight: 500;
              overflow: hidden;
              padding: 0.5rem 1rem;
              text-decoration: none;
              text-transform: uppercase;

              &:before {
                content: 'download';
                display: inline-flex;
                font-family: ${property('theme.typography.icons')};
                font-size: 1rem;
                margin-right: 0.25rem;
                text-transform: none;
              }
            }
          }
        }
      }
    }
  }
`;
