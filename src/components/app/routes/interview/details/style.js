import styled from 'styled-components';

import Actions from './actions';

export default (component) => styled(component)`
  display: flex;
  flex: 1;

  & > {
    section {
      border-radius: 1rem;
      flex: 1;

      &:first-of-type {
        margin: 2rem 1rem 2rem 2rem;
      }

      &:last-of-type {
        margin: 2rem 1rem 2rem 1rem;
      }
    }

    ${Actions} {
      margin: 2rem 2rem 2rem 1rem;
    }
  }
`;
