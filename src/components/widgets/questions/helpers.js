import isEqual from 'lodash/isEqual';

export const compare = (previous, next) =>
  isEqual(previous.entity, next.entity) &&
  isEqual(previous.details.id, next.details.id);

export const convert = ({ details: { id: value }, entity }) => ({
  entity,
  value,
});

export const normalize = ({ id, label, name, title }) => ({
  label: label || name || title,
  id,
});
