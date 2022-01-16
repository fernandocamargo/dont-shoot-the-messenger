import property from 'lodash/property';
import styled from 'styled-components';

import { rotate } from 'style/animations';

export default (component) => styled(component)`
  & > {
    dl {
      &[aria-roledescription='save'] {
        display: flex;
        justify-content: flex-end;
        position: absolute;
        right: 1rem;
        top: 1rem;

        dd {
          background: #eee;
          border: solid 1px #eeecfc;
          box-shadow: 0 8px 8px -4px rgba(0, 0, 0, 0.1);
          height: 3rem;
          position: relative;
          transition: background-color 0.25s ease;
          width: 3rem;

          &,
          a {
            align-items: center;
            border-radius: 50%;
            display: flex;
            justify-content: center;
          }

          a {
            color: #aaa0f1;
            font-size: 0;
            height: 100%;
            left: 0;
            position: absolute;
            text-decoration: none;
            top: 0;
            width: 100%;

            &:after {
              content: '${({ active }) => (active ? 'close' : 'add')}';
              font-family: ${property('theme.typography.icons')};
              font-size: 1.75rem;
              font-weight: 900;
            }
          }
        }

        &[aria-busy='true'] {
          dd {
            a {
              pointer-events: none;

              &:after {
                animation: ${rotate} 2s infinite linear;
                content: 'rotate_right';
              }
            }
          }
        }
      }
    }

    nav {
      z-index: 1;

      &[aria-busy='true'] {
        li {
          &[aria-roledescription='save'] {
            a {
              pointer-events: none;
            }
          }
        }
      }

      h3 {
        display: none;
      }

      li {
        &[aria-roledescription='save'] {
          a {
            display: block;
            height: 100%;
            left: 0;
            overflow: hidden;
            position: absolute;
            text-indent: -100vw;
            top: 0;
            transition: background-color 0.1s linear;
            width: 100%;
          }
        }
      }
    }
  }
`;
