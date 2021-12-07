import update from 'immutability-helper';

export const getInitialState = () => ({
  details: {},
  filters: [],
  questions: [],
});

export const set =
  ({ details, questions }) =>
  (state) =>
    update(state, {
      details: { $set: details },
      questions: { $set: questions },
    });
