import { useMemo } from 'react';

import { Candidate, Feedback, Stats } from 'components/widgets';

import use from './hooks';

export class Charts {
  static radar = (props) => ({
    series: [
      {
        data: [43, 19, 60, 35, 17, 10],
        name: 'Easy',
        color: '#52bc77',
      },
      {
        data: [50, 39, 42, 31, 26, 14],
        name: 'Medium',
        color: '#ffb800',
      },
      {
        data: [70, 59, 42, 71, 26, 14],
        name: 'Hard',
        color: '#f21313',
      },
    ],
    categories: [
      'Algorithms',
      'Computational Complexity Theory',
      'Data Structures',
      'Concepts & Patterns',
      'SQL',
      'Design Patterns',
    ],
  });
}

export default ({ className, ...props }) => {
  const interview = use(props);
  const charts = useMemo(
    () => [
      {
        default: true,
        label: 'Amount of questions per level of difficulty per sub-dimension',
        parser: Charts.radar,
        type: 'radar',
      },
    ],
    []
  );

  return (
    <section className={className}>
      <Stats charts={charts} {...interview} />
      <Feedback {...interview} />
      <Candidate {...interview} />
    </section>
  );
};
