import { StrictMode } from 'react';
import { createRoot } from 'react-dom';

import { Root } from 'components';
import { measure } from 'tools';

export const analyze = measure.bind(this, process.env.DEBUGGING && console.log);

export const initialize = () =>
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Root />
    </StrictMode>
  );

export default document.fonts.ready.then(initialize).then(analyze);
