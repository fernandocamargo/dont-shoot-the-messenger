import { useEffect } from 'react';

import { scroll } from 'helpers/dom';

import { anchor } from './helpers';

export default (props, ref) => {
  useEffect(() => void scroll({ element: ref.current, anchor }), [ref]);

  return props;
};
