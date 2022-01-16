import update from 'immutability-helper';

export const label = (stack, { id }) => update(stack, { [id]: { $set: true } });

export const categorize = (state) => {
  const entries = Object.entries(state);
  const check = (stack, [key, value]) => {
    const indexable = Array.isArray(value);

    return !indexable
      ? stack
      : update(stack, { [key]: { $set: value.reduce(label, {}) } });
  };

  return entries.reduce(check, {});
};

export const extract = (stack, { dimension }) =>
  stack.indexes.hasOwnProperty(dimension.id)
    ? stack
    : update(stack, {
        dimensions: { $push: [dimension] },
        indexes: { [dimension.id]: { $set: true } },
      });
