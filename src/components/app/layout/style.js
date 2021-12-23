import styled from 'styled-components';

export default (component) => styled(component)`
  display: flex;
  border-radius: 1rem;
  flex-direction: column;
  height: calc(100vh - 2rem);
  overflow: hidden;
  position: relative;

  main {
    background-color: #fafafb;
    display: flex;
    padding-bottom: 2rem;
    flex: 1;
  }
`;
