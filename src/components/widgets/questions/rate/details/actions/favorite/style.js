import styled from 'styled-components';

export default (component) => styled(component)`
  a {
    pointer-events: none;

    &:after {
      content: 'star';
    }
  }
`;
