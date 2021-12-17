import get from 'lodash/get';
import update from 'immutability-helper';
import { useCallback } from 'react';

import { useExpertlead } from 'hooks/clients';

import { convert } from './helpers';

export default () => {
  const client = useExpertlead();
  const API = useCallback(
    ({ interview }) => {
      const parse = ({
        isRequired: required,
        score = null,
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
                  DifficultyMedium: 'Medium',
                  DifficultyHard: 'Hard',
                }[difficulty],
              },
              skill: get(skills, 'skill'),
              'sub-dimension': subDimension,
            }),
          },
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
