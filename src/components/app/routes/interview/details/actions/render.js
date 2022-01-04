export default ({ className }) => (
  <nav className={className}>
    <h3>Actions:</h3>
    <ul>
      <li aria-roledescription="call">
        <a href="/" title="Start interview">
          Start interview
        </a>
      </li>
      <li aria-roledescription="preparation">
        <a href="/" title="See interview insights">
          See interview insights
        </a>
      </li>
      <li aria-roledescription="info">
        <a href="/" title="See candidate's info">
          See candidate's info
        </a>
      </li>
    </ul>
  </nav>
);
