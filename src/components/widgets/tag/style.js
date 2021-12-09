import styled from 'styled-components';

export const getBackgroundColor = ({ details: { id } }) =>
  ({
    DifficultyEasy: '#41965f',
    DifficultyMedium: '#c8a81b',
    DifficultyHard: '#c10f0f',
  }[id] || '#2a2171');

export const getColor = ({ details: { id } }) => ({}[id] || '#fff');

export default (component) => styled(component)`
  background-color: ${getBackgroundColor};
  border-radius: 0.25rem;
  color: ${getColor};
  display: inline-flex;
  font-size: 0.65rem;
  overflow: hidden;
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
