import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { useGet as useGetInterview } from 'hooks/services/interviews';
import { useGet as useGetQuestions } from 'hooks/services/interviews/questions';

import * as reducers from './reducers';

export default () => {
  const [state, setState] = useState(reducers.getInitialState());
  const params = useParams();
  const getInterview = useGetInterview();
  const getQuestions = useGetQuestions();
  const fetch = useCallback(() => {
    const requests = [
      getInterview({ interview: params.interview }),
      getQuestions({ interview: params.interview }),
    ];
    const persist = ([interview, questions]) =>
      setState(reducers.set({ interview, questions }));

    return Promise.all(requests).then(persist);
  }, [params.interview, getInterview, getQuestions]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return state;
};
