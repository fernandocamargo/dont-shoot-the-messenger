import { Routing } from 'components';

import Footer from './footer';
import Header from './header';

export default ({ className }) => (
  <div className={className}>
    <Header />
    <main>
      <Routing />
    </main>
    <Footer />
  </div>
);
