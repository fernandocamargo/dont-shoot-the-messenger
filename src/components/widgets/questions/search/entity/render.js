import { useMemo } from 'react';

import Tag from 'components/widgets/tag';

export const renderItem = (filter) => (
  <li key={filter.details.id}>
    <Tag {...filter} />
  </li>
);

export default ({ className, entity, items }) => {
  const label = useMemo(
    () =>
      ({
        'sub-dimension': 'Sub-dimensions',
        difficulty: 'Difficulties',
        dimension: 'Dimensions',
        skill: 'Skills',
      }[entity]),
    [entity]
  );

  return (
    <dl className={className}>
      <dt>{label}</dt>
      <dd>
        <ul>{items.map(renderItem)}</ul>
      </dd>
    </dl>
  );
};
