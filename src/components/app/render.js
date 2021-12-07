import { Suspense as OnDemand } from 'react';

import { Passport, Route, Routes } from 'components';
import { Loader } from 'components/widgets';

import { Dashboard, Interview, Interviews, Login, NotFound } from './routes';
import Footer from './footer';
import Header from './header';

export default ({ className }) => (
  <div className={className}>
    <Header />
    <main>
      <OnDemand fallback={<Loader />}>
        <Routes>
          <Route path="/login" element={<Login />} exact />
          <Route path="/" element={<Passport route={Dashboard} />} exact />
          <Route path="/interview/:interview">
            <Route
              path="question/:question"
              element={<Passport route={Interview} />}
            />
            <Route path="" element={<Passport route={Interview} />} />
          </Route>
          <Route
            path="/interviews/*"
            element={<Passport route={Interviews} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </OnDemand>
    </main>
    <Footer />
  </div>
);
