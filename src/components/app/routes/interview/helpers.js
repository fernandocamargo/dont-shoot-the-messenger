export const map = (transform) => (collection) => collection.map(transform);

export const translate = ({ details: { id: value }, entity }) => ({
  entity,
  value,
});
