import isEqual from 'lodash/isEqual';
import { useCallback, useMemo, useRef, useState } from 'react';

import { reverse } from 'helpers/boolean';
import * as DOM from 'helpers/dom';

import { parser } from './helpers';

export default ({ source: full, limit }) => {
  const ref = useRef();
  const [expanded, setExpanded] = useState(false);
  const scan = useCallback(
    (node, input = { parent: node, reviewed: false, text: '' }) => {
      const parse = (stack, child) => {
        const { nodeType, nodeValue } = child;
        const remaining = Math.max(limit - stack.text.length, 0);
        const clear = () => {
          child.remove();

          return stack;
        };
        const review = () => {
          const revision = nodeValue.substring(0, remaining);
          const reviewed = !isEqual(nodeValue.length, revision.length);
          const text = reviewed ? `${revision.trim()}...` : nodeValue;

          child.replaceWith(document.createTextNode(text));

          return Object.assign(stack, {
            reviewed: stack.reviewed || reviewed,
            text: stack.text.concat(text),
          });
        };

        switch (true) {
          case !remaining:
            return clear();
          case isEqual(nodeType, 1):
            return scan(child, stack);
          case isEqual(nodeType, 3):
            return review();
          default:
            return stack;
        }
      };

      return Array.from(node.childNodes).reduce(parse, input);
    },
    [limit]
  );
  const { innerHTML: short, expandable } = useMemo(() => {
    const html = parser.parseFromString(full, 'text/html');
    const {
      parent: { innerHTML },
      reviewed,
    } = scan(html.body);

    return { expandable: reviewed && !!limit, innerHTML };
  }, [full, limit, scan]);
  const dangerouslySetInnerHTML = useMemo(
    () => ({ __html: !expandable || expanded ? full : short }),
    [expandable, expanded, full, short]
  );
  const scroll = useCallback(
    () => DOM.scroll({ element: ref.current, selector: 'li' }),
    []
  );
  const toogle = useCallback(
    (event) => [event.preventDefault(), setExpanded(reverse), scroll()],
    [scroll]
  );

  return { dangerouslySetInnerHTML, expandable, expanded, ref, toogle };
};
