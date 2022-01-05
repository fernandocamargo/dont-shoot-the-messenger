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

export const fetch = (data) => (state) => update(state, { $merge: data });

export const initialize = () => ({
  difficulties: [],
  details: null,
  dimensions: [],
  questions: [],
  skills: [],
});

export const prepare =
  ({ questions }) =>
  (state) =>
    update(state, { questions: { $set: questions } });
