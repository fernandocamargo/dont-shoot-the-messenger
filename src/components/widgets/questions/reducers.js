/*
import update from 'immutability-helper';

import { reverse } from 'helpers/boolean';

export const getInitialStateFrom = () => ({ searching: false });

export const search = () => (state) =>
  update(state, { searching: { $apply: reverse } });
*/

import findIndex from 'lodash/findIndex';
import update from 'immutability-helper';

import { reverse } from 'helpers/boolean';

export const initialize = () => ({
  active: false,
  filters: [],
  sorters: [],
});

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

export const toggle = () => (state) =>
  update(state, { active: { $apply: reverse } });
