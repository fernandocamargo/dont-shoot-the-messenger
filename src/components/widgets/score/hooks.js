import { find } from 'lodash';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { getInitialState as getInitialStateFrom, set } from './reducers';

export default ({ feedback, navigation, ...props }) => {
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
      event.preventDefault();

      navigation.next();

      return event;
    },
    [navigation]
  );
  const form = useMemo(
    () => ({ name: props.name, value: state.value }),
    [props.name, state.value]
  );

  useEffect(() => {
    const clear = () => window.clearTimeout(timeout.current);
    const score = () => !state.original && feedback({ score: state.value });
    const schedule = () => {
      clear();

      return (timeout.current = window.setTimeout(score, 250));
    };

    schedule();

    return clear;
  }, [feedback, state]);

  useEffect(() => {
    const {
      current: { elements },
    } = ref;
    const checked = find(elements, { checked: true });

    checked.focus();
  }, []);

  return { form, onChange, onSubmit, ref };
};
