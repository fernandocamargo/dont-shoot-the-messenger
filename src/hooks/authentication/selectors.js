import property from 'lodash/property';
import { createSelector } from 'reselect';

export const details = createSelector(property('profile'), property('details'));

export const logged = (details) => ({
  logged: !!Object.keys(details).length,
  ...details,
});

export default createSelector(details, logged);
