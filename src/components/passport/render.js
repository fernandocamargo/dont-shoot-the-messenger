import { Redirect } from 'components';

import use from './hooks';

export default ({ children, ...props }) => {
  const { logged, state } = use(props);

  return logged ? children : <Redirect to="/login" state={state} />;
};
