import isEqual from 'lodash/isEqual';
import { useMemo } from 'react';

import { Question, Tag } from 'components/widgets';

import use from './hooks';
import Search from './search';

export const renderFilter = (filter) => (
  <li key={filter.details.id}>
    <Tag {...filter} />
  </li>
);

export const renderQuestion = (question) => (
  <li key={question.id}>
    <Question {...question} compact />
  </li>
);

export default ({ className, ...props }) => {
  const {
    active,
    entities,
    filters,
    questions,
    search,
    sorting,
    toggle,
    total,
  } = use(props);
  const title = useMemo(() => {
    switch (true) {
      case !isEqual(questions.length, total):
        return `Showing ${questions.length} of ${total} items`;
      default:
        return `${total} items`;
    }
  }, [questions.length, total]);

  return (
    <article aria-busy={active} className={className}>
      <h2>
        <dfn title={title}>Questions</dfn>
      </h2>
      <nav aria-roledescription="actions">
        <h3>Actions:</h3>
        <ul>
          <li aria-roledescription="search">
            <a href="/" title="Search questions" onClick={toggle}>
              Search questions
            </a>
          </li>
        </ul>
      </nav>
      {!!filters.length && (
        <nav aria-roledescription="filters">
          <h3>Filtering by:</h3>
          <ul>{filters.map(renderFilter)}</ul>
        </nav>
      )}
      {!!sorting.length && (
        <nav aria-roledescription="sorting">
          <h3>Sorting by:</h3>
          <ul>{sorting.map(renderFilter)}</ul>
        </nav>
      )}
      <blockquote>
        <ol>{questions.map(renderQuestion)}</ol>
      </blockquote>
      {!!active && (
        <Search close={toggle} entities={entities} search={search} />
      )}
    </article>
  );
};
