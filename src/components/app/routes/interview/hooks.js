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

import * as reducers from './reducers';

export default () => {
  const ref = useRef();
  const [state, setState] = useState(reducers.getInitialState());
  const params = useParams();
  const navigate = useNavigate();
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
    (stack, current, index, siblings) => {
      const link = ({ id: question }) =>
        `/interview/${params.interview}/question/${question}`;
      const active = isEqual(current.id, params.question);
      const boundaries = [0, siblings.length - 1];
      const feedback = ({ score }) =>
        setQuestion({ score, ...params }).then(() =>
          setState(reducers.feedback({ score, ...params }))
        );
      const go = (settings) => {
        const rewind = get(settings, 'rewind', false);
        const [boundary] = rewind ? boundaries.reverse() : boundaries;
        const step = rewind ? -1 : 1;
        const target = index + step;
        const { [target]: sibling = siblings[boundary] } = siblings;
        const url = link(sibling);

        return navigate(url, { replace: true });
      };
      const navigation = {
        before: () => go({ rewind: true }),
        next: () => go(),
      };
      const next = update(current, {
        active: { $set: active },
        feedback: { $set: feedback },
        navigation: { $set: navigation },
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
    [navigate, params, setQuestion]
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
