import { useCallback } from 'react';

import { useExpertlead } from 'hooks/clients';

export default () => {
  const { get } = useExpertlead();
  const API = useCallback(({ id }) => get(`/interviews/${id}`), [get]);

  return API;
};
