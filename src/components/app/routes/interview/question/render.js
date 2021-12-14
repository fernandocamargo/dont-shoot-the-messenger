import { useCallback } from 'react';

import use from './hooks';
import Details from './details';
import Placeholder from './placeholder';

export default ({ className, ...props }) => {
  const question = use(props);
  const Display = useCallback(
    (display) =>
      question ? <Details {...display} /> : <Placeholder {...display} />,
    [question]
  );

  return <Display className={className} {...question} />;
};
