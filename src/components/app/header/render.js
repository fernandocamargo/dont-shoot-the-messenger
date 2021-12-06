import { Link, NavLink } from 'react-router-dom';

export default ({ className }) => (
  <header className={className}>
    <h2>
      <Link to="/" title="expertlead">
        expertlead
      </Link>
    </h2>
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
                  <Link to="/" title="Fernando Camargo Del Buono">
                    Fernando Camargo Del Buono
                  </Link>
                </dd>
              </dl>
            </dd>
          </dl>
        </li>
      </ul>
    </nav>
  </header>
);
