import styled from 'styled-components';

export default (component) => styled(component)`
  display: grid;
  gap: 2em;
  grid-auto-columns: 1fr minmax(min-content, max-content);
  grid-auto-rows: 1fr minmax(min-content, max-content);
  grid-template-areas:
    'stats stats'
    'feedback candidate';

  article {
    background-color: #fff;
    border: solid 1px #eeecfc;
    border-radius: 1rem;
    box-shadow: 0 8px 8px -4px #eeecfc;
    overflow: hidden;
  }
`;
