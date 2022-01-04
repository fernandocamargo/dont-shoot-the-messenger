import { Restricted, Route, Routes } from 'components';

import { Dashboard, Interview, Login, NotFound } from './routes';
import Layout from './layout';

export default () => (
  <Routes>
    <Route element={<Layout />}>
      <Route element={<Login />} path="/login" />
      <Route element={<Restricted />} path="/">
        <Route element={<Dashboard />} index />
        <Route element={<Interview />} path="interview/:interview/*" />
        <Route
          element={<Interview />}
          path="interview/:interview/question/:question/*"
        />
      </Route>
      <Route element={<NotFound />} path="*" />
    </Route>
  </Routes>
);
