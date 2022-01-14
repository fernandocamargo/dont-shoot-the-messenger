import { Link } from 'react-router-dom';

export default ({ className, url }) => (
  <li aria-roledescription="report" className={className}>
    <Link title="Report question" to={url.itself}>
      Report
    </Link>
  </li>
);
