import find from 'lodash/find';
import get from 'lodash/get';
import intersectionWith from 'lodash/intersectionWith';
import isEqual from 'lodash/isEqual';
import update from 'immutability-helper';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import { useGet as useGetInterview } from 'hooks/services/interviews';
import {
  useGet as useGetQuestions,
  useSet as useSetQuestion,
  useSearch as useSearchQuestions,
} from 'hooks/services/interviews/questions';
import { useGet as useGetDifficulties } from 'hooks/services/interviews/questions/difficulties';
import { useGet as useGetSubDimensions } from 'hooks/services/sub-dimensions';

import * as reducers from './reducers';
import { map, translate } from './helpers';

export default () => {
  const ref = useRef();
  const [state, setState] = useState(reducers.getInitialState());
  const params = useParams();
  const navigate = useNavigate();
  const getDifficulties = useGetDifficulties();
  const getInterview = useGetInterview();
  const getQuestions = useGetQuestions();
  const setQuestion = useSetQuestion();
  const getSubDimensions = useGetSubDimensions();
  const searchQuestions = useSearchQuestions();
  const inject = useCallback(
    ([{ skills, ...interview }, questions, difficulties]) => {
      const {
        vertical: { id: vertical },
      } = interview;
      const shape = (subDimensions) => ({
        'sub-dimensions': subDimensions,
        difficulties,
        interview,
        questions,
        skills,
      });

      return getSubDimensions({ vertical }).then(shape);
    },
    [getSubDimensions]
  );
  const fetch = useCallback(() => {
    const load = () => {
      const requests = [
        getInterview(params),
        getQuestions(params),
        getDifficulties(),
      ];

      return Promise.all(requests).then(inject);
    };
    const persist = (data) => setState(reducers.set(data));

    return load().then(persist);
  }, [getDifficulties, getInterview, getQuestions, inject, params]);
  const connect = useCallback(
    (tag) => {
      const active = !!find(state.filters, tag);
      const toggle = () => {
        navigate(`/interview/${params.interview}`);

        return setState(reducers.filter({ tag }));
      };

      return update(tag, {
        active: { $set: active },
        toggle: { $set: toggle },
      });
    },
    [params.interview, state.filters, navigate]
  );
  const format = useCallback(
    (current, index, siblings) => {
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

        return navigate(url);
      };
      const navigation = {
        previous: () => move({ rewind: true }),
        next: () => move(),
      };
      const tags = current.tags.map(connect);

      return update(current, {
        active: { $set: active },
        feedback: { $set: feedback },
        navigation: { $set: navigation },
        tags: { $set: tags },
        url: { $set: link(current) },
        ...(active && { ref: { $set: ref } }),
      });
    },
    [connect, navigate, params, setQuestion]
  );
  const search = useCallback(() => {
    const criteria = state.filters.map(translate);

    return searchQuestions({ criteria }).then(map(format));
  }, [state.filters, format, searchQuestions]);
  const reconcile = useCallback(
    (stack, current, ...meta) => {
      const next = format(current, ...meta);
      const matched =
        !state.filters.length ||
        !!intersectionWith(current.tags, state.filters, isEqual).length;

      return update(stack, {
        questions: {
          ...(!!next.active && { active: { $set: next } }),
          ...(!!matched && { items: { $push: [next] } }),
        },
      });
    },
    [state.filters, format]
  );
  const data = useMemo(
    () =>
      state.questions.reduce(reconcile, {
        ...state,
        questions: { active: null, items: [] },
        entities: [
          {
            items: state.skills.map(connect),
            entity: 'skill',
          },
          {
            items: state['sub-dimensions'].map(connect),
            entity: 'sub-dimension',
          },
          {
            items: state.difficulties.map(connect),
            entity: 'difficulty',
          },
        ],
        filters: state.filters.map(connect),
        total: state.questions.length,
      }),
    [connect, reconcile, state]
  );

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { ...data, search };
};
