import Candidate from './candidate';
import Feedback from './feedback';
import Question from './question';
import Questions from './questions';
import Stats from './stats';

export default ({ className, interview }) => (
  <div className={className}>
    <section aria-roledescription="primary">
      <Questions {...interview} />
      <Question {...interview} />
    </section>
    <section aria-roledescription="secondary">
      <Stats {...interview} />
      <Feedback {...interview} />
      <Candidate {...interview} />
    </section>
  </div>
);
