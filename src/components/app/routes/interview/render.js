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
        <Question />
      </section>
      <section aria-roledescription="secondary">
        <Stats />
        <Feedback />
        <Candidate />
      </section>
    </div>
  );
};
