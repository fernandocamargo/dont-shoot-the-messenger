import property from 'lodash/property';
import styled from 'styled-components';

export default (component) => styled(component)`
  align-items: center;
  background-color: #fff;
  border-bottom: solid 1px #ebebf1;
  display: flex;
  position: relative;

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
        justify-content: center;

        & > {
          li {
            &:not([aria-roledescription='profile']) {
              margin-right: 4rem;
              padding-bottom: 1rem;
              position: relative;

              &[aria-current='page'] a,
              a:hover {
                color: #5542e3;

                &:after {
                  height: 3px;
                }
              }

              &[aria-current='page'] a {
                pointer-events: none;
              }

              a {
                align-items: center;
                color: #94949a;
                display: flex;
                text-decoration: none;
                transition: color 0.1s linear;

                &:before {
                  display: inline-flex;
                  font-family: ${property('theme.typography.icons')};
                  font-size: 1.5rem;
                  margin-right: 0.5rem;
                }

                &:after {
                  background-color: #5542e3;
                  border-radius: 1rem 1rem 0 0;
                  bottom: 0;
                  content: '';
                  display: block;
                  height: 0;
                  left: 0;
                  position: absolute;
                  transition: height 0.1s linear;
                  width: 100%;
                }
              }
            }

            &[aria-roledescription='dashboard'] {
              a:before {
                content: 'dashboard_customize';
              }
            }

            &[aria-roledescription='call'] {
              a:before {
                content: 'ring_volume';
              }
            }

            &[aria-roledescription='schedule'] {
              a:before {
                content: 'event_available';
              }
            }

            &[aria-roledescription='profile'] {
              position: absolute;
              right: 2rem;
              top: 50%;
              transform: translateY(-50%);

              & > {
                dl {
                  align-items: center;
                  display: flex;

                  & > {
                    dt {
                      a {
                        background-image: url('data:image/jpeg;base64,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');
                        background-size: cover;
                        border-radius: 50%;
                        display: block;
                        height: 2rem;
                        margin-right: 0.5rem;
                        overflow: hidden;
                        text-indent: -100vw;
                        width: 2rem;
                      }
                    }

                    dd {
                      dt {
                        display: none;
                      }

                      a {
                        align-items: center;
                        color: #2a2171;
                        display: flex;
                        font-size: 0.9rem;
                        font-weight: 700;
                        text-decoration: none;

                        &:after {
                          color: #94949a;
                          content: 'arrow_drop_down';
                          display: inline-flex;
                          font-family: ${property('theme.typography.icons')};
                          font-size: 1rem;
                          margin-left: 0.5rem;
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
  }
`;
