import get from 'lodash/get';
import update from 'immutability-helper';
import { useCallback } from 'react';

import { useExpertlead } from 'hooks/clients';

import { convert } from './helpers';

export default () => {
  const client = useExpertlead();
  const API = useCallback(
    ({ id }) => {
      const parse = ({
        isRequired: required,
        difficulty,
        skills,
        subDimension,
        ...question
      }) =>
        update(question, {
          tags: {
            $set: convert({
              difficulty: {
                id: difficulty,
                name: {
                  DifficultyEasy: 'Easy',
                  DifficultyHard: 'Hard',
                  DifficultyMedium: 'Medium',
                }[difficulty],
              },
              skill: get(skills, 'skill'),
              'sub-dimension': subDimension,
            }),
          },
          url: { $set: `/interview/${id}/question/${question.id}` },
          required: { $set: required },
        });
      const format = ({ questions }) => questions.map(parse);

      return client.get(`/interviews/${id}/questions`).then(format);
    },
    [client]
  );

  return API;
};
