import { useCallback } from 'react';

import { useExpertlead } from 'hooks/clients';

export default () => {
  const { put } = useExpertlead();
  const API = useCallback(
    ({ interview, question, score }) =>
      put(`/interviews/${interview}/questions/${question}`, {
        questionAnswer: { answer: { score } },
      }),
    [put]
  );

  return API;
};
