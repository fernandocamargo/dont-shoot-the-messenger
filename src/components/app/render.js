import { Suspense as OnDemand } from 'react';

import { Restricted, Route, Routes } from 'components';
import { Loader } from 'components/widgets';

import { Dashboard, Interview, Login, NotFound } from './routes';
import Layout from './layout';

/*
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
*/

export default () => (
  <OnDemand fallback={<Loader />}>
    <Routes>
      <Route element={<Layout />}>
        <Route element={<Login />} path="/login" />
        <Route element={<Restricted />} path="/">
          <Route element={<Dashboard />} index />
          <Route element={<Interview />} path="interview/:interview" />
          <Route
            element={<Interview />}
            path="interview/:interview/question/:question"
          />
          <Route element={<Interview />} path="interview/:interview/review" />
          <Route element={<Interview />} path="interview/:interview/report" />
        </Route>
        <Route element={<NotFound />} path="*" />
      </Route>
    </Routes>
  </OnDemand>
);
