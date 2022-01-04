import { forwardRef } from 'react';

import Markup from 'components/widgets/markup';
import Question from 'components/widgets/question';
import Score from 'components/widgets/score';

import use from './hooks';

export default forwardRef(({ className, ...props }, ref) => {
  const question = use(props, ref);

  return (
    <article className={className}>
      <h1>
        <Markup source={question.text} />
      </h1>
      <div>
        <blockquote>
          <Question {...question} />
        </blockquote>
      </div>
      <Score name="score" {...question} />
      <nav>
        <h3>Actions:</h3>
        <ul>
          <li aria-roledescription="favorite">
            <a href="/" title="Favorite question">
              Favorite
            </a>
          </li>
          {!question.required && (
            <li aria-roledescription="remove">
              <a href="/" title="Remove question">
                Remove
              </a>
            </li>
          )}
          <li aria-roledescription="report">
            <a href="/" title="Report question">
              Report
            </a>
          </li>
        </ul>
      </nav>
    </article>
  );
});
