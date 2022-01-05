import get from 'lodash/get';
import { useMemo, useState } from 'react';

import * as reducers from './reducers';

export default ({ charts, ...props }) => {
  const [{ index }] = useState(reducers.initialize({ charts }));
  const { parser: parse, type } = useMemo(
    () => get(charts, index),
    [charts, index]
  );
  const data = useMemo(() => parse(props), [parse, props]);

  return { data, type };
};
