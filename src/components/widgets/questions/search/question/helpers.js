import { scroll } from 'helpers/dom';

export const anchor = (element) => {
  const item = element.closest('blockquote');
  const items = item.closest('fieldset');

  return { item, items };
};

export const onToggle = (element) => scroll({ anchor, element });
