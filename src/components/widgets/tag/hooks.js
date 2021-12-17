import { useCallback } from 'react';

export default ({ toggle, ...props }) => {
  const onClick = useCallback(
    (event) => {
      event.preventDefault();

      toggle();

      return event;
    },
    [toggle]
  );

  return { ...props, onClick };
};
