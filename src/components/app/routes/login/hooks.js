import get from 'lodash/get';
import { useCallback, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { focus } from 'helpers/form';
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
      const { elements } = form;
      const fields = Array.from(elements);
      const origin = get(location, ['state', 'from', 'pathname'], '/');
      const data = new FormData(form);
      const credentials = Object.fromEntries(data);
      const debug = (code) =>
        ({
          'users.password-invalid': {
            message: 'Invalid password.',
            name: 'password',
          },
          'user.not-found': { message: 'Invalid e-mail.', name: 'email' },
        }[code]);

      const dismiss = (element) => element.setCustomValidity('');
      const reset = () => fields.forEach(dismiss);
      const listen = (element) =>
        element.addEventListener('input', reset, {
          capture: false,
          once: true,
        });
      const redirect = () => navigate(origin, { replace: true });
      const warn = ({
        response: {
          data: { message: error },
        },
      }) => {
        const { name, message } = debug(error);
        const validity = [message, 'Please check your data.'].join(' ');
        const { [name]: field } = elements;

        return [
          field.setCustomValidity(validity),
          form.reportValidity(),
          fields.forEach(listen),
        ];
      };

      event.preventDefault();
      authenticate(credentials)
        .then(authentication.login)
        .then(redirect)
        .catch(warn);

      return event;
    },
    [authentication.login, authenticate, location, navigate]
  );

  useEffect(() => focus(ref.current), []);

  return { onSubmit, ref };
};
