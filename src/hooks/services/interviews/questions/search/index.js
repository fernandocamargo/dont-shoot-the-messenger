import get from 'lodash/get';
import isEqual from 'lodash/isEqual';
import update from 'immutability-helper';
import { useCallback, useMemo } from 'react';

import { useExpertlead } from 'hooks/clients';

export default () => {
  const { post } = useExpertlead();
  const translations = useMemo(
    () => ({
      DifficultyEasy: 'Easy',
      DifficultyMedium: 'Medium',
      DifficultyHard: 'Hard',
    }),
    []
  );
  const API = useCallback(
    (settings) => {
      const criteria = get(settings, 'criteria', []);
      const translate = (tag) =>
        !isEqual(tag.entity, 'difficulty')
          ? tag
          : update(tag, {
              details: { label: { $set: translations[tag.details.id] } },
            });

      return post('/v2/question', { search: { criteria } }).then(
        ({ questions = [] }) => {
          return questions.map((question) =>
            update(question, {
              tags: {
                $apply: (tags) => tags.map(translate),
              },
            })
          );
        }
      );
    },
    [post, translations]
  );

  return API;
};
