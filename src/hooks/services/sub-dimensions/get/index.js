import { useCallback } from 'react';

import { useExpertlead } from 'hooks/clients';

import { format } from './helpers';

export default () => {
  const { get } = useExpertlead();
  const API = useCallback(
    ({ vertical }) =>
      get(`/sub-dimensions`, { params: { verticalID: vertical } }).then(format),
    [get]
  );

  return API;
};
