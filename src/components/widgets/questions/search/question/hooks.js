import { useCallback } from 'react';

import { useLatency } from 'hooks';

export default ({ add, ...props }) => {
  const { pending: adding, watch } = useLatency();
  const onClick = useCallback(
    (event) => {
      event.preventDefault();
      watch(add());

      return event;
    },
    [add, watch]
  );

  return { adding, onClick, ...props };
};
