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
        difficulty: 'Difficulties',
        skill: 'Skills',
        'sub-dimension': 'Sub-dimensions',
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
