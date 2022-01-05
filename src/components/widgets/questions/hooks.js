import intersectionWith from 'lodash/intersectionWith';
import isEqual from 'lodash/isEqual';
import find from 'lodash/find';
import update from 'immutability-helper';
import { useCallback, useMemo, useState } from 'react';

import { useLatency } from 'hooks';

import { normalize } from './helpers';
import * as reducers from './reducers';

export default ({ difficulties, link, questions, ...props }) => {
  const [state, setState] = useState(reducers.initialize());
  const toggle = useCallback((event) => {
    event.preventDefault();

    setState(reducers.toggle());

    return event;
  }, []);
  const preparing = useLatency();
  const prepare = useCallback(
    (event) => {
      event.preventDefault();

      preparing.watch(props.prepare());

      return event;
    },
    [preparing, props]
  );
  const select = useCallback(
    (stack, current, ...meta) => {
      const format = ({ difficulty, skills, subDimension, ...question }) => {
        const connect = (tag) =>
          update(tag, {
            active: { $set: !!find(state.filters, tag) },
            toggle: { $set: () => setState(reducers.filter({ tag })) },
          });
        const tags = [
          !!difficulty && {
            details: find(difficulties, { id: difficulty }),
            entity: 'difficulty',
          },
          !!skills && { details: normalize(skills.skill), entity: 'skill' },
          !!subDimension && {
            details: normalize(subDimension),
            entity: 'sub-dimension',
          },
        ]
          .filter(Boolean)
          .map(connect);

        return update(question, {
          tags: { $set: tags },
          url: { $set: link(question) },
        });
      };
      const next = format(current, ...meta);
      const matched =
        !state.filters.length ||
        !!intersectionWith(current.tags, state.filters, isEqual).length;

      return matched ? stack.concat(next) : stack;
    },
    [state.filters, difficulties, link]
  );
  const selection = useMemo(
    () => questions.reduce(select, []),
    [questions, select]
  );

  return { ...state, prepare, preparing, questions, selection, toggle };
};
