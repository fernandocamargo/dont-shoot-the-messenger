import { useMemo } from 'react';
import { Link } from 'react-router-dom';

import use from './hooks';
import Profile from './profile';

export default ({ className, ...props }) => {
  const {
    profile: { firstName, lastName },
    active,
    logged,
    logout,
    onClick,
    toggle,
  } = use(props);
  const name = useMemo(
    () => [firstName, lastName].join(' '),
    [firstName, lastName]
  );

  return (
    <header className={className}>
      <h2>
        <Link title="expertlead" to="/">
          expertlead
        </Link>
      </h2>
      {!!logged && (
        <nav>
          <h3>Navigate through:</h3>
          <ul>
            <li
              aria-roledescription="profile"
              aria-selected={active}
              role="tab"
            >
              <Link onClick={onClick} title={name} to="/">
                <dfn title="Current user">{name}</dfn>
              </Link>
              {!!active && <Profile logout={logout} toggle={toggle} />}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
