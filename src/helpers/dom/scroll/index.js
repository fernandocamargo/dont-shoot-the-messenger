export default ({ element, selector }) => {
  const {
    offsetLeft: left,
    offsetTop: top,
    parentNode: parent,
  } = element.closest(selector);

  return parent.scrollTo({ behavior: 'smooth', left, top });
};
