import update from 'immutability-helper';

import { reverse } from 'helpers/boolean';

export const getInitialStateFrom = () => ({ searching: false });

export const search = () => (state) =>
  update(state, { searching: { $apply: reverse } });
