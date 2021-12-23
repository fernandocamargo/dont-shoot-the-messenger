import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { useAuthentication } from 'hooks';

export default () => {
  const from = useLocation();
  const { logged } = useAuthentication();
  const state = useMemo(() => ({ from }), [from]);

  return { logged, state };
};
