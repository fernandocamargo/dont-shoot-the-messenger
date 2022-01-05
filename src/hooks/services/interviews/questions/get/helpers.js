import update from 'immutability-helper';

export const concat = (stack, [entity, data]) =>
  !data
    ? stack
    : update(stack, { $push: [{ entity, details: normalize(data) }] });

export const convert = (dictionary) =>
  Object.entries(dictionary).reduce(concat, []);

export const normalize = ({ id, name, title }) => ({
  label: title || name,
  id,
});

/*
          tags: {
            $set: convert({
              difficulty: {
                id: difficulty,
                name: {
                  DifficultyEasy: 'Easy',
                  DifficultyMedium: 'Medium',
                  DifficultyHard: 'Hard',
                }[difficulty],
              },
              skill: get(skills, 'skill'),
              'sub-dimension': subDimension,
            }),
          },
*/
