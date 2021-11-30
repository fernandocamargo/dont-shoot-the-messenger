import property from 'lodash/property';
import styled from 'styled-components';

import Question from './question';

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
                    &:nth-child(even) {
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
      margin: 2rem 2rem 2rem 1rem;
    }
  }
`;
