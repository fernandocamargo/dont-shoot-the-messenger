export const anchor = (element) => {
  const item = element.closest('li');
  const items = item.parentNode;

  return { item, items };
};
