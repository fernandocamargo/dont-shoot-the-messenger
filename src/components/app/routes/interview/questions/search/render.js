import { Question } from 'components/widgets';

import use from './hooks';
import Entity from './entity';

export const renderEntity = (entity, index) => (
  <Entity key={index} {...entity} />
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
        <legend>Filters</legend>
        {entities.map(renderEntity)}
      </fieldset>
      <fieldset aria-roledescription="results">
        <legend>Results</legend>
        <div aria-roledescription="field">{[].map(renderResult)}</div>
      </fieldset>
    </form>
  );
};
