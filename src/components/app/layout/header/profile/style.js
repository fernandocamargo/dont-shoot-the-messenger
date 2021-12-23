import property from 'lodash/property';
import styled from 'styled-components';

export default (component) => styled(component)`
  background-color: #fff;
  border-radius: 0 0 1rem 1rem;
  box-shadow: 0 8px 8px -4px #eeecfc;
  overflow: hidden;
  padding: 1rem 0;

  li {
    &[aria-roledescription='profile'] {
      a:before {
        content: 'settings';
      }
    }

    &[aria-roledescription='logout'] {
      a:before {
        content: 'logout';
      }
    }
  }

  a {
    align-items: center;
    color: #94949a;
    display: flex;
    padding: 1rem 2rem;
    position: relative;
    text-decoration: none;
    transition: color 0.1s linear;

    &[aria-current='page'],
    &:focus,
    &:hover {
      color: #5542e3;

      &:after {
        width: 3px;
      }
    }

    &:before {
      display: inline-flex;
      font-family: ${property('theme.typography.icons')};
      font-size: 1.5rem;
      margin-right: 0.5rem;
    }

    &:after {
      background-color: #5542e3;
      border-radius: 0 1rem 1rem 0;
      content: '';
      display: block;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      transition: width 0.1s linear;
      width: 0;
    }
  }
`;
