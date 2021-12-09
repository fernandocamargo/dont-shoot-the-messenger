export default ({ className }) => (
  <article className={className}>
    <form>
      <fieldset>
        <legend>Feedback</legend>
        <div aria-roledescription="field">
          <label htmlFor="comments">Comments</label>
          <textarea
            id="comments"
            placeholder="Write your feedback..."
          ></textarea>
        </div>
        <div aria-roledescription="control">
          <button type="submit">Submit</button>
        </div>
        <nav>
          <h3>Actions:</h3>
          <ul>
            <li aria-roledescription="attach">
              <a href="/" title="Attach file">
                Attach file
              </a>
            </li>
          </ul>
        </nav>
      </fieldset>
    </form>
    <blockquote>
      <h3>Comments</h3>
      <div>
        <dl aria-roledescription="message">
          <dt>Message</dt>
          <dd>What this dude is talking about?! 🤯</dd>
        </dl>
        <dl aria-roledescription="datetime">
          <dt>Date & time</dt>
          <dd>
            <a href="/" title="Jump to 4:37">
              <time dateTime="2121-30-11">
                Tuesday, 30/11/2021 - 10:30 @ 4:37
              </time>
            </a>
          </dd>
        </dl>
      </div>
    </blockquote>
  </article>
);
