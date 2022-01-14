export default ({ anchor, element }) => {
  const {
    item: { offsetLeft: left, offsetTop: top },
    items,
  } = anchor(element);

  return items.scrollTo({ behavior: 'smooth', left, top });
};
