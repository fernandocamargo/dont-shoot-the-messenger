import { NavLink } from 'react-router-dom';

import use from './hooks';

export default ({ className, ...props }) => {
  const { logout } = use(props);

  return (
    <ul className={className}>
      <li aria-roledescription="profile">
        <NavLink to="/profile" title="Edit profile">
          Edit profile
        </NavLink>
      </li>
      <li aria-roledescription="logout">
        <NavLink to="/logout" title="Logout" onClick={logout}>
          Logout
        </NavLink>
      </li>
    </ul>
  );
};
