import update from 'immutability-helper';

export const getInitialState = () => ({
  filters: [],
  interview: null,
  questions: [],
});

export const set =
  ({ interview, questions }) =>
  (state) =>
    update(state, {
      interview: { $set: interview },
      questions: { $set: questions },
    });
