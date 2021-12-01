import isNil from 'lodash/isNil';
import { Fragment, useMemo } from 'react';

import { Tag } from 'components/widgets';

export const renderTag = (tag, index) => (
  <Fragment key={tag.id}>
    {!!index && <span>, </span>}
    <Tag {...tag} />
  </Fragment>
);

export default ({
  active,
  className,
  hint,
  difficulty,
  question,
  tags,
  ...props
}) => {
  const score = useMemo(
    () => (isNil(props.score) ? '--' : Number(props.score).toFixed(1)),
    [props.score]
  );

  return (
    <blockquote
      {...(active && { 'aria-current': 'page' })}
      className={className}
    >
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
        <dd>{tags.map(renderTag)}</dd>
      </dl>
    </blockquote>
  );
};
