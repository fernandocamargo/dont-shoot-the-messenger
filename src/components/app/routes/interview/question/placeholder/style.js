import property from 'lodash/property';
import styled from 'styled-components';

export default (component) => styled(component)`
  display: flex;
  align-items: center;
  justify-content: center;

  & > {
    p {
      align-items: center;
      color: #ccc6f6;
      display: flex;
      flex-direction: column;
      font-size: 1.25rem;
      height: calc(15vmax - 2rem);
      justify-content: center;
      padding: 1rem;
      text-align: center;
      width: calc(15vmax - 2rem);

      &:first-of-type {
        &:before {
          content: 'checklist_rtl';
          font-family: ${property('theme.typography.icons')};
          font-size: 5rem;
          display: block;
        }
      }
    }
  }
`;
