import { Link } from 'react-router-dom';

import use from './hooks';

export default ({ className, ...props }) => {
  const { onClick, removing, url } = use(props);

  return (
    <li aria-busy={removing} className={className}>
      <Link onClick={onClick} title="Remove question" to={url.next}>
        Remove
      </Link>
    </li>
  );
};
