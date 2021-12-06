import { Provider as StateManager } from 'react-redux';
import { PersistGate as StatePersistence } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider as Theming } from 'styled-components';

import theme from 'themes/default';
import { App, Style } from 'components';
import { Loader } from 'components/widgets';

import use from './hooks';

export default (props) => {
  const { persistor, store } = use(props);

  return (
    <Theming theme={theme}>
      <Style />
      <StateManager store={store}>
        <StatePersistence persistor={persistor} loading={<Loader />}>
          <Router>
            <App />
          </Router>
        </StatePersistence>
      </StateManager>
    </Theming>
  );
};
