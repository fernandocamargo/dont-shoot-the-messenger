import { useCallback } from 'react';

import { useExpertlead } from 'hooks/clients';

export default () => {
  const { post } = useExpertlead();
  const API = useCallback(
    ({ interview, questions }) =>
      post(`/interviews/${interview}/questions/delete`, {
        interviewId: interview,
        questions,
      }),
    [post]
  );

  return API;
};
