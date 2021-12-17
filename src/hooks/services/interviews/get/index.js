import { useCallback } from 'react';

import { useExpertlead } from 'hooks/clients';

import { format } from './helpers';

export default () => {
  const { get } = useExpertlead();
  const API = useCallback(
    ({ interview }) => get(`/interviews/${interview}`).then(format),
    [get]
  );

  return API;
};
