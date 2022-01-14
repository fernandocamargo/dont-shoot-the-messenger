import { useMemo } from 'react';

export default ({ compact, ...props }) => {
  const limit = useMemo(() => !!compact && props.limit, [props.limit, compact]);

  return { ...props, limit };
};
