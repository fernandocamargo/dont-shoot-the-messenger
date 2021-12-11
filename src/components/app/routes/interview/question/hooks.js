import find from 'lodash/find';
import { useMemo } from 'react';
import { useParams } from 'react-router';

export default ({ questions }) => {
  const params = useParams();
  const question = useMemo(
    () => find(questions, { id: params.question }),
    [params.question, questions]
  );

  return question;
};
