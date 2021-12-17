import update from 'immutability-helper';

export const format = (interview) => {
  const {
    candidate: { skills },
  } = interview;

  return update(interview, { skills: { $set: skills.map(normalize) } });
};

export const normalize = ({ id, name }) => ({
  details: { label: name, id },
  entity: 'skill',
});
