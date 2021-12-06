import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { useAuthentication } from 'hooks';

export default (route) => {
  const from = useLocation();
  const { logged: allowed } = useAuthentication();
  const state = useMemo(() => ({ from }), [from]);

  return { allowed, route, state };
};
