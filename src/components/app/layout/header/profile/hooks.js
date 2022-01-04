import isEqual from 'lodash/isEqual';
import { useEffect, useRef } from 'react';

import { ESC } from 'constants/keyboard';

export default ({ logout, toggle }) => {
  const ref = useRef();

  useEffect(() => {
    const click = (event) =>
      !ref.current.parentNode.contains(event.target) ? toggle(event) : event;
    const press = (event) =>
      isEqual(event.keyCode, ESC) ? toggle(event) : event;

    document.addEventListener('click', click, false);
    document.addEventListener('keydown', press, false);

    return () => [
      document.removeEventListener('click', click, false),
      document.removeEventListener('keydown', press, false),
    ];
  }, [toggle]);

  return { logout, ref };
};
