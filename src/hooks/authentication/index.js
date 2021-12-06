import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { clear, set } from 'actions/profile';
import { useDispatch } from 'hooks';

import selector from './selectors';

export default () => {
  const dispatch = useDispatch();
  const { logged, ...profile } = useSelector(selector);
  const login = useCallback(
    (details) => dispatch(set({ details })),
    [dispatch]
  );
  const logout = useCallback(() => dispatch(clear()), [dispatch]);

  return { logged, login, logout, profile };
};
