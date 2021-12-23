export const getInitialState = () => ({ interview: null });

/*
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

export const getInitialState = () => ({
  difficulties: [],
  'sub-dimensions': [],
  filters: [],
  interview: null,
  questions: [],
  skills: [],
  sorting: [],
});

export const set = (data) => (state) => update(state, { $merge: data });
*/
