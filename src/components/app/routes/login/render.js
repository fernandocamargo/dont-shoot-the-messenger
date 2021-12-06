import use from './hooks';

export default ({ className, ...props }) => {
  const { onSubmit, ref } = use(props);

  return (
    <section className={className}>
      <form onSubmit={onSubmit} ref={ref}>
        <fieldset>
          <legend>Please identify yourself:</legend>
          <div aria-roledescription="field">
            <label htmlFor="email">E-mail</label>
            <input
              autoComplete="email"
              id="email"
              name="email"
              type="email"
              required
            />
          </div>
          <div aria-roledescription="field">
            <label htmlFor="password">Password</label>
            <input
              autoComplete="password"
              id="password"
              name="password"
              type="password"
              required
            />
          </div>
          <div aria-roledescription="control">
            <button type="submit">Login</button>
          </div>
        </fieldset>
      </form>
    </section>
  );
};
