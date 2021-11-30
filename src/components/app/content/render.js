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
        <blockquote>
          <ol>{questions.map(renderQuestion)}</ol>
        </blockquote>
        <nav>
          <h3>Actions:</h3>
          <ul>
            <li aria-roledescription="add">
              <a href="/" title="Add">
                Add
              </a>
            </li>
          </ul>
        </nav>
      </article>
      <article aria-roledescription="question">
        <h1>What are the differences between UNION and UNION ALL?</h1>
        <div>
          <blockquote>
            <dl aria-roledescription="hint">
              <dt>Hint</dt>
              <dd>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam ac pulvinar tellus. Morbi eget malesuada metus, id
                  dictum augue. Curabitur ut vehicula justo. Cras molestie
                  luctus lectus, sit amet accumsan magna. Vestibulum eget
                  facilisis nisi, eu accumsan quam. Duis scelerisque diam ac
                  ipsum pretium blandit. Nam non turpis ac est aliquet
                  ullamcorper. Fusce vulputate nunc lobortis, venenatis arcu sit
                  amet, malesuada nulla. Curabitur ullamcorper pretium velit, id
                  molestie odio vulputate sed. Morbi auctor nunc ac tincidunt
                  rhoncus. Praesent auctor ultricies velit, at consectetur
                  ligula pulvinar ac. Aenean felis orci, placerat nec elit ut,
                  egestas tincidunt libero. Sed blandit, nisl a molestie
                  fermentum, purus magna ornare orci, at egestas metus orci
                  pulvinar quam.
                </p>
                <p>
                  Nam facilisis facilisis diam at maximus. Ut viverra ut mauris
                  vel interdum. In semper orci vel lobortis mollis. Cras quis
                  felis eu neque congue elementum. Orci varius natoque penatibus
                  et magnis dis parturient montes, nascetur ridiculus mus. Nam
                  placerat molestie dui, a ultrices neque tempor sed. Donec
                  malesuada nisl at tristique convallis. Mauris rutrum varius
                  volutpat. Nullam vitae varius orci, eget mollis leo. Aliquam
                  ac dignissim erat, nec tempor velit. Suspendisse aliquam
                  consectetur diam, a viverra neque fringilla sed. Phasellus
                  ultrices dictum felis, vitae varius arcu finibus non. Nam at
                  dui et ipsum feugiat vestibulum. Integer porttitor fringilla
                  sollicitudin.
                </p>
                <p>
                  Suspendisse pretium arcu ac varius accumsan. Duis sem nisi,
                  cursus eu lacus sed, commodo iaculis erat. Aenean vestibulum,
                  mauris sed fermentum venenatis, enim ligula elementum lorem,
                  at iaculis felis leo ut ipsum. Maecenas aliquam arcu eget
                  ipsum laoreet, id consectetur justo ullamcorper. Suspendisse
                  consequat sit amet elit sed malesuada. Vestibulum ante ipsum
                  primis in faucibus orci luctus et ultrices posuere cubilia
                  curae; Suspendisse sed purus vitae dolor hendrerit lobortis.
                  Ut tempor finibus iaculis. Nullam molestie non magna ac
                  tincidunt. In nisi turpis, varius vitae ante nec, aliquam
                  gravida sapien. Pellentesque quis nunc eros. Aliquam efficitur
                  libero a risus blandit, ut gravida sapien rutrum. Suspendisse
                  pretium quis odio sed congue. Aliquam in porttitor nunc, ac
                  elementum felis. Curabitur eleifend rhoncus massa sed egestas.
                </p>
                <p>
                  Nulla auctor iaculis fermentum. Praesent blandit erat et ipsum
                  dapibus, non aliquam ex aliquet. Vivamus posuere posuere leo,
                  in aliquam nunc facilisis in. Nunc accumsan eget massa non
                  sollicitudin. Aliquam in ante maximus, lobortis odio vitae,
                  efficitur lorem. Aenean vulputate auctor varius. Pellentesque
                  et placerat leo. Integer purus sapien, molestie at tincidunt
                  a, pulvinar quis lacus. Fusce vitae bibendum nibh, sit amet
                  congue mi. Sed id ornare nulla. Quisque volutpat lorem at
                  fringilla rutrum. Mauris ut ultricies odio, in condimentum
                  nulla. Phasellus consequat felis mauris, non pellentesque
                  augue euismod vel.
                </p>
                <p>
                  Ut tristique quam at est efficitur, sit amet rutrum ipsum
                  varius. Quisque aliquam elementum ex, vitae interdum massa
                  malesuada sit amet. Etiam sed risus massa. Vestibulum ante
                  ipsum primis in faucibus orci luctus et ultrices posuere
                  cubilia curae; Vestibulum sed sem odio. Maecenas eu nunc non
                  diam semper viverra. In ac congue dui. Nam in placerat ligula.
                  Vestibulum velit augue, iaculis et mattis ac, ullamcorper in
                  tellus. Integer ac lobortis sem. Etiam mattis volutpat tempus.
                </p>
              </dd>
            </dl>
          </blockquote>
        </div>
        <nav>
          <h3>Actions:</h3>
          <ul>
            <li aria-roledescription="favorite">
              <a href="/" title="Favorite">
                Favorite
              </a>
            </li>
            <li aria-roledescription="remove">
              <a href="/" title="Remove">
                Remove
              </a>
            </li>
            <li aria-roledescription="report">
              <a href="/" title="Report">
                Report
              </a>
            </li>
          </ul>
        </nav>
      </article>
    </section>
    <section aria-roledescription="secondary">
      <article aria-roledescription="video"></article>
      <article aria-roledescription="candidate">huebr</article>
    </section>
  </main>
);
