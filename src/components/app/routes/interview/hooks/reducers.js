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

export const filter =
  ({ tag }) =>
  (state) => {
    const index = findIndex(state.filters, tag);
    const exists = !!~index;

    return update(state, {
      filters: {
        ...(!!exists && { $splice: [[index, 1]] }),
        ...(!exists && { $push: [tag] }),
      },
    });
  };

export const initialize = () => ({
  difficulties: [],
  details: null,
  dimensions: [],
  filters: [],
  questions: [],
  skills: [],
  sorting: [],
});

export const prepare =
  ({ questions }) =>
  (state) =>
    update(state, { questions: { $set: questions } });
