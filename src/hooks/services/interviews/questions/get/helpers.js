import update from 'immutability-helper';

export const concat = (stack, [entity, data]) =>
  !data
    ? stack
    : update(stack, { $push: [{ entity, details: normalize(data) }] });

export const convert = (dictionary) =>
  Object.entries(dictionary).reduce(concat, []);

export const normalize = ({ id, name, title }) => ({
  label: title || name,
  id,
});
