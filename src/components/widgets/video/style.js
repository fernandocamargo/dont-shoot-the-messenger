import styled from 'styled-components';

export default (component) => styled(component)`
  background-color: #cda;
  position: relative;
  flex: 1;

  & > {
    div {
      display: block !important;
      height: 100% !important;
      position: relative !important;
      top: 0 !important;
      right: 0 !important;
      width: 100% !important;

      .react-draggable {
        height: 100%;
      }

      .drag-video {
        pointer-events: none;
        z-index: 1;
      }

      .full-view1 {
        height: 100% !important;
        min-width: 100% !important;
        width: 100% !important;
      }

      .jss11 {
        border-radius: 0;
        height: calc(100% - 4px);
      }

      .jss15 {
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      .jss19 {
        height: calc(100% - 42px) !important;
        width: 100% !important;
      }

      .jss20:last-of-type {
        height: calc(100% - 37px);
      }

      .jss25 {
        display: none;
      }

      .jss27 {
        pointer-events: auto;
      }

      .jss38 {
        width: 100% !important;
      }
    }
  }
`;
