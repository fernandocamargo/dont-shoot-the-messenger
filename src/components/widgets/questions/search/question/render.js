import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

import Question from 'components/widgets/question';

import use from './hooks';

export default forwardRef((props, ref) => {
  const { saving, onClick, url, ...question } = use(props, ref);

  return (
    <Question ref={ref} {...question}>
      <dl aria-busy={saving} aria-roledescription="save">
        <dt>Score</dt>
        <dd>
          <Link onClick={onClick} title="Add this question" to={url.itself}>
            Add this question
          </Link>
        </dd>
      </dl>
      <nav aria-busy={saving}>
        <h3>Actions:</h3>
        <ul>
          <li aria-roledescription="save">
            <Link onClick={onClick} title="Add this question" to={url.itself}>
              Add this question
            </Link>
          </li>
        </ul>
      </nav>
    </Question>
  );
});
