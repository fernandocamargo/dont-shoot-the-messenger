import wrap from 'lodash/wrap';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useMachine } from '@xstate/react';

import { PENDING, RESOLVE } from './constants';
import { Validity, machine } from './helpers';

export default () => {
  const { current: controller } = useRef(new AbortController());
  const [{ matches }, send] = useMachine(machine);
  const pending = useMemo(() => matches(PENDING), [matches]);
  const watch = useCallback(
    (target) => {
      const proxy = (resolve, reject) => {
        const { check, expire } = new Validity();
        const subscribe = () =>
          controller.signal.addEventListener('abort', expire, false);
        const unsubscribe = () =>
          controller.signal.removeEventListener('abort', expire, false);
        const promise = check(target)
          .then(resolve)
          .catch(reject)
          .finally(unsubscribe);
        const event = send({ type: RESOLVE, promise });

        subscribe();

        return Promise.resolve(event).then(wrap(promise));
      };

      return new Promise(proxy);
    },
    [controller.signal, send]
  );
  const latency = useMemo(() => ({ pending, watch }), [pending, watch]);

  useEffect(() => () => controller.abort(), [controller]);

  return latency;
};
