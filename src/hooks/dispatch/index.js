import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

export default () => {
  const dispatch = useDispatch();
  const get = useCallback(
    (...params) => {
      const promise = (resolve, reject) => {
        try {
          return resolve(dispatch(...params));
        } catch (error) {
          return reject(error);
        }
      };

      return new Promise(promise);
    },
    [dispatch]
  );

  return get;
};
