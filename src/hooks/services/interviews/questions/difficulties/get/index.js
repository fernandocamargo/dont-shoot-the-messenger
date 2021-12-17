import { useCallback } from 'react';

export default () => {
  const API = useCallback(
    () =>
      Promise.resolve([
        {
          entity: 'difficulty',
          details: { id: 'DifficultyEasy', label: 'Easy' },
        },
        {
          entity: 'difficulty',
          details: { id: 'DifficultyMedium', label: 'Medium' },
        },
        {
          entity: 'difficulty',
          details: { id: 'DifficultyHard', label: 'Hard' },
        },
      ]),
    []
  );

  return API;
};
