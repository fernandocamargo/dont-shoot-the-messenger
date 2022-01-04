import styled from 'styled-components';

export default (component) => styled(component)`
  display: flex;
  flex: 1;

  & > {
    section {
      border-radius: 1rem;
      flex: 1;

      &:first-child {
        margin: 2rem 1rem 2rem 2rem;
      }

      &:last-child {
        margin: 2rem 2rem 2rem 1rem;
      }
    }
  }
`;
