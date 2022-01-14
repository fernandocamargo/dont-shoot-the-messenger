import { scroll } from 'helpers/dom';

export const anchor = (element) => {
  const item = element.closest('li');
  const items = item.parentNode;

  return { item, items };
};

export const onToggle = (element) => scroll({ anchor, element });
