import { useCallback } from 'react';

import { useExpertlead } from 'hooks/clients';

export default () => {
  const { get } = useExpertlead();
  const API = useCallback(() => get(`/profile/me`), [get]);

  return API;
};
