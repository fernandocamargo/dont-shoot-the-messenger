import { Link } from 'react-router-dom';

export default ({ className, url }) => (
  <li className={className}>
    <Link title="Favorite question" to={url}>
      Favorite
    </Link>
  </li>
);
