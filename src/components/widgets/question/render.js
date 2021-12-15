import { forwardRef, useCallback } from 'react';
import { NavLink } from 'react-router-dom';

import { Markup, Tag } from 'components/widgets';

import use from './hooks';

export const renderTag = (tag) => (
  <li key={tag.details.id}>
    <Tag {...tag} />
  </li>
);

export default forwardRef(({ className, ...props }, ref) => {
  const { answer, hint, limit, required, score, tags, text, url } = use(props);
  const Score = useCallback(() => score || <dfn title="Off">--</dfn>, [score]);
  const Requirement = useCallback(
    () => (required ? <dfn title="Required">Yes</dfn> : <span>No</span>),
    [required]
  );

  return (
    <blockquote className={className} ref={ref}>
      <dl aria-roledescription="score">
        <dt>Score</dt>
        <dd>
          <NavLink title="Change score" to={url}>
            <Score />
          </NavLink>
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
            <NavLink title="See question" to={url}>
              See question
            </NavLink>
          </li>
        </ul>
      </nav>
    </blockquote>
  );
});
