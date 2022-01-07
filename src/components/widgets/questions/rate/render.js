import { useCallback } from 'react';

import Details from './details';
import Placeholder from './placeholder';

export default ({ className, details }) => {
  const Display = useCallback(
    (props) =>
      details ? (
        <Details {...props} {...details} />
      ) : (
        <Placeholder {...props} />
      ),
    [details]
  );

  return <Display className={className} />;
};
