import { create } from 'axios';
import { useCallback, useMemo } from 'react';

import { useAuthentication } from 'hooks';
import { isEqual } from 'lodash';

import { succeed } from './helpers';

export default () => {
  const {
    profile: { accessToken },
    logout,
  } = useAuthentication();
  const fail = useCallback(
    ({ response: { data, status } }) => {
      const expired = isEqual(status, 401);
      const error = expired ? logout() : data;

      return Promise.reject(error);
    },
    [logout]
  );
  const client = useMemo(() => {
    const instance = create({
      headers: {
        ...(!!accessToken && { Authorization: accessToken }),
        accept: 'application/json, text/plain, */*',
      },
      baseURL: 'http://localhost:8080',
    });

    instance.interceptors.response.use(succeed, fail);

    return instance;
  }, [accessToken, fail]);

  return client;
};
