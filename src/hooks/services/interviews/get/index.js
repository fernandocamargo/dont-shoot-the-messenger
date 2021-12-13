import { useCallback } from 'react';

import { useExpertlead } from 'hooks/clients';

export default () => {
  const { get } = useExpertlead();
  const API = useCallback(
    ({ interview }) => get(`/interviews/${interview}`),
    [get]
  );

  return API;
};
