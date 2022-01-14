import { forwardRef } from 'react';

import Markup from 'components/widgets/markup';
import Question from 'components/widgets/question';
import Score from 'components/widgets/score';

import use from './hooks';
import { Favorite, Remove, Report } from './actions';

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
          <Favorite {...question} />
          {!question.required && <Remove {...question} />}
          <Report {...question} />
        </ul>
      </nav>
    </article>
  );
});
