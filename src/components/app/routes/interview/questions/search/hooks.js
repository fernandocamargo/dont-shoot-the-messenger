import { isEqual } from 'lodash';
import { useCallback, useEffect, useRef } from 'react';

import { ESC } from 'constants/keyboard';
import { focus } from 'helpers/form';

export default ({ toggle, ...props }) => {
  const ref = useRef();
  const onSubmit = useCallback((event) => {
    event.preventDefault();

    console.log('search();');

    return event;
  }, []);

  useEffect(() => {
    const press = (event) => isEqual(event.keyCode, ESC) && toggle(event);
    const check = (event) =>
      !ref?.current?.contains(event.target) && toggle(event);

    document.addEventListener('click', check, false);
    document.addEventListener('keydown', press, false);

    return () => [
      document.removeEventListener('click', check, false),
      document.removeEventListener('keydown', press, false),
    ];
  }, [toggle]);

  useEffect(() => focus(ref.current), []);

  return { onSubmit, ref, toggle, ...props };
};
