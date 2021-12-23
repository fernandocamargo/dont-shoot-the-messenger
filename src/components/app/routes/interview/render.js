/*
import use from './hooks';
import Candidate from './candidate';
import Feedback from './feedback';
import Question from './question';
import Questions from './questions';
import Stats from './stats';

export default ({ className, ...props }) => {
  const interview = use(props);

  return (
    <div className={className}>
      <section aria-roledescription="primary">
        <Questions {...interview} />
        <Question {...interview} />
      </section>
      <section aria-roledescription="secondary">
        <Stats />
        <Feedback />
        <Candidate />
      </section>
    </div>
  );
};
*/

import { Link } from 'react-router-dom';

import use from './hooks';
import Candidate from './candidate';
import Feedback from './feedback';
import Stats from './stats';

export default ({ className, ...props }) => {
  const { fetching, state } = use(props);

  return (
    <div className={className}>
      <section aria-roledescription="primary">
        <h1>Interview {fetching && '(loading...)'}</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/interview/46a68d2d-09a4-484e-a51c-0d3ae207ba20">
              Interview
            </Link>
          </li>
          <li>
            <Link to="/interview/46a68d2d-09a4-484e-a51c-0d3ae207ba20/question/a9a69242-e217-4f5e-b2c4-3014bd7d78c9">
              Question
            </Link>
          </li>
          <li>
            <Link to="/interview/46a68d2d-09a4-484e-a51c-0d3ae207ba20/review">
              Review
            </Link>
          </li>
          <li>
            <Link to="/interview/46a68d2d-09a4-484e-a51c-0d3ae207ba20/report">
              Report
            </Link>
          </li>
        </ul>
        {!!state && (
          <pre style={{ maxHeight: '50vh', overflowY: 'scroll' }}>
            {JSON.stringify(state, null, 2)}
          </pre>
        )}
      </section>
      <section aria-roledescription="secondary">
        <Stats />
        <Feedback />
        <Candidate />
      </section>
    </div>
  );
};
