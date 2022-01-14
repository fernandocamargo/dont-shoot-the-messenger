import styled from 'styled-components';

export default (component) => styled(component)`
  a {
    &:after {
      content: 'clear';
    }
  }
`;
