import findIndex from 'lodash/findIndex';
import update from 'immutability-helper';

import { reverse } from 'helpers/boolean';

export const initialize = () => ({
  active: false,
  filters: [],
  sorters: [],
});

export const filter =
  ({ replace = false, tag }) =>
  (state) => {
    const identity = !replace ? tag : { entity: tag.entity };
    const index = findIndex(state.filters, identity);
    const exists = !!~index;
    const replacement = replace && tag.details ? tag : [];

    return update(state, {
      filters: {
        ...(!!exists && { $splice: [[index, 1].concat(replacement)] }),
        ...(!exists && tag.details && { $push: [tag] }),
      },
    });
  };

export const toggle = () => (state) =>
  update(state, { active: { $apply: reverse } });
