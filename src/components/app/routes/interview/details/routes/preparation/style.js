import styled from 'styled-components';

import { Candidate, Feedback, Stats } from 'components/widgets';

export default (component) => styled(component)`
  display: grid;
  gap: 2em;
  grid-auto-columns: 1fr minmax(min-content, max-content);
  grid-auto-rows: 1fr minmax(auto, 40%);
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

  ${Stats} {
    grid-area: stats;
  }

  ${Feedback} {
    grid-area: feedback;
  }

  ${Candidate} {
    grid-area: candidate;
  }
`;
