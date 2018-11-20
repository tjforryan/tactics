/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Battle from './client/Battle/index';

// TODO: Routing
const App = () => (
  <div className="App">
    <Battle />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
