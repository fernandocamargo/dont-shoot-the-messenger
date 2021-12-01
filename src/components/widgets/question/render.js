import isNil from 'lodash/isNil';
import { useMemo } from 'react';

import { Tag } from 'components/widgets';

export const renderTag = (tag, index) => (
  <li key={tag.id}>
    <Tag {...tag} />
  </li>
);

export default ({ className, hint, difficulty, question, tags, ...props }) => {
  const score = useMemo(
    () => (isNil(props.score) ? '--' : Number(props.score).toFixed(1)),
    [props.score]
  );

  return (
    <blockquote className={className}>
      <dl aria-roledescription="difficulty">
        <dt>Difficulty</dt>
        <dd>
          <a href="/" title={difficulty.label}>
            {difficulty.label}
          </a>
        </dd>
      </dl>
      <dl aria-roledescription="score">
        <dt>Score</dt>
        <dd>{score}</dd>
      </dl>
      <dl aria-roledescription="question">
        <dt>Question</dt>
        <dd>{question}</dd>
      </dl>
      <dl aria-roledescription="hint">
        <dt>Hint</dt>
        <dd>{hint}...</dd>
      </dl>
      <dl aria-roledescription="tags">
        <dt>Tags</dt>
        <dd>
          <ul>{tags.map(renderTag)}</ul>
        </dd>
      </dl>
    </blockquote>
  );
};
