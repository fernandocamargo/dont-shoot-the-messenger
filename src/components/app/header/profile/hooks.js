import { isEqual } from 'lodash';
import { useEffect } from 'react';

import { ESC } from 'constants/keyboard';

export default ({ logout, toggle }) => {
  useEffect(() => {
    const press = (event) => isEqual(event.keyCode, ESC) && toggle(event);

    document.addEventListener('click', toggle, false);
    document.addEventListener('keydown', press, false);

    return () => [
      document.removeEventListener('click', toggle, false),
      document.removeEventListener('keydown', press, false),
    ];
  }, [toggle]);

  return { logout, toggle };
};
