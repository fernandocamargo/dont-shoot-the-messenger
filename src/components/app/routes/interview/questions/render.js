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
  const { active, entities, filters, questions, sorting, toggle } = use(props);

  return (
    <article aria-busy={active} className={className}>
      {!!filters.length && (
        <nav aria-roledescription="filters">
          <h3>Filtering by:</h3>
          <ul>{filters.map(renderFilter)}</ul>
        </nav>
      )}
      <h2>Questions</h2>
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
      {!!sorting.length && (
        <nav aria-roledescription="sorting">
          <h3>Sorting by:</h3>
          <ul>{sorting.map(renderFilter)}</ul>
        </nav>
      )}
      <blockquote>
        <ol>{questions.map(renderQuestion)}</ol>
      </blockquote>
      {!!active && <Search entities={entities} toggle={toggle} />}
    </article>
  );
};
