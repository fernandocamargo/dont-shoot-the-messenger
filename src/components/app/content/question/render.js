import { Fragment } from 'react';

import Tag from './tag';

export const renderTag = (tag, index) => (
  <Fragment key={tag.id}>
    {!!index && <span>, </span>}
    <Tag {...tag} />
  </Fragment>
);

export default ({ className, hint, level, question, tags }) => (
  <blockquote className={className}>
    <dl>
      <dt>Level</dt>
      <dd>
        <a href="/" title={level.label}>
          {level.label}
        </a>
      </dd>
    </dl>
    <dl>
      <dt>Question</dt>
      <dd>{question}</dd>
    </dl>
    <dl>
      <dt>Hint</dt>
      <dd>{hint}</dd>
    </dl>
    <dl>
      <dt>Tags</dt>
      <dd>{tags.map(renderTag)}</dd>
    </dl>
  </blockquote>
);
