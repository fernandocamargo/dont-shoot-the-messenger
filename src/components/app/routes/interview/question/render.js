import { useCallback } from 'react';

import Details from './details';
import Placeholder from './placeholder';

export default ({ questions: { active }, className }) => {
  const Display = useCallback(
    (display) =>
      active ? (
        <Details {...active} {...display} />
      ) : (
        <Placeholder {...display} />
      ),
    [active]
  );

  return <Display className={className} />;
};
