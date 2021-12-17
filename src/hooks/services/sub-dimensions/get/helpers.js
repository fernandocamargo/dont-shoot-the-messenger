export const format = ({ subDimensions }) => subDimensions.map(normalize);

export const normalize = ({ title: label, id }) => ({
  details: { id, label },
  entity: 'sub-dimension',
});
