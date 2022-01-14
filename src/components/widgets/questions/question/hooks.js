import { useMemo } from 'react';

import { onToggle } from './helpers';

export default (props) => {
  const score = useMemo(
    () => !!props.score && Number(props.score).toFixed(1),
    [props.score]
  );

  return { ...props, onToggle, score };
};
