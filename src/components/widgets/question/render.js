import { Children, forwardRef, useCallback } from 'react';

import { Markup, Tag } from 'components/widgets';

import use from './hooks';

export const renderTag = (tag) => (
  <li key={tag.details.id}>
    <Tag {...tag} />
  </li>
);

export default forwardRef(({ children, className, ...props }, ref) => {
  const { answer, hint, limit, required, tags, text } = use(props);
  const [header, footer] = Children.toArray(children);
  const Requirement = useCallback(
    () => (required ? <dfn title="Required">Yes</dfn> : <span>No</span>),
    [required]
  );

  return (
    <blockquote className={className} ref={ref}>
      {header}
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
      {footer}
    </blockquote>
  );
});
