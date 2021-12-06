import get from 'lodash/get';
import { useCallback, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAuthentication } from 'hooks';
import { useLogin } from 'hooks/services/authentication';

export default () => {
  const ref = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const authentication = useAuthentication();
  const authenticate = useLogin();
  const onSubmit = useCallback(
    (event) => {
      const { currentTarget: form } = event;
      const origin = get(location, ['state', 'from', 'pathname'], '/');
      const data = new FormData(form);
      const credentials = Object.fromEntries(data);
      const redirect = () => navigate(origin, { replace: true });

      event.preventDefault();

      authenticate(credentials)
        .then(authentication.login)
        .then(redirect)
        .catch((error) => console.log('failure();', { error }));

      return event;
    },
    [authentication.login, authenticate, location, navigate]
  );

  return { onSubmit, ref };
};
