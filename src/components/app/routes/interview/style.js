import styled from 'styled-components';

export default (component) => styled(component)`
  display: flex;
  flex: 1;

  section {
    border-radius: 1rem;
    flex: 1;

    &[aria-roledescription='primary'] {
      border: solid 1px #eeecfc;
      box-shadow: 0 8px 8px -4px #eeecfc;
      display: flex;
      margin: 2rem 1rem 2rem 2rem;

      article {
        flex: 1;
        position: relative;
      }
    }

    &[aria-roledescription='secondary'] {
      display: grid;
      gap: 2em;
      grid-auto-columns: 1fr minmax(min-content, max-content);
      grid-auto-rows: 1fr minmax(min-content, max-content);
      grid-template-areas:
        'stats stats'
        'feedback candidate';
      margin: 2rem 2rem 2rem 1rem;

      article {
        background-color: #fff;
        border: solid 1px #eeecfc;
        border-radius: 1rem;
        box-shadow: 0 8px 8px -4px #eeecfc;
        overflow: hidden;
      }
    }
  }
`;
