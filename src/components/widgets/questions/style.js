import property from 'lodash/property';
import styled from 'styled-components';

import Question from 'components/widgets/question';
import Tag from 'components/widgets/tag';

export default (component) => styled(component)`
  border: solid 1px #eeecfc;
  box-shadow: 0 8px 8px -4px #eeecfc;
  display: flex;

  & > {
    article {
      flex: 1;
      position: relative;
      width: 50%;

      &:first-child {
        border-right: solid 1px #eeecfc;
        display: flex;
        flex-direction: column;
        position: relative;
        z-index: 2;

        &[aria-busy='true'] {
          &:before {
            background-color: rgba(42, 33, 113, 0.5);
            content: '';
            display: block;
            height: 100vh;
            left: 0;
            position: fixed;
            top: 0;
            width: 100vw;
          }

          & > {
            nav {
              &[aria-roledescription='actions'] {
                li {
                  &[aria-roledescription='search'] {
                    a:before {
                      content: 'clear';
                    }
                  }
                }
              }
            }
          }
        }

        & > {
          &:first-child {
            border-radius: 1rem 0 0 0;
          }

          h2 {
            align-items: center;
            background-color: #ccc6f6;
            height: 4rem;
            padding: 0 1rem;
            position: relative;
            z-index: 2;

            &,
            dfn {
              display: flex;
            }

            dfn {
              align-items: center;
              color: #221a5a;
              font-size: 1.25rem;
              font-weight: 900;

              &:after {
                content: '(' attr(title) ')';
                font-size: 0.85rem;
                font-weight: 300;
                margin-left: 0.5rem;
              }
            }
          }

          nav {
            &[aria-roledescription='filters'],
            &[aria-roledescription='sorting'] {
              padding: 0.5rem 1rem 0.75rem 1rem;
              position: relative;
              z-index: 3;

              h3 {
                color: #3b2e9e;
                font-size: 0.75rem;
                font-weight: 700;
              }
            }

            &[aria-roledescription='filters'] {
              background-color: #ddd9f9;

              li {
                display: inline-block;
                margin-top: 0.25rem;

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

            &[aria-roledescription='sorting'] {
              background-color: #eeecfc;
              border-bottom: solid 1px #ddd9f9;
              box-shadow: 0 8px 8px -4px #eeecfc;
            }

            &[aria-roledescription='actions'] {
              position: relative;

              h3 {
                display: none;
              }

              ul {
                bottom: calc(100% + 1rem);
                display: flex;
                position: absolute;
                right: 1rem;
                z-index: 2;
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

                &[aria-roledescription='search'] {
                  a:before {
                    content: 'search';
                  }
                }
              }
            }
          }

          blockquote,
          div {
            border-radius: 0 0 0 1rem;
            flex: 1;
            overflow: hidden;
          }

          div {
            align-items: center;
            background-color: #fafafb;
            display: flex;
            justify-content: center;
            position: relative;

            &[aria-busy='true'] {
              p {
                a {
                  background-color: #eeecfc;
                  border-color: #eeecfc;
                  pointer-events: none;

                  &:before {
                    content: 'hourglass_top';
                  }
                }
              }
            }

            p {
              color: #ccc6f6;
              font-size: 1.25rem;
              margin: 0 1rem;
              position: relative;
              text-align: center;
              width: 75%;
              z-index: 1;

              &:before {
                font-family: ${property('theme.typography.icons')};
                font-size: 5rem;
                display: block;
              }

              &[aria-roledescription='empty'] {
                &:before {
                  content: 'playlist_add';
                }
              }

              &[aria-roledescription='not-found'] {
                &:before {
                  content: 'playlist_remove';
                }
              }

              a {
                align-items: center;
                background-color: transparent;
                border: solid 1px #4c3bcc;
                border-radius: 0.5rem;
                color: #4c3bcc;
                display: inline-flex;
                font-size: 0.75rem;
                font-weight: 500;
                margin-top: 0.5rem;
                overflow: hidden;
                padding: 0.5rem 1rem 0.5rem 0.5rem;
                text-decoration: none;
                text-transform: uppercase;
                transition: background-color 0.1s linear, color 0.1s linear;

                &:before {
                  content: 'add';
                  display: inline-flex;
                  font-family: ${property('theme.typography.icons')};
                  font-size: 1rem;
                  margin-right: 0.25rem;
                  text-transform: none;
                }

                &:hover {
                  background-color: #4c3bcc;
                  color: #eeecfc;
                }
              }
            }
          }

          blockquote {
            background-color: #fff;
            position: relative;

            & > {
              ol {
                height: 100%;
                left: 0;
                overflow-y: scroll;
                position: absolute;
                width: 100%;

                & > {
                  li {
                    &:not(:first-child) {
                      border-top: solid 1px #eeecfc;
                    }

                    ${Question} {
                      &:hover {
                        background-color: #fefae8;
                      }

                      & > {
                        nav {
                          li {
                            &[aria-roledescription='view'] {
                              a {
                                &.active {
                                  background-color: #fef6d2;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }

            ${Tag} {
              &[aria-current='true'] {
                margin-left: 1.5rem;
                position: relative;

                &:before {
                  background-color: #4b3f0a;
                  border-radius: 50%;
                  color: #e1bd1e;
                  content: 'search';
                  display: inline-flex;
                  font-family: ${property('theme.typography.icons')};
                  font-size: 0.75rem;
                  margin-right: 0.25rem;
                  padding: 0.25rem;
                  position: absolute;
                  right: 100%;
                  top: 50%;
                  transform: translateY(-50%);
                }
              }
            }
          }
        }
      }
    }
  }
`;
