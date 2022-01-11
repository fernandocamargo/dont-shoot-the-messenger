import { useMemo } from 'react';

import use from './hooks';

export default ({ className, ...props }) => {
  const {
    details: { label },
    active,
    onClick,
    ...tag
  } = use(props);
  const entity = useMemo(
    () =>
      ({
        'sub-dimension': 'Sub-dimension',
        difficulty: 'Difficulty',
        dimension: 'Dimension',
        keyword: 'Keywords',
        skill: 'Skill',
      }[tag.entity]),
    [tag.entity]
  );

  return (
    <a
      aria-current={active}
      className={className}
      href="/"
      onClick={onClick}
      title={label}
    >
      <dfn title={entity}>{label}</dfn>
    </a>
  );
};
