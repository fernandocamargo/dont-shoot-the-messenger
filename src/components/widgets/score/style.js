import styled from 'styled-components';

export default (component) => styled(component)`
  border-top: solid 1px #eeecfc;
  grid-area: score;
  position: relative;
  width: calc(100% + 1px);

  &[aria-busy='true'] {
    pointer-events: none;

    legend {
      display: block;
    }
  }

  legend,
  button {
    display: none;
  }

  legend {
    bottom: calc(100% + 0.5rem);
    font-size: 0.65rem;
    font-weight: 300;
    left: 0;
    position: absolute;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
  }

  fieldset {
    & > {
      div {
        &[aria-roledescription='field'] {
          border-radius: 0 0 1rem 0;
          display: flex;
          overflow: hidden;

          &,
          div,
          abbr {
            align-items: center;
            display: flex;
            justify-content: center;
          }

          div {
            &:not(:first-of-type) {
              abbr {
                width: 1.5rem;
              }

              &:nth-child(even) {
                position: relative;

                abbr:before {
                  color: rgba(0, 0, 0, 0.25);
                  content: attr(title);
                  left: 0;
                  position: absolute;
                  text-align: center;
                  top: 0.5rem;
                  width: 200%;
                }
              }
            }

            &:nth-child(1) {
              background-color: #eee;
            }

            &:nth-child(2) {
              background-color: #f0a9a0;
            }

            &:nth-child(3) {
              background: linear-gradient(to right, #f0a9a0, #f9ba7f);
            }

            &:nth-child(4) {
              background-color: #f9ba7f;
            }

            &:nth-child(5) {
              background: linear-gradient(to right, #f9ba7f, #ffd569);
            }

            &:nth-child(6) {
              background-color: #ffd569;
            }

            &:nth-child(7) {
              background: linear-gradient(to right, #ffd569, #a3d3b3);
            }

            &:nth-child(8) {
              background-color: #a3d3b3;
            }

            &:nth-child(9) {
              background: linear-gradient(to right, #a3d3b3, #a3d0d3);
            }

            &:nth-child(10),
            &:nth-child(11) {
              background-color: #a3d0d3;
            }
          }
        }
      }
    }
  }
`;
