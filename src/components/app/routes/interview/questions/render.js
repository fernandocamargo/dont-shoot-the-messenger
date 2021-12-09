import { Question, Tag } from 'components/widgets';

export const renderFilter = (filter) => (
  <li key={filter.id}>
    <Tag {...filter} />
  </li>
);

export const renderQuestion = (question) => (
  <li key={question.id}>
    <Question {...question} />
  </li>
);

export const renderResult = (question) => (
  <div key={question.id}>
    <Question {...question} />
  </div>
);

export default ({ className, filters, questions }) => (
  <article aria-busy={false} className={className}>
    <nav aria-roledescription="filters">
      <h3>Filtering by:</h3>
      <ul>{filters.map(renderFilter)}</ul>
    </nav>
    <h2>Questions</h2>
    <nav aria-roledescription="actions">
      <h3>Actions:</h3>
      <ul>
        <li aria-roledescription="filter">
          <a href="/" title="Filter questions">
            Filter
          </a>
        </li>
        <li aria-roledescription="sort">
          <a href="/" title="Sort questions">
            Sort
          </a>
        </li>
        <li aria-roledescription="add">
          <a href="/" title="Add question">
            Add
          </a>
        </li>
      </ul>
    </nav>
    <nav aria-roledescription="sorting">
      <h3>Sorting by:</h3>
      <ul>{filters.map(renderFilter)}</ul>
    </nav>
    <blockquote>
      <ol>{questions.map(renderQuestion)}</ol>
    </blockquote>
    <form autoComplete="off">
      <fieldset aria-roledescription="keywords">
        <legend>Search by keywords:</legend>
        <div aria-roledescription="field">
          <label htmlFor="keywords">Keywords</label>
          <input
            id="keywords"
            name="keywords"
            placeholder="Type your keywords..."
            type="text"
          />
        </div>
      </fieldset>
      <fieldset aria-roledescription="results">
        <legend>
          Results related to "<strong>your keywords</strong>":
        </legend>
        <div aria-roledescription="field">{questions.map(renderResult)}</div>
      </fieldset>
      <div aria-roledescription="submit">
        <button type="submit">Submit</button>
      </div>
    </form>
  </article>
);
