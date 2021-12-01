export default ({ className, entity, label }) => (
  <a className={className} href="/" title={label}>
    <dfn title={entity.label}>{label}</dfn>
  </a>
);
