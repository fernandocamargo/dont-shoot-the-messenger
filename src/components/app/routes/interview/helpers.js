import update from 'immutability-helper';

export const extract = (stack, { dimension }) =>
  stack.indexes.hasOwnProperty(dimension.id)
    ? stack
    : update(stack, {
        dimensions: { $push: [dimension] },
        indexes: { [dimension.id]: { $set: true } },
      });
