import { Route, Routes } from 'components';
import { Questions } from 'components/widgets';

import { Call, Preparation } from './routes';
import Actions from './actions';

export default ({ className, interview }) => (
  <div className={className}>
    <Questions {...interview} />
    <Routes>
      <Route element={<Preparation {...interview} />} index />
      <Route element={<Call {...interview} />} path="call" />
    </Routes>
    <Actions {...interview} />
  </div>
);
