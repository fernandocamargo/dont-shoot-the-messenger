import find from 'lodash/find';
import get from 'lodash/get';
import isEqual from 'lodash/isEqual';
import update from 'immutability-helper';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import { useGet as useGetInterview } from 'hooks/services/interviews';
import {
  useGet as useGetQuestions,
  useSet as useSetQuestion,
} from 'hooks/services/interviews/questions';
import { useGet as useGetSubDimensions } from 'hooks/services/sub-dimensions';

import * as reducers from './reducers';

export default () => {
  const ref = useRef();
  const [state, setState] = useState(reducers.getInitialState());
  const params = useParams();
  const navigate = useNavigate();
  const getInterview = useGetInterview();
  const getQuestions = useGetQuestions();
  const setQuestion = useSetQuestion();
  const getSubDimensions = useGetSubDimensions();
  const inject = useCallback(
    ([interview, questions]) => {
      const {
        vertical: { id: vertical },
      } = interview;
      const format = (subDimensions) => ({
        'sub-dimensions': subDimensions,
        interview,
        questions,
      });

      return getSubDimensions({ vertical }).then(format);
    },
    [getSubDimensions]
  );
  const fetch = useCallback(() => {
    const load = () => {
      const requests = [getInterview(params), getQuestions(params)];

      return Promise.all(requests).then(inject);
    };
    const persist = (data) => setState(reducers.set(data));

    return load().then(persist);
  }, [getInterview, getQuestions, inject, params]);
  const connect = useCallback(
    (tag) => {
      const active = !!find(state.filters, tag);
      const toggle = () => setState(reducers.filter({ tag }));

      return update(tag, {
        active: { $set: active },
        toggle: { $set: toggle },
      });
    },
    [state.filters]
  );
  const reconcile = useCallback(
    (stack, current, index, siblings) => {
      const link = ({ id: question }) =>
        `/interview/${params.interview}/question/${question}`;
      const active = isEqual(current.id, params.question);
      const boundaries = [0, siblings.length - 1];
      const feedback = ({ score }) =>
        setQuestion({ score, ...params }).then(() =>
          setState(reducers.feedback({ score, ...params }))
        );
      const move = (settings) => {
        const rewind = get(settings, 'rewind', false);
        const [boundary] = rewind ? boundaries.reverse() : boundaries;
        const step = rewind ? -1 : 1;
        const target = index + step;
        const { [target]: sibling = siblings[boundary] } = siblings;
        const url = link(sibling);

        return navigate(url, { replace: true });
      };
      const navigation = {
        previous: () => move({ rewind: true }),
        next: () => move(),
      };
      const tags = current.tags.map(connect);
      const next = update(current, {
        active: { $set: active },
        feedback: { $set: feedback },
        navigation: { $set: navigation },
        tags: { $set: tags },
        url: { $set: link(current) },
        ...(active && { ref: { $set: ref } }),
      });

      return update(stack, {
        questions: {
          ...(!!active && { active: { $set: next } }),
          items: { $push: [next] },
        },
      });
    },
    [connect, navigate, params, setQuestion]
  );
  const data = useMemo(
    () =>
      state.questions.reduce(reconcile, {
        ...state,
        questions: { active: null, items: [] },
        entities: state['sub-dimensions'],
        filters: state.filters.map(connect),
      }),
    [connect, reconcile, state]
  );

  useEffect(() => {
    fetch();
  }, [fetch]);

  return data;
};
