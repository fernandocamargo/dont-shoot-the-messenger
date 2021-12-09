import styled from 'styled-components';

export const getBackgroundColor = ({ score }) =>
  ({
    1: `linear-gradient(to right, #eeeeee, #f0a9a0)`,
    2: '#f0a9a0',
    3: `linear-gradient(to right, #f0a9a0, #f9ba7f)`,
    4: '#f9ba7f',
    5: `linear-gradient(to right, #f9ba7f, #ffd569)`,
    6: '#ffd569',
    7: `linear-gradient(to right, #ffd569, #a3d3b3)`,
    8: '#a3d3b3',
    9: `linear-gradient(to right, #a3d3b3, #a3d0d3)`,
    10: '#a3d0d3',
  }[score] || '#eee');

export default (component) => styled(component)`
  padding: 5rem 1rem 2.5rem 1rem;
  position: relative;

  & > {
    dl {
      & > {
        dt {
          display: none;
        }
      }

      &[aria-roledescription='score'] {
        display: flex;
        justify-content: flex-end;
        position: absolute;
        right: 1rem;
        top: 1rem;

        dd {
          align-items: center;
          background: ${getBackgroundColor};
          border: solid 1px #eeecfc;
          border-radius: 50%;
          box-shadow: 0 8px 8px -4px rgba(0, 0, 0, 0.1);
          color: ${({ score }) => (!!score ? '#fff' : '#aaa0f1')};
          display: flex;
          font-size: 1.25rem;
          font-weight: 900;
          height: 3rem;
          justify-content: center;
          letter-spacing: -0.1rem;
          text-shadow: ${({ score }) =>
            !!score ? '0 1px 0 rgba(0, 0, 0, 0.25)' : 'none'};
          width: 3rem;
        }
      }

      &[aria-roledescription='text'] {
        dd {
          color: #221a5a;
          font-size: 1rem;
          font-weight: 700;
        }
      }

      &[aria-roledescription='hint'] {
        margin-top: 1rem;

        dd {
          color: #221a5a;
          font-size: 0.85rem;
          font-weight: 500;
        }
      }

      &[aria-roledescription='tags'] {
        margin-top: 1rem;

        dd {
          li {
            display: inline-flex;
            margin-top: 0.5rem;
            position: relative;
            z-index: 1;

            &:not(:last-of-type) {
              margin-right: 0.5rem;
            }
          }
        }
      }
    }

    &[aria-roledescription='requirement'] {
      display: ${({ required }) => (required ? 'block' : 'none')};
      height: 75px;
      left: 0;
      overflow: hidden;
      position: absolute;
      top: 0;
      width: 75px;

      dd {
        background: linear-gradient(#5542e3, #887aeb);
        box-shadow: 0 3px 10px -5px #221a5a;
        color: #fff;
        display: block;
        font-size: 0;
        font-weight: 900;
        left: -21px;
        position: absolute;
        text-align: center;
        text-transform: uppercase;
        top: 19px;
        transform: rotate(-45deg);
        width: 100px;

        dfn {
          &:after {
            content: attr(title);
            font-size: 0.75rem;
            line-height: 1.25rem;
          }
        }
      }
    }

    nav {
      display: none;

      h3 {
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
            width: 100%;
          }
        }
      }
    }
  }
`;
