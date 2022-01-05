import { useCallback } from 'react';

export default () => {
  const API = useCallback(
    () =>
      Promise.resolve([
        { id: 'DifficultyEasy', label: 'Easy' },
        { id: 'DifficultyMedium', label: 'Medium' },
        { id: 'DifficultyHard', label: 'Hard' },
      ]),
    []
  );

  return API;
};
