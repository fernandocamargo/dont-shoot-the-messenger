import get from 'lodash/get';
import find from 'lodash/find';
import intersectionWith from 'lodash/intersectionWith';
import update from 'immutability-helper';
import { createRef, useCallback, useMemo, useState } from 'react';

import { useLatency } from 'hooks';

import { compare, convert, normalize } from './helpers';
import * as reducers from './reducers';

export default ({
  'sub-dimensions': subDimensions,
  difficulties,
  dimensions,
  feedback,
  highlight,
  link,
  questions,
  search,
  ...props
}) => {
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
  const connect = useCallback(
    (tag) =>
      update(tag, {
        active: { $set: !!find(state.filters, tag) },
        toggle: { $set: () => setState(reducers.filter({ tag })) },
      }),
    [state.filters]
  );
  const match = useCallback(
    ({ tags }) =>
      !state.filters.length ||
      !!intersectionWith(tags, state.filters, compare).length,
    [state.filters]
  );
  const format = useCallback(
    ({ difficulty, skills, subDimension, ...question }) => {
      const { dimension } =
        find(subDimensions, { id: get(subDimension, 'id') }) || {};
      const tags =
        question.tags ||
        [
          !!difficulty && {
            details: find(difficulties, { id: difficulty }),
            entity: 'difficulty',
          },
          !!dimension && {
            details: normalize(dimension),
            entity: 'dimension',
          },
          !!subDimension && {
            details: normalize(subDimension),
            entity: 'sub-dimension',
          },
          !!skills && { details: normalize(skills.skill), entity: 'skill' },
        ]
          .filter(Boolean)
          .map(connect);

      return update(question, {
        feedback: { $set: feedback(question) },
        ref: { $set: createRef() },
        tags: { $set: tags },
        url: { $set: link(question) },
      });
    },
    [connect, difficulties, feedback, link, subDimensions]
  );
  const select = useCallback(
    (stack, current, ...meta) => {
      const next = format(current, ...meta);
      const matched = match(next);
      const highlighted = highlight(next);

      return update(stack, {
        ...(matched && { selection: { $push: [next] } }),
        ...(matched && highlighted && { highlighted: { $set: next } }),
      });
    },
    [format, highlight, match]
  );
  const onSearch = useCallback(() => {
    const criteria = state.filters.map(convert);
    const shape = (results) => results.map(format);

    return search({ criteria }).then(shape);
  }, [state.filters, format, search]);
  const filters = useMemo(
    () => state.filters.map(connect),
    [state.filters, connect]
  );
  const data = useMemo(
    () => questions.reduce(select, { highlighted: null, selection: [] }),
    [questions, select]
  );
  const entities = useMemo(() => [], []);

  return {
    ...state,
    ...data,
    entities,
    filters,
    onSearch,
    prepare,
    preparing,
    questions,
    toggle,
  };
};
