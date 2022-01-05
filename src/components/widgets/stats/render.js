import { useCallback } from 'react';

import { Polar } from 'components/widgets/charts';

import use from './hooks';

export default ({ className, ...props }) => {
  const { data, type } = use(props);
  const Chart = useCallback(
    (chart) => {
      switch (type) {
        case 'radar':
        default:
          return <Polar {...chart} />;
      }
    },
    [type]
  );

  return (
    <article className={className}>
      <h2>Stats</h2>
      <Chart {...data} />
    </article>
  );
};
