import styled from 'styled-components';

export default (component) => styled(component)`
  display: flex;
  border-radius: 1rem;
  flex-direction: column;
  height: calc(100vh - 2rem);
  overflow: hidden;
`;
