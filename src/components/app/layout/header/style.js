import property from 'lodash/property';
import styled from 'styled-components';

import { fernando } from 'mocks/images';

export default (component) => styled(component)`
  align-items: center;
  background-color: #fff;
  box-shadow: 0 8px 8px -4px #eeecfc;
  border-bottom: solid 1px #ebebf1;
  display: flex;
  position: relative;
  z-index: 1;

  h2 {
    margin: 1rem 2rem;
    position: relative;
    z-index: 1;

    a {
      background: url(https://assets-global.website-files.com/5fbe30b0eed168786ba927e2/5fbe33e042bbcd57e13ce3b7_logo.svg)
        no-repeat;
      display: block;
      height: 26px;
      overflow: hidden;
      text-indent: -100vw;
      width: 128px;
    }
  }

  nav {
    align-items: flex-end;
    bottom: 0;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    width: 100%;

    h3 {
      display: none;
    }

    & > {
      ul {
        display: flex;
        height: 100%;
        justify-content: center;

        & > {
          li {
            &[aria-roledescription='profile'] {
              height: 100%;
              position: absolute;
              right: 0;
              top: 0;
              z-index: 1;

              & > {
                ul {
                  border: solid 1px #eeecfc;
                }

                a {
                  align-items: center;
                  border-radius: 1rem 0 0 0;
                  display: flex;
                  flex-direction: row;
                  height: 100%;
                  outline: 0;
                  overflow: hidden;
                  padding: 0 2rem;
                  text-decoration: none;
                  transition: background-color 0.1s linear;

                  &:before,
                  &:after {
                    content: '';
                    display: block;
                  }

                  &:before {
                    background-image: url('data:image/jpeg;base64,${fernando}');
                    background-size: cover;
                    border-radius: 50%;
                    height: 2rem;
                    margin-right: 0.5rem;
                    overflow: hidden;
                    text-indent: -100vw;
                    width: 2rem;
                  }

                  &:after {
                    color: #94949a;
                    content: 'arrow_drop_down';
                    display: inline-flex;
                    font-family: ${property('theme.typography.icons')};
                    font-size: 1.25rem;
                    margin-left: 0.5rem;
                    transition: color 0.1s linear;
                  }

                  dfn {
                    color: #2a2171;
                    display: block;
                    font-size: 0.9rem;
                    font-weight: 700;
                    max-width: 10vw;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    transition: color 0.1s linear;
                    white-space: nowrap;
                  }
                }
              }

              &[aria-selected='true'] {
                & > {
                  a {
                    background-color: #6654e5;
                    box-shadow: 0 8px 8px -4px #eeecfc;

                    &:after,
                    dfn {
                      color: #fff;
                    }

                    &:after {
                      content: 'arrow_drop_up';
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
`;
