import { Link } from 'react-router-dom';

import use from './hooks';

export default ({ className, ...props }) => {
  const { logout, ref } = use(props);

  return (
    <ul className={className} ref={ref}>
      <li aria-roledescription="logout">
        <Link onClick={logout} title="Logout" to="/logout">
          Logout
        </Link>
      </li>
    </ul>
  );
};
