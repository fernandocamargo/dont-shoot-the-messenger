import styled from 'styled-components';

export default (component) => styled(component)`
  padding: 1rem;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #fdf1bc;
  }

  & > {
    dl {
      & > {
        dt {
          display: none;
        }
      }
    }
  }
`;
