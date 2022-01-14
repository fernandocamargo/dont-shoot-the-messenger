import { useCallback } from 'react';

import { useLatency } from 'hooks';

import { onToggle } from './helpers';

export default ({ add, ...props }) => {
  const { pending: adding, watch } = useLatency();
  const onClick = useCallback(
    (event) => {
      watch(add());

      return event;
    },
    [add, watch]
  );

  return { adding, onClick, onToggle, ...props };
};
