import attempt from 'lodash/attempt';
import wrap from 'lodash/wrap';
import { useMachine } from '@xstate/react';
import { useCallback, useEffect, useMemo, useRef } from 'react';

import { PENDING, RESET, RESOLVE } from './constants';
import { Validity, machine } from './helpers';

export default () => {
  const controller = useRef();
  const [
    {
      context: { error },
      matches,
    },
    dispatch,
  ] = useMachine(machine);
  const pending = useMemo(() => matches(PENDING), [matches]);
  const watch = useCallback(
    (target) => {
      const { check, expire } = new Validity();
      const subscribe = () =>
        controller.current.signal.addEventListener('abort', expire, false);
      const unsubscribe = () =>
        controller.current.signal.removeEventListener('abort', expire, false);
      const reset = () => [
        controller?.current?.abort(),
        (controller.current = new AbortController()),
      ];
      const resolve = () => dispatch({ type: RESOLVE, promise });
      const trigger = () =>
        Promise.resolve([reset, resolve, subscribe].map(attempt));
      const promise = check(target).finally(unsubscribe);

      return trigger().then(wrap(promise));
    },
    [dispatch]
  );
  const abort = useCallback(
    () => [controller?.current?.abort(), dispatch({ type: RESET })],
    [dispatch]
  );

  useEffect(() => () => controller?.current?.abort(), []);

  return { abort, error, pending, watch };
};
