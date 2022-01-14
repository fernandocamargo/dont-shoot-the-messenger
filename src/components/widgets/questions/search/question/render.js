import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

import Question from 'components/widgets/question';

import use from './hooks';

export default forwardRef((props, ref) => {
  const { adding, onClick, url, ...question } = use(props, ref);

  return (
    <Question ref={ref} {...question}>
      <dl aria-busy={adding} aria-roledescription="add">
        <dt>Score</dt>
        <dd>
          <Link onClick={onClick} title="Add this question" to={url}>
            Add this question
          </Link>
        </dd>
      </dl>
      <nav aria-busy={adding}>
        <h3>Actions:</h3>
        <ul>
          <li aria-roledescription="add">
            <Link onClick={onClick} title="Add this question" to={url}>
              Add this question
            </Link>
          </li>
        </ul>
      </nav>
    </Question>
  );
});
