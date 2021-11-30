export default ({ className }) => (
  <header className={className}>
    <h2>
      <a href="/" title="expertlead">
        expertlead
      </a>
    </h2>
    <nav>
      <h3>Navigate through:</h3>
      <ul>
        <li aria-roledescription="dashboard">
          <a href="/" title="Dashboard">
            Dashboard
          </a>
        </li>
        <li aria-roledescription="schedule">
          <a href="/" title="Schedule">
            Schedule
          </a>
        </li>
        <li aria-roledescription="call" aria-current="page">
          <a href="/" title="Call">
            Call
          </a>
        </li>
        <li aria-roledescription="profile">
          <dl>
            <dt>
              <a href="/" title="Profile">
                Profile
              </a>
            </dt>
            <dd>
              <dl>
                <dt>Full name</dt>
                <dd>
                  <a href="/" title="Fernando Camargo Del Buono">
                    Fernando Camargo Del Buono
                  </a>
                </dd>
              </dl>
            </dd>
          </dl>
        </li>
      </ul>
    </nav>
  </header>
);
