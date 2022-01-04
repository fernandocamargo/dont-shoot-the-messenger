import { Suspense as OnDemand } from 'react';

import { Fallback, Routing } from 'components';
import { Loader } from 'components/widgets';

import { NotFound } from '../routes';
import Footer from './footer';
import Header from './header';

export default ({ className }) => (
  <div className={className}>
    <Header />
    <main>
      <OnDemand fallback={<Loader />}>
        <Fallback render={NotFound}>
          <Routing />
        </Fallback>
      </OnDemand>
    </main>
    <Footer />
  </div>
);
