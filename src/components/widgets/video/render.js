import use from './hooks';

export const identify = ({ interviewer: { firstName, lastName } }) =>
  [firstName, lastName].join(' ');

export default ({ className, ...props }) => {
  const { fetching, ref } = use({ ...props, identify });

  return (
    <article aria-busy={fetching} className={className}>
      <div ref={ref} />
    </article>
  );
};
