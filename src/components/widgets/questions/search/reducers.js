import update from 'immutability-helper';
import { findIndex } from 'lodash';

export const add =
  ({ id }) =>
  (state) =>
    update(state, {
      results: {
        [findIndex(state.results, { id })]: { active: { $set: true } },
      },
    });

export const getInitialState = () => ({ results: [] });

export const remove =
  ({ id }) =>
  (state) =>
    update(state, {
      results: {
        [findIndex(state.results, { id })]: { active: { $set: false } },
      },
    });

export const set =
  (results = []) =>
  (state) =>
    update(state, { results: { $set: results } });
