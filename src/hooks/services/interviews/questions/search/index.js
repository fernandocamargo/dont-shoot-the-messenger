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
      const format = (question) =>
        update(question, {
          tags: {
            $apply: (tags) => tags.map(translate),
          },
        });
      const shape = ({ questions = [] }) => questions.map(format);

      return post('/v2/question', { search: { criteria } }).then(shape);
    },
    [post, translations]
  );

  return API;
};
