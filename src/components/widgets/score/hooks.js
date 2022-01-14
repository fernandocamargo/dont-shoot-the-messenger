import find from 'lodash/find';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { useLatency } from 'hooks';

import { getInitialState as getInitialStateFrom, set } from './reducers';

export default ({ feedback, navigation, ...props }) => {
  const shiftKey = useRef(false);
  const ref = useRef();
  const timeout = useRef(null);
  const [state, setState] = useState(getInitialStateFrom(props));
  const onChange = useCallback((event) => {
    const { target } = event;
    const value = target.value ? Number(target.value) : null;

    setState(set({ value }));

    return event;
  }, []);
  const onSubmit = useCallback(
    (event) => {
      const direction = shiftKey.current ? 'previous' : 'next';
      const { [direction]: navigate } = navigation;

      event.preventDefault();
      navigate();

      return event;
    },
    [navigation]
  );
  const { pending: saving, error, watch } = useLatency();
  const save = useCallback(
    ({ value: score }) => watch(feedback({ score })),
    [feedback, watch]
  );
  const form = useMemo(
    () => ({ name: props.name, value: state.value }),
    [props.name, state.value]
  );

  useEffect(() => {
    const clear = () => window.clearTimeout(timeout.current);
    const score = () => !state.original && save(state);
    const schedule = () => {
      clear();

      return (timeout.current = window.setTimeout(score, 250));
    };

    schedule();

    return clear;
  }, [save, state]);

  useEffect(() => {
    const {
      current: { elements },
    } = ref;
    const checked = find(elements, { checked: true });
    const press = (event) => {
      shiftKey.current = event.shiftKey;

      return event;
    };
    const release = () => (shiftKey.current = false);

    document.addEventListener('keydown', press, false);
    document.addEventListener('keyup', release, false);
    checked.focus();

    return () => {
      document.removeEventListener('keydown', press, false);
      document.removeEventListener('keyup', release, false);
    };
  }, []);

  return { error, form, onChange, onSubmit, ref, saving };
};
