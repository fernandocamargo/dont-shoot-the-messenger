import findIndex from 'lodash/findIndex';
import update from 'immutability-helper';

export const feedback =
  ({ question, score }) =>
  (state) => {
    const index = findIndex(state.questions, { id: question });

    return update(state, {
      questions: { [index]: { score: { $set: score } } },
    });
  };

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
