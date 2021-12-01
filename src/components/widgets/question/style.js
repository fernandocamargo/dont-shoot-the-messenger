import styled from 'styled-components';

export const getColorFrom = ({ id }) =>
  ({ 1: '#52bc77', 2: '#ffb800', 3: '#f21313' }[id]);

export default (component) => styled(component)`
  padding: 1rem 5rem 1rem 1rem;
  position: relative;
  transition: background-color 0.25s ease;

  &:hover {
    background-color: #fdf1bc;
  }

  & > {
    dl {
      & > {
        dt {
          display: none;
        }
      }

      &[aria-roledescription='difficulty'] {
        position: absolute;
        right: 1rem;
        top: 1rem;
        z-index: 1;

        a {
          background-color: ${({ difficulty }) => getColorFrom(difficulty)};
          border-radius: 50%;
          box-shadow: 0 8px 8px -4px #eeecfc;
          display: block;
          height: 1rem;
          overflow: hidden;
          text-indent: -100vw;
          width: 1rem;
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
          background-color: #eeecfc;
          border-radius: 50%;
          box-shadow: 0 8px 8px -4px #eeecfc;
          color: #aaa0f1;
          display: flex;
          font-size: 1.25rem;
          font-weight: 900;
          height: 3rem;
          justify-content: center;
          letter-spacing: -0.1rem;
          width: 3rem;
        }
      }

      &[aria-roledescription='question'] {
        dd {
          color: #221a5a;
          font-size: 1rem;
          font-weight: 700;
        }
      }

      &[aria-roledescription='hint'] {
        margin-top: 0.5rem;

        dd {
          color: #221a5a;
          font-size: 0.9rem;
          font-weight: 500;
        }
      }

      &[aria-roledescription='tags'] {
        dd {
          li {
            display: inline-flex;
            margin-top: 0.5rem;

            &:not(:last-of-type) {
              margin-right: 0.5rem;
            }
          }
        }
      }
    }
  }
`;
