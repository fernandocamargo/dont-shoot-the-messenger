import styled from 'styled-components';

export default (component) => styled(component)`
  padding: 5rem 1rem 1.5rem 1rem;
  position: relative;
  transition: background-color 0.1s ease;

  & > {
    dl {
      position: relative;
      z-index: 1;

      & > {
        dt {
          display: none;
        }
      }

      &[aria-roledescription='text'] {
        dd {
          color: #221a5a;
          font-size: 1rem;
          font-weight: 700;
        }
      }

      &[aria-roledescription='hint'],
      &[aria-roledescription='answer'] {
        margin-top: 1rem;

        dd {
          color: #221a5a;
          font-size: 0.85rem;
          font-weight: 500;
        }
      }

      &[aria-roledescription='tags'] {
        display: inline-flex;
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
  }
`;
