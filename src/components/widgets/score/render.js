import { useCallback } from 'react';

import use from './hooks';
import Option from './option';

export default ({ className, ...props }) => {
  const { form, onChange, onSubmit } = use(props);
  const options = [
    { label: 'Off', value: null },
    { label: 'No idea', value: 1 },
    { label: 'No idea', value: 2 },
    { label: 'Poor', value: 3 },
    { label: 'Poor', value: 4 },
    { label: 'Weak', value: 5 },
    { label: 'Weak', value: 6 },
    { label: 'Good', value: 7 },
    { label: 'Good', value: 8 },
    { label: 'Great', value: 9 },
    { label: 'Great', value: 10 },
  ];
  const renderOption = useCallback(
    (option, index) => (
      <Option key={index} form={form} onChange={onChange} {...option} />
    ),
    [form, onChange]
  );

  return (
    <form className={className} onSubmit={onSubmit}>
      <fieldset>
        <legend>Overall score</legend>
        <div aria-roledescription="field">{options.map(renderOption)}</div>
        <div aria-roledescription="control">
          <button type="submit">Submit</button>
        </div>
      </fieldset>
    </form>
  );
};
