import isEqual from 'lodash/isEqual';
import { useCallback, useEffect, useRef, useState } from 'react';

import { ESC } from 'constants/keyboard';
import { focus } from 'helpers/form';
import { useLatency } from 'hooks';

import * as reducers from './reducers';

export default ({
  onClose: close,
  onFilter: filter,
  onSearch: search,
  ...props
}) => {
  const timeout = useRef(null);
  const ref = useRef();
  const [state, setState] = useState(reducers.getInitialState());
  const { pending: fetching, watch } = useLatency();
  const fetch = useCallback(() => {
    const persist = (results = []) => [
      setState(reducers.set({ results })),
      focus(ref.current),
    ];
    const clear = () => persist();

    return watch(search()).then(persist).catch(clear);
  }, [search, watch]);
  const onChange = useCallback(
    (event) => {
      const {
        target: { value: keywords },
      } = event;
      const save = () => filter(keywords);

      window.clearTimeout(timeout.current);

      timeout.current = window.setTimeout(save, 500);

      return event;
    },
    [filter]
  );
  const onReset = useCallback(
    (event) => {
      filter();

      return event;
    },
    [filter]
  );
  const onSubmit = useCallback(
    (event) => {
      const { currentTarget: form } = event;
      const { keywords } = Object.fromEntries(new FormData(form));

      event.preventDefault();
      filter(keywords);

      return event;
    },
    [filter]
  );

  useEffect(() => {
    const press = (event) => isEqual(event.keyCode, ESC) && close(event);
    const check = (event) => {
      const { target } = event;
      const root = target.closest('[aria-busy]');
      const closeable =
        isEqual(target, root) ||
        (document.contains(target) && !root?.contains(target));

      return closeable && close(event);
    };

    document.addEventListener('click', check, false);
    document.addEventListener('keydown', press, false);

    return () => [
      document.removeEventListener('click', check, false),
      document.removeEventListener('keydown', press, false),
    ];
  }, [close]);

  useEffect(() => void fetch(), [fetch]);

  useEffect(() => () => window.clearTimeout(timeout.current));

  return {
    close,
    fetching,
    onChange,
    onReset,
    onSubmit,
    ref,
    ...props,
    ...state,
  };
};
