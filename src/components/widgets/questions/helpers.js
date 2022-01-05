export const normalize = ({ id, label, name, title }) => ({
  label: label || name || title,
  id,
});
