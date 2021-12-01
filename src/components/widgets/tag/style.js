import styled from 'styled-components';

export default (component) => styled(component)`
  background-color: #2a2171;
  border-radius: 0.25rem;
  color: #fff;
  display: inline-flex;
  font-size: 0.75rem;
  text-decoration: none;

  dfn {
    padding: 0.25rem 0.5rem 0.25rem 0;

    &:before {
      background-color: #ccc6f6;
      border-radius: 0.25rem 0 0 0.25rem;
      color: #2a2171;
      content: attr(title);
      margin-right: 0.5rem;
      padding: 0.25rem;
    }
  }
`;
