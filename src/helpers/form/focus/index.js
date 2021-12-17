export default (form) => {
  const data = new FormData(form);
  const values = Object.fromEntries(data);
  const [first] = Object.keys(values);
  const {
    elements: { [first]: field },
  } = form;

  field.select();
  field.focus();
};
