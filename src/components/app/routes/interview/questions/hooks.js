import { useCallback, useState } from 'react';

import { reverse } from 'helpers/boolean';

export default (props) => {
  const [active, setActive] = useState(false);
  const {
    questions: { items: questions },
  } = props;
  const toggle = useCallback((event) => {
    event.preventDefault();

    setActive(reverse);

    return event;
  }, []);

  return { ...props, active, questions, toggle };
};
