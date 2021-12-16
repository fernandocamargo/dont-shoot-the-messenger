import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { getInitialState as getInitialStateFrom, set } from './reducers';

export default ({ onChange: feedback, ...props }) => {
  const timeout = useRef(null);
  const [state, setState] = useState(getInitialStateFrom(props));
  const onChange = useCallback((event) => {
    const { target } = event;
    const value = target.value ? Number(target.value) : null;

    return setState(set({ value }));
  }, []);
  const onSubmit = useCallback((event) => {
    event.preventDefault();

    console.log('submit();');

    return event;
  }, []);
  const form = useMemo(
    () => ({ name: props.name, value: state.value }),
    [props.name, state.value]
  );

  useEffect(() => {
    const clear = () => window.clearTimeout(timeout.current);
    const score = () => !state.original && feedback({ score: state.value });
    const schedule = () => {
      clear();

      return (timeout.current = window.setTimeout(score, 1000));
    };

    schedule();

    return clear;
  }, [feedback, state]);

  return { form, onChange, onSubmit };
};
