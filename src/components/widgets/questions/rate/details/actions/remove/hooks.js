import { useLatency } from 'hooks';
import { useCallback } from 'react';

export default ({ remove, ...props }) => {
  const { pending: removing, watch } = useLatency();
  const onClick = useCallback(
    (event) => {
      event.preventDefault();
      watch(remove());

      return event;
    },
    [remove, watch]
  );

  return { onClick, removing, ...props };
};
