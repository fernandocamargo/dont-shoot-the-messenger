import use from './hooks';

export default ({ className, ...props }) => {
  const { checked, id, label, name, onChange, value } = use(props);

  return (
    <div className={className}>
      <input
        checked={checked}
        id={id}
        name={name}
        onChange={onChange}
        type="radio"
        value={value}
      />
      <label htmlFor={id}>
        <abbr title={label}>{value}</abbr>
      </label>
    </div>
  );
};
