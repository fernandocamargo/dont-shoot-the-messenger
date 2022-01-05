import update from 'immutability-helper';
import { useCallback } from 'react';

import { useExpertlead } from 'hooks/clients';

export default () => {
  const client = useExpertlead();
  const API = useCallback(
    ({ interview }) => {
      const parse = ({ isRequired: required, score = null, ...question }) =>
        update(question, {
          required: { $set: required },
          score: { $set: score },
        });
      const format = ({ questions = [] }) => questions.map(parse);

      return client.get(`/interviews/${interview}/questions`).then(format);
    },
    [client]
  );

  return API;
};
