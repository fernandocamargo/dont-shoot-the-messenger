import { Redirect } from 'components';

import use from './hooks';

export default ({ route: Route, ...props }) => {
  const { allowed, route, state } = use(props);

  return allowed ? (
    <Route {...route} />
  ) : (
    <Redirect to="/login" state={state} />
  );
};
