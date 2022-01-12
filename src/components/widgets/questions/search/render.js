import { useCallback } from 'react';

import Question from 'components/widgets/question';

import use from './hooks';
import Entity from './entity';

export const renderEntity = (entity, index) => (
  <Entity key={index} {...entity} />
);

export const renderResult = (question) => (
  <Question key={question.id} {...question} compact />
);

export default ({ className, ...props }) => {
  const { entities, fetching, onChange, onReset, onSubmit, ref, results } =
    use(props);
  const Results = useCallback(() => {
    switch (true) {
      case !!results.length:
        return results.map(renderResult);
      case !!fetching:
        return <p>Loading...</p>;
      default:
        return <p>No questions found matching the filtering criteria.</p>;
    }
  }, [fetching, results]);

  return (
    <form
      aria-busy={fetching}
      className={className}
      onReset={onReset}
      onSubmit={onSubmit}
      ref={ref}
    >
      <fieldset aria-roledescription="keywords">
        <legend>Search by keywords:</legend>
        <div aria-roledescription="field">
          <label htmlFor="keywords">Keywords</label>
          <input
            id="keywords"
            name="keywords"
            onChange={onChange}
            placeholder="Type your keywords..."
            type="text"
          />
        </div>
        <div aria-roledescription="control">
          <button type="reset">Reset</button>
          <button type="submit">Submit</button>
        </div>
      </fieldset>
      <fieldset aria-roledescription="filters">
        <legend>Filters</legend>
        {entities.map(renderEntity)}
      </fieldset>
      <fieldset aria-roledescription="results">
        <legend>Results</legend>
        <div>
          <Results />
        </div>
      </fieldset>
    </form>
  );
};
