import find from 'lodash/find';
import get from 'lodash/get';
import intersectionWith from 'lodash/intersectionWith';
import isEqual from 'lodash/isEqual';
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
    ({ answer = '', hint = '', text = '', ...question }) => {
      const categorize = (stack, tag) => {
        const {
          details: { id },
          entity,
        } = tag;
        const comparable = !isEqual(entity, 'keyword');

        return update(stack, {
          ...(comparable && { tags: { $push: [tag] } }),
          ...(!comparable && { textual: { $set: id } }),
        });
      };
      const check = (comparable) => {
        const pattern = new RegExp(comparable, 'gi');

        return (
          !!comparable &&
          (pattern.test(answer) || pattern.test(hint) || pattern.test(text))
        );
      };
      const count = (comparable) =>
        !!intersectionWith(question.tags, comparable, compare).length;
      const { tags, textual } = state.filters.reduce(categorize, {
        tags: [],
        textual: null,
      });

      return !state.filters.length || check(textual) || count(tags);
    },
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
  const onFilter = useCallback((keywords = '') => {
    const filter = keywords.trim();

    return setState(
      reducers.filter({
        tag: {
          ...(!!filter && { details: { id: filter, label: filter } }),
          entity: 'keyword',
        },
        replace: true,
      })
    );
  }, []);
  const onSearch = useCallback(() => {
    const criteria = state.filters.map(convert);
    const shape = (results) => results.map(format);

    return search({ criteria }).then(shape);
  }, [state.filters, format, search]);
  const shape = useCallback(
    (entity) => (item) => connect({ details: normalize(item), entity }),
    [connect]
  );
  const filters = useMemo(
    () => state.filters.map(connect),
    [state.filters, connect]
  );
  const data = useMemo(
    () => questions.reduce(select, { highlighted: null, selection: [] }),
    [questions, select]
  );
  const entities = useMemo(() => {
    const reconcile = ([entity, items]) => ({
      items: items.map(shape(entity)),
      entity,
    });

    return Object.entries({
      dimension: dimensions,
      'sub-dimension': subDimensions,
      difficulty: difficulties,
    }).map(reconcile);
  }, [difficulties, dimensions, shape, subDimensions]);

  return {
    ...state,
    ...data,
    entities,
    filters,
    onFilter,
    onSearch,
    prepare,
    preparing,
    questions,
    toggle,
  };
};
