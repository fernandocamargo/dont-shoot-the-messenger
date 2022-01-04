import update from 'immutability-helper';

export const getInitialState = () => ({ results: [] });

export const set =
  ({ results }) =>
  (state) =>
    update(state, { results: { $set: results } });
