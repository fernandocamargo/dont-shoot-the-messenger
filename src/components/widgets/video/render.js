import use from './hooks';

export default ({ className, ...props }) => {
  const { fetching, ref } = use(props);

  return (
    <article aria-busy={fetching} className={className}>
      <div ref={ref} />
    </article>
  );
};
