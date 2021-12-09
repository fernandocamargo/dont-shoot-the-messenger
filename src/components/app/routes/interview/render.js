import use from './hooks';

import { Polar } from 'components/widgets/charts';

import Question from './question';
import Questions from './questions';

export default ({ className, ...props }) => {
  const interview = use(props);

  return (
    <div className={className}>
      <section aria-roledescription="primary">
        <Questions {...interview} />
        <Question />
      </section>
      <section aria-roledescription="secondary">
        <article aria-roledescription="stats">
          <h2>Stats</h2>
          <Polar />
        </article>
        <article aria-roledescription="feedback">
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
        <article aria-roledescription="candidate">
          <h2>Milad Miri</h2>
          <dl aria-roledescription="title">
            <dt>Title</dt>
            <dd>Go-go boy 😂</dd>
          </dl>
          <dl aria-roledescription="location">
            <dt>Location</dt>
            <dd>تهران‎ Tehrān, Iran</dd>
          </dl>
          <dl aria-roledescription="website">
            <dt>Website</dt>
            <dd>
              <a
                href="https://www.linkedin.com/in/milad-miri-4b693740/"
                title="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/milad-miri-4b693740/
              </a>
            </dd>
          </dl>
          <dl aria-roledescription="email">
            <dt>E-mail</dt>
            <dd>
              <a
                href="mailto:m.miri@expertlead.de"
                title="m.miri@expertlead.de"
                target="_blank"
                rel="noreferrer"
              >
                m.miri@expertlead.de
              </a>
            </dd>
          </dl>
          <nav>
            <h3>Actions:</h3>
            <ul>
              <li aria-roledescription="download">
                <a href="/" title="Download resumé">
                  Download resumé
                </a>
              </li>
            </ul>
          </nav>
        </article>
      </section>
    </div>
  );
};
