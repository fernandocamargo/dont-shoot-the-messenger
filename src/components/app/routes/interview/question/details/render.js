import { forwardRef } from 'react';

import { Markup, Question, Score } from 'components/widgets';

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
      <Score name="score" onChange={question.feedback} value={question.score} />
      <nav>
        <h3>Actions:</h3>
        <ul>
          <li aria-roledescription="favorite">
            <a href="/" title="Favorite question">
              Favorite
            </a>
          </li>
          <li aria-roledescription="remove">
            <a href="/" title="Remove question">
              Remove
            </a>
          </li>
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
