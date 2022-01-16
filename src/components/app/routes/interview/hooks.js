import get from 'lodash/get';
import isEqual from 'lodash/isEqual';
import update from 'immutability-helper';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router';

import { useLatency } from 'hooks';
import { useGet as useGetInterview } from 'hooks/services/interviews';
import {
  useAdd as useAddQuestions,
  useGet as useGetQuestions,
  useRemove as useRemoveQuestions,
  useSearch as useSearchQuestions,
} from 'hooks/services/interviews/questions';
import { useGet as useGetDifficulties } from 'hooks/services/interviews/questions/difficulties';
import {
  useSetScore as useSetQuestionScore,
  useSetRequired as useSetRequiredQuestions,
} from 'hooks/services/interviews/questions/set';
import { useGet as useGetSubDimensions } from 'hooks/services/sub-dimensions';

import { categorize, extract } from './helpers';
import * as reducers from './reducers';

export default () => {
  const [state, setState] = useState(reducers.initialize());
  const params = useParams();
  const getDifficulties = useGetDifficulties();
  const getInterview = useGetInterview();
  const addQuestion = useAddQuestions();
  const removeQuestion = useRemoveQuestions();
  const getQuestions = useGetQuestions();
  const searchQuestions = useSearchQuestions();
  const getSubDimensions = useGetSubDimensions();
  const setQuestionScore = useSetQuestionScore();
  const setRequiredQuestions = useSetRequiredQuestions();
  const { pending: fetching, error, watch } = useLatency();
  const fetch = useCallback(() => {
    const retrieve = ([{ skills, ...details }, questions, difficulties]) => {
      const shape = (subDimensions) => {
        const { dimensions } = subDimensions.reduce(extract, {
          dimensions: [],
          indexes: {},
        });

        return {
          'sub-dimensions': subDimensions,
          details,
          difficulties,
          dimensions,
          questions,
          skills,
        };
      };

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
  const add = useCallback(
    (question) => () => {
      const questions = [question];
      const persist = () => setState(reducers.add({ questions }));

      return addQuestion({ interview: params.interview, questions }).then(
        persist
      );
    },
    [params.interview, addQuestion]
  );
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
    [params.interview, setQuestionScore]
  );
  const link = useCallback(
    (itself, index, siblings) => {
      const { '*': fragments } = params;
      const limits = { beginning: 0, end: siblings.length - 1 };
      const targets = { previous: index - 1, next: index + 1 };
      const previous = get(siblings, targets.previous, siblings[limits.end]);
      const next = get(siblings, targets.next, siblings[limits.beginning]);
      const reference = (question) =>
        [
          `/interview/${params.interview}`,
          !!question && `/question/${question.id}`,
          !!fragments && `/${fragments}`,
        ]
          .filter(Boolean)
          .join('');

      return {
        interview: reference(),
        itself: reference(itself),
        next: reference(next),
        previous: reference(previous),
      };
    },
    [params]
  );
  const remove = useCallback(
    (question) => () => {
      const questions = [question];
      const persist = () => setState(reducers.remove({ questions }));

      return removeQuestion({ interview: params.interview, questions }).then(
        persist
      );
    },
    [params.interview, removeQuestion]
  );
  const highlight = useCallback(
    ({ id }) => isEqual(params.question, id),
    [params.question]
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
  const interview = useMemo(() => {
    const indexes = categorize(state);

    return update(state, {
      add: { $set: add },
      feedback: { $set: feedback },
      highlight: { $set: highlight },
      indexes: { $set: indexes },
      link: { $set: link },
      prepare: { $set: prepare },
      remove: { $set: remove },
      search: { $set: search },
    });
  }, [add, feedback, highlight, link, prepare, remove, search, state]);

  useEffect(() => void fetch(), [fetch]);

  return { error, fetching, interview };
};
