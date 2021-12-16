import isEqual from 'lodash/isEqual';
import update from 'immutability-helper';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useParams } from 'react-router';

import { useGet as useGetInterview } from 'hooks/services/interviews';
import {
  useGet as useGetQuestions,
  useSet as useSetQuestion,
} from 'hooks/services/interviews/questions';

import * as reducers from './reducers';

export default () => {
  const ref = useRef();
  const [state, setState] = useState(reducers.getInitialState());
  const params = useParams();
  const getInterview = useGetInterview();
  const getQuestions = useGetQuestions();
  const setQuestion = useSetQuestion();
  const fetch = useCallback(() => {
    const requests = [
      getInterview({ interview: params.interview }),
      getQuestions({ interview: params.interview }),
    ];
    const persist = ([interview, questions]) =>
      setState(reducers.set({ interview, questions }));

    return Promise.all(requests).then(persist);
  }, [params.interview, getInterview, getQuestions]);
  const reconcile = useCallback(
    (stack, current) => {
      const active = isEqual(current.id, params.question);
      const feedback = ({ score }) =>
        setQuestion({ score, ...params }).then(() =>
          setState(reducers.feedback({ score, ...params }))
        );
      const next = update(current, {
        ...(active && { feedback: { $set: feedback }, ref: { $set: ref } }),
        url: {
          $set: `/interview/${params.interview}/question/${current.id}`,
        },
        active: { $set: active },
      });

      return update(stack, {
        questions: {
          ...(!!active && { active: { $set: next } }),
          items: { $push: [next] },
        },
      });
    },
    [params, setQuestion]
  );
  const { questions } = useMemo(
    () =>
      state.questions.reduce(reconcile, {
        questions: { active: null, items: [] },
      }),
    [state.questions, reconcile]
  );

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { ...state, questions };
};
