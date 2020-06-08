import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../store';
import Routes from './Routes';

const App = () => (
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes initialUrl="/dogo" />
      </Router>
    </Provider>
  </React.StrictMode>
);

export default App;
