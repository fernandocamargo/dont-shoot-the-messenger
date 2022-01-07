import intersectionWith from 'lodash/intersectionWith';
import find from 'lodash/find';
import update from 'immutability-helper';
import { createRef, useCallback, useMemo, useState } from 'react';

import { useLatency } from 'hooks';

import { compare, normalize } from './helpers';
import * as reducers from './reducers';

export default ({
  difficulties,
  dimensions,
  highlight,
  link,
  questions,
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
  const select = useCallback(
    (stack, current, ...meta) => {
      const format = ({ difficulty, skills, subDimension, ...question }) => {
        const { dimension } = find(dimensions, { id: subDimension.id });
        const tags = [
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
        const feedback = ({ score }) =>
          props.feedback({ question: question.id, score });

        return update(question, {
          feedback: { $set: feedback },
          ref: { $set: createRef() },
          tags: { $set: tags },
          url: { $set: link(question) },
        });
      };
      const next = format(current, ...meta);
      const matched = match(next);
      const highlighted = highlight(next);

      return update(stack, {
        ...(matched && { selection: { $push: [next] } }),
        ...(matched && highlighted && { highlighted: { $set: next } }),
      });
    },
    [props.feedback, connect, difficulties, dimensions, highlight, link, match]
  );
  const filters = useMemo(
    () => state.filters.map(connect),
    [state.filters, connect]
  );
  const data = useMemo(
    () => questions.reduce(select, { highlighted: null, selection: [] }),
    [questions, select]
  );

  return {
    ...state,
    ...data,
    filters,
    prepare,
    preparing,
    questions,
    toggle,
  };
};
