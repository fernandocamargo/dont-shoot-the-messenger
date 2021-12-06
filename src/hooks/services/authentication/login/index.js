import { useCallback } from 'react';

import { useExpertlead } from 'hooks/clients';

export default () => {
  const { post } = useExpertlead();
  const API = useCallback(
    ({ email, password }) => post(`/auth`, { email, password }),
    [post]
  );

  return API;
};
