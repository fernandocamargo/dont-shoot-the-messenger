import findIndex from 'lodash/findIndex';

export const initialize = ({ charts }) => ({
  index: findIndex(charts, { default: true }),
});
