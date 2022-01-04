import { Route, Routes } from 'components';
import { Candidate, Feedback, Questions, Stats } from 'components/widgets';

import { Call } from './routes';

export default ({ className, interview }) => (
  <div className={className}>
    <Questions {...interview} />
    <Routes>
      <Route
        element={
          <section aria-roledescription="secondary">
            <Stats {...interview} />
            <Feedback {...interview} />
            <Candidate {...interview} />
          </section>
        }
        index
      />
      <Route
        element={
          <section aria-roledescription="secondary">
            <Call />
          </section>
        }
        path="call"
      />
    </Routes>
  </div>
);
