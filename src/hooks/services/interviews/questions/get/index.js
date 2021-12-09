import getx from 'lodash/get';
import update from 'immutability-helper';
import { useCallback } from 'react';

import { useExpertlead } from 'hooks/clients';

import { convert } from './helpers';

export default () => {
  const { get } = useExpertlead();
  const parse = useCallback(
    ({ isRequired: required, difficulty, skills, subDimension, ...question }) =>
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
            skill: getx(skills, 'skill'),
            'sub-dimension': subDimension,
          }),
        },
        required: { $set: required },
      }),
    []
  );
  const format = useCallback(({ questions }) => questions.map(parse), [parse]);
  const API = useCallback(
    ({ id }) => get(`/interviews/${id}/questions`).then(format),
    [format, get]
  );

  return API;
};
