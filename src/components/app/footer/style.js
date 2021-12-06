import styled from 'styled-components';

export default (component) => styled(component)`
  align-items: center;
  background-color: #bbb3f3;
  border-radius: 0.5rem 0.5rem 0 0;
  display: flex;
  bottom: 0;
  left: 50%;
  padding: 0.5rem 1rem 0 1rem;
  position: absolute;
  transform: translateX(-50%);

  nav a,
  p {
    color: #4434b5;
    font-size: 0.75rem;
  }

  nav {
    h3 {
      display: none;
    }

    ul {
      display: flex;
    }

    li {
      margin-left: 1rem;
    }
  }
`;
