import { useEffect } from 'react';

import { scroll } from 'helpers/dom';

export default (props, ref) => {
  useEffect(() => {
    scroll({ element: ref.current, selector: 'li' });
  }, [ref]);

  return props;
};
