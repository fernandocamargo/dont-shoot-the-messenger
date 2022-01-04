import { useCallback } from 'react';

import { useExpertlead } from 'hooks/clients';

export default () => {
  const { post } = useExpertlead();
  const API = useCallback(
    ({ interview }) => post(`/interviews/${interview}/livecoding`),
    [post]
  );

  return API;
};
