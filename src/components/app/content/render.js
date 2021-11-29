import Question from './question';

export const renderQuestion = (question) => (
  <li key={question.id}>
    <Question {...question} />
  </li>
);

export default ({ className, questions }) => (
  <main className={className}>
    <section aria-roledescription="primary">
      <article aria-roledescription="questions">
        <h2>Questions</h2>
        <ol>{questions.map(renderQuestion)}</ol>
      </article>
      <article aria-roledescription="question"></article>
    </section>
    <section aria-roledescription="secondary">
      <article aria-roledescription="video"></article>
      <article aria-roledescription="candidate">huebr</article>
    </section>
  </main>
);
