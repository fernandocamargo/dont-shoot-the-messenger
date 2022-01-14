import { forwardRef, useCallback } from 'react';
import { NavLink } from 'react-router-dom';

import Question from 'components/widgets/question';

import use from './hooks';

export default forwardRef((props, ref) => {
  const { score, url, ...question } = use(props);
  const Score = useCallback(
    () => score || <dfn title="Off">Not informed</dfn>,
    [score]
  );

  return (
    <Question ref={ref} {...question}>
      <dl aria-roledescription="score">
        <dt>Score</dt>
        <dd>
          <NavLink title="Change score" to={url.itself}>
            <Score />
          </NavLink>
        </dd>
      </dl>
      <nav>
        <h3>Actions:</h3>
        <ul>
          <li aria-roledescription="view">
            <NavLink title="See question" to={url.itself}>
              See question
            </NavLink>
          </li>
        </ul>
      </nav>
    </Question>
  );
});
