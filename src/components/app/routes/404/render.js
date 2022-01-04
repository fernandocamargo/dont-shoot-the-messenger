export default ({ className, error }) => (
  <p className={className}>
    4-oh-fuck {!!error && <em>(reason: {error.message})</em>}
  </p>
);
