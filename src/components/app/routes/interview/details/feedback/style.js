import property from 'lodash/property';
import styled from 'styled-components';

export default (component) => styled(component)`
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
`;
