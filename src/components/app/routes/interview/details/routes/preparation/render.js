import { Candidate, Feedback, Stats } from 'components/widgets';

export default ({ className, interview }) => (
  <section className={className}>
    <Stats {...interview} />
    <Feedback {...interview} />
    <Candidate {...interview} />
  </section>
);
