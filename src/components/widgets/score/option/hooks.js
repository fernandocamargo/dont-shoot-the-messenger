import isEqual from 'lodash/isEqual';
import { useMemo } from 'react';

export default (props) => {
  const { form } = props;
  const checked = useMemo(
    () => isEqual(props.value, form.value),
    [form.value, props.value]
  );
  const id = useMemo(
    () => JSON.stringify({ name: form.name, value: props.value }),
    [form.name, props.value]
  );
  const value = useMemo(() => props.value || '', [props.value]);

  return { ...props, checked, id, value };
};
