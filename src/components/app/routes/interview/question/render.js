export default ({ className }) => (
  <article className={className}>
    <h1>What are the differences between UNION and UNION ALL?</h1>
    <div>
      <blockquote>
        <dl aria-roledescription="hint">
          <dt>Hint</dt>
          <dd>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              ac pulvinar tellus. Morbi eget malesuada metus, id dictum augue.
              Curabitur ut vehicula justo. Cras molestie luctus lectus, sit amet
              accumsan magna. Vestibulum eget facilisis nisi, eu accumsan quam.
              Duis scelerisque diam ac ipsum pretium blandit. Nam non turpis ac
              est aliquet ullamcorper. Fusce vulputate nunc lobortis, venenatis
              arcu sit amet, malesuada nulla. Curabitur ullamcorper pretium
              velit, id molestie odio vulputate sed. Morbi auctor nunc ac
              tincidunt rhoncus. Praesent auctor ultricies velit, at consectetur
              ligula pulvinar ac. Aenean felis orci, placerat nec elit ut,
              egestas tincidunt libero. Sed blandit, nisl a molestie fermentum,
              purus magna ornare orci, at egestas metus orci pulvinar quam.
            </p>
            <p>
              Nam facilisis facilisis diam at maximus. Ut viverra ut mauris vel
              interdum. In semper orci vel lobortis mollis. Cras quis felis eu
              neque congue elementum. Orci varius natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus. Nam placerat
              molestie dui, a ultrices neque tempor sed. Donec malesuada nisl at
              tristique convallis. Mauris rutrum varius volutpat. Nullam vitae
              varius orci, eget mollis leo. Aliquam ac dignissim erat, nec
              tempor velit. Suspendisse aliquam consectetur diam, a viverra
              neque fringilla sed. Phasellus ultrices dictum felis, vitae varius
              arcu finibus non. Nam at dui et ipsum feugiat vestibulum. Integer
              porttitor fringilla sollicitudin.
            </p>
            <p>
              Suspendisse pretium arcu ac varius accumsan. Duis sem nisi, cursus
              eu lacus sed, commodo iaculis erat. Aenean vestibulum, mauris sed
              fermentum venenatis, enim ligula elementum lorem, at iaculis felis
              leo ut ipsum. Maecenas aliquam arcu eget ipsum laoreet, id
              consectetur justo ullamcorper. Suspendisse consequat sit amet elit
              sed malesuada. Vestibulum ante ipsum primis in faucibus orci
              luctus et ultrices posuere cubilia curae; Suspendisse sed purus
              vitae dolor hendrerit lobortis. Ut tempor finibus iaculis. Nullam
              molestie non magna ac tincidunt. In nisi turpis, varius vitae ante
              nec, aliquam gravida sapien. Pellentesque quis nunc eros. Aliquam
              efficitur libero a risus blandit, ut gravida sapien rutrum.
              Suspendisse pretium quis odio sed congue. Aliquam in porttitor
              nunc, ac elementum felis. Curabitur eleifend rhoncus massa sed
              egestas.
            </p>
          </dd>
        </dl>
      </blockquote>
    </div>
    <form>
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
    <nav>
      <h3>Actions:</h3>
      <ul>
        <li aria-roledescription="favorite">
          <a href="/" title="Favorite question">
            Favorite
          </a>
        </li>
        <li aria-roledescription="remove">
          <a href="/" title="Remove question">
            Remove
          </a>
        </li>
        <li aria-roledescription="report">
          <a href="/" title="Report question">
            Report
          </a>
        </li>
      </ul>
    </nav>
  </article>
);
