import { useMemo } from 'react';
import { NavLink } from 'react-router-dom';

import { Tag } from 'components/widgets';

export const renderTag = (tag) => (
  <li key={tag.details.id}>
    <Tag {...tag} />
  </li>
);

export default ({ className, difficulty, hint, id, tags, text, ...props }) => {
  const score = useMemo(
    () => (!props.score ? '--' : Number(props.score).toFixed(1)),
    [props.score]
  );

  return (
    <blockquote className={className}>
      <dl aria-roledescription="score">
        <dt>Score</dt>
        <dd>{score}</dd>
      </dl>
      <dl aria-roledescription="question">
        <dt>Question</dt>
        <dd>{text}</dd>
      </dl>
      <dl aria-roledescription="hint">
        <dt>Hint</dt>
        <dd>{hint}</dd>
      </dl>
      <dl aria-roledescription="tags">
        <dt>Tags</dt>
        <dd>
          <ul>{tags.map(renderTag)}</ul>
        </dd>
      </dl>
      <nav>
        <h3>Actions:</h3>
        <ul>
          <li aria-roledescription="view">
            <NavLink title="See question" to={`question/${id}`}>
              See question
            </NavLink>
          </li>
        </ul>
      </nav>
    </blockquote>
  );
};
