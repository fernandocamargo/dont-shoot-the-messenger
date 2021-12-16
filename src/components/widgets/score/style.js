import styled from 'styled-components';

export default (component) => styled(component)`
  border-radius: 0 0 1rem 0;
  border-top: solid 1px #eeecfc;
  grid-area: score;
  overflow: hidden;
  width: calc(100% + 1px);

  legend,
  button {
    display: none;
  }

  fieldset {
    & > {
      div {
        &[aria-roledescription='field'] {
          display: flex;

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
