import property from 'lodash/property';
import styled from 'styled-components';

export default (component) => styled(component)`
  background-color: #fafafb;
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
      overflow: hidden;

      article {
        flex: 1;
        position: relative;

        &[aria-roledescription='questions'] {
          background-color: #fff;
          border-right: solid 1px #eeecfc;
          display: flex;
          flex-direction: column;

          & > {
            h2 {
              align-items: center;
              border-bottom: solid 1px #eeecfc;
              box-shadow: 0 8px 8px -4px #eeecfc;
              color: #221a5a;
              display: flex;
              font-size: 1.25rem;
              font-weight: 900;
              height: 4rem;
              padding: 0 1rem;
              position: relative;
              z-index: 1;
            }

            blockquote {
              flex: 1;
              position: relative;

              ol {
                height: 100%;
                left: 0;
                overflow-y: scroll;
                position: absolute;
                width: 100%;

                & > {
                  li {
                    &:nth-child(odd) {
                      background-color: #f9f9fe;
                    }
                  }
                }
              }
            }

            nav {
              position: absolute;
              right: 1rem;
              top: 1rem;

              h3 {
                display: none;
              }

              a {
                align-items: center;
                background-color: #4c3bcc;
                border-radius: 0.5rem;
                color: #eeecfc;
                display: inline-flex;
                font-weight: 500;
                overflow: hidden;
                padding: 0.5rem 1rem;
                text-decoration: none;
                text-transform: uppercase;

                &:before {
                  content: 'add';
                  display: inline-flex;
                  font-family: ${property('theme.typography.icons')};
                  font-size: 1.25rem;
                  margin-right: 0.25rem;
                  text-transform: none;
                }
              }
            }
          }
        }

        &[aria-roledescription='question'] {
          background-color: #fdfdff;
          border-left: solid 1px #eeecfc;
          display: grid;
          grid-auto-rows: minmax(min-content, max-content)
            minmax(min-content, max-content) 1fr;
          grid-template-areas:
            'actions'
            'title'
            'details';

          & > {
            h1 {
              box-shadow: 0 8px 8px -4px #eeecfc;
              color: #110d2d;
              font-size: 1.25rem;
              font-weight: 700;
              grid-area: title;
              padding: 1rem;
            }

            div {
              grid-area: details;
              position: relative;

              blockquote {
                bottom: 0;
                left: 0;
                overflow-y: scroll;
                padding: 2rem 1rem;
                position: absolute;
                right: 0;
                top: 0;

                & > {
                  dl {
                    &[aria-roledescription='hint'] {
                      & > {
                        dt {
                          display: none;
                        }

                        dd {
                          & > {
                            *:not(:first-child) {
                              margin-top: 2rem;
                            }

                            p {
                              color: #080616;
                              font-size: 0.95rem;
                              font-weight: 500;
                            }
                          }
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
        }
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
            text-align: center;
          }
        }

        &[aria-roledescription='feedback'] {
          display: flex;
          flex-direction: column-reverse;
          grid-area: feedback;

          & > {
            form {
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
                padding: 1rem;
                resize: none;
                width: calc(100% - 2rem);
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
              flex: 1;
              padding: 1rem;

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
                      position: absolute;
                      right: 0;
                      top: 100%;

                      dd {
                        color: #94949a;
                        font-size: 0.85rem;
                        margin-top: 0.5rem;
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
              background-image: url('data:image/jpeg;base64,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');
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
