import isEqual from 'lodash/isEqual';
import { useMemo } from 'react';

import Question from 'components/widgets/question';
import Tag from 'components/widgets/tag';

import use from './hooks';
import Rate from './rate';
// import Search from './search';

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

export const renderSorter = (sorter) => (
  <li key={sorter.id}>
    <pre>{JSON.stringify(sorter, null, 2)}</pre>
  </li>
);

export default ({ className, ...props }) => {
  const {
    active,
    filters,
    highlighted,
    prepare,
    preparing,
    questions,
    selection,
    sorters,
    toggle,
  } = use(props);
  const title = useMemo(() => {
    switch (true) {
      case !isEqual(questions.length, selection.length):
        return `Showing ${selection.length} of ${questions.length} items`;
      default:
        return `${questions.length} items`;
    }
  }, [questions.length, selection.length]);
  const labels = useMemo(
    () => ({
      prepare: [
        preparing.pending ? 'loading' : 'load',
        ' its required questions',
        preparing.pending && '...',
      ]
        .filter(Boolean)
        .join(''),
    }),
    [preparing]
  );

  return (
    <section className={className}>
      <article aria-busy={active}>
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
        {!!sorters.length && (
          <nav aria-roledescription="sorting">
            <h3>Sorting by:</h3>
            <ul>{sorters.map(renderSorter)}</ul>
          </nav>
        )}
        {!questions.length && (
          <div aria-busy={preparing.pending}>
            <p>
              <span>The first step to prepare your interview is to </span>
              <a
                href="/"
                onClick={prepare}
                title="Click here to load the required questions"
              >
                {labels.prepare}
              </a>
              <span>.</span>
            </p>
          </div>
        )}
        {!!selection.length && (
          <blockquote>
            <ol>{selection.map(renderQuestion)}</ol>
          </blockquote>
        )}
      </article>
      <Rate details={highlighted} />
    </section>
  );

  /*
  const {
    active,
    entities,
    filters,
    prepare,
    preparing,
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
  const labels = useMemo(
    () => ({
      prepare: [
        preparing.pending ? 'loading' : 'load',
        ' its required questions',
        preparing.pending && '...',
      ]
        .filter(Boolean)
        .join(''),
    }),
    [preparing]
  );

  return (
    <section className={className}>
      <article aria-busy={active}>
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
        {!questions.length && (
          <div aria-busy={preparing.pending}>
            <p>
              <span>The first step to prepare your interview is to </span>
              <a
                href="/"
                onClick={prepare}
                title="Click here to load the required questions"
              >
                {labels.prepare}
              </a>
              <span>.</span>
            </p>
          </div>
        )}
        {!!questions.length && (
          <blockquote>
            <ol>{questions.map(renderQuestion)}</ol>
          </blockquote>
        )}
        {!!active && (
          <Search close={toggle} entities={entities} search={search} />
        )}
      </article>
      <Rate questions={questions} />
    </section>
  );
  */
};
