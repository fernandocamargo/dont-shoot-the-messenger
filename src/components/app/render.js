import Content from './content';
import Header from './header';

export default ({ className }) => (
  <div className={className}>
    <Header />
    <Content />
    <footer></footer>
  </div>
);
