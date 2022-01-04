import property from 'lodash/property';
import styled from 'styled-components';

export default (component) => styled(component)`
  h3 {
    display: none;
  }

  ul {
    background-color: #eeecfc;
    border-radius: 1rem;
    box-shadow: 0 8px 8px -4px #eeecfc;
    padding: 1rem;
  }

  li {
    &:not(:first-child) {
      margin-top: 1rem;
    }

    &[aria-roledescription='call'] {
      a:before {
        content: 'video_call';
      }
    }

    &[aria-roledescription='preparation'] {
      a:before {
        content: 'bar_chart';
      }
    }

    &[aria-roledescription='info'] {
      a:before {
        content: '3p';
      }
    }

    a {
      align-items: center;
      background-color: #4c3bcc;
      border-radius: 0.5rem;
      color: #eeecfc;
      display: inline-flex;
      font-size: 0;
      font-weight: 500;
      padding: 0.5rem;
      text-decoration: none;
      text-transform: uppercase;

      &:before {
        display: inline-flex;
        font-family: ${property('theme.typography.icons')};
        font-size: 1.25rem;
        text-transform: none;
      }
    }
  }
`;
