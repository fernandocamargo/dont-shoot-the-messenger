import { useCallback, useMemo } from 'react';

import { useAuthentication } from 'hooks';

export default () => {
  const {
    profile: { firstName, lastName },
    logged,
    ...authentication
  } = useAuthentication();
  const name = useMemo(
    () => [firstName, lastName].join(' '),
    [firstName, lastName]
  );
  const logout = useCallback(
    (event) => {
      event.preventDefault();

      return authentication.logout();
    },
    [authentication]
  );

  return { logged, logout, name };
};
