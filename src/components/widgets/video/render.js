import use from './hooks';

export default ({ className, ...props }) => {
  const { ref } = use(props);

  return <div className={className} ref={ref} />;
};
