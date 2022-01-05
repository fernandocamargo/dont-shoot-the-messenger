import update from 'immutability-helper';

export const format = (interview) => {
  const {
    candidate: { skills },
  } = interview;

  return update(interview, { skills: { $set: skills } });
};
