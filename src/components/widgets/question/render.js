import { useCallback } from 'react';
import { NavLink } from 'react-router-dom';

import { Markup, Tag } from 'components/widgets';

import use from './hooks';

export const renderTag = (tag) => (
  <li key={tag.details.id}>
    <Tag {...tag} />
  </li>
);

export default ({ className, ...props }) => {
  const { answer, hint, id, limit, required, score, tags, text } = use(props);
  const Score = useCallback(() => score || <dfn title="Off">--</dfn>, [score]);
  const Requirement = useCallback(
    () => (required ? <dfn title="Required">Yes</dfn> : <span>No</span>),
    [required]
  );

  return (
    <blockquote className={className}>
      <dl aria-roledescription="score">
        <dt>Score</dt>
        <dd>
          <Score />
        </dd>
      </dl>
      {!!text && (
        <dl aria-roledescription="text">
          <dt>Question</dt>
          <dd>
            <Markup limit={limit} source={text} />
          </dd>
        </dl>
      )}
      {!!hint && (
        <dl aria-roledescription="hint">
          <dt>Hint</dt>
          <dd>
            <Markup limit={limit} source={hint} />
          </dd>
        </dl>
      )}
      {!!answer && (
        <dl aria-roledescription="answer">
          <dt>Answer</dt>
          <dd>
            <Markup limit={limit} source={answer} />
          </dd>
        </dl>
      )}
      <dl aria-roledescription="tags">
        <dt>Tags</dt>
        <dd>
          <ul>{tags.map(renderTag)}</ul>
        </dd>
      </dl>
      <dl aria-roledescription="requirement">
        <dt>Is required?</dt>
        <dd>
          <Requirement />
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
