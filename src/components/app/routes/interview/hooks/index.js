import update from 'immutability-helper';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import { useLatency } from 'hooks';
import { useGet as useGetInterview } from 'hooks/services/interviews';
import {
  useGet as useGetQuestions,
  useSearch as useSearchQuestions,
} from 'hooks/services/interviews/questions';
import { useGet as useGetDifficulties } from 'hooks/services/interviews/questions/difficulties';
import {
  useSetScore as useSetQuestionScore,
  useSetRequired as useSetRequiredQuestions,
} from 'hooks/services/interviews/questions/set';
import { useGet as useGetSubDimensions } from 'hooks/services/sub-dimensions';

import * as reducers from './reducers';
import { isEqual } from 'lodash';

export default () => {
  const [state, setState] = useState(reducers.initialize());
  const params = useParams();
  const navigate = useNavigate();
  const getDifficulties = useGetDifficulties();
  const getInterview = useGetInterview();
  const getQuestions = useGetQuestions();
  const searchQuestions = useSearchQuestions();
  const getSubDimensions = useGetSubDimensions();
  const setQuestionScore = useSetQuestionScore();
  const setRequiredQuestions = useSetRequiredQuestions();
  const { pending: fetching, error, watch } = useLatency();
  const fetch = useCallback(() => {
    const retrieve = ([{ skills, ...details }, questions, difficulties]) => {
      const shape = (dimensions) => ({
        details,
        difficulties,
        dimensions,
        questions,
        skills,
      });

      return getSubDimensions({ vertical: details.vertical.id }).then(shape);
    };
    const persist = (response) => setState(reducers.fetch(response));
    const promise = watch(
      Promise.all([
        getInterview({ interview: params.interview }),
        getQuestions({ interview: params.interview }),
        getDifficulties(),
      ]).then(retrieve)
    ).then(persist);

    return promise;
  }, [
    params.interview,
    getDifficulties,
    getInterview,
    getQuestions,
    getSubDimensions,
    watch,
  ]);
  const feedback = useCallback(
    ({ id }) =>
      ({ score }) => {
        const persist = () =>
          setState(reducers.feedback({ question: id, score }));

        return setQuestionScore({
          interview: params.interview,
          question: id,
          score,
        }).then(persist);
      },
    [params, setQuestionScore]
  );
  const highlight = useCallback(
    ({ id }) => isEqual(params.question, id),
    [params.question]
  );
  const go = useCallback(
    () => navigate(`/interview/${params.interview}`),
    [params.interview, navigate]
  );
  const link = useCallback(
    ({ id }) => `/interview/${params.interview}/question/${id}/${params['*']}`,
    [params]
  );
  const prepare = useCallback(() => {
    const retrieve = () => getQuestions({ interview: params.interview });
    const persist = (questions) => setState(reducers.prepare({ questions }));

    return setRequiredQuestions({ interview: params.interview })
      .then(retrieve)
      .then(persist);
  }, [params.interview, getQuestions, setRequiredQuestions]);
  const search = useCallback(
    ({ criteria }) => searchQuestions({ criteria }),
    [searchQuestions]
  );
  const interview = useMemo(
    () =>
      update(state, {
        feedback: { $set: feedback },
        go: { $set: go },
        highlight: { $set: highlight },
        link: { $set: link },
        prepare: { $set: prepare },
        search: { $set: search },
      }),
    [feedback, go, highlight, link, prepare, search, state]
  );

  useEffect(() => void fetch(), [fetch]);

  return { error, fetching, interview };
};

/*
import find from 'lodash/find';
import get from 'lodash/get';
import intersectionWith from 'lodash/intersectionWith';
import isEqual from 'lodash/isEqual';
import update from 'immutability-helper';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import { useLatency } from 'hooks';
import { useGet as useGetInterview } from 'hooks/services/interviews';
import { useGet as useGetQuestions } from 'hooks/services/interviews/questions';
import {
  useSetRequired as useSetRequiredQuestions,
  useSetScore as useSetQuestionScore,
} from 'hooks/services/interviews/questions/set';
import { useGet as useGetDifficulties } from 'hooks/services/interviews/questions/difficulties';
import { useGet as useGetSubDimensions } from 'hooks/services/sub-dimensions';

import * as reducers from './reducers';

export default () => {
  const ref = useRef();
  const [state, setState] = useState(reducers.initialize());
  const params = useParams();
  const navigate = useNavigate();
  const getDifficulties = useGetDifficulties();
  const getInterview = useGetInterview();
  const getQuestions = useGetQuestions();
  const getSubDimensions = useGetSubDimensions();
  const setQuestionScore = useSetQuestionScore();
  const setRequiredQuestions = useSetRequiredQuestions();
  const { pending: fetching, error, watch } = useLatency();
  const fetch = useCallback(() => {
    const retrieve = ([{ skills, ...details }, questions, difficulties]) => {
      const shape = (dimensions) => ({
        details,
        difficulties,
        dimensions,
        questions,
        skills,
      });

      return getSubDimensions({ vertical: details.vertical.id }).then(shape);
    };
    const persist = (response) => setState(reducers.fetch(response));
    const promise = watch(
      Promise.all([
        getInterview({ interview: params.interview }),
        getQuestions({ interview: params.interview }),
        getDifficulties(),
      ]).then(retrieve)
    ).then(persist);

    return promise;
  }, [
    params.interview,
    getDifficulties,
    getInterview,
    getQuestions,
    getSubDimensions,
    watch,
  ]);
  const prepare = useCallback(() => {
    const retrieve = () => getQuestions({ interview: params.interview });
    const persist = (questions) => setState(reducers.prepare({ questions }));

    return setRequiredQuestions({ interview: params.interview })
      .then(retrieve)
      .then(persist);
  }, [params.interview, getQuestions, setRequiredQuestions]);
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
        setQuestionScore({ score, ...params }).then(() =>
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
    [connect, navigate, params, setQuestionScore]
  );
  const reconcile = useCallback(
    (stack, current, ...meta) => {
      const next = format(current, ...meta);
      const matched =
        !state.filters.length ||
        !!intersectionWith(current.tags, state.filters, isEqual).length;

      return matched ? stack.concat(next) : stack;
    },
    [state.filters, format]
  );
  const interview = useMemo(
    () =>
      update(state, {
        questions: { $apply: (questions) => questions.reduce(reconcile, []) },
        prepare: { $set: prepare },
      }),
    [prepare, reconcile, state]
  );

  useEffect(() => void fetch(), [fetch]);

  return { error, fetching, interview };
};
*/
