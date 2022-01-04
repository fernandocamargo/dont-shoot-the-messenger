export default ({ className }) => (
  <article className={className}>
    <h2>Milad Miri</h2>
    <dl aria-roledescription="title">
      <dt>Title</dt>
      <dd>Go-go boy 😂</dd>
    </dl>
    <dl aria-roledescription="location">
      <dt>Location</dt>
      <dd>تهران‎ Tehrān, Iran</dd>
    </dl>
    <dl aria-roledescription="website">
      <dt>Website</dt>
      <dd>
        <a
          href="https://www.linkedin.com/in/milad-miri-4b693740/"
          title="LinkedIn"
          target="_blank"
          rel="noreferrer"
        >
          linkedin.com/in/milad-miri-4b693740/
        </a>
      </dd>
    </dl>
    <dl aria-roledescription="email">
      <dt>E-mail</dt>
      <dd>
        <a
          href="mailto:m.miri@expertlead.de"
          title="m.miri@expertlead.de"
          target="_blank"
          rel="noreferrer"
        >
          m.miri@expertlead.de
        </a>
      </dd>
    </dl>
    <nav>
      <h3>Actions:</h3>
      <ul>
        <li aria-roledescription="download">
          <a href="/" title="Download resumé">
            Download resumé
          </a>
        </li>
      </ul>
    </nav>
  </article>
);
