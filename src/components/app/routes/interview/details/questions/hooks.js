import { useCallback, useState } from 'react';

import { reverse } from 'helpers/boolean';
import { useLatency } from 'hooks';

export default ({ questions: { items: questions }, ...props }) => {
  const [active, setActive] = useState(false);
  const toggle = useCallback((event) => {
    event.preventDefault();

    setActive(reverse);

    return event;
  }, []);
  const preparing = useLatency();
  const prepare = useCallback(
    (event) => {
      event.preventDefault();

      preparing.watch(props.prepare());

      return event;
    },
    [preparing, props]
  );

  return { ...props, active, prepare, preparing, questions, toggle };
};
