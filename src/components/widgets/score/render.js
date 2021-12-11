import use from './hooks';

export default ({ className, ...props }) => {
  const { onSubmit } = use(props);

  return (
    <form className={className} onSubmit={onSubmit}>
      <fieldset>
        <legend>Overall score</legend>
        <div aria-roledescription="field">
          <div>
            <input id="score-0" name="score" type="radio" value="0" />
            <label htmlFor="score-0">
              <abbr title="Off">0</abbr>
            </label>
          </div>
          <div>
            <input id="score-1" name="score" type="radio" value="1" />
            <label htmlFor="score-1">
              <abbr title="No idea">1</abbr>
            </label>
          </div>
          <div>
            <input id="score-2" name="score" type="radio" value="2" />
            <label htmlFor="score-2">
              <abbr title="No idea">2</abbr>
            </label>
          </div>
          <div>
            <input id="score-3" name="score" type="radio" value="3" />
            <label htmlFor="score-3">
              <abbr title="Poor">3</abbr>
            </label>
          </div>
          <div>
            <input id="score-4" name="score" type="radio" value="4" />
            <label htmlFor="score-4">
              <abbr title="Poor">4</abbr>
            </label>
          </div>
          <div>
            <input id="score-5" name="score" type="radio" value="5" />
            <label htmlFor="score-5">
              <abbr title="Weak">5</abbr>
            </label>
          </div>
          <div>
            <input id="score-6" name="score" type="radio" value="6" />
            <label htmlFor="score-6">
              <abbr title="Weak">6</abbr>
            </label>
          </div>
          <div>
            <input id="score-7" name="score" type="radio" value="7" />
            <label htmlFor="score-7">
              <abbr title="Good">7</abbr>
            </label>
          </div>
          <div>
            <input id="score-8" name="score" type="radio" value="8" />
            <label htmlFor="score-8">
              <abbr title="Good">8</abbr>
            </label>
          </div>
          <div>
            <input id="score-9" name="score" type="radio" value="9" />
            <label htmlFor="score-9">
              <abbr title="Great">9</abbr>
            </label>
          </div>
          <div>
            <input id="score-10" name="score" type="radio" value="10" />
            <label htmlFor="score-10">
              <abbr title="Great">10</abbr>
            </label>
          </div>
        </div>
        <div aria-roledescription="control">
          <button type="submit">Submit</button>
        </div>
      </fieldset>
    </form>
  );
};
