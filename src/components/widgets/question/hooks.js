import { useMemo } from 'react';

export default ({ compact, ...props }) => {
  const limit = useMemo(() => !!compact && props.limit, [props.limit, compact]);
  const score = useMemo(
    () => !!props.score && Number(props.score).toFixed(1),
    [props.score]
  );

  return { ...props, limit, score };
};
