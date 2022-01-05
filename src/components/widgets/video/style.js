import styled from 'styled-components';

export default (component) => styled(component)`
  flex: 1;

  & > {
    div {
      position: relative !important;

      .main-content {
        height: auto !important;
        width: auto !important;
      }
    }
  }
`;
