import { Link, NavLink } from 'react-router-dom';

import use from './hooks';

export default ({ className, ...props }) => {
  const { logged, logout, name } = use(props);

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
            <li aria-roledescription="call" aria-current="page">
              <NavLink
                to="/interview/df9a5408-6cd7-4c2e-9d37-141c916a3911"
                title="Call"
              >
                Call
              </NavLink>
            </li>
            <li aria-roledescription="profile">
              <dl>
                <dt>
                  <Link to="/" title="Profile">
                    Profile
                  </Link>
                </dt>
                <dd>
                  <dl>
                    <dt>Full name</dt>
                    <dd>
                      <Link to="/" title={name}>
                        {name}
                      </Link>
                    </dd>
                    <dd>
                      <nav>
                        <h3>Actions:</h3>
                        <ul>
                          <li>
                            <a href="/logout" title="Logout" onClick={logout}>
                              Logout
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </dd>
                  </dl>
                </dd>
              </dl>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
