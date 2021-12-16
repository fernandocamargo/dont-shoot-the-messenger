import update from 'immutability-helper';

export const getInitialState = ({ score: value }) => ({
  original: true,
  value,
});

export const set =
  ({ value }) =>
  (state) =>
    update(state, { original: { $set: false }, value: { $set: value } });
