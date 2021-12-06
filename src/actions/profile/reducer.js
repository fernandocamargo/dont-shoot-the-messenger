import update from 'immutability-helper';

import { CLEAR, SET } from './constants';

export const initialState = { details: {} };

export default (state = initialState, { type, details }) => {
  switch (type) {
    case SET:
      return update(state, { details: { $set: details } });
    case CLEAR:
      return update(state, { details: { $set: {} } });
    default:
      return state;
  }
};
