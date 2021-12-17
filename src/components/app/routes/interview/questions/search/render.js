import { Question, Tag } from 'components/widgets';

import use from './hooks';

export const renderFilter = (filter) => (
  <li key={filter.details.id}>
    <Tag {...filter} />
  </li>
);

export const renderResult = (question) => (
  <div key={question.id}>
    <Question {...question} />
  </div>
);

export default ({ className, ...props }) => {
  const { entities, onSubmit, ref } = use(props);

  return (
    <form className={className} onSubmit={onSubmit} ref={ref}>
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
        <div aria-roledescription="control">
          <button type="submit">Submit</button>
        </div>
      </fieldset>
      <fieldset aria-roledescription="filters">
        <dl>
          <dt>Sub-dimensions:</dt>
          <dd>
            <ul>{entities.map(renderFilter)}</ul>
          </dd>
        </dl>
      </fieldset>
      <fieldset aria-roledescription="results">
        <legend>
          Results related to "<strong>your keywords</strong>":
        </legend>
        <div aria-roledescription="field">{[].map(renderResult)}</div>
      </fieldset>
    </form>
  );
};
