import { useCallback, useState } from 'react';

import { reverse } from 'helpers/boolean';
import { useAuthentication } from 'hooks';

export default () => {
  const [active, setActive] = useState(false);
  const authentication = useAuthentication();
  const logout = useCallback(
    (event) => {
      event.preventDefault();

      return authentication.logout();
    },
    [authentication]
  );
  const toggle = useCallback((event) => {
    setActive(reverse);

    return event;
  }, []);
  const onClick = useCallback(
    (event) => {
      event.preventDefault();

      return toggle(event);
    },
    [toggle]
  );

  return { ...authentication, active, logout, onClick, toggle };
};
