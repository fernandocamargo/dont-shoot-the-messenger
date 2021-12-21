import isEqual from 'lodash/isEqual';
import { useCallback, useEffect, useRef, useState } from 'react';

import { ESC } from 'constants/keyboard';
import { focus } from 'helpers/form';

import * as reducers from './reducers';

export default ({ close, search, ...props }) => {
  const ref = useRef();
  const [state, setState] = useState(reducers.getInitialState());
  const fetch = useCallback(
    () => search().then((results) => setState(reducers.set({ results }))),
    [search]
  );
  const onSubmit = useCallback((event) => {
    event.preventDefault();

    console.log('search();');

    return event;
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

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

  useEffect(() => focus(ref.current), []);

  return { close, onSubmit, ref, ...props, ...state };
};
