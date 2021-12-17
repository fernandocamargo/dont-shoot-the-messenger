import { isEqual } from 'lodash';
import { useCallback, useEffect, useRef } from 'react';

import { ESC } from 'constants/keyboard';
import { focus } from 'helpers/form';

export default ({ close, ...props }) => {
  const ref = useRef();
  const onSubmit = useCallback((event) => {
    event.preventDefault();

    console.log('search();');

    return event;
  }, []);

  useEffect(() => {
    const press = (event) => isEqual(event.keyCode, ESC) && close(event);
    const check = (event) => {
      const { target } = event;
      const root = target.closest('[aria-busy]');
      const closeable = isEqual(target, root) || !root?.contains(target);

      return closeable && close(event);
    };

    document.addEventListener('click', check, false);
    document.addEventListener('keydown', press, false);

    return () => [
      document.removeEventListener('click', check, false),
      document.removeEventListener('keydown', press, false),
    ];
  }, [close]);

  useEffect(() => focus(ref.current), []);

  return { close, onSubmit, ref, ...props };
};
