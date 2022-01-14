import property from 'lodash/property';
import styled from 'styled-components';

export const getBackgroundColor = ({ score }) =>
  ({
    1: `#f0a9a0`,
    2: 'linear-gradient(to right, #f0a9a0, #f9ba7f)',
    3: `#f9ba7f`,
    4: 'linear-gradient(to right, #f9ba7f, #ffd569)',
    5: `#ffd569`,
    6: 'linear-gradient(to right, #ffd569, #a3d3b3)',
    7: `#a3d3b3`,
    8: 'linear-gradient(to right, #a3d3b3, #a3d0d3)',
    9: `#a3d0d3`,
    10: '#a3d0d3',
  }[score] || '#eee');

export default (component) => styled(component)`
  & > {
    dl {
      z-index: 1;

      &[aria-roledescription='score'] {
        display: flex;
        justify-content: flex-end;
        position: absolute;
        right: 1rem;
        top: 1rem;

        dd {
          background: ${getBackgroundColor};
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
            color: ${({ score }) => (!!score ? '#fff' : '#aaa0f1')};
            font-size: 1.25rem;
            font-weight: 900;
            height: 100%;
            left: 0;
            letter-spacing: -0.1rem;
            position: absolute;
            text-shadow: ${({ score }) =>
              !!score ? '0 1px 0 rgba(0, 0, 0, 0.25)' : 'none'};
            text-decoration: none;
            top: 0;
            width: 100%;
          }

          dfn {
            font-size: 0;

            &:after {
              content: 'question_mark';
              font-family: ${property('theme.typography.icons')};
              font-size: 1.75rem;
              font-weight: 900;
            }
          }
        }
      }
    }

    nav {
      z-index: 1;

      h3 {
        display: none;
      }

      li {
        &[aria-roledescription='view'] {
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
