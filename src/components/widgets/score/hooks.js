import { useCallback, useEffect, useMemo, useState } from 'react';

import { getInitialState as getInitialStateFrom, set } from './reducers';

export default ({ onChange: feedback, ...props }) => {
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
    !state.original && feedback({ score: state.value });
  }, [feedback, state]);

  return { form, onChange, onSubmit };
};
