import { useMemo } from 'react';

export default ({ details: { label }, className, ...props }) => {
  const entity = useMemo(
    () =>
      ({
        'sub-dimension': 'Sub-dimension',
        difficulty: 'Difficulty',
        skill: 'Skill',
      }[props.entity]),
    [props.entity]
  );

  return (
    <a className={className} href="/" title={label}>
      <dfn title={entity}>{label}</dfn>
    </a>
  );
};
