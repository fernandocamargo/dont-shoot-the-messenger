import { useMemo } from 'react';
import { Link, NavLink } from 'react-router-dom';

import use from './hooks';
import Profile from './profile';

export default ({ className, ...props }) => {
  const {
    profile: { firstName, lastName },
    active,
    logged,
    logout,
    toggle,
  } = use(props);
  const name = useMemo(
    () => [firstName, lastName].join(' '),
    [firstName, lastName]
  );

  return (
    <header className={className}>
      <h2>
        <Link to="/" title="expertlead">
          expertlead
        </Link>
      </h2>
      {!!logged && (
        <nav>
          <h3>Navigate through:</h3>
          <ul>
            <li aria-roledescription="dashboard">
              <NavLink to="/" title="Dashboard">
                Dashboard
              </NavLink>
            </li>
            <li aria-roledescription="schedule">
              <NavLink to="/interviews" title="Schedule">
                Schedule
              </NavLink>
            </li>
            <li aria-roledescription="call">
              <NavLink
                to="/interview/e529d351-a1fa-4286-89fa-127eece5505c"
                title="Call"
              >
                Call
              </NavLink>
            </li>
            <li
              aria-roledescription="profile"
              aria-selected={active}
              role="tab"
            >
              <a href="/" onClick={toggle} title={name}>
                <dfn title="Current user">{name}</dfn>
              </a>
              {!!active && <Profile logout={logout} toggle={toggle} />}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
