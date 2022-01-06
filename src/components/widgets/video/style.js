import styled from 'styled-components';

export default (component) => styled(component)`
  background-color: #cda;
  position: relative;
  flex: 1;

  & > {
    div {
      position: relative !important;
      top: 0 !important;
      right: 0 !important;
    }
  }

  &[aria-busy='true'] {
    border: dotted 1px red;
  }

  .drag-video {
    pointer-events: none;

    & > {
      * {
        &:last-child {
          display: none;
        }
      }
    }

    button {
      pointer-events: auto;
    }
  }
`;
