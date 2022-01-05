import use from './hooks';

export default ({ className, ...props }) => {
  const { ref } = use(props);

  return (
    <article className={className}>
      <div ref={ref} />
    </article>
  );
};
