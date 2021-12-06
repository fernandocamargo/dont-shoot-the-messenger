import property from 'lodash/property';
import { create } from 'axios';
import { useMemo } from 'react';

import { useAuthentication } from 'hooks';

export const intercept = property('data');

export default () => {
  const { accessToken } = useAuthentication();
  const client = useMemo(() => {
    const instance = create({
      headers: {
        ...(!!accessToken && { Authorization: accessToken }),
        accept: 'application/json, text/plain, */*',
      },
      baseURL: 'http://localhost:8080',
    });

    instance.interceptors.response.use(intercept);

    return instance;
  }, [accessToken]);

  return client;
};
