import { useMemo } from 'react';
import { NavLink } from 'react-router-dom';

import { Markup, Tag } from 'components/widgets';

import use from './hooks';

export const renderTag = (tag) => (
  <li key={tag.details.id}>
    <Tag {...tag} />
  </li>
);

export default ({ className, ...props }) => {
  const { hint, id, limit, required, tags, text, ...question } = use(props);
  const score = useMemo(
    () => (!question.score ? '--' : Number(question.score).toFixed(1)),
    [question.score]
  );

  return (
    <blockquote className={className}>
      <dl aria-roledescription="score">
        <dt>Score</dt>
        <dd>{score}</dd>
      </dl>
      <dl aria-roledescription="text">
        <dt>Question</dt>
        <dd>
          <Markup limit={limit} source={text} />
        </dd>
      </dl>
      <dl aria-roledescription="hint">
        <dt>Hint</dt>
        <dd>
          <Markup limit={limit} source={hint} />
        </dd>
      </dl>
      <dl aria-roledescription="tags">
        <dt>Tags</dt>
        <dd>
          <ul>{tags.map(renderTag)}</ul>
        </dd>
      </dl>
      <dl aria-roledescription="requirement">
        <dt>Is required?</dt>
        <dd>{required ? <dfn title="Required">Yes</dfn> : <span>No</span>}</dd>
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
