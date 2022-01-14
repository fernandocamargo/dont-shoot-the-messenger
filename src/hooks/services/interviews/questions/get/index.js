import update from 'immutability-helper';
import { useCallback } from 'react';

import { useExpertlead } from 'hooks/clients';

export default () => {
  const client = useExpertlead();
  const API = useCallback(
    ({ interview }) => {
      const parse = ({
        isRequired: required = false,
        hint = '',
        score = null,
        text = '',
        ...question
      }) =>
        update(question, {
          hint: { $set: hint },
          required: { $set: required },
          score: { $set: score },
          text: { $set: text },
        });
      const format = ({ questions = [] }) => questions.map(parse);

      return client.get(`/interviews/${interview}/questions`).then(format);
    },
    [client]
  );

  return API;
};
