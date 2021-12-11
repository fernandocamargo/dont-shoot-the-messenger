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
          <Route element={<Login />} path="/login" exact />
          <Route element={<Passport route={Dashboard} />} path="/" exact />
          <Route path="/interview/:interview">
            <Route
              element={<Passport route={Interview} />}
              path="question/:question/*"
            />
            <Route element={<Passport route={Interview} />} index />
          </Route>
          <Route
            element={<Passport route={Interviews} />}
            path="/interviews/*"
          />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </OnDemand>
    </main>
    <Footer />
  </div>
);
