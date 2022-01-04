import property from 'lodash/property';
import styled from 'styled-components';

import { milad } from 'mocks/images';

export default (component) => styled(component)`
  grid-area: candidate;
  padding: 1rem;

  h2 {
    align-items: center;
    color: #332788;
    display: flex;
    font-size: 1.25rem;
    font-weight: 900;

    &:before {
      background-image: url('data:image/jpeg;base64,${milad}');
      background-size: cover;
      border-radius: 0.5rem;
      content: '';
      display: inline-flex;
      height: 4rem;
      margin-right: 1rem;
      width: 4rem;
    }
  }

  dl {
    &[aria-roledescription='title'],
    &[aria-roledescription='location'],
    &[aria-roledescription='website'],
    &[aria-roledescription='email'] {
      align-items: center;
      color: #998dee;
      display: flex;
      flex-direction: row;
      margin-top: 1rem;

      dt {
        font-size: 0;

        &:before {
          display: inline-flex;
          font-family: ${property('theme.typography.icons')};
          font-size: 1.25rem;
        }
      }

      dd {
        font-weight: 700;
        margin-left: 0.5rem;

        a {
          color: #2a2171;
        }
      }
    }

    &[aria-roledescription='title'] {
      dt:before {
        content: 'sell';
      }
    }

    &[aria-roledescription='location'] {
      dt:before {
        content: 'place';
      }
    }

    &[aria-roledescription='website'] {
      dt:before {
        content: 'link';
      }
    }

    &[aria-roledescription='email'] {
      dt:before {
        content: 'email';
      }
    }
  }

  nav {
    margin-top: 1rem;

    h3 {
      display: none;
    }

    ul {
      display: flex;
      justify-content: center;
    }

    a {
      align-items: center;
      background-color: #4c3bcc;
      border-radius: 0.5rem;
      color: #eeecfc;
      display: inline-flex;
      font-size: 0.75rem;
      font-weight: 500;
      overflow: hidden;
      padding: 0.5rem 1rem;
      text-decoration: none;
      text-transform: uppercase;

      &:before {
        content: 'download';
        display: inline-flex;
        font-family: ${property('theme.typography.icons')};
        font-size: 1rem;
        margin-right: 0.25rem;
        text-transform: none;
      }
    }
  }
`;
