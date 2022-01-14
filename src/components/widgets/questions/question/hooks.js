import { useMemo } from 'react';

export default (props) => {
  const score = useMemo(
    () => !!props.score && Number(props.score).toFixed(1),
    [props.score]
  );

  return { ...props, score };
};
