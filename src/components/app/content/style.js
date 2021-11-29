import styled from 'styled-components';

export default (component) => styled(component)`
  background-color: #fafafb;
  display: flex;
  flex: 1;

  section {
    border-radius: 1rem;
    flex: 1;

    &[aria-roledescription='primary'] {
      background-color: #fff;
      box-shadow: 0 8px 8px -4px #eeecfc;
      margin: 2rem 1rem 2rem 2rem;
    }

    &[aria-roledescription='secondary'] {
      margin: 2rem 2rem 2rem 1rem;
    }
  }
`;
