import { Candidate, Feedback, Video } from 'components/widgets';

import use from './hooks';

export default ({ className, ...props }) => {
  const interview = use(props);

  return (
    <section className={className}>
      <Video {...interview} />
      <Feedback {...interview} />
      <Candidate {...interview} />
    </section>
  );
};
