import attempt from 'lodash/attempt';
import { useCallback, useMemo, useRef, useState } from 'react';

import { reverse } from 'helpers/boolean';

import { parser, scan } from './helpers';

export default ({ onToggle: callback, source: full, limit }) => {
  const ref = useRef();
  const [expanded, setExpanded] = useState(false);
  const { innerHTML: short, expandable } = useMemo(() => {
    const html = parser.parseFromString(full, 'text/html');
    const {
      parent: { innerHTML },
      reviewed,
    } = scan({ node: html.body, limit });

    return { expandable: reviewed && !!limit, innerHTML };
  }, [full, limit]);
  const dangerouslySetInnerHTML = useMemo(
    () => ({ __html: !expandable || expanded ? full : short }),
    [expandable, expanded, full, short]
  );
  const toogle = useCallback(
    (event) => [
      event.preventDefault(),
      setExpanded(reverse),
      attempt(callback, ref.current),
    ],
    [callback]
  );

  return {
    url: document.URL,
    dangerouslySetInnerHTML,
    expandable,
    expanded,
    ref,
    toogle,
  };
};
