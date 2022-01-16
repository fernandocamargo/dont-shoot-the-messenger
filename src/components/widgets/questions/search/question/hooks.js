import { useCallback } from 'react';

import { useLatency } from 'hooks';

import { onToggle } from './helpers';

export default ({ active, add, remove, ...props }) => {
  const { pending: saving, watch } = useLatency();
  const save = useCallback(
    () => (active ? remove() : add()),
    [active, add, remove]
  );
  const onClick = useCallback(
    (event) => {
      watch(save());

      return event;
    },
    [save, watch]
  );

  return { ...props, onClick, onToggle, saving };
};
