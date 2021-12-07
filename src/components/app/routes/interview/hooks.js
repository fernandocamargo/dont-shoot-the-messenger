import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { useGet as useGetInterview } from 'hooks/services/interviews';
import { useGet as useGetQuestions } from 'hooks/services/interviews/questions';

import * as reducers from './reducers';

export default () => {
  const [state, setState] = useState(reducers.getInitialState());
  const { interview: id } = useParams();
  const getInterview = useGetInterview();
  const getQuestions = useGetQuestions();
  const fetch = useCallback(() => {
    const requests = [getInterview({ id }), getQuestions({ id })];
    const persist = ([details, questions]) =>
      setState(reducers.set({ details, questions }));

    return Promise.all(requests).then(persist);
  }, [getInterview, getQuestions, id]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { ...state };
};
